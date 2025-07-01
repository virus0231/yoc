"use client";

import React, { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(
  LineElement,
  PointElement,
  LinearScale,
  CategoryScale,
  Legend,
  Tooltip
);

const TIME_RANGES = ["Monthly", "Yearly", "Quarterly", "Daily", "Hourly"];

const CLIENTS = ["MAUSA", "Freedom Bakeries", "Amoud", "All"];

function generateMockData(timeframe) {
  let labels = [];
  let pointsCount = 0;

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
    borderColor: randomColor(),
    backgroundColor: "rgba(255,255,255,0.1)",
    fill: true,
    tension: 0.4,
  }));

  return { labels, datasets };
}

function randomColor() {
  const r = Math.floor(Math.random() * 200 + 55);
  const g = Math.floor(Math.random() * 200 + 55);
  const b = Math.floor(Math.random() * 200 + 55);
  return `rgb(${r},${g},${b})`;
}

export default function LineRevenueChart() {
  const [timeframe, setTimeframe] = useState("Monthly");

  const chartData = useMemo(() => generateMockData(timeframe), [timeframe]);

  const options = {
    responsive: true,
    plugins: {
      legend: { labels: { color: "white" } },
    },
    scales: {
      x: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
      y: {
        ticks: { color: "white" },
        grid: { color: "rgba(255,255,255,0.1)" },
      },
    },
  };

  return (
    <Card className="bg-black border border-white/20 backdrop-blur text-white">
      <CardHeader>
        <CardTitle className="flex justify-between items-center">
          <span>Revenue Over Time</span>
          <Select value={timeframe} onValueChange={setTimeframe}>
            <SelectTrigger className="w-[150px] bg-black border-white/20 text-white">
              <SelectValue placeholder="Select timeframe" />
            </SelectTrigger>
            <SelectContent className="bg-black border-white/20 text-white">
              {TIME_RANGES.map((range) => (
                <SelectItem key={range} value={range}>
                  {range}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </CardTitle>
      </CardHeader>
      <CardContent className="h-[400px]">
        <Line data={chartData} options={options} />
      </CardContent>
    </Card>
  );
}
