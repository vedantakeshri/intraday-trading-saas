// "use client";

// import Link from "next/link";

// export default function Hero() {
//   return (
//     <section className="relative overflow-hidden py-28 bg-gradient-to-br from-[#0B0F1A] to-[#13182A]">
      
//       {/* Glow Background */}
//       <div className="absolute inset-0 flex justify-center">
//         <div className="w-[600px] h-[600px] bg-green-400/10 blur-3xl rounded-full" />
//       </div>

//       <div className="relative max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        
//         {/* LEFT */}
//         <div>
//           {/* Headline */}
//           <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
//             Stop Guessing Trades.
//             <br />
//             Start Trading with{" "}
//             <span className="text-green-400">Discipline</span>
//           </h1>

//           {/* Subtext */}
//           <p className="mt-6 text-gray-400 text-lg max-w-xl">
//             Get real-time intraday signals with built-in stop-loss, targets,
//             and strict risk management. Designed for traders who want
//             consistency—not gambling.
//           </p>

//           {/* Trust Points */}
//           <div className="mt-6 flex flex-wrap gap-4 text-sm text-gray-400">
//             <span>✔ Rule-Based Strategy</span>
//             <span>✔ Capital Protection</span>
//             <span>✔ No Emotional Trading</span>
//           </div>

//           {/* CTA */}
//           <div className="mt-10 flex gap-4 flex-wrap">
//             <Link
//               href="/register"
//               className="bg-green-400 text-black px-8 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-green-400/20"
//             >
//               Start Free Trial
//             </Link>

//             <Link
//               href="/demo"
//               className="border border-white/20 px-8 py-4 rounded-xl hover:bg-white/5 transition text-lg"
//             >
//               View Live Demo
//             </Link>
//           </div>

//           {/* FOMO */}
//           <p className="mt-4 text-xs text-gray-500">
//             🔥 137 traders joined today
//           </p>
//         </div>

//         {/* RIGHT (Dashboard Preview) */}
//         <div className="bg-[#13182A] border border-white/10 rounded-2xl p-6 shadow-xl">
          
//           {/* Header */}
//           <div className="flex justify-between items-center mb-4">
//             <h3 className="text-sm text-gray-300 uppercase tracking-wide">
//               Live Market Signals
//             </h3>

//             <span className="flex items-center gap-2 text-xs text-green-400">
//               <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//               Live
//             </span>
//           </div>

//           {/* PnL */}
//           <div className="mb-4">
//             <p className="text-xs text-gray-400">Today’s PnL</p>
//             <h3 className="text-2xl font-bold text-green-400">
//               +₹12,450
//             </h3>
//           </div>

//           {/* Fake Chart */}
//           <div className="h-32 flex items-end gap-1 mb-4">
//             {[30, 50, 40, 60, 55, 70, 65].map((h, i) => (
//               <div
//                 key={i}
//                 className="w-2 bg-green-400/70 rounded"
//                 style={{ height: `${h}%` }}
//               />
//             ))}
//           </div>

//           {/* Signals */}
//           <div className="space-y-3">
//             {[
//               { name: "NIFTY", type: "BUY", price: "22450" },
//               { name: "BANKNIFTY", type: "SELL", price: "48230" },
//               { name: "FINNIFTY", type: "BUY", price: "21480" },
//             ].map((s, i) => {
//               const isBuy = s.type === "BUY";
//               return (
//                 <div
//                   key={i}
//                   className="flex justify-between items-center bg-black/40 px-4 py-2 rounded-lg"
//                 >
//                   <p className="text-sm">{s.name}</p>

//                   <div className="text-right">
//                     <span
//                       className={`text-xs px-2 py-1 rounded-full ${
//                         isBuy
//                           ? "bg-green-500/20 text-green-400"
//                           : "bg-red-500/20 text-red-400"
//                       }`}
//                     >
//                       {s.type}
//                     </span>
//                     <p className="text-xs text-gray-400">@ {s.price}</p>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden py-16 sm:py-20 lg:py-28 bg-gradient-to-br from-[#0B0F1A] to-[#13182A]">

      {/* Glow Background */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[300px] h-[300px] sm:w-[450px] sm:h-[450px] lg:w-[600px] lg:h-[600px] bg-green-400/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center">

        {/* LEFT */}
        <div className="text-center md:text-left">
          
          {/* Headline */}
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Stop Guessing Trades.
            <br />
            Start Trading with{" "}
            <span className="text-green-400">Discipline</span>
          </h1>

          {/* Subtext */}
          <p className="mt-4 sm:mt-6 text-gray-400 text-base sm:text-lg max-w-xl mx-auto md:mx-0">
            Get real-time intraday signals with built-in stop-loss, targets,
            and strict risk management. Designed for traders who want
            consistency—not gambling.
          </p>

          {/* Trust Points */}
          <div className="mt-5 flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4 text-xs sm:text-sm text-gray-400">
            <span>✔ Rule-Based Strategy</span>
            <span>✔ Capital Protection</span>
            <span>✔ No Emotional Trading</span>
          </div>

          {/* CTA */}
          <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start">
            <Link
              href="/register"
              className="bg-green-400 text-black px-6 sm:px-8 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition shadow-lg shadow-green-400/20 text-center"
            >
              Start Free Trial
            </Link>

            <Link
              href="/demo"
              className="border border-white/20 px-6 sm:px-8 py-3 sm:py-4 rounded-xl hover:bg-white/5 transition text-base sm:text-lg text-center"
            >
              View Live Demo
            </Link>
          </div>

          {/* FOMO */}
          <p className="mt-3 text-[11px] sm:text-xs text-gray-500">
            🔥 137 traders joined today
          </p>
        </div>

        {/* RIGHT (Dashboard Preview) */}
        <div className="bg-[#13182A] border border-white/10 rounded-2xl p-4 sm:p-6 shadow-xl w-full max-w-md mx-auto md:max-w-full">

          {/* Header */}
          <div className="flex justify-between items-center mb-3 sm:mb-4">
            <h3 className="text-xs sm:text-sm text-gray-300 uppercase tracking-wide">
              Live Market Signals
            </h3>

            <span className="flex items-center gap-2 text-[10px] sm:text-xs text-green-400">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              Live
            </span>
          </div>

          {/* PnL */}
          <div className="mb-3 sm:mb-4">
            <p className="text-[10px] sm:text-xs text-gray-400">Today’s PnL</p>
            <h3 className="text-xl sm:text-2xl font-bold text-green-400">
              +₹12,450
            </h3>
          </div>

          {/* Fake Chart */}
          <div className="h-24 sm:h-32 flex items-end gap-1 mb-3 sm:mb-4">
            {[30, 50, 40, 60, 55, 70, 65].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-green-400/70 rounded"
                style={{ height: `${h}%` }}
              />
            ))}
          </div>

          {/* Signals */}
          <div className="space-y-2 sm:space-y-3">
            {[
              { name: "NIFTY", type: "BUY", price: "22450" },
              { name: "BANKNIFTY", type: "SELL", price: "48230" },
              { name: "FINNIFTY", type: "BUY", price: "21480" },
            ].map((s, i) => {
              const isBuy = s.type === "BUY";
              return (
                <div
                  key={i}
                  className="flex justify-between items-center bg-black/40 px-3 sm:px-4 py-2 rounded-lg"
                >
                  <p className="text-xs sm:text-sm">{s.name}</p>

                  <div className="text-right">
                    <span
                      className={`text-[10px] sm:text-xs px-2 py-1 rounded-full ${
                        isBuy
                          ? "bg-green-500/20 text-green-400"
                          : "bg-red-500/20 text-red-400"
                      }`}
                    >
                      {s.type}
                    </span>
                    <p className="text-[10px] sm:text-xs text-gray-400">
                      @ {s.price}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}