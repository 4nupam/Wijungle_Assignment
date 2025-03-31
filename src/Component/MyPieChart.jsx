import React, { useContext } from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { ContextData } from "../ContextApi/ContextData";

const MyPieChart = () => {
  const { data } = useContext(ContextData);
  const lowSev = data.filter((E) => E.alert?.severity === 1).length;
  const MedSev = data.filter((e) => e.alert?.severity === 2).length;
  const highSev = data.filter((e) => e.alert?.severity === 3).length;
  const datas = {
    labels: ["Low Severity", "Medium Severity", "High Severity"],
    datasets: [
      {
        data: [lowSev, MedSev, highSev],
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Sample Pie Chart",
      },
    },
  };
  return <Pie data={datas} options={options} />;
};

export default MyPieChart;
