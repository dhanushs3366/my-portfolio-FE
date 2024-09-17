import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import { useEffect, useRef, useState } from "react";
import { getLogActivityDetails } from "../../api/Logger";
import { getChartConfig } from "./ChartConfig";
import { ChartTypes } from "./Types";

function LogGraph() {
  const [logDetails, setLogDetails] = useState(null);
  const chartInstance = useRef(null); // Ref to store chart instance

  function getDayIndex(currentDate) {
    const toDate = new Date();
    currentDate = new Date(currentDate);
    const offsetDay = 7 - toDate.getDay();
    const dayIndex = (currentDate.getDay() + offsetDay) % 7;
    return dayIndex;
  }

  function categoriseLogData(logDetails) {
    const categorisedData = Array.from({ length: 7 }, () => []);
    for (let i = 0; i < logDetails.length; i++) {
      const dayIndex = getDayIndex(logDetails[i].updated_at);
      categorisedData[dayIndex].push(logDetails[i]);
    }

    return categorisedData;
  }

  async function fetchData() {
    const toDate = new Date();
    let logDetails = await getLogActivityDetails(toDate);
    console.log(logDetails);
    logDetails.sort((a, b) => new Date(a.updated_at) - new Date(b.updated_at));
    logDetails = categoriseLogData(logDetails);
    if (logDetails) {
      setLogDetails(logDetails);
    }
  }

  function renderChart(dayIndex) {
    const chartCanvas = document.getElementById("log-details");

    if (chartInstance.current) {
      chartInstance.current.destroy(); // Destroy the existing chart
    }

    chartInstance.current = new Chart(
      chartCanvas,
      getChartConfig(ChartTypes.LINE, logDetails[dayIndex])
    );
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    if (logDetails) {
      renderChart(0);
    }
  }, [logDetails]);

  return (
    <div className="w-full h-full">
      <canvas id="log-details" className=""></canvas>
    </div>
  );
}

export default LogGraph;
