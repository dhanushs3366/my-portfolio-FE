import { useEffect, useState } from "react";
import { getLogActivityDetails } from "../api/Logger";
import Learning from "../components/charts/Learning";

function Home() {
  const [logData, setLogData] = useState([{}]);

  const fetchLogData = async function () {
    const to = new Date();
    const logDetails = await getLogActivityDetails(to);

    const logData = logDetails.map((logDetail) => {
      return {
        key: logDetail.all_keys,
        created: logDetail.created_at,
      };
    });

    setLogData(logData);
  };
  useEffect(() => {
    fetchLogData();
  }, []);

  return (
    <div>
      <div
        className="w-[80%] h-auto mx-auto bg-indigo-200 mt-3 flex items-center justify-center"
        id="logChart"
      >
        {logData.length> 0 ? (
          <Learning data={logData} />
        ) : null}
      </div>
    </div>
  );
}

export default Home;
