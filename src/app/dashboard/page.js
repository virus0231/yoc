"use client";

import LineRevenueChart from "./LineRevenueChart";

export default function DashboardPage() {
  return (
    <main className="min-h-screen px-4 py-6 bg-black text-white">
      <div className="max-w-7xl mx-auto space-y-6">
        <LineRevenueChart />
      </div>
    </main>
  );
}
