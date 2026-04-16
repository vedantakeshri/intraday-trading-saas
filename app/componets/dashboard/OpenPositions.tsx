// "use client";

// import { useEffect, useState } from "react";
// import { useRouter } from "next/navigation";

// type Position = {
//   symbol: string;
//   qty: number;
//   avgPrice: number;
//   ltp: number;
//   type: "BUY" | "SELL";
// };

// export default function OpenPositions() {
//   const router = useRouter();
//   const [expanded, setExpanded] = useState<number | null>(null);

//   const [positions, setPositions] = useState<Position[]>([
//     { symbol: "RELIANCE", qty: 10, avgPrice: 2450, ltp: 2460, type: "BUY" },
//     { symbol: "BANKNIFTY", qty: 15, avgPrice: 48200, ltp: 48120, type: "SELL" },
//   ]);

//   // 🔥 Live price movement
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPositions((prev) =>
//         prev.map((p) => ({
//           ...p,
//           ltp: p.ltp + (Math.random() - 0.5) * 20,
//         }))
//       );
//     }, 1200);

//     return () => clearInterval(interval);
//   }, []);

//   const pnl = (p: Position) =>
//     p.type === "BUY"
//       ? (p.ltp - p.avgPrice) * p.qty
//       : (p.avgPrice - p.ltp) * p.qty;

//   const totalPnL = positions.reduce((acc, p) => acc + pnl(p), 0);

//   return (
//     <div className="bg-[#0b1220]/60 border border-white/10 rounded-2xl p-5 space-y-4 backdrop-blur-xl">

//       {/* 🔥 Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-lg font-semibold">Live Positions</h2>

//         <div
//           className={`text-lg font-bold ${
//             totalPnL >= 0 ? "text-green-400" : "text-red-400"
//           }`}
//         >
//           ₹{totalPnL.toFixed(2)}
//         </div>
//       </div>

//       {/* 🔥 Cards */}
//       {positions.map((p, i) => {
//         const profit = pnl(p);
//         const isProfit = profit >= 0;

//         return (
//           <div
//             key={i}
//             className="group bg-[#020617] border border-white/10 rounded-xl p-4 hover:border-white/20 transition cursor-pointer"
//             onClick={() => setExpanded(expanded === i ? null : i)}
//           >
//             {/* 🔥 Top Row */}
//             <div className="flex justify-between items-center">

//               <div>
//                 <h3 className="font-semibold">{p.symbol}</h3>
//                 <p className="text-xs text-gray-400">
//                   Qty: {p.qty} • Avg: ₹{p.avgPrice}
//                 </p>
//               </div>

//               {/* 🔥 PnL Glow */}
//               <div
//                 className={`text-right font-semibold ${
//                   isProfit ? "text-green-400" : "text-red-400"
//                 }`}
//               >
//                 ₹{profit.toFixed(2)}
//                 <div className="text-[10px] opacity-70">
//                   {isProfit ? "▲ Profit" : "▼ Loss"}
//                 </div>
//               </div>
//             </div>

//             {/* 🔥 Mini Bar */}
//             <div className="mt-3 h-1 bg-gray-800 rounded overflow-hidden">
//               <div
//                 className={`h-full ${
//                   isProfit ? "bg-green-400" : "bg-red-400"
//                 }`}
//                 style={{
//                   width: `${Math.min(Math.abs(profit) / 10, 100)}%`,
//                 }}
//               />
//             </div>

//             {/* 🔥 Expanded Section */}
//             {expanded === i && (
//               <div className="mt-4 space-y-3 border-t border-white/10 pt-3">

//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-400">LTP</span>
//                   <span>₹{p.ltp.toFixed(2)}</span>
//                 </div>

//                 <div className="flex justify-between text-sm">
//                   <span className="text-gray-400">Position</span>
//                   <span>{p.type}</span>
//                 </div>

//                 {/* 🔥 AI Insight */}
//                 <div className="text-xs bg-blue-500/10 text-blue-400 p-2 rounded">
//                   🤖 AI Insight: {isProfit ? "Hold trend strong" : "Watch reversal"}
//                 </div>

//                 {/* 🔥 Actions */}
//                 <div className="flex gap-2">
//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setPositions((prev) =>
//                         prev.map((pos, idx) =>
//                           idx === i
//                             ? { ...pos, qty: Math.max(1, pos.qty - 1) }
//                             : pos
//                         )
//                       );
//                     }}
//                     className="flex-1 bg-yellow-500/20 text-yellow-400 py-1 rounded text-xs"
//                   >
//                     Partial Exit
//                   </button>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       setPositions((prev) =>
//                         prev.filter((_, idx) => idx !== i)
//                       );
//                     }}
//                     className="flex-1 bg-red-500/20 text-red-400 py-1 rounded text-xs"
//                   >
//                     Exit
//                   </button>

//                   <button
//                     onClick={(e) => {
//                       e.stopPropagation();
//                       router.push("/positions");
//                     }}
//                     className="flex-1 bg-blue-500/20 text-blue-400 py-1 rounded text-xs"
//                   >
//                     Manage
//                   </button>
//                 </div>
//               </div>
//             )}
//           </div>
//         );
//       })}

//       {/* 🔥 Empty */}
//       {positions.length === 0 && (
//         <div className="text-center text-gray-500 py-6">
//           No active trades 🚀
//         </div>
//       )}
//     </div>
//   );
// }


















"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Position = {
  symbol: string;
  qty: number;
  avgPrice: number;
  ltp: number;
  type: "BUY" | "SELL";
  createdAt: number;
};

export default function OpenPositions() {
  const router = useRouter();
  const [expanded, setExpanded] = useState<number | null>(null);

  const [positions, setPositions] = useState<Position[]>([
    {
      symbol: "RELIANCE",
      qty: 10,
      avgPrice: 2450,
      ltp: 2460,
      type: "BUY",
      createdAt: Date.now(),
    },
    {
      symbol: "BANKNIFTY",
      qty: 15,
      avgPrice: 48200,
      ltp: 48120,
      type: "SELL",
      createdAt: Date.now(),
    },
  ]);

  // 🔥 Live price movement
  useEffect(() => {
    const interval = setInterval(() => {
      setPositions((prev) =>
        prev.map((p) => ({
          ...p,
          ltp: p.ltp + (Math.random() - 0.5) * 20,
        }))
      );
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const pnl = (p: Position) =>
    p.type === "BUY"
      ? (p.ltp - p.avgPrice) * p.qty
      : (p.avgPrice - p.ltp) * p.qty;

  const totalPnL = positions.reduce((acc, p) => acc + pnl(p), 0);

  // 🧠 AI Engine
  const getAI = (p: Position) => {
    const movement = (p.ltp - p.avgPrice) / p.avgPrice;

    if (movement > 0.015)
      return { signal: "HOLD", confidence: 88, risk: "LOW" };

    if (movement < -0.015)
      return { signal: "EXIT", confidence: 82, risk: "HIGH" };

    return { signal: "WATCH", confidence: 60, risk: "MEDIUM" };
  };

  // ⏱ Time ago
  const timeAgo = (ts: number) => {
    const diff = Math.floor((Date.now() - ts) / 1000);
    if (diff < 60) return `${diff}s`;
    if (diff < 3600) return `${Math.floor(diff / 60)}m`;
    return `${Math.floor(diff / 3600)}h`;
  };

  return (
    <div className="bg-[#0b1220]/60 border border-white/10 rounded-2xl p-4 md:p-5 space-y-4 backdrop-blur-xl">

      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between gap-2 sm:items-center">
        <h2 className="text-lg font-semibold">Live Positions</h2>

        <div
          className={`text-lg font-bold ${
            totalPnL >= 0 ? "text-green-400" : "text-red-400"
          }`}
        >
          ₹{totalPnL.toFixed(2)}
        </div>
      </div>

      {/* Cards */}
      {positions.map((p, i) => {
        const profit = pnl(p);
        const isProfit = profit >= 0;
        const ai = getAI(p);

        const strength = Math.min(
          100,
          Math.abs((p.ltp - p.avgPrice) / p.avgPrice) * 1000
        );

        const strongMove = strength > 50;

        return (
          <div
            key={i}
            onClick={() => setExpanded(expanded === i ? null : i)}
            className={`relative group rounded-xl p-4 border transition-all cursor-pointer
            ${
              strongMove
                ? "border-yellow-400/30 shadow-lg"
                : "border-white/10"
            }
            bg-[#020617] hover:scale-[1.01]`}
          >
            {/* Glow */}
            {strongMove && (
              <div className="absolute inset-0 bg-yellow-500/10 blur-xl animate-pulse" />
            )}

            {/* Top */}
            <div className="relative z-10 flex flex-col sm:flex-row sm:justify-between gap-2">

              <div>
                <h3 className="font-semibold">{p.symbol}</h3>
                <p className="text-xs text-gray-400">
                  {p.qty} qty • ₹{p.avgPrice}
                </p>

                {/* ⏱ Time */}
                <p className="text-[10px] text-gray-500">
                  {timeAgo(p.createdAt)} ago
                </p>
              </div>

              <div className="sm:text-right">
                <p
                  className={`font-semibold ${
                    isProfit ? "text-green-400" : "text-red-400"
                  }`}
                >
                  ₹{profit.toFixed(2)}
                </p>

                <p className="text-[10px] text-gray-400">
                  {ai.signal} • {ai.confidence}%
                </p>
              </div>
            </div>

            {/* 📊 Strength bar */}
            <div className="mt-3 h-1.5 bg-gray-800 rounded overflow-hidden">
              <div
                className={`h-full ${
                  isProfit ? "bg-green-400" : "bg-red-400"
                }`}
                style={{ width: `${strength}%` }}
              />
            </div>

            {/* Expanded */}
            {expanded === i && (
              <div className="mt-4 border-t border-white/10 pt-3 space-y-3">

                <Row label="LTP" value={`₹${p.ltp.toFixed(2)}`} />
                <Row label="Type" value={p.type} />

                {/* 🤖 AI Panel */}
                <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-white/10 rounded-lg p-3 space-y-2">
                  <Row label="Signal" value={ai.signal} />
                  <Row label="Confidence" value={`${ai.confidence}%`} />
                  <Row label="Risk" value={ai.risk} />

                  <p className="text-xs text-gray-400">
                    🤖 {ai.signal === "HOLD"
                      ? "Trend strong, hold position"
                      : ai.signal === "EXIT"
                      ? "Market turning against you"
                      : "Wait for confirmation"}
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPositions((prev) =>
                        prev.map((pos, idx) =>
                          idx === i
                            ? { ...pos, qty: Math.max(1, pos.qty - 1) }
                            : pos
                        )
                      );
                    }}
                    className="flex-1 bg-yellow-500/20 text-yellow-400 py-2 rounded text-xs"
                  >
                    Partial Exit
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setPositions((prev) =>
                        prev.filter((_, idx) => idx !== i)
                      );
                    }}
                    className="flex-1 bg-red-500/20 text-red-400 py-2 rounded text-xs"
                  >
                    Exit
                  </button>

                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      router.push("/positions");
                    }}
                    className="flex-1 bg-blue-500/20 text-blue-400 py-2 rounded text-xs"
                  >
                    Manage
                  </button>
                </div>
              </div>
            )}
          </div>
        );
      })}

      {/* Empty */}
      {positions.length === 0 && (
        <div className="text-center text-gray-500 py-6">
          No active trades 🚀
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-sm">
      <span className="text-gray-400">{label}</span>
      <span>{value}</span>
    </div>
  );
}