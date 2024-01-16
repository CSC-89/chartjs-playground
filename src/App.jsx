import { useState } from "react";
import "./App.css";
import { Chart } from "chart.js/auto";
import { Pie, Line, Doughnut } from "react-chartjs-2";
import { Data } from "./Data";

function App() {
  const [data, setData] = useState({
    labels: Data.map((data) => data.year),
    datasets: [
      {
        labels: Data.map((data) => data.year),
        data: Data.map((data) => data.cost),
        backgroundColor: ["green", "pink", "red", "gray", "purple"],
        hoverOffset: 4,
      },
    ],
    borderColor: "black",
  });

  return (
    <>
      <h1>Charts and graphs</h1>

      <h2>Pie Chart</h2>
      <div id="pie-chart">
        <Pie data={data} />
      </div>
      <div>
        <Doughnut data={data} />
      </div>
      <h2>Line Chart</h2>
      <div id="bar-chart">
      <Line data={data} />
      </div>
    </>
  );
}

export default App;
