const express = require("express");
const bodyParser = require("body-parser");
const { createHmac } = require("crypto");

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post("/respondio", (req, res) => {
  const signature = req.get("X-Webhook-Signature");
  const signingKey = "my-signing-key";

  const expectedSignature = createHmac("sha256", signingKey)
    .update(JSON.stringify(req.body))
    .digest("base64");

  if (signature !== expectedSignature) {
    return res.status(400).json({
      message: "Invalid signature",
    });
  }

  const phoneNumber = req.body.contact.phone;
  const messageText = req.body.message.message.text;

  console.log(`Received message from ${phoneNumber}: ${messageText}`);
  // Log the entire request object
  console.log(req);

  // Respond to the request to acknowledge receipt
  res.status(200).end();
});

app.listen(3001, () => {
  console.log("Server is listening on port 3001");
});
