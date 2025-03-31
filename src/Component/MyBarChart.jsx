import React, { useContext } from "react";
import { Bar } from "react-chartjs-2";
import { ContextData } from "../ContextApi/ContextData";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register Chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const MyBarChart = () => {
  const { data } = useContext(ContextData);

  // Aggregate attack counts per destination port
  const dataCount = data.reduce((acc, alert) => {
    if (alert?.dest_port) {
      acc[alert.dest_port] = (acc[alert.dest_port] || 0) + 1;
    }
    return acc;
  }, {});

  // Sort ports by attack count in descending order
  const sortedPorts = Object.entries(dataCount)
    .sort(([, a], [, b]) => b - a)
    .map(([port, count]) => ({ port, count }));

  // Extract top N ports (e.g., top 5)
  const topPorts = sortedPorts.slice(0, 5);
  const labels = topPorts.map((item) => `Port ${item.port}`);
  const counts = topPorts.map((item) => item.count);

  // Define dynamic chart data
  const chartData = {
    labels,
    datasets: [
      {
        label: "Number of Attacks",
        data: counts,
        backgroundColor: [
          "rgba(75, 192, 192, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(255, 99, 132, 0.6)",
          "rgba(153, 102, 255, 0.6)",
        ],
        borderColor: [
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(255, 99, 132, 1)",
          "rgba(153, 102, 255, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  // Define chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "bottom",
      },
      title: {
        display: true,
        text: "Top Attacked Ports",
      },
    },
    scales: {
      y: {
        beginAtZero: true,
        title: {
          display: true,
          text: "Number of Attacks",
        },
      },
      x: {
        title: {
          display: true,
          text: "Destination Ports",
        },
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default MyBarChart;
