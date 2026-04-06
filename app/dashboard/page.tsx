
"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";
import StatsCards from "../componets/dashboard/StatsCards";
import TradingSection from "../componets/dashboard/TradingSection";
import RiskPanel from "../componets/dashboard/RiskPanel";
import Watchlist from "../componets/dashboard/Watchlist";
import OpenPositions from "../componets/dashboard/OpenPositions";



export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  // ✅ Protect Route
  useEffect(() => {
    const token = localStorage.getItem("authToken");

    if (!token) {
      router.push("/login");
    } else {
      setLoading(false);
    }
  }, []);

  // ✅ Logout function
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  // ✅ Prevent flicker before auth check
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-black text-white">
        Checking authentication...
      </div>
    );
  }

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d]">
      
      {/* <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} /> */}
      <Sidebar />

      <div className={`${sidebarOpen ? "ml-64" : "ml-16"} transition-all`}>
        
        {/* Pass logout to Topbar */}
        <Topbar onLogout={handleLogout} />

        <main className="p-6 space-y-6 max-w-[1400px] mx-auto">
          
          <StatsCards />
          <TradingSection />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            
            <div className="xl:col-span-2">

            <OpenPositions />

            </div>

            {/* <OpenPositions /> */}

            <div className="space-y-6">
              <Watchlist />
              {/* <h2>order</h2> */}
              <RiskPanel />
            </div>

          </div>
        </main>
      </div>
    </div>
  );
}