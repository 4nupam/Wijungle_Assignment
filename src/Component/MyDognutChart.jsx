import React, { useContext } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from "chart.js";
import { ContextData } from "../ContextApi/ContextData";

ChartJS.register(ArcElement, Tooltip, Legend, Title);

const MyDoughnutChart = () => {
  const { data } = useContext(ContextData);

  // Aggregate event type counts
  const eventCounts = data.reduce((acc, event) => {
    const eventType = event?.event_type; // Adjust this line based on your data structure
    if (eventType) {
      acc[eventType] = (acc[eventType] || 0) + 1;
    }
    return acc;
  }, {});

  const labels = Object.keys(eventCounts);
  const counts = Object.values(eventCounts);

  const chartData = {
    labels,
    datasets: [
      {
        data: counts,
        backgroundColor: [
          'rgba(75, 192, 192, 0.6)',
          'rgba(54, 162, 235, 0.6)',
          'rgba(255, 206, 86, 0.6)',
          'rgba(255, 99, 132, 0.6)',
          'rgba(153, 102, 255, 0.6)',
          'rgba(255, 159, 64, 0.6)',
        ],
        borderColor: [
          'rgba(75, 192, 192, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(255, 99, 132, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'right',
      },
      title: {
        display: true,
        text: 'Event Type Distribution',
      },
    },
  };

  return <Doughnut data={chartData} options={options} />;
};

export default MyDoughnutChart;
