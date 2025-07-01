import React from "react";
import Home from "../home/page";
import { ChartLineMultiple } from "./income-chart";

function Dashboard() {
  return (
    <Home>
      <div>dashboard shuja test</div>
      <div className="glass_layer theme_box">
        <ChartLineMultiple />
      </div>
    </Home>
  );
}

export default Dashboard;
