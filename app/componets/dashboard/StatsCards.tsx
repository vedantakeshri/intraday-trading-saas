// export default function StatsCards() {
//   const card =
//     "bg-[#0f172a]/60 border border-white/10 rounded-xl p-5";

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      
//       <div className={card}>
//         <p className="text-gray-400 text-sm">Today's P&L</p>
//         <h2 className="text-2xl font-bold text-green-400">+₹13,753</h2>
//         <p className="text-xs text-gray-500">+2.41% on capital</p>
//       </div>

//       <div className={card}>
//         <p className="text-gray-400 text-sm">Open Positions</p>
//         <h2 className="text-2xl font-bold">2</h2>
//       </div>

//       <div className={card}>
//         <p className="text-gray-400 text-sm">Trades Today</p>
//         <h2 className="text-2xl font-bold text-yellow-400">7</h2>
//       </div>

//       <div className={card}>
//         <p className="text-gray-400 text-sm">Available Margin</p>
//         <h2 className="text-2xl font-bold text-blue-400">₹1,94,520</h2>
//       </div>

//     </div>
//   );
// }








"use client";

import { useEffect, useState } from "react";

export default function StatsCards() {
  const card =
    "bg-[#0f172a]/60 border border-white/10 rounded-xl p-5";

  const [pnl, setPnl] = useState(13753);
  const [change, setChange] = useState(2.41);

  useEffect(() => {
    const interval = setInterval(() => {
      setPnl((prev) => {
        const delta = (Math.random() - 0.5) * 500; // 🔥 movement
        const newPnl = prev + delta;

        setChange((newPnl / 500000) * 100); // assume capital

        return newPnl;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const isProfit = pnl >= 0;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      
      {/* 🔥 Real-Time P&L */}
      <div className={card}>
        <p className="text-gray-400 text-sm">Today's P&L</p>

        <h2
          className={`text-2xl font-bold ${
            isProfit ? "text-green-400" : "text-red-400"
          }`}
        >
          {isProfit ? "+" : "-"}₹{Math.abs(pnl).toFixed(0)}
        </h2>

        <p className="text-xs text-gray-500">
          {isProfit ? "+" : "-"}
          {Math.abs(change).toFixed(2)}% on capital
        </p>
      </div>

      {/* Open Positions */}
      <div className={card}>
        <p className="text-gray-400 text-sm">Open Positions</p>
        <h2 className="text-2xl font-bold">2</h2>
      </div>

      {/* Trades */}
      <div className={card}>
        <p className="text-gray-400 text-sm">Trades Today</p>
        <h2 className="text-2xl font-bold text-yellow-400">7</h2>
      </div>

      {/* Margin */}
      <div className={card}>
        <p className="text-gray-400 text-sm">Available Margin</p>
        <h2 className="text-2xl font-bold text-blue-400">
          ₹1,94,520
        </h2>
      </div>
    </div>
  );
}