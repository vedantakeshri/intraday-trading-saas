// "use client";

// import { useState } from "react";

// export default function OrderPanel() {
//   const [orderType, setOrderType] = useState("Market");
//   const [qty, setQty] = useState("");
//   const [price, setPrice] = useState("");
//   const [error, setError] = useState("");

//   const balance = 25000; // mock
//   const riskPerTrade = 500; // mock

//   const isValid =
//     qty &&
//     Number(qty) > 0 &&
//     (orderType === "Market" || (price && Number(price) > 0));

//   const handleOrder = (side: "BUY" | "SELL") => {
//     if (!isValid) {
//       setError("Please enter valid order details");
//       return;
//     }

//     setError("");

//     const orderData = {
//       side,
//       orderType,
//       qty,
//       price: orderType === "Market" ? "Market Price" : price,
//     };

//     console.log("Order Placed:", orderData);
//     alert(`${side} order placed successfully`);
//   };

//   return (
//     <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-4">
//       <h3 className="font-semibold">Place Order</h3>

//       {/* Symbol & Balance */}
//       <div className="flex justify-between text-sm text-gray-400">
//         <span>Symbol: <b className="text-white">NIFTY</b></span>
//         <span>Balance: ₹{balance}</span>
//       </div>

//       {/* Order Type */}
//       <select
//         value={orderType}
//         onChange={e => setOrderType(e.target.value)}
//         className="w-full bg-gray-800 p-2 rounded"
//       >
//         <option>Market</option>
//         <option>Limit</option>
//       </select>

//       {/* Quantity */}
//       <input
//         type="number"
//         placeholder="Quantity"
//         value={qty}
//         onChange={e => setQty(e.target.value)}
//         className="w-full bg-gray-800 p-2 rounded"
//       />

//       {/* Price */}
//       <input
//         type="number"
//         placeholder="Price"
//         value={price}
//         disabled={orderType === "Market"}
//         onChange={e => setPrice(e.target.value)}
//         className="w-full bg-gray-800 p-2 rounded disabled:opacity-50"
//       />

//       {/* Risk Info */}
//       <div className="text-xs text-gray-400">
//         Max Risk / Trade: ₹{riskPerTrade}
//       </div>

//       {/* Error */}
//       {error && <p className="text-red-400 text-sm">{error}</p>}

//       {/* Buttons */}
//       <div className="flex gap-2">
//         <button
//           disabled={!isValid}
//           onClick={() => handleOrder("BUY")}
//           className="flex-1 bg-green-500 disabled:opacity-40 text-black py-2 rounded"
//         >
//           BUY
//         </button>
//         <button
//           disabled={!isValid}
//           onClick={() => handleOrder("SELL")}
//           className="flex-1 bg-red-500 disabled:opacity-40 text-black py-2 rounded"
//         >
//           SELL
//         </button>
//       </div>
//     </div>
//   );
// }











"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

export default function OrderPanel() {
  const [side, setSide] = useState<"BUY" | "SELL">("BUY");
  const [qty, setQty] = useState(1);
  const [orderType, setOrderType] = useState<"Market" | "Limit">("Market");
  const [price, setPrice] = useState(22150);

  const balance = 25000;
  const marketPrice = 22150;

  const invested = qty * price;
  const pnl =
    side === "BUY"
      ? (marketPrice - price) * qty
      : (price - marketPrice) * qty;

  const riskLevel =
    invested > balance * 0.7
      ? "High Risk"
      : invested > balance * 0.3
      ? "Medium"
      : "Safe";

  const riskColor =
    riskLevel === "High Risk"
      ? "text-red-400"
      : riskLevel === "Medium"
      ? "text-yellow-400"
      : "text-green-400";

  return (
    <div className="relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-5 shadow-2xl space-y-4">
      
      {/* Live Price Badge */}
      <div className="absolute top-3 right-3 bg-black/50 px-3 py-1 rounded-full text-xs">
        Live: ₹{marketPrice}
      </div>

      <h3 className="text-lg font-semibold">⚡ Trade Panel</h3>

      {/* BUY SELL */}
      <div className="flex rounded-xl overflow-hidden">
        <button
          onClick={() => setSide("BUY")}
          className={`flex-1 py-2 transition ${
            side === "BUY"
              ? "bg-green-500 text-black shadow-lg"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          BUY
        </button>
        <button
          onClick={() => setSide("SELL")}
          className={`flex-1 py-2 transition ${
            side === "SELL"
              ? "bg-red-500 text-black shadow-lg"
              : "bg-gray-800 text-gray-400"
          }`}
        >
          SELL
        </button>
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

      {/* Quantity Slider */}
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
          className="w-full accent-blue-500"
        />
      </div>

      {/* Quick Buttons */}
      <div className="flex gap-2 text-xs">
        {[25, 50, 100].map((p) => (
          <button
            key={p}
            onClick={() =>
              setQty(Math.floor((balance * (p / 100)) / price))
            }
            className="flex-1 bg-gray-800 py-1 rounded hover:bg-gray-700"
          >
            {p}%
          </button>
        ))}
      </div>

      {/* Price */}
      {orderType === "Limit" && (
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="w-full bg-gray-800 p-2 rounded"
        />
      )}

      {/* Insights */}
      <div className="bg-black/40 rounded-xl p-3 space-y-1 text-sm">
        <div className="flex justify-between">
          <span>Invested</span>
          <span>₹{invested.toLocaleString()}</span>
        </div>

        <div className="flex justify-between">
          <span>PnL</span>
          <span
            className={`flex items-center gap-1 ${
              pnl >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            {pnl >= 0 ? (
              <ArrowUpRight size={14} />
            ) : (
              <ArrowDownRight size={14} />
            )}
            ₹{pnl.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-xs">
          <span>Risk</span>
          <span className={riskColor}>{riskLevel}</span>
        </div>
      </div>

      {/* CTA */}
      <button
        className={`w-full py-2 rounded-xl font-semibold transition transform hover:scale-105 ${
          side === "BUY"
            ? "bg-green-500 text-black hover:shadow-green-500/40"
            : "bg-red-500 text-black hover:shadow-red-500/40"
        }`}
      >
        {side} NOW 🚀
      </button>
    </div>
  );
}