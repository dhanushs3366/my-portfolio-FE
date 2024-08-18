import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns"
import { getChartConfig } from "./ChartConfig";
import { ChartTypes } from "./Types";

function Learning({ data, xData }) {
  function renderChart() {
    const chart = document.getElementById("log-details");

    new Chart(
      chart,
      getChartConfig(ChartTypes.LINE, data)
    );
    console.log(data)
  }

  return (
    <div className="w-full h-full">
      <button onClick={renderChart}>Get Chart</button>
      <canvas id="log-details"></canvas>
    </div>
  );
}

export default Learning;
