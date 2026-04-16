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








// "use client";

// import { useEffect, useState } from "react";

// export default function StatsCards() {
//   const card =
//     "bg-[#0f172a]/60 border border-white/10 rounded-xl p-5";

//   const [pnl, setPnl] = useState(13753);
//   const [change, setChange] = useState(2.41);

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPnl((prev) => {
//         const delta = (Math.random() - 0.5) * 500; // 🔥 movement
//         const newPnl = prev + delta;

//         setChange((newPnl / 500000) * 100); // assume capital

//         return newPnl;
//       });
//     }, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   const isProfit = pnl >= 0;

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      
//       {/* 🔥 Real-Time P&L */}
//       <div className={card}>
//         <p className="text-gray-400 text-sm">Today's P&L</p>

//         <h2
//           className={`text-2xl font-bold ${
//             isProfit ? "text-green-400" : "text-red-400"
//           }`}
//         >
//           {isProfit ? "+" : "-"}₹{Math.abs(pnl).toFixed(0)}
//         </h2>

//         <p className="text-xs text-gray-500">
//           {isProfit ? "+" : "-"}
//           {Math.abs(change).toFixed(2)}% on capital
//         </p>
//       </div>

//       {/* Open Positions */}
//       <div className={card}>
//         <p className="text-gray-400 text-sm">Open Positions</p>
//         <h2 className="text-2xl font-bold">2</h2>
//       </div>

//       {/* Trades */}
//       <div className={card}>
//         <p className="text-gray-400 text-sm">Trades Today</p>
//         <h2 className="text-2xl font-bold text-yellow-400">7</h2>
//       </div>

//       {/* Margin */}
//       <div className={card}>
//         <p className="text-gray-400 text-sm">Available Margin</p>
//         <h2 className="text-2xl font-bold text-blue-400">
//           ₹1,94,520
//         </h2>
//       </div>
//     </div>
//   );
// }











"use client";

import { useEffect, useState, useMemo } from "react";

function Sparkline({ data }: { data: number[] }) {
  const max = Math.max(...data);
  const min = Math.min(...data);

  const points = data
    .map((value, index) => {
      const x = (index / (data.length - 1)) * 100;
      const y = ((value - min) / (max - min || 1)) * 100;
      return `${x},${100 - y}`;
    })
    .join(" ");

  return (
    <svg viewBox="0 0 100 100" className="w-full h-10">
      <polyline
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        points={points}
        className="text-green-400"
      />
    </svg>
  );
}

export default function StatsCards() {
  const card =
    "relative bg-[#0f172a]/70 border border-white/10 rounded-2xl p-5 transition-all duration-300 hover:scale-[1.03] hover:border-green-500/40 hover:shadow-xl cursor-pointer";

  const [pnl, setPnl] = useState(13753);
  const [change, setChange] = useState(2.41);

  const [history, setHistory] = useState<number[]>([12000, 12500, 12300, 13000, 13500, 13753]);

  const capital = 500000;

  const isProfit = pnl >= 0;

  // 🔥 Smooth + realistic animation (not random jumps)
  useEffect(() => {
    const interval = setInterval(() => {
      setPnl((prev) => {
        const delta = (Math.random() - 0.5) * 200; // smaller = realistic
        const newPnl = prev + delta;

        setChange((newPnl / capital) * 100);

        setHistory((h) => {
          const updated = [...h, newPnl];
          if (updated.length > 20) updated.shift(); // keep last 20 points
          return updated;
        });

        return newPnl;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">

      {/* 🔥 P&L CARD */}
      <div className={card}>
        <div className="flex justify-between items-start">
          <p className="text-gray-400 text-sm">Today's P&L</p>

          <div
            className={`text-xs px-2 py-0.5 rounded-full ${
              isProfit
                ? "bg-green-500/20 text-green-400"
                : "bg-red-500/20 text-red-400"
            }`}
          >
            {isProfit ? "Profit" : "Loss"}
          </div>
        </div>

        <h2
          className={`text-3xl font-bold mt-2 transition-all duration-500 ${
            isProfit ? "text-green-400" : "text-red-400"
          }`}
        >
          {isProfit ? "+" : "-"}₹{Math.abs(pnl).toFixed(0)}
        </h2>

        <p className="text-xs text-gray-500 mt-1">
          {isProfit ? "+" : "-"}
          {Math.abs(change).toFixed(2)}% on capital
        </p>

        {/* 🔥 Sparkline */}
        <div className="mt-3 opacity-80">
          <Sparkline data={history} />
        </div>
      </div>

      {/* 📊 OPEN POSITIONS */}
      <div className={card}>
        <p className="text-gray-400 text-sm">Open Positions</p>

        <h2 className="text-3xl font-bold mt-2 text-white">2</h2>

        <div className="mt-4 text-xs text-gray-500">
          Active trades running
        </div>
      </div>

      {/* ⚡ TRADES */}
      <div className={card}>
        <p className="text-gray-400 text-sm">Trades Today</p>

        <h2 className="text-3xl font-bold mt-2 text-yellow-400">7</h2>

        <div className="mt-4 text-xs text-gray-500">
          Executed trades count
        </div>
      </div>

      {/* 💰 MARGIN */}
      <div className={card}>
        <p className="text-gray-400 text-sm">Available Margin</p>

        <h2 className="text-3xl font-bold mt-2 text-blue-400">
          ₹1,94,520
        </h2>

        <div className="mt-4 text-xs text-gray-500">
          Funds available for trading
        </div>
      </div>
    </div>
  );
}