const token = process.env.TOKEN;
const {spawn} = require('child_process')

const { spawn } = require("child_process"); 
const Bot = require('node-telegram-bot-api');
let bot;

if(process.env.NODE_ENV === 'production') {
  bot = new Bot(token);
  bot.setWebHook(process.env.HEROKU_URL + bot.token);
}
else {
  bot = new Bot(token, { polling: true });
}

console.log('Bot server started in the ' + process.env.NODE_ENV + ' mode');

bot.on('message', async (msg) => {
  console.log(msg);
  try {
    const name = msg.from.first_name;
    const text = msg.text;
    bot.sendMessage(msg.chat.id, 'Hello, ' + name + '!').then(() => {
      // reply sent!
    });
    console.log(text);
    const response = await runMLScript(text);
    console.log(response);
    // await bot.sendMessage(response);
  } catch (e) {
    console.log("Failed");
  }
  
});

async function runMLScript(parameter) {
  return new Promise((resolve, reject) => {
    const python = spawn("python3", [
      "Machine Learning\src\main.py",
      parameter,
    ]);
    let output = "";
    python.stdout.on("data", (data) => {
      console.log(`stdout: ${data}`);
      output += data;
    });

    python.stderr.on("data", (data) => {
      console.log(`stderr: ${data}`);
    });

    python.on("close", (code) => {
      // console.log(`child process exited with code ${code}`);
      const results = output;
      resolve(results);
    });
  });
}

module.exports = bot;
