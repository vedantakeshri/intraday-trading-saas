// "use client";

// import { useState } from "react";
// import Sidebar from "../componets/dashboard/Sidebar";
// import Topbar from "../componets/dashboard/Topbar";

// type Strategy = {
//   name: string;
//   desc: string;
//   winRate: string;
//   defaultRules: {
//     entry: string;
//     stopLoss: string;
//     target: string;
//     risk: string;
//   };
// };

// const strategies: Strategy[] = [
//   {
//     name: "Breakout Strategy",
//     desc: "Trade when price breaks key resistance/support levels",
//     winRate: "62%",
//     defaultRules: {
//       entry: "Break above resistance",
//       stopLoss: "1.5",
//       target: "3",
//       risk: "2",
//     },
//   },
//   {
//     name: "RSI Reversal",
//     desc: "Buy oversold, sell overbought zones",
//     winRate: "58%",
//     defaultRules: {
//       entry: "RSI < 30",
//       stopLoss: "1",
//       target: "2",
//       risk: "1.5",
//     },
//   },
//   {
//     name: "Scalping Mode",
//     desc: "Quick entries with tight SL & fast exits",
//     winRate: "54%",
//     defaultRules: {
//       entry: "EMA crossover",
//       stopLoss: "0.5",
//       target: "1",
//       risk: "1",
//     },
//   },
// ];

// export default function StrategyPage() {
//   const [active, setActive] = useState(0);
//   const [enabled, setEnabled] = useState(true);
//   const [sidebarOpen, setSidebarOpen] = useState(false);

//   // 🔥 RULE STATE (important for interview)
//   const [rules, setRules] = useState(strategies[0].defaultRules);

//   // 🔥 when strategy changes → update rules
//   const handleStrategyChange = (index: number) => {
//     setActive(index);
//     setRules(strategies[index].defaultRules);
//   };

//   // 🔥 update inputs
//   const updateRule = (field: string, value: string) => {
//     setRules((prev) => ({ ...prev, [field]: value }));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d] text-white">

//       <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

//       <div className="md:ml-64 transition-all duration-300">
        
//         <Topbar
//           onLogout={() => {}}
//           onMenuClick={() => setSidebarOpen((p) => !p)}
//         />

//         <main className="p-3 sm:p-4 md:p-6 max-w-7xl mx-auto space-y-6">

//           {/* 🔥 HEADER */}
//           <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
//             <div>
//               <h1 className="text-2xl sm:text-3xl font-bold">
//                 Strategy Engine
//               </h1>
//               <p className="text-gray-400 text-sm sm:text-base">
//                 Rule-based trading system with risk management
//               </p>
//             </div>

//             {/* Toggle */}
//             <button
//               onClick={() => setEnabled(!enabled)}
//               className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
//                 enabled
//                   ? "bg-green-400 text-black"
//                   : "bg-red-400 text-black"
//               }`}
//             >
//               {enabled ? "Strategy Enabled" : "Disabled"}
//             </button>
//           </div>

//           {/* 📊 STRATEGY CARDS */}
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
//             {strategies.map((s, i) => (
//               <div
//                 key={i}
//                 onClick={() => handleStrategyChange(i)}
//                 className={`cursor-pointer p-4 rounded-xl border transition ${
//                   active === i
//                     ? "border-green-400 bg-green-400/10"
//                     : "border-white/10 bg-[#13182A]"
//                 }`}
//               >
//                 <h3 className="font-semibold">{s.name}</h3>
//                 <p className="text-xs text-gray-400 mt-1">{s.desc}</p>

//                 <div className="mt-3 text-xs text-green-400">
//                   Win Rate: {s.winRate}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* ⚙️ RULE SETTINGS */}
//           <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-4 sm:p-5">
//             <h2 className="text-lg mb-4">Strategy Rules</h2>

//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

//               <Input
//                 label="Entry Condition"
//                 value={rules.entry}
//                 onChange={(v: string) => updateRule("entry", v)}
//               />

//               <Input
//                 label="Stop Loss (%)"
//                 value={rules.stopLoss}
//                 onChange={(v: string) => updateRule("stopLoss", v)}
//               />

//               <Input
//                 label="Target (%)"
//                 value={rules.target}
//                 onChange={(v: string) => updateRule("target", v)}
//               />

//               <Input
//                 label="Risk per Trade (%)"
//                 value={rules.risk}
//                 onChange={(v: string) => updateRule("risk", v)}
//               />

//             </div>
//           </div>

//           {/* 📈 PERFORMANCE */}
//           <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-4 sm:p-5">
//             <h2 className="text-lg mb-4">Performance Overview</h2>

//             <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
//               <Stat title="Trades" value="124" />
//               <Stat title="Win Rate" value={strategies[active].winRate} />
//               <Stat title="PnL" value="+₹24,500" green />
//               <Stat title="Drawdown" value="-₹4,200" red />
//             </div>
//           </div>

//         </main>
//       </div>
//     </div>
//   );
// }

// /* 🔹 INPUT */
// function Input({ label, value, onChange }: any) {
//   return (
//     <div>
//       <p className="text-xs text-gray-400 mb-1">{label}</p>
//       <input
//         value={value}
//         onChange={(e) => onChange(e.target.value)}
//         className="w-full bg-black/40 border border-white/10 px-3 py-2 rounded-lg text-sm focus:ring-1 focus:ring-green-400"
//       />
//     </div>
//   );
// }

// /* 🔹 STAT */
// function Stat({ title, value, green, red }: any) {
//   return (
//     <div className="bg-black/40 rounded-lg p-3">
//       <p className="text-xs text-gray-400">{title}</p>
//       <h3
//         className={`font-bold mt-1 ${
//           green ? "text-green-400" : red ? "text-red-400" : ""
//         }`}
//       >
//         {value}
//       </h3>
//     </div>
//   );
// }






"use client";

import { useState } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";

type Condition = {
  id: number;
  indicator: string;
  operator: string;
  value: string;
};

type Strategy = {
  name: string;
  conditions: Condition[];
};

export default function StrategyPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const [strategies, setStrategies] = useState<Strategy[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const [strategyName, setStrategyName] = useState("");
  const [conditions, setConditions] = useState<Condition[]>([
    { id: 1, indicator: "RSI", operator: "<", value: "30" },
  ]);

  /* 🔥 Add Condition */
  const addCondition = () => {
    setConditions([
      ...conditions,
      {
        id: Date.now(),
        indicator: "EMA",
        operator: ">",
        value: "50",
      },
    ]);
  };

  /* ❌ Remove Condition */
  const removeCondition = (id: number) => {
    setConditions(conditions.filter((c) => c.id !== id));
  };

  /* ✏️ Update Condition */
  const updateCondition = (
    id: number,
    field: keyof Condition,
    value: string
  ) => {
    setConditions((prev) =>
      prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
    );
  };

  /* 💾 Save Strategy */
  const saveStrategy = () => {
    if (!strategyName) return alert("Enter strategy name");

    const newStrategy = {
      name: strategyName,
      conditions,
    };

    setStrategies([newStrategy, ...strategies]);
    setStrategyName("");
    setConditions([{ id: 1, indicator: "RSI", operator: "<", value: "30" }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d] text-white">

      <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

      <div className="md:ml-64 transition-all duration-300">

        <Topbar
          onLogout={() => {}}
          onMenuClick={() => setSidebarOpen((p) => !p)}
        />

        <main className="p-4 sm:p-6 max-w-7xl mx-auto space-y-6">

          {/* 🔥 HEADER */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl sm:text-3xl font-bold">
                Strategy Builder
              </h1>
              <p className="text-gray-400 text-sm">
                Create & manage your own intraday strategies
              </p>
            </div>

            <button
              onClick={saveStrategy}
              className="bg-green-400 text-black px-4 py-2 rounded-lg font-semibold hover:scale-105 transition"
            >
              Save Strategy
            </button>
          </div>

          {/* 🧠 STRATEGY NAME */}
          <div>
            <input
              value={strategyName}
              onChange={(e) => setStrategyName(e.target.value)}
              placeholder="Enter strategy name..."
              className="w-full bg-[#13182A] border border-white/10 rounded-lg px-4 py-2"
            />
          </div>

          {/* ⚙️ RULE BUILDER */}
          <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-5">

            <h2 className="text-lg mb-4">Conditions</h2>

            <div className="space-y-3">
              {conditions.map((cond, index) => (
                <div
                  key={cond.id}
                  className="flex flex-wrap gap-2 items-center bg-black/30 p-3 rounded-lg"
                >
                  <span className="text-xs text-gray-400">
                    {index === 0 ? "IF" : "AND"}
                  </span>

                  {/* Indicator */}
                  <select
                    value={cond.indicator}
                    onChange={(e) =>
                      updateCondition(cond.id, "indicator", e.target.value)
                    }
                    className="bg-[#0f172a] px-2 py-1 rounded text-sm"
                  >
                    <option>RSI</option>
                    <option>EMA</option>
                    <option>MACD</option>
                    <option>VWAP</option>
                  </select>

                  {/* Operator */}
                  <select
                    value={cond.operator}
                    onChange={(e) =>
                      updateCondition(cond.id, "operator", e.target.value)
                    }
                    className="bg-[#0f172a] px-2 py-1 rounded text-sm"
                  >
                    <option>{"<"}</option>
                    <option>{">"}</option>
                    <option>{"="}</option>
                  </select>

                  {/* Value */}
                  <input
                    value={cond.value}
                    onChange={(e) =>
                      updateCondition(cond.id, "value", e.target.value)
                    }
                    className="bg-[#0f172a] px-2 py-1 rounded text-sm w-20"
                  />

                  <button
                    onClick={() => removeCondition(cond.id)}
                    className="text-red-400 text-xs ml-auto"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>

            <button
              onClick={addCondition}
              className="mt-4 text-green-400 text-sm hover:underline"
            >
              + Add Condition
            </button>
          </div>

          {/* 📊 LIVE PREVIEW (INTERVIEW GOLD 🔥) */}
          <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-5">
            <h2 className="text-lg mb-3">Strategy Logic Preview</h2>

            <p className="text-sm text-gray-300">
              {conditions.map((c, i) => (
                <span key={c.id}>
                  {i === 0 ? "IF " : " AND "}
                  {c.indicator} {c.operator} {c.value}
                </span>
              ))}
            </p>
          </div>

          {/* 📦 SAVED STRATEGIES */}
          <div className="bg-[#13182A]/70 border border-white/10 rounded-xl p-5">
            <h2 className="text-lg mb-4">Saved Strategies</h2>

            {strategies.length === 0 && (
              <p className="text-gray-400 text-sm">
                No strategies created yet
              </p>
            )}

            <div className="space-y-2">
              {strategies.map((s, i) => (
                <div
                  key={i}
                  className="p-3 bg-black/40 rounded-lg border border-white/10"
                >
                  <p className="font-semibold">{s.name}</p>
                  <p className="text-xs text-gray-400">
                    {s.conditions.length} conditions
                  </p>
                </div>
              ))}
            </div>
          </div>

        </main>
      </div>
    </div>
  );
}