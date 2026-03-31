// "use client";

// import { Bell, Search, ChevronDown } from "lucide-react";
// import { useState, useEffect } from "react";
// import MarketTicker from "../MarketTicker";

// type TopbarProps = {
//   onLogout: () => void;
// };

// export default function Topbar({ onLogout }: TopbarProps) {
//   const [open, setOpen] = useState(false);
//   const [time, setTime] = useState("");
//   const [isMarketOpen, setIsMarketOpen] = useState(false);
//   const [session, setSession] = useState("");

//   useEffect(() => {
//     const updateTime = () => {
//       const now = new Date();

//       const hours = now.getHours();
//       const minutes = now.getMinutes();
//       const seconds = now.getSeconds();
//       const day = now.getDay(); // 0 = Sunday, 6 = Saturday

//       // 🗓️ Weekend check
//       const isWeekend = day === 0 || day === 6;

//       // ⏰ NSE Timing (9:15 AM - 3:30 PM)
//       const isTimeOpen =
//         (hours > 9 || (hours === 9 && minutes >= 15)) &&
//         (hours < 15 || (hours === 15 && minutes <= 30));

//       const marketOpen = !isWeekend && isTimeOpen;

//       setIsMarketOpen(marketOpen);

//       // 🟡 Session Logic
//       let currentSession = "";

//       if (isWeekend) {
//         currentSession = "WEEKEND";
//       } else if (hours < 9 || (hours === 9 && minutes < 15)) {
//         currentSession = "PRE-MARKET";
//       } else if (isTimeOpen) {
//         currentSession = "LIVE";
//       } else {
//         currentSession = "AFTER HOURS";
//       }

//       setSession(currentSession);

//       // 🕒 Time with seconds
//       setTime(
//         now.toLocaleTimeString("en-IN", {
//           hour: "2-digit",
//           minute: "2-digit",
//           second: "2-digit",
//         })
//       );
//     };

//     updateTime();
//     const interval = setInterval(updateTime, 1000);

//     return () => clearInterval(interval);
//   }, []);

//   return (
//     <header className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-[#0b0f1a]/80 backdrop-blur-xl sticky top-0 z-50">
      
//       {/* 🔥 Left */}
//       <div className="flex items-center gap-6">
//         <h1 className="text-xl font-bold tracking-wide">
//           <span className="text-white">Intraday</span>{" "}
//           <span className="text-green-400">SaaS</span>
//         </h1>

//         {/* 🔥 Market Info */}
//         <div className="hidden md:flex items-center gap-4 text-xs">
          
//           {/* Market Status */}
//           <span
//             className={`flex items-center gap-1 font-semibold ${
//               isMarketOpen ? "text-green-400" : "text-red-400"
//             }`}
//           >
//             <span
//               className={`w-2 h-2 rounded-full ${
//                 isMarketOpen ? "bg-green-400 animate-pulse" : "bg-red-400"
//               }`}
//             ></span>
//             {session}
//           </span>

//           {/* Time */}
//           <span className="text-gray-400">{time}</span>

//           {/* Live Market Data */}
//           <MarketTicker />
//         </div>
//       </div>

//       {/* 🔥 Right */}
//       <div className="flex items-center gap-4">
        
//         {/* 🔍 Search */}
//         <div className="relative">
//           <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />
//           <input
//             placeholder="Search stocks..."
//             className="pl-8 pr-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:bg-white/10 transition"
//           />
//         </div>

//         {/* 🔔 Notification */}
//         <div className="relative cursor-pointer group">
//           <Bell className="text-gray-400 group-hover:text-white transition" />
//           <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-1 rounded-full">
//             3
//           </span>
//         </div>

//         {/* 👤 User Dropdown */}
//         <div className="relative">
//           <div
//             onClick={() => setOpen(!open)}
//             className="flex items-center gap-2 cursor-pointer bg-white/5 px-2 py-1 rounded-lg hover:bg-white/10 transition"
//           >
//             <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
//               U
//             </div>
//             <ChevronDown size={14} className="text-gray-400" />
//           </div>

//           {open && (
//             <div className="absolute right-0 mt-2 w-40 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg p-2 space-y-1">
//               <button className="w-full text-left px-2 py-1 text-sm hover:bg-white/10 rounded">
//                 Profile
//               </button>
//               <button className="w-full text-left px-2 py-1 text-sm hover:bg-white/10 rounded">
//                 Settings
//               </button>
//               <button
//                 onClick={onLogout}
//                 className="w-full text-left px-2 py-1 text-sm text-red-400 hover:bg-white/10 rounded"
//               >
//                 Logout
//               </button>
//             </div>
//           )}
//         </div>
//       </div>
//     </header>
//   );
// }








"use client";

import { Bell, Search, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";
import MarketTicker from "../MarketTicker";

type TopbarProps = {
  onLogout: () => void;
};

// 🔥 Stock Data
const STOCKS = [
  { symbol: "RELIANCE", name: "Reliance Industries" },
  { symbol: "TCS", name: "Tata Consultancy Services" },
  { symbol: "INFY", name: "Infosys Ltd" },
  { symbol: "HDFCBANK", name: "HDFC Bank" },
  { symbol: "ICICIBANK", name: "ICICI Bank" },
  { symbol: "SBIN", name: "State Bank of India" },
  { symbol: "LT", name: "Larsen & Toubro" },
  { symbol: "ITC", name: "ITC Limited" },
  { symbol: "WIPRO", name: "Wipro Ltd" },
  { symbol: "AXISBANK", name: "Axis Bank" },
];

export default function Topbar({ onLogout }: TopbarProps) {
  const [open, setOpen] = useState(false);
  const [time, setTime] = useState("");
  const [isMarketOpen, setIsMarketOpen] = useState(false);
  const [session, setSession] = useState("");

  // 🔍 Search states
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<typeof STOCKS>([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);

  // 🕒 Time + Market Logic
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();

      const hours = now.getHours();
      const minutes = now.getMinutes();
      const day = now.getDay();

      const isWeekend = day === 0 || day === 6;

      const isTimeOpen =
        (hours > 9 || (hours === 9 && minutes >= 15)) &&
        (hours < 15 || (hours === 15 && minutes <= 30));

      const marketOpen = !isWeekend && isTimeOpen;
      setIsMarketOpen(marketOpen);

      let currentSession = "";
      if (isWeekend) currentSession = "WEEKEND";
      else if (hours < 9 || (hours === 9 && minutes < 15))
        currentSession = "PRE-MARKET";
      else if (isTimeOpen) currentSession = "LIVE";
      else currentSession = "AFTER HOURS";

      setSession(currentSession);

      setTime(
        now.toLocaleTimeString("en-IN", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
        })
      );
    };

    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval);
  }, []);

  // 🔍 Search filter
  useEffect(() => {
    if (!query) {
      setResults([]);
      return;
    }

    const timeout = setTimeout(() => {
      const filtered = STOCKS.filter(
        (stock) =>
          stock.symbol.toLowerCase().includes(query.toLowerCase()) ||
          stock.name.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setActiveIndex(-1);
    }, 200);

    return () => clearTimeout(timeout);
  }, [query]);

  // ⌨️ Keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "ArrowDown") {
      setActiveIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      setActiveIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && activeIndex >= 0) {
      handleSelect(results[activeIndex]);
    }
  };

  // 🎯 Select stock
  const handleSelect = (stock: { symbol: string; name: string }) => {
    setQuery(stock.symbol);
    setShowDropdown(false);
    console.log("Selected:", stock);
  };

  // ❌ Click outside close
  useEffect(() => {
    const handleClickOutside = () => setShowDropdown(false);
    document.addEventListener("click", handleClickOutside);

    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  return (
    <header className="flex items-center justify-between px-6 py-3 border-b border-white/10 bg-[#0b0f1a]/80 backdrop-blur-xl sticky top-0 z-50">
      
      {/* LEFT */}
      <div className="flex items-center gap-6">
        <h1 className="text-xl font-bold tracking-wide">
          <span className="text-white">Intraday</span>{" "}
          <span className="text-green-400">SaaS</span>
        </h1>

        <div className="hidden md:flex items-center gap-4 text-xs">
          <span
            className={`flex items-center gap-1 font-semibold ${
              isMarketOpen ? "text-green-400" : "text-red-400"
            }`}
          >
            <span
              className={`w-2 h-2 rounded-full ${
                isMarketOpen ? "bg-green-400 animate-pulse" : "bg-red-400"
              }`}
            ></span>
            {session}
          </span>

          <span className="text-gray-400">{time}</span>

          <MarketTicker />
        </div>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-4">
        
        {/* 🔍 PRO SEARCH */}
        <div
          className="relative w-60"
          onClick={(e) => e.stopPropagation()}
        >
          <Search size={16} className="absolute left-3 top-2.5 text-gray-400" />

          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setShowDropdown(true);
            }}
            onFocus={() => setShowDropdown(true)}
            onKeyDown={handleKeyDown}
            placeholder="Search stocks..."
            className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-white/5 border border-white/10 text-sm focus:outline-none focus:ring-1 focus:ring-green-500 focus:bg-white/10 transition"
          />

          {/* 🔥 DROPDOWN */}
          {showDropdown && (
            <div className="absolute top-10 w-full bg-[#0f172a] border border-white/10 rounded-xl shadow-xl z-50 max-h-60 overflow-y-auto">
              
              {results.length > 0 ? (
                results.map((stock, index) => (
                  <div
                    key={stock.symbol}
                    onClick={() => handleSelect(stock)}
                    className={`px-3 py-2 cursor-pointer flex flex-col ${
                      index === activeIndex
                        ? "bg-white/10"
                        : "hover:bg-white/10"
                    }`}
                  >
                    <span className="text-sm font-medium text-white">
                      {stock.symbol}
                    </span>
                    <span className="text-xs text-gray-400">
                      {stock.name}
                    </span>
                  </div>
                ))
              ) : (
                <div className="px-3 py-2 text-sm text-gray-400">
                  No results found
                </div>
              )}
            </div>
          )}
        </div>

        {/* 🔔 Notification */}
        <div className="relative cursor-pointer group">
          <Bell className="text-gray-400 group-hover:text-white transition" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-[10px] px-1 rounded-full">
            3
          </span>
        </div>

        {/* 👤 User */}
        <div className="relative">
          <div
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 cursor-pointer bg-white/5 px-2 py-1 rounded-lg hover:bg-white/10 transition"
          >
            <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center text-sm">
              U
            </div>
            <ChevronDown size={14} className="text-gray-400" />
          </div>

          {open && (
            <div className="absolute right-0 mt-2 w-40 bg-[#0f172a] border border-white/10 rounded-lg shadow-lg p-2 space-y-1">
              <button className="w-full text-left px-2 py-1 text-sm hover:bg-white/10 rounded">
                Profile
              </button>
              <button className="w-full text-left px-2 py-1 text-sm hover:bg-white/10 rounded">
                Settings
              </button>
              <button
                onClick={onLogout}
                className="w-full text-left px-2 py-1 text-sm text-red-400 hover:bg-white/10 rounded"
              >
                Logout
              </button>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}