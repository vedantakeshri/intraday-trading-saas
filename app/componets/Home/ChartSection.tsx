// "use client";

// import { TrendingUp, TrendingDown } from "lucide-react";

// export default function ChartSection() {
//   const signals = [
//     {
//       name: "NIFTY",
//       type: "BUY",
//       price: "22450",
//       change: "+0.85%",
//     },
//     {
//       name: "BANKNIFTY",
//       type: "SELL",
//       price: "48230",
//       change: "-0.42%",
//     },
//     {
//       name: "FINNIFTY",
//       type: "BUY",
//       price: "21480",
//       change: "+0.65%",
//     },
//   ];

//   return (
//     <section className="py-24 bg-[#0B0F1A] text-center">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Live Market Preview
//         </h2>

//         <p className="text-gray-400 mb-12">
//           Real-time signals and market movement—no guesswork.
//         </p>

//         {/* Dashboard Container */}
//         <div className="bg-[#13182A] border border-white/10 rounded-2xl p-6 shadow-xl">
          
//           {/* Top Bar */}
//           <div className="flex justify-between items-center mb-6">
//             <h3 className="text-sm text-gray-300 uppercase tracking-wide">
//               Market Dashboard
//             </h3>

//             <span className="flex items-center gap-2 text-xs text-green-400">
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               Live
//             </span>
//           </div>

//           {/* PnL */}
//           <div className="text-left mb-6">
//             <p className="text-xs text-gray-400">Today’s PnL</p>
//             <h3 className="text-2xl font-bold text-green-400">
//               +₹12,450
//             </h3>
//           </div>

//           {/* Fake Chart */}
//           <div className="h-40 bg-gradient-to-r from-green-500/10 to-transparent rounded-lg flex items-end justify-between px-2 mb-6">
//             {[20, 40, 30, 60, 50, 70, 65, 80].map((h, i) => (
//               <div
//                 key={i}
//                 className="w-2 bg-green-400/60 rounded"
//                 style={{ height: `${h}%` }}
//               />
//             ))}
//           </div>

//           {/* Signals */}
//           <div className="space-y-3">
//             {signals.map((s, i) => {
//               const isBuy = s.type === "BUY";
//               return (
//                 <div
//                   key={i}
//                   className="flex justify-between items-center bg-black/40 rounded-xl px-4 py-3 hover:bg-black/60 transition"
//                 >
//                   <div className="text-left">
//                     <p className="font-semibold">{s.name}</p>
//                     <p className="text-xs text-gray-400">
//                       {s.change}
//                     </p>
//                   </div>

//                   <div className="text-right">
//                     <span
//                       className={`text-xs px-2 py-1 rounded-full font-semibold ${
//                         isBuy
//                           ? "bg-green-500/20 text-green-400"
//                           : "bg-red-500/20 text-red-400"
//                       }`}
//                     >
//                       {s.type}
//                     </span>

//                     <p className="text-sm text-gray-400 mt-1">
//                       @ {s.price}
//                     </p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>

//         {/* Bottom Note */}
//         <p className="text-xs text-gray-500 mt-6">
//           Data simulated for preview purposes. Real-time system in dashboard.
//         </p>
//       </div>
//     </section>
//   );
// }











"use client";

import { TrendingUp, TrendingDown } from "lucide-react";

type Signal = {
  name: string;
  type: "BUY" | "SELL";
  price: string;
  change: string;
};

export default function ChartSection() {
  const signals: Signal[] = [
    {
      name: "NIFTY",
      type: "BUY",
      price: "22450",
      change: "+0.85%",
    },
    {
      name: "BANKNIFTY",
      type: "SELL",
      price: "48230",
      change: "-0.42%",
    },
    {
      name: "FINNIFTY",
      type: "BUY",
      price: "21480",
      change: "+0.65%",
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-[#0B0F1A] text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Live Market Preview
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-12">
          Real-time signals and market movement—no guesswork.
        </p>

        {/* Dashboard */}
        <div className="bg-[#13182A] border border-white/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-xl">

          {/* Top Bar */}
          <div className="flex justify-between items-center mb-4 sm:mb-6">
            <h3 className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Market Dashboard
            </h3>

            <span className="flex items-center gap-2 text-[10px] sm:text-xs text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live
            </span>
          </div>

          {/* PnL */}
          <div className="text-left mb-4 sm:mb-6">
            <p className="text-[10px] sm:text-xs text-gray-400">Today’s PnL</p>
            <h3 className="text-xl sm:text-2xl font-bold text-green-400">
              +₹12,450
            </h3>
          </div>

          {/* Chart */}
          <div className="h-28 sm:h-36 lg:h-40 bg-gradient-to-r from-green-500/10 to-transparent rounded-lg flex items-end gap-1 px-1 sm:px-2 mb-4 sm:mb-6">
            {[20, 40, 30, 60, 50, 70, 65, 80].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-green-400/60 rounded"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          {/* Signals */}
          <div className="space-y-2 sm:space-y-3">
            {signals.map((s, i) => {
              const isBuy = s.type === "BUY";

              return (
                <div
                  key={i}
                  className="flex justify-between items-center bg-black/40 rounded-lg sm:rounded-xl px-3 sm:px-4 py-2 sm:py-3 hover:bg-black/60 transition"
                >
                  <div className="text-left">
                    <p className="text-sm sm:text-base font-semibold">
                      {s.name}
                    </p>
                    <p className="text-[10px] sm:text-xs text-gray-400 flex items-center gap-1">
                      {s.change}
                      {s.change.startsWith("+") ? (
                        <TrendingUp className="w-3 h-3 text-green-400" />
                      ) : (
                        <TrendingDown className="w-3 h-3 text-red-400" />
                      )}
                    </p>
                  </div>

                  <div className="text-right">
                    <span
                      className={`text-[10px] sm:text-xs px-2 py-1 rounded-full font-semibold ${
                        isBuy
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {s.type}
                    </span>

                    <p className="text-xs sm:text-sm text-gray-400 mt-1">
                      @ {s.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Note */}
        <p className="text-[10px] sm:text-xs text-gray-500 mt-4 sm:mt-6">
          Data simulated for preview purposes. Real-time system in dashboard.
        </p>
      </div>
    </section>
  );
}