"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useMemo } from "react";

Chart.register(ArcElement, Tooltip, Legend);

const APPEALS = [
  "Zakat",
  "Water Wells",
  "Orphan Sponsorship",
  "Food Packs",
  "Education",
];

function randomColor(opacity = 1) {
  const r = Math.floor(Math.random() * 200 + 55);
  const g = Math.floor(Math.random() * 200 + 55);
  const b = Math.floor(Math.random() * 200 + 55);
  return `rgba(${r},${g},${b},${opacity})`;
}

export default function RadialDonationChart() {
  const data = useMemo(
    () => ({
      labels: APPEALS,
      datasets: [
        {
          label: "Donations by Appeal",
          data: APPEALS.map(() => Math.floor(Math.random() * 7000 + 3000)),
          backgroundColor: APPEALS.map(() => randomColor(0.6)),
          borderColor: APPEALS.map(() => randomColor(1)),
          borderWidth: 1,
        },
      ],
    }),
    []
  );

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "bottom",
        labels: { color: "#fff" },
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || "";
            const value = context.formattedValue || "";
            return `${label}: $${value}`;
          },
        },
      },
    },
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h3 className="logo text-xl text-center my-4">
        Popular Appeals (All Clients)
      </h3>
      <div className="relative w-full h-[300px] px-2 pb-4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
