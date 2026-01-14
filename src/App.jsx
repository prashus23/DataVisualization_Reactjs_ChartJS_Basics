import "./App.css";
import { BarChart } from "./components/BarChart";
import LineGraph from "./components/LineGraph";
import PieChart from "./components/Pie";

function App() {
  return (
    <div style={{ width: "700px", margin: "40px auto" }}>
      <BarChart />
      <LineGraph />
      <PieChart />
    </div>
  );
}

export default App;
