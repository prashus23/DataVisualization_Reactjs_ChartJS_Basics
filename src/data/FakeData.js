export const lineChartData = {
  labels: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ],
  datasets: [
    {
      label: "Steps By Boy",
      data: [0, 3000, 5000, 4500, 6000, 8000, 7000, 9000],
      borderColor: "rgb(75, 192, 192)",
      backgroundColor: "rgba(75, 192, 192, 0.2)",
    },
    {
      label: "Steps By Girl",
      data: [0, 1100, 6000, 4900, 7000, 4000, 7700, 9000],
      borderColor: "rgba(201, 0, 0, 1)",
      backgroundColor: "rgba(242, 118, 23, 0.2)",
    },
  ],
};

export const barChartData = {
  labels: ["Rent", "Groceries", "Utilities", "Entertainment", "Transportation"],
  datasets: [
    {
      label: "Expenses",
      data: [1200, 300, 150, 180, 100],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
        "rgba(75, 192, 192, 0.2)",
        "rgba(153, 102, 255, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
        "rgba(75, 192, 192, 1)",
        "rgba(153, 102, 255, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

export const pieChartData = {
  labels: ["Facebook", "Instagram", "Twitter", "YouTube", "LinkedIn"],
  datasets: [
    {
      label: "Time Spent (mins)",
      data: [120, 60, 30, 90, 45],
      backgroundColor: [
        "rgba(255, 99, 132, 0.9)",
        "rgba(54, 162, 235, 0.9)",
        "rgba(255, 206, 86, 0.9)",
        "rgba(153, 102, 255, 0.9)",
        "rgba(75, 192, 192, 0.9)",
      ],
      hoverOffset: 4,
    },
  ],
};
