"use client";

import { Line } from "react-chartjs-2";
import {
  Chart,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";
import React, { useMemo } from "react";

Chart.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

export default function LineDonationChart() {
  const data = useMemo(
    () => ({
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      datasets: [
        {
          label: "Total Donations",
          data: [4000, 5500, 3000, 6200, 4800, 7000],
          borderColor: "lightgreen",
          backgroundColor: "rgba(144,238,144,0.2)",
          fill: true,
          tension: 0.4,
        },
      ],
    }),
    []
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "#fff" } },
    },
    scales: {
      x: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } },
      y: { ticks: { color: "#fff" }, grid: { color: "rgba(255,255,255,0.1)" } },
    },
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h3 className="logo text-xl text-center my-4">Donations Over Time</h3>
      <div className="relative w-full h-[300px] px-2 pb-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
