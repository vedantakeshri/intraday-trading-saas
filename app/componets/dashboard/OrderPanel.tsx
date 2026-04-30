

// "use client";

// import { useState, useEffect } from "react";
// import { ArrowUpRight, ArrowDownRight } from "lucide-react";

// export default function OrderPanel() {
//   const [side, setSide] = useState<"BUY" | "SELL">("BUY");
//   const [qty, setQty] = useState(1);
//   const [orderType, setOrderType] = useState<"Market" | "Limit">("Market");
//   const [price, setPrice] = useState(22150);
//   const [marketPrice, setMarketPrice] = useState(22150);
//   const [executing, setExecuting] = useState(false);

//   const balance = 25000;

//   // 🔥 Live price simulation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setMarketPrice((p) => p + (Math.random() - 0.5) * 20);
//     }, 1200);

//     return () => clearInterval(interval);
//   }, []);

//   const invested = qty * (orderType === "Market" ? marketPrice : price);

//   const pnl =
//     side === "BUY"
//       ? (marketPrice - price) * qty
//       : (price - marketPrice) * qty;

//   // 🧠 AI Suggestion
//   const movement = (marketPrice - price) / price;

//   const aiSignal =
//     movement > 0.01 ? "STRONG BUY" :
//     movement < -0.01 ? "STRONG SELL" :
//     "WAIT";

//   // 🎯 Risk
//   const riskPercent = (invested / balance) * 100;

//   const riskLevel =
//     riskPercent > 70
//       ? "High Risk"
//       : riskPercent > 40
//       ? "Medium"
//       : "Safe";

//   const riskColor =
//     riskLevel === "High Risk"
//       ? "text-red-400"
//       : riskLevel === "Medium"
//       ? "text-yellow-400"
//       : "text-green-400";

//   const handleTrade = () => {
//     setExecuting(true);

//     setTimeout(() => {
//       setExecuting(false);
//       alert(`${side} order executed 🚀`);
//     }, 1200);
//   };

//   return (
//     <div className="relative bg-[#0f172a]/70 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4">

//       {/* 🔥 Live price */}
//       <div className="absolute top-3 right-3 text-xs bg-black/40 px-3 py-1 rounded-full">
//         Live: ₹{marketPrice.toFixed(2)}
//       </div>

//       <h3 className="text-lg font-semibold">⚡ Smart Trade Panel</h3>

//       {/* BUY SELL */}
//       <div className="flex rounded-xl overflow-hidden">
//         {["BUY", "SELL"].map((s) => (
//           <button
//             key={s}
//             onClick={() => setSide(s as any)}
//             className={`flex-1 py-2 transition ${
//               side === s
//                 ? s === "BUY"
//                   ? "bg-green-500 text-black"
//                   : "bg-red-500 text-black"
//                 : "bg-gray-800 text-gray-400"
//             }`}
//           >
//             {s}
//           </button>
//         ))}
//       </div>

//       {/* Order Type */}
//       <div className="flex gap-2">
//         {["Market", "Limit"].map((t) => (
//           <button
//             key={t}
//             onClick={() => setOrderType(t as any)}
//             className={`flex-1 py-2 rounded-lg ${
//               orderType === t
//                 ? "bg-blue-500 text-white"
//                 : "bg-gray-800 text-gray-400"
//             }`}
//           >
//             {t}
//           </button>
//         ))}
//       </div>

//       {/* Quantity */}
//       <div>
//         <label className="text-sm text-gray-400">
//           Quantity: {qty}
//         </label>
//         <input
//           type="range"
//           min="1"
//           max="100"
//           value={qty}
//           onChange={(e) => setQty(Number(e.target.value))}
//           className="w-full"
//         />
//       </div>

//       {/* % Buttons */}
//       <div className="flex gap-2 text-xs">
//         {[25, 50, 100].map((p) => (
//           <button
//             key={p}
//             onClick={() =>
//               setQty(Math.floor((balance * (p / 100)) / marketPrice))
//             }
//             className="flex-1 bg-gray-800 py-1 rounded hover:bg-gray-700"
//           >
//             {p}%
//           </button>
//         ))}
//       </div>

//       {/* Limit Price */}
//       {orderType === "Limit" && (
//         <input
//           type="number"
//           value={price}
//           onChange={(e) => setPrice(Number(e.target.value))}
//           className="w-full bg-gray-800 p-2 rounded"
//         />
//       )}

//       {/* 📊 Insights */}
//       <div className="bg-black/40 rounded-xl p-3 space-y-2 text-sm">

//         <Row label="Invested" value={`₹${invested.toFixed(0)}`} />

//         <div className="flex justify-between">
//           <span>PnL</span>
//           <span
//             className={`flex items-center gap-1 ${
//               pnl >= 0 ? "text-green-400" : "text-red-400"
//             }`}
//           >
//             {pnl >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
//             ₹{pnl.toFixed(2)}
//           </span>
//         </div>

//         <Row label="AI Signal" value={aiSignal} />

//         <div>
//           <div className="flex justify-between text-xs">
//             <span>Risk</span>
//             <span className={riskColor}>{riskLevel}</span>
//           </div>

//           {/* 🔥 Risk bar */}
//           <div className="h-1.5 bg-gray-800 rounded mt-1">
//             <div
//               className={`h-full ${
//                 riskLevel === "High Risk"
//                   ? "bg-red-500"
//                   : riskLevel === "Medium"
//                   ? "bg-yellow-400"
//                   : "bg-green-400"
//               }`}
//               style={{ width: `${riskPercent}%` }}
//             />
//           </div>
//         </div>
//       </div>

//       {/* CTA */}
//       <button
//         disabled={riskLevel === "High Risk"}
//         onClick={handleTrade}
//         className={`w-full py-2 rounded-xl font-semibold transition ${
//           side === "BUY"
//             ? "bg-green-500 text-black"
//             : "bg-red-500 text-black"
//         } ${executing ? "opacity-50" : "hover:scale-105"}`}
//       >
//         {executing ? "Processing..." : `${side} NOW 🚀`}
//       </button>
//     </div>
//   );
// }

// function Row({ label, value }: { label: string; value: string }) {
//   return (
//     <div className="flex justify-between">
//       <span>{label}</span>
//       <span>{value}</span>
//     </div>
//   );
// }











"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function OrderPanel() {
  const [side, setSide] = useState<"BUY" | "SELL">("BUY");
  const [qty, setQty] = useState(1);
  const [orderType, setOrderType] = useState<"Market" | "Limit">("Market");

  const [price, setPrice] = useState(22150);
  const [marketPrice, setMarketPrice] = useState(22150);

  const [sl, setSL] = useState(22100);
  const [target, setTarget] = useState(22250);

  const [executing, setExecuting] = useState(false);
  const [success, setSuccess] = useState(false);

  const balance = 25000;

  // 🔥 Smooth market simulation
  useEffect(() => {
    const interval = setInterval(() => {
      setMarketPrice((p) => p + (Math.random() - 0.5) * 10);
    }, 1200);

    return () => clearInterval(interval);
  }, []);

  const entry = orderType === "Market" ? marketPrice : price;

  const invested = entry * qty;

  const pnl =
    side === "BUY"
      ? (marketPrice - entry) * qty
      : (entry - marketPrice) * qty;

  // 🎯 Risk Reward
  const risk = Math.abs(entry - sl);
  const reward = Math.abs(target - entry);
  const rr = reward / (risk || 1);

  // 🧠 Better AI logic
  const aiSignal =
    rr > 2 ? "GOOD TRADE" :
    rr > 1 ? "AVERAGE" :
    "AVOID";

  // ⚠️ Risk %
  const riskPercent = (invested / balance) * 100;

  const handleTrade = () => {
    setExecuting(true);

    setTimeout(() => {
      setExecuting(false);
      setSuccess(true);

      setTimeout(() => setSuccess(false), 2000);
    }, 1200);
  };

  return (
    <div className="relative bg-[#0f172a]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4">

      {/* Live Price */}
      <div className="absolute top-3 right-3 text-xs bg-black/40 px-3 py-1 rounded-full">
        Live ₹{marketPrice.toFixed(2)}
      </div>

      <h3 className="text-lg font-semibold">⚡ Smart Trade Panel</h3>

      {/* BUY SELL */}
      <div className="flex rounded-xl overflow-hidden">
        {["BUY", "SELL"].map((s) => (
          <button
            key={s}
            onClick={() => setSide(s as any)}
            className={`flex-1 py-2 ${
              side === s
                ? s === "BUY"
                  ? "bg-green-500 text-black"
                  : "bg-red-500 text-black"
                : "bg-gray-800 text-gray-400"
            }`}
          >
            {s}
          </button>
        ))}
      </div>

      {/* Order Type */}
      <div className="flex gap-2">
        {["Market", "Limit"].map((t) => (
          <button
            key={t}
            onClick={() => setOrderType(t as any)}
            className={`flex-1 py-2 rounded-lg ${
              orderType === t
                ? "bg-blue-500 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      {/* Quantity */}
      <div>
        <label className="text-sm text-gray-400">
          Quantity: {qty}
        </label>
        <input
          type="range"
          min="1"
          max="100"
          value={qty}
          onChange={(e) => setQty(Number(e.target.value))}
          className="w-full"
        />
      </div>

      {/* SL & Target */}
      <div className="grid grid-cols-2 gap-2">
        <input
          type="number"
          value={sl}
          onChange={(e) => setSL(Number(e.target.value))}
          placeholder="Stop Loss"
          className="bg-gray-800 p-2 rounded"
        />
        <input
          type="number"
          value={target}
          onChange={(e) => setTarget(Number(e.target.value))}
          placeholder="Target"
          className="bg-gray-800 p-2 rounded"
        />
      </div>

      {/* Insights */}
      <div className="bg-black/40 rounded-xl p-3 space-y-2 text-sm">

        <Row label="Invested" value={`₹${invested.toFixed(0)}`} />

        <div className="flex justify-between">
          <span>PnL</span>
          <span className={pnl >= 0 ? "text-green-400" : "text-red-400"}>
            ₹{pnl.toFixed(2)}
          </span>
        </div>

        <Row label="Risk/Reward" value={`1:${rr.toFixed(2)}`} />

        <Row label="AI Signal" value={aiSignal} />

        <Row
          label="Capital Usage"
          value={`${riskPercent.toFixed(1)}%`}
        />
      </div>

      {/* CTA */}
      <button
        disabled={riskPercent > 70}
        onClick={handleTrade}
        className={`w-full py-2 rounded-xl font-semibold transition ${
          side === "BUY"
            ? "bg-green-500 text-black"
            : "bg-red-500 text-black"
        } ${executing ? "opacity-50" : "hover:scale-105"}`}
      >
        {executing ? "Processing..." : `${side} NOW 🚀`}
      </button>

      {/* Success Toast */}
      {success && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-green-500 text-black px-4 py-2 rounded-lg text-sm">
          Order Executed Successfully 🚀
        </div>
      )}
    </div>
  );
}

function Row({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between">
      <span className="text-gray-400">{label}</span>
      <span>{value}</span>
    </div>
  );
}