import React, { useContext } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { ContextData } from "../ContextApi/ContextData";

// Register the components to be used by Chart.js
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const MyLineChart = () => {
  const { data } = useContext(ContextData);
  const allowedAcc = data.filter((e) => e.alert?.action === "allowed").length;
  const blockedAcc = data.filter((e) => e.alert?.action === "blocked").length;

  const chartData = {
    labels: ["Allowed Actions", "Blocked Actions"],
    datasets: [
      {
        label: "Action Counts",
        data: [allowedAcc, blockedAcc],

        backgroundColor: ["yellow", "yellow"],
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Allowed vs. Blocked Actions",
      },
    },
  };

  return <Line data={chartData} options={chartOptions} />;
};

export default MyLineChart;
