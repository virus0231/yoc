"use client";

import React, { useState, useMemo } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const TIME_RANGES = ["Monthly", "Yearly", "Quarterly", "Daily", "Hourly"];
const CLIENTS = ["MAUSA", "Freedom Bakeries", "Amoud"];

function generateMockData(timeframe) {
  let labels = [];
  switch (timeframe) {
    case "Yearly":
      labels = Array.from({ length: 5 }, (_, i) => `${2020 + i}`);
      break;
    case "Quarterly":
      labels = ["Q1", "Q2", "Q3", "Q4"];
      break;
    case "Daily":
      labels = Array.from({ length: 30 }, (_, i) => `Day ${i + 1}`);
      break;
    case "Hourly":
      labels = Array.from({ length: 24 }, (_, i) => `${i}:00`);
      break;
    case "Monthly":
    default:
      labels = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
  }

  const datasets = CLIENTS.map((client) => ({
    label: client,
    data: labels.map(() => Math.floor(Math.random() * 5000 + 1000)),
    backgroundColor: randomColor(0.5),
    borderColor: randomColor(1),
    borderWidth: 1,
  }));

  return { labels, datasets };
}

function randomColor(opacity = 1) {
  const r = Math.floor(Math.random() * 200 + 55);
  const g = Math.floor(Math.random() * 200 + 55);
  const b = Math.floor(Math.random() * 200 + 55);
  return `rgba(${r},${g},${b},${opacity})`;
}

export default function StackedRevenueBarChart() {
  const [timeframe, setTimeframe] = useState("Monthly");
  const chartData = useMemo(() => generateMockData(timeframe), [timeframe]);

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        labels: { color: "#fff" },
      },
      tooltip: {
        mode: "index",
        intersect: false,
      },
    },
    scales: {
      x: {
        stacked: true,
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        stacked: true,
        ticks: { color: "#fff" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <div className="w-full space-y-4">
      <div className="theme_box w-full overflow-hidden backdrop-blur-lg bg-black/30 border border-white/20 flex flex-col items-center px-4 py-6">
        <h2 className="logo text-xs text-center mb-4">Revenue Comparison</h2>

        <Select value={timeframe} onValueChange={setTimeframe}>
          <SelectTrigger className="input_field w-[180px] mb-6">
            <SelectValue placeholder="Select timeframe" />
          </SelectTrigger>
          <SelectContent className="bg-black/80 border border-white/20 text-white">
            {TIME_RANGES.map((range) => (
              <SelectItem key={range} value={range}>
                {range}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="relative w-full h-[300px]">
          <Bar data={chartData} options={options} />
        </div>
      </div>
    </div>
  );
}
