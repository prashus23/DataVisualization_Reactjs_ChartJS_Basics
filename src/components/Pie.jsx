import React from "react";
import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

import { pieChartData } from "../data/FakeData";

ChartJS.register(
  Tooltip,
  Legend,
  ArcElement
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "bottom",
    },
    title: {
      display: true,
      text: "Social Media Time Spent",
    },
  },
};

function PieChart() {
  return <Pie data={pieChartData} options={options} />;
}

export default PieChart;