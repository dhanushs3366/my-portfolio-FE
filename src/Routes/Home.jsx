import { useState } from "react";
import { getLogActivityDetails } from "../api/Logger";
import LinePlot from "../components/charts/LinePlot";

function Home() {
  const [logData, setLogData] = useState([]);

  const fetchLogData = async function () {
    const to = new Date();
    const logDetails = await getLogActivityDetails(to);
    const lineData=[]
    logDetails.forEach((logDetail)=>{lineData.push(logDetail.all_keys)})
    console.log(lineData);

    if(logData.length>0){
        setLogData(lineData)
    }
  };

  return (
    <>
      <button className="bg-red  rounded-lg" onClick={fetchLogData}>Fetch log details</button>
      <div
        className="w-[80%] h-auto mx-auto bg-indigo-200 mt-3"
        id="logChart"
      >
        {logData && logData.length>0 ? <LinePlot data={logData} />:null}
      </div>
    </>
  );
}

export default Home;
