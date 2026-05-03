
// "use client";

// import { useEffect, useState } from "react";
// import Sidebar from "../componets/dashboard/Sidebar";
// import Topbar from "../componets/dashboard/Topbar";

// type Signal = {
//   symbol: string;
//   price: number;
//   type: "BUY" | "SELL";
//   time: string;
//   id: number;
// };

// export default function ScannerPage() {
//   const [symbols, setSymbols] = useState<string[]>(["NIFTY"]);
//   const [input, setInput] = useState("");
//   const [signals, setSignals] = useState<Signal[]>([]);
//   const [prices, setPrices] = useState<Record<string, number>>({});
//   const [scanning, setScanning] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(false); // ✅ FIXED


//   // 🔥 Add Symbol
//   const addSymbol = () => {
//     if (!input) return;
//     const symbol = input.toUpperCase();
//     if (!symbols.includes(symbol)) {
//       setSymbols([...symbols, symbol]);
//     }
//     setInput("");
//   };

//   const removeSymbol = (symbol: string) => {
//     setSymbols(symbols.filter((s) => s !== symbol));
//   };

//   // 🔥 Live Price Engine
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setPrices((prev) => {
//         const updated = { ...prev };

//         symbols.forEach((sym) => {
//           const base = prev[sym] || 22000;
//           updated[sym] = base + (Math.random() - 0.5) * 40;
//         });

//         return updated;
//       });
//     }, 1200);

//     return () => clearInterval(interval);
//   }, [symbols]);

//   // 🔥 Smart Signal Engine
//   useEffect(() => {
//     const interval = setInterval(() => {
//       const newSignals: Signal[] = [];

//       symbols.forEach((sym) => {
//         const price = prices[sym];
//         if (!price) return;

//         const probability = Math.random();

//         if (probability > 0.75) {
//           newSignals.push({
//             symbol: sym,
//             price,
//             type: "BUY",
//             time: new Date().toLocaleTimeString(),
//             id: Date.now() + Math.random(),
//           });
//         } else if (probability < 0.25) {
//           newSignals.push({
//             symbol: sym,
//             price,
//             type: "SELL",
//             time: new Date().toLocaleTimeString(),
//             id: Date.now() + Math.random(),
//           });
//         }
//       });

//       if (newSignals.length) {
//         setSignals((prev) => [...newSignals, ...prev].slice(0, 15));
//       }
//     }, 3500);

//     return () => clearInterval(interval);
//   }, [symbols, prices]);

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d] text-white">
//       <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//       <div className="mmd:ml-64 transition-[margin] duration-300">
//         <Topbar onLogout={() => {}}
//          onMenuClick={() => setSidebarOpen(prev => !prev)}
//          />

//         <main className="p-6 max-w-7xl mx-auto space-y-6">

//           {/* HEADER */}
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="text-3xl font-bold">Scanner Engine</h1>
//               <p className="text-gray-400">
//                 Real-time signal detection powered by rule-based logic
//               </p>
//             </div>

//             {/* LIVE STATUS */}
//             <div className="flex items-center gap-2 text-green-400 text-sm">
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               Live Scanning
//             </div>
//           </div>

//           {/* STATS */}
//           <div className="grid grid-cols-3 gap-4">
//             <Stat title="Watching" value={symbols.length} />
//             <Stat title="Signals" value={signals.length} />
//             <Stat title="Status" value="Active" />
//           </div>

//           {/* ADD SYMBOL */}
//           <div className="flex gap-3">
//             <input
//               value={input}
//               onChange={(e) => setInput(e.target.value)}
//               placeholder="Add Symbol (e.g. NIFTY)"
//               className="bg-[#13182A] px-4 py-2 rounded-lg w-64 border border-white/10 focus:ring-2 focus:ring-green-400"
//             />
//             <button
//               onClick={addSymbol}
//               className="bg-green-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
//             >
//               Add
//             </button>
//           </div>

//           {/* SYMBOL CHIPS */}
//           <div className="flex flex-wrap gap-2">
//             {symbols.map((s) => (
//               <div
//                 key={s}
//                 className="flex items-center gap-2 px-4 py-1 rounded-full bg-[#13182A] border border-white/10 hover:border-green-400 transition"
//               >
//                 {s}
//                 <button
//                   onClick={() => removeSymbol(s)}
//                   className="text-red-400 text-xs"
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}
//           </div>

//           {/* LIVE PRICE CARDS */}
//           <div className="grid md:grid-cols-3 gap-4">
//             {symbols.map((s) => (
//               <div
//                 key={s}
//                 className="bg-[#13182A]/70 backdrop-blur border border-white/10 p-4 rounded-xl hover:border-green-400/30 transition"
//               >
//                 <p className="text-gray-400 text-sm">{s}</p>
//                 <h2 className="text-2xl font-bold text-green-400">
//                   ₹{prices[s]?.toFixed(2) || "--"}
//                 </h2>
//               </div>
//             ))}
//           </div>

//           {/* SIGNALS */}
//           <div className="bg-[#13182A]/70 backdrop-blur border border-white/10 rounded-xl p-5">
//             <h2 className="text-lg mb-4">Detected Signals</h2>

//             <div className="space-y-3">
//               {signals.length === 0 && (
//                 <p className="text-gray-400">No signals yet...</p>
//               )}

//               {signals.map((sig, i) => (
//                 <div
//                   key={sig.id}
//                   className={`flex justify-between items-center px-4 py-3 rounded-lg transition ${
//                     i === 0
//                       ? "bg-green-500/10 border border-green-400/40 animate-pulse"
//                       : "bg-black/40"
//                   }`}
//                 >
//                   <div>
//                     <p className="font-semibold">{sig.symbol}</p>
//                     <p className="text-xs text-gray-400">{sig.time}</p>
//                   </div>

//                   <div className="text-right">
//                     <span
//                       className={`px-3 py-1 text-xs rounded-full ${
//                         sig.type === "BUY"
//                           ? "bg-green-500/20 text-green-400"
//                           : "bg-red-500/20 text-red-400"
//                       }`}
//                     >
//                       {sig.type}
//                     </span>
//                     <p className="text-xs text-gray-400">
//                       ₹{sig.price.toFixed(2)}
//                     </p>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// }

// /* SMALL COMPONENT */

// function Stat({ title, value }: any) {
//   return (
//     <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-4 text-center">
//       <p className="text-gray-400 text-sm">{title}</p>
//       <h3 className="text-xl font-bold mt-1">{value}</h3>
//     </div>
//   );
// }














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
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // ➕ Add Symbol
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

  // 💹 Price Simulation
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

  // 🚨 Signal Engine
  useEffect(() => {
    const interval = setInterval(() => {
      const newSignals: Signal[] = [];

      symbols.forEach((sym) => {
        const price = prices[sym];
        if (!price) return;

        const p = Math.random();

        if (p > 0.75) {
          newSignals.push({
            symbol: sym,
            price,
            type: "BUY",
            time: new Date().toLocaleTimeString(),
            id: Date.now() + Math.random(),
          });
        } else if (p < 0.25) {
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

      {/* Sidebar */}
      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      {/* Main */}
      <div className="md:ml-64 transition-all duration-300">
        
        <Topbar
          onLogout={() => {}}
          onMenuClick={() => setSidebarOpen((prev) => !prev)}
        />

        <main className="p-3 sm:p-4 md:p-6 max-w-7xl mx-auto space-y-6">

          {/* 🔥 HEADER */}
          <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Scanner Engine
              </h1>
              <p className="text-gray-400 text-sm sm:text-base">
                Real-time signal detection powered by rule-based logic
              </p>
            </div>

            <div className="flex items-center gap-2 text-green-400 text-sm">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live Scanning
            </div>
          </div>

          {/* 📊 STATS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
            <Stat title="Watching" value={symbols.length} />
            <Stat title="Signals" value={signals.length} />
            <Stat title="Status" value="Active" />
          </div>

          {/* ➕ ADD SYMBOL */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Add Symbol (e.g. NIFTY)"
              className="bg-[#13182A] px-4 py-2 rounded-lg w-full sm:w-64 border border-white/10 focus:ring-2 focus:ring-green-400"
            />
            <button
              onClick={addSymbol}
              className="bg-green-400 text-black px-5 py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              Add
            </button>
          </div>

          {/* 🏷 SYMBOL CHIPS */}
          <div className="flex flex-wrap gap-2">
            {symbols.map((s) => (
              <div
                key={s}
                className="flex items-center gap-2 px-3 py-1 rounded-full bg-[#13182A] border border-white/10 hover:border-green-400"
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

          {/* 💹 PRICE CARDS */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4">
            {symbols.map((s) => (
              <div
                key={s}
                className="bg-[#13182A]/70 border border-white/10 p-4 rounded-xl hover:border-green-400/30 transition"
              >
                <p className="text-gray-400 text-sm">{s}</p>
                <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-green-400">
                  ₹{prices[s]?.toFixed(2) || "--"}
                </h2>
              </div>
            ))}
          </div>

          {/* 🚨 SIGNALS */}
          <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-4 sm:p-5">
            <h2 className="text-base sm:text-lg mb-4">
              Detected Signals
            </h2>

            <div className="space-y-3 max-h-[400px] overflow-y-auto pr-1">
              {signals.length === 0 && (
                <p className="text-gray-400">No signals yet...</p>
              )}

              {signals.map((sig, i) => (
                <div
                  key={sig.id}
                  className={`flex justify-between items-center px-3 sm:px-4 py-2 sm:py-3 rounded-lg ${
                    i === 0
                      ? "bg-green-500/10 border border-green-400/40 animate-pulse"
                      : "bg-black/40"
                  }`}
                >
                  <div>
                    <p className="font-semibold text-sm sm:text-base">
                      {sig.symbol}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      {sig.time}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`px-2 sm:px-3 py-1 text-[10px] sm:text-xs rounded-full ${
                        sig.type === "BUY"
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {sig.type}
                    </span>
                    <p className="text-[10px] sm:text-xs text-gray-400">
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

/* 📦 Stat Card */

function Stat({ title, value }: any) {
  return (
    <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-3 sm:p-4 text-center">
      <p className="text-gray-400 text-xs sm:text-sm">{title}</p>
      <h3 className="text-lg sm:text-xl font-bold mt-1">{value}</h3>
    </div>
  );
}