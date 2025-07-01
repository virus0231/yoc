"use client";

import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, Tooltip, Legend } from "chart.js";
import React, { useMemo } from "react";

Chart.register(ArcElement, Tooltip, Legend);

export default function RadialDonationChart() {
  const data = useMemo(
    () => ({
      labels: ["MAUSA", "Freedom Bakeries", "Amoud"],
      datasets: [
        {
          data: [5000, 7000, 6000],
          backgroundColor: [
            "rgba(144,238,144,0.6)",
            "rgba(173,216,230,0.6)",
            "rgba(255,182,193,0.6)",
          ],
          borderColor: ["lightgreen", "lightblue", "pink"],
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
        labels: { color: "#fff" },
        position: "bottom",
      },
    },
  };

  return (
    <div className="flex flex-col items-center w-full h-full">
      <h3 className="logo text-sm text-center my-4">Donations by Client</h3>
      <div className="relative w-full h-[300px] px-2 pb-4">
        <Doughnut data={data} options={options} />
      </div>
    </div>
  );
}
