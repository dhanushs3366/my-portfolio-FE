import { useState } from "react";
import { LogDetails } from "../models/LogDetails";
import { getLogActivityDetails } from "../api/Logger";

function Home() {
  const [logData, setLogData] = useState<LogDetails[]>([]);

  const fetchLogData = async function () {
    const to = new Date();
    const logDetails = await getLogActivityDetails(to);

    console.log(logDetails.length);
    if(logData.length>0){
        setLogData(logDetails)
    }
  };

  return (
    <>
      <button className="bg-red  rounded-lg" onClick={fetchLogData}>Fetch log details</button>
      <div
        className="w-[80%] h-auto mx-auto bg-indigo-200 mt-3"
        id="logChart"
      >
        
      </div>
    </>
  );
}

export default Home;
