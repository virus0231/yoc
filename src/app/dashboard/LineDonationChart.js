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

const CLIENTS = ["MAUSA", "Freedom Bakeries", "Amoud"];
const COUNTRIES = [
  "USA",
  "Canada",
  "UK",
  "Germany",
  "Australia",
  "Kenya",
  "Somalia",
];

function randomColor(opacity = 1) {
  const r = Math.floor(Math.random() * 200 + 55);
  const g = Math.floor(Math.random() * 200 + 55);
  const b = Math.floor(Math.random() * 200 + 55);
  return `rgba(${r},${g},${b},${opacity})`;
}

export default function LineDonationChart() {
  const data = useMemo(() => {
    return {
      labels: COUNTRIES,
      datasets: CLIENTS.map((client) => ({
        label: client,
        data: COUNTRIES.map(() => Math.floor(Math.random() * 5000 + 1000)),
        borderColor: randomColor(1),
        backgroundColor: randomColor(0.2),
        fill: true,
        tension: 0.4,
      })),
    };
  }, []);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: { labels: { color: "#fff" } },
    },
    scales: {
      x: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h3 className="logo text-xl text-center my-4">Donations by Country</h3>
      <div className="relative w-full h-[300px] px-2 pb-4">
        <Line data={data} options={options} />
      </div>
    </div>
  );
}
