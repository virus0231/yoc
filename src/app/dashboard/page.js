"use client";

import StackedRevenueBarChart from "./StackedRevenueBarChart";
import LineDonationChart from "./LineDonationChart";
import RadialDonationChart from "./RadialDonationChart";
import Home from "../home/page";
import { GCCard } from "@/components";

export default function DashboardPage() {
  return (
    <Home>
      <main className="min-h-screen px-4 py-10 bg-gradient-to-br from-[#18181b] via-[#23272f] to-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto space-y-10">
          <div className="mb-6">
            <h1 className="text-3xl md:text-4xl font-extrabold text-[#a5b4fc] mb-2 tracking-tight">
              Dashboard
            </h1>
            <p className="text-[#cbd5e1] text-base md:text-lg">
              Overview of donations and revenue performance
            </p>
          </div>

          <GCCard className="p-8 md:p-10 mb-8 shadow-xl bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/80 to-[#0f172a]/90 border border-[#334155]/60 text-white">
            <StackedRevenueBarChart />
          </GCCard>

          <div className="flex flex-col md:flex-row gap-8">
            <GCCard className="flex-1 p-6 md:p-8 flex flex-col items-center justify-center shadow-lg bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/80 to-[#0f172a]/90 border border-[#334155]/60 text-white">
              <h2 className="text-xl font-bold text-[#a5b4fc] mb-4">
                Donations Over Time
              </h2>
              <LineDonationChart />
            </GCCard>
            <GCCard className="flex-1 p-6 md:p-8 flex flex-col items-center justify-center shadow-lg bg-gradient-to-br from-[#23272f]/80 via-[#18181b]/80 to-[#0f172a]/90 border border-[#334155]/60 text-white">
              <h2 className="text-xl font-bold text-[#a5b4fc] mb-4">
                Donation Breakdown
              </h2>
              <RadialDonationChart />
            </GCCard>
          </div>
        </div>
      </main>
    </Home>
  );
}
