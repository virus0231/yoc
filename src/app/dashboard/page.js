// app/dashboard/page.js
"use client";
import Home from "../home/page";
import StackedRevenueBarChart from "./StackedRevenueBarChart";

export default function DashboardPage() {
  return (
    <Home>
      <main className="min-h-screen px-4 py-6 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-6">
          <StackedRevenueBarChart />
        </div>
      </main>
    </Home>
  );
}
