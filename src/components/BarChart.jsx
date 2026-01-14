import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { barChartData } from "../data/FakeData";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: { position: "top" },
    title: {
      display: true,
      text: "Expense Category Breakdown",
    },
  },
};

export const BarChart = () => {
  return <Bar options={options} data={barChartData} />;
};
