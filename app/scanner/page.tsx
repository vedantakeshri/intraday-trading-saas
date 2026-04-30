// "use client";

// import React, { useEffect, useState } from "react";
// import Sidebar from "../componets/dashboard/Sidebar";
// import Topbar from "../componets/dashboard/Topbar";
// import { useRouter } from "next/navigation";


// const initialStocks = [
//   { name: "RELIANCE", price: 2450, change: 1.2, volume: 120000 },
//   { name: "TCS", price: 3800, change: -0.8, volume: 80000 },
//   { name: "INFY", price: 1500, change: 2.5, volume: 150000 },
//   { name: "HDFCBANK", price: 1650, change: -1.5, volume: 95000 },
// ];


// type Stock = {
//   name: string;
//   price: number;
//   change: number;
//   volume: number;
// };

// type AISignal = {
//   signal: "BUY" | "SELL" | "HOLD";
//   confidence: number;
//   reason: string;
// };

// const ScannerPage = () => {
//   const [stocks, setStocks] = useState(initialStocks);
//   const [search, setSearch] = useState("");
//   const [aiOnly, setAiOnly] = useState(false);
//   const [sidebarOpen, setSidebarOpen] = useState(true);
//   const [loading, setLoading] = useState(true);
//   const router = useRouter();


//   // Simulated loading
//   useEffect(() => {
//     setTimeout(() => setLoading(false), 1200);
//   }, []);


//     const handleLogout = () => {
//     localStorage.removeItem("authToken");
//     router.push("/login");
//   };

//   // 🔄 Live market simulation
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setStocks((prev) =>
//         prev.map((stock) => ({
//           ...stock,
//           price: stock.price + (Math.random() * 10 - 5),
//           change: Math.random() * 4 - 2,
//           volume: stock.volume + Math.floor(Math.random() * 5000),
//         }))
//       );
//     }, 3000);

//     return () => clearInterval(interval);
//   }, []);

//   // 🤖 AI ENGINE
//   // const getAISignal = (stock) => {
//   //   if (stock.change > 1 && stock.volume > 100000) {
//   //     return {
//   //       signal: "BUY",
//   //       confidence: 85,
//   //       reason: "Momentum breakout + volume spike",
//   //     };
//   //   }

//   //   if (stock.change < -1 && stock.volume > 90000) {
//   //     return {
//   //       signal: "SELL",
//   //       confidence: 80,
//   //       reason: "Heavy selling pressure",
//   //     };
//   //   }

//   //   return {
//   //     signal: "HOLD",
//   //     confidence: 60,
//   //     reason: "No clear trend",
//   //   };
//   // };


//   const getAISignal = (stock: Stock): AISignal => {
//   if (stock.change > 1 && stock.volume > 100000) {
//     return {
//       signal: "BUY",
//       confidence: 85,
//       reason: "Momentum breakout + volume spike",
//     };
//   }

//   if (stock.change < -1 && stock.volume > 90000) {
//     return {
//       signal: "SELL",
//       confidence: 80,
//       reason: "Heavy selling pressure",
//     };
//   }

//   return {
//     signal: "HOLD",
//     confidence: 60,
//     reason: "No clear trend",
//   };
// };

//   // Filters
//   const filtered = stocks.filter((stock) => {
//     const ai = getAISignal(stock);

//     if (aiOnly) return ai.confidence > 75;
//     return stock.name.toLowerCase().includes(search.toLowerCase());
//   });

//   // KPI DATA
//   const gainers = stocks.filter((s) => s.change > 0).length;
//   const losers = stocks.filter((s) => s.change < 0).length;
//   const strongSignals = stocks.filter(
//     (s) => getAISignal(s).confidence > 80
//   ).length;

//   return (
//     <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d]">
//       <Sidebar />

//       <div className={`${sidebarOpen ? "ml-64" : "ml-16"} transition-all`}>
//         <Topbar  onLogout={handleLogout} />

//         <div className="p-6">
//           {/* Heading */}
//           <h1 className="text-2xl font-bold mb-6">
//             🤖 AI Market Scanner
//           </h1>

//           {/* KPI Cards */}
//           <div className="grid grid-cols-4 gap-4 mb-6">
//             {[
//               { label: "Stocks", value: stocks.length },
//               { label: "Gainers", value: gainers, color: "text-green-400" },
//               { label: "Losers", value: losers, color: "text-red-400" },
//               {
//                 label: "AI Signals",
//                 value: strongSignals,
//                 color: "text-purple-400",
//               },
//             ].map((item, i) => (
//               <div
//                 key={i}
//                 className="p-4 rounded-xl bg-white/5 backdrop-blur border border-white/10"
//               >
//                 <p className="text-sm text-gray-400">{item.label}</p>
//                 <h2 className={`text-xl font-bold ${item.color}`}>
//                   {item.value}
//                 </h2>
//               </div>
//             ))}
//           </div>

//           {/* Controls */}
//           <div className="flex gap-4 mb-6">
//             <input
//               placeholder="Search stock..."
//               className="p-2 bg-white/5 border border-white/10 rounded-lg"
//               onChange={(e) => setSearch(e.target.value)}
//             />

//             <button
//               onClick={() => setAiOnly(!aiOnly)}
//               className={`px-4 py-2 rounded-lg ${
//                 aiOnly
//                   ? "bg-purple-600 shadow-lg shadow-purple-500/20"
//                   : "bg-gray-700"
//               }`}
//             >
//               AI Signals Only
//             </button>
//           </div>

//           {/* Loading */}
//           {loading ? (
//             <div className="text-center py-10 text-gray-400">
//               Loading market data...
//             </div>
//           ) : filtered.length === 0 ? (
//             <div className="text-center py-10 text-gray-400">
//               No stocks found 🚫
//             </div>
//           ) : (
//             <div className="bg-white/5 backdrop-blur rounded-xl border border-white/10 overflow-hidden">
//               <table className="w-full text-left text-sm">
//                 <thead className="bg-white/10">
//                   <tr>
//                     <th className="p-3">Stock</th>
//                     <th className="p-3">Price</th>
//                     <th className="p-3">Change</th>
//                     <th className="p-3">Volume</th>
//                     <th className="p-3">Signal</th>
//                     <th className="p-3">Confidence</th>
//                     <th className="p-3">Reason</th>
//                   </tr>
//                 </thead>

//                 <tbody>
//                   {filtered.map((stock, i) => {
//                     const ai = getAISignal(stock);

//                     return (
//                       <tr
//                         key={i}
//                         className={`border-t border-white/10 hover:bg-white/5 transition ${
//                           ai.confidence > 80
//                             ? "ring-1 ring-purple-500/40"
//                             : ""
//                         }`}
//                       >
//                         <td className="p-3 font-medium">{stock.name}</td>
//                         <td className="p-3">
//                           ₹{stock.price.toFixed(2)}
//                         </td>

//                         <td
//                           className={`p-3 ${
//                             stock.change > 0
//                               ? "text-green-400"
//                               : "text-red-400"
//                           }`}
//                         >
//                           {stock.change.toFixed(2)}%
//                         </td>

//                         <td className="p-3">{stock.volume}</td>

//                         <td className="p-3">
//                           <span
//                             className={`px-2 py-1 rounded text-xs font-bold ${
//                               ai.signal === "BUY"
//                                 ? "bg-green-500/20 text-green-400"
//                                 : ai.signal === "SELL"
//                                 ? "bg-red-500/20 text-red-400"
//                                 : "bg-yellow-500/20 text-yellow-400"
//                             }`}
//                           >
//                             {ai.signal}
//                           </span>
//                         </td>

//                         <td className="p-3 text-purple-400">
//                           {ai.confidence}%
//                         </td>

//                         <td className="p-3 text-gray-400 text-xs">
//                           {ai.reason}
//                         </td>
//                       </tr>
//                     );
//                   })}
//                 </tbody>
//               </table>
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ScannerPage;




"use client";

import { useEffect, useState } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";

type Signal = {
  symbol: string;
  price: number;
  type: "BUY" | "SELL";
  time: string;
  id: number;
};

export default function ScannerPage() {
  const [symbols, setSymbols] = useState<string[]>(["NIFTY"]);
  const [input, setInput] = useState("");
  const [signals, setSignals] = useState<Signal[]>([]);
  const [prices, setPrices] = useState<Record<string, number>>({});
  const [scanning, setScanning] = useState(true);

  // 🔥 Add Symbol
  const addSymbol = () => {
    if (!input) return;
    const symbol = input.toUpperCase();
    if (!symbols.includes(symbol)) {
      setSymbols([...symbols, symbol]);
    }
    setInput("");
  };

  const removeSymbol = (symbol: string) => {
    setSymbols(symbols.filter((s) => s !== symbol));
  };

  // 🔥 Live Price Engine
  useEffect(() => {
    const interval = setInterval(() => {
      setPrices((prev) => {
        const updated = { ...prev };

        symbols.forEach((sym) => {
          const base = prev[sym] || 22000;
          updated[sym] = base + (Math.random() - 0.5) * 40;
        });

        return updated;
      });
    }, 1200);

    return () => clearInterval(interval);
  }, [symbols]);

  // 🔥 Smart Signal Engine
  useEffect(() => {
    const interval = setInterval(() => {
      const newSignals: Signal[] = [];

      symbols.forEach((sym) => {
        const price = prices[sym];
        if (!price) return;

        const probability = Math.random();

        if (probability > 0.75) {
          newSignals.push({
            symbol: sym,
            price,
            type: "BUY",
            time: new Date().toLocaleTimeString(),
            id: Date.now() + Math.random(),
          });
        } else if (probability < 0.25) {
          newSignals.push({
            symbol: sym,
            price,
            type: "SELL",
            time: new Date().toLocaleTimeString(),
            id: Date.now() + Math.random(),
          });
        }
      });

      if (newSignals.length) {
        setSignals((prev) => [...newSignals, ...prev].slice(0, 15));
      }
    }, 3500);

    return () => clearInterval(interval);
  }, [symbols, prices]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d] text-white">
      <Sidebar />

      <div className="ml-64">
        <Topbar onLogout={() => {}} />

        <main className="p-6 max-w-7xl mx-auto space-y-6">

          {/* HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Scanner Engine</h1>
              <p className="text-gray-400">
                Real-time signal detection powered by rule-based logic
              </p>
            </div>

            {/* LIVE STATUS */}
            <div className="flex items-center gap-2 text-green-400 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live Scanning
            </div>
          </div>

          {/* STATS */}
          <div className="grid grid-cols-3 gap-4">
            <Stat title="Watching" value={symbols.length} />
            <Stat title="Signals" value={signals.length} />
            <Stat title="Status" value="Active" />
          </div>

          {/* ADD SYMBOL */}
          <div className="flex gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add Symbol (e.g. NIFTY)"
              className="bg-[#13182A] px-4 py-2 rounded-lg w-64 border border-white/10 focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={addSymbol}
              className="bg-green-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              Add
            </button>
          </div>

          {/* SYMBOL CHIPS */}
          <div className="flex flex-wrap gap-2">
            {symbols.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#13182A] border border-white/10 hover:border-green-400 transition"
              >
                {s}
                <button
                  onClick={() => removeSymbol(s)}
                  className="text-red-400 text-xs"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          {/* LIVE PRICE CARDS */}
          <div className="grid md:grid-cols-3 gap-4">
            {symbols.map((s) => (
              <div
                key={s}
                className="bg-[#13182A]/70 backdrop-blur border border-white/10 p-4 rounded-xl hover:border-green-400/30 transition"
              >
                <p className="text-gray-400 text-sm">{s}</p>
                <h2 className="text-2xl font-bold text-green-400">
                  ₹{prices[s]?.toFixed(2) || "--"}
                </h2>
              </div>
            ))}
          </div>

          {/* SIGNALS */}
          <div className="bg-[#13182A]/70 backdrop-blur border border-white/10 rounded-xl p-5">
            <h2 className="text-lg mb-4">Detected Signals</h2>

            <div className="space-y-3">
              {signals.length === 0 && (
                <p className="text-gray-400">No signals yet...</p>
              )}

              {signals.map((sig, i) => (
                <div
                  key={sig.id}
                  className={`flex justify-between items-center px-4 py-3 rounded-lg transition ${
                    i === 0
                      ? "bg-green-500/10 border border-green-400/40 animate-pulse"
                      : "bg-black/40"
                  }`}
                >
                  <div>
                    <p className="font-semibold">{sig.symbol}</p>
                    <p className="text-xs text-gray-400">{sig.time}</p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`px-3 py-1 text-xs rounded-full ${
                        sig.type === "BUY"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {sig.type}
                    </span>
                    <p className="text-xs text-gray-400">
                      ₹{sig.price.toFixed(2)}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}

/* SMALL COMPONENT */

function Stat({ title, value }: any) {
  return (
    <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-4 text-center">
      <p className="text-gray-400 text-sm">{title}</p>
      <h3 className="text-xl font-bold mt-1">{value}</h3>
    </div>
  );
}