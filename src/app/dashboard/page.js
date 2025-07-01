"use client";

import StackedRevenueBarChart from "./StackedRevenueBarChart";
import LineDonationChart from "./LineDonationChart";
import RadialDonationChart from "./RadialDonationChart";
import Home from "../home/page";

export default function DashboardPage() {
  return (
    <Home>
      <main className="min-h-screen px-4 py-6 bg-black text-white">
        <div className="max-w-7xl mx-auto space-y-8">
          <StackedRevenueBarChart />

          <div className="flex flex-col md:flex-row gap-6">
            <div className="theme_box flex-1 p-0 overflow-hidden">
              <LineDonationChart />
            </div>
            <div className="theme_box flex-1 p-0 overflow-hidden">
              <RadialDonationChart />
            </div>
          </div>
        </div>
      </main>
    </Home>
  );
}
