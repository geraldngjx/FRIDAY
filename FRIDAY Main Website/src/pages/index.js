import { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from "../context/AuthContext";

function CounterCard({ value, label, color }) {
  return (
    <div className={`bg-white rounded-lg shadow p-8 flex-grow-0 flex-shrink-0 w-1/2 mr-4`}>
      <div className={`text-3xl font-bold ${color} mb-2`}>
        {value}
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">
        {label}
      </div>
    </div>
  )
}

function IncomingRequestsCard({ logs }) {
  const unsuccessful = logs.filter((log) => !log.success).slice(0, 3);
  return (
    <div className={`bg-white rounded-lg shadow p-8 overflow-y-scroll`} style={{ maxHeight: '400px' }}>
      <div className="text-sm text-gray-500 uppercase tracking-wide mb-4">
        Latest Unsuccessful Requests
      </div>
      <div className="text-gray-800">
        {unsuccessful.map((log, index) => (
          <RequestContainer key={index} log={log} />
        ))}
      </div>
    </div>
  );
}

function RequestContainer({ log }) {
  const { question, answer, success } = log;
  const successColor = success ? "text-green-500" : "text-red-500";

  return (
    <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between mb-4">
      <div>
        <div className="font-bold">Question: {question}</div>
        <div className="font-bold">Answer: <span className={`text-sm ${successColor}`}>{answer}</span></div>
      </div>
      <div className={`bg-gray-200 rounded-full px-2 py-1 ${successColor}`}>
        {success ? "Answered" : "Unanswered"}
      </div>
    </div>
  );
}

function Home() {
  const [totalQueries, setTotalQueries] = useState(0);
  const [unansweredQueries, setUnansweredQueries] = useState(0);
  const [logs, setLogs] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // New loading state
  const { getUid } = useAuth();

  useEffect(() => {
    async function fetchData() {
      try {
        if (getUid() && (getUid() === "lZLIC6fK2WQOvIxyXKECEjx625w1" || getUid() === "Hoz3NtloWXX7MciVcTn8BNAHIJs1")) {
          const response = await axios.get('https://friday-backend-server-new.herokuapp.com/queries/log');
          const { queries, totalQueriesCount, unansweredQueriesCount } = response.data;
          setLogs(queries);
          setTotalQueries(totalQueriesCount);
          setUnansweredQueries(unansweredQueriesCount);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false); // Set loading state to false after data is fetched (or in case of error)
      }
    }
    fetchData();
  }, []);

  return (
    <main className="max-w-7xl mx-auto pt-8 px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-bold mb-4">My Dashboard</h1>
      <div className="flex justify-between mb-8">
        <CounterCard value={totalQueries} label="Total Queries" color="text-green-500" />
        <CounterCard value={unansweredQueries} label="Unanswered Queries" color="text-red-500" />
      </div>
      {isLoading ? ( // Render loading spinner if isLoading is true
        <div className="flex items-center justify-center">
          <svg className="animate-spin h-8 w-8 text-gray-600" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
        </div>
      ) : (
        <IncomingRequestsCard logs={logs} />
      )}
    </main>
  );
}

export default Home;