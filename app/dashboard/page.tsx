// "use client";

// import PositionsTable from "../componets/dashboard/PositionsTable";
// import RiskPanel from "../componets/dashboard/RiskPanel";
// import StatsCards from "../componets/dashboard/StatsCards";
// import Topbar from "../componets/dashboard/Topbar";
// import TradingSection from "../componets/dashboard/TradingSection";
// import Watchlist from "../componets/dashboard/Watchlist";



// export default function DashboardPage() {
//   return (
//     <div className="min-h-screen bg-gray-950 text-white">
//       <Topbar />

//       <main className="p-6 space-y-6">
//         <StatsCards />
//          <TradingSection />

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
//           <PositionsTable />
//           <div className="space-y-6">
//             <Watchlist />
//             <RiskPanel />
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// }








// "use client";

// import { useState } from "react";
// import Topbar from "../componets/dashboard/Topbar";
// import Sidebar from "../componets/dashboard/Sidebar";
// import StatsCards from "../componets/dashboard/StatsCards";
// import TradingSection from "../componets/dashboard/TradingSection";
// import PositionsTable from "../componets/dashboard/PositionsTable";
// import Watchlist from "../componets/dashboard/Watchlist";
// import RiskPanel from "../componets/dashboard/RiskPanel";



// export default function DashboardPage() {
//   const [sidebarOpen, setSidebarOpen] = useState(true);

//   return (
//     <div className="bg-gray-950 text-white">
//       <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//       {/* Main Content */}
//       <div
//         className={`min-h-screen transition-all duration-300
//         ${sidebarOpen ? "ml-64" : "ml-16"}`}
//       >
//         <Topbar />

//         <main className="p-6 space-y-6">
//           <StatsCards />
//           <TradingSection />

//           <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
//             <PositionsTable />
//             <div className="space-y-6">
//               <Watchlist />
//               <RiskPanel />
//             </div>
//           </div>
//         </main>
//       </div>
//     </div>
//   );
// }










"use client";

import { useState } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";
import TimeFilter from "../componets/dashboard/TimeFilter";
import StatsCards from "../componets/dashboard/StatsCards";
import TradingSection from "../componets/dashboard/TradingSection";
import PositionsTable from "../componets/dashboard/PositionsTable";
import Watchlist from "../componets/dashboard/Watchlist";
import RiskPanel from "../componets/dashboard/RiskPanel";


export default function DashboardPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [range, setRange] = useState<"today" | "week" | "month">("today");

  return (
    <div className="bg-gray-950 text-white min-h-screen">
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className={`${sidebarOpen ? "ml-64" : "ml-16"} transition-all`}>
        <Topbar />

        <main className="p-6 space-y-6">
          {/* 🔥 HEADER ROW */}
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold">Dashboard</h1>
            <TimeFilter value={range} onChange={setRange} />
          </div>

          {/* DATA SECTIONS */}
          <StatsCards range={range} />
          <TradingSection />

          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            <div className="xl:col-span-2">
              <PositionsTable range={range} />
            </div>
            <div className="space-y-6">
              <Watchlist />
              <RiskPanel />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}