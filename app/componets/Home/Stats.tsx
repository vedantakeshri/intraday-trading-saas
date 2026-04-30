



// "use client";

// import { TrendingUp, Users, ShieldCheck } from "lucide-react";
// import { useEffect, useState } from "react";

// export default function Stats() {
//   const [counts, setCounts] = useState([0, 0, 0]);

//   const target = [92, 5000, 10000000]; // 1Cr = 10,000,000

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCounts((prev) =>
//         prev.map((val, i) => {
//           const increment = target[i] / 50;
//           if (val < target[i]) {
//             return Math.min(val + increment, target[i]);
//           }
//           return val;
//         })
//       );
//     }, 30);

//     return () => clearInterval(interval);
//   }, []);

//   const stats = [
//     {
//       icon: <TrendingUp className="w-6 h-6 text-green-400" />,
//       value: `${Math.floor(counts[0])}%`,
//       label: "Strategy Accuracy",
//       desc: "Backtested rule-based system",
//     },
//     {
//       icon: <Users className="w-6 h-6 text-blue-400" />,
//       value: `${Math.floor(counts[1] / 1000)}K+`,
//       label: "Active Traders",
//       desc: "Growing disciplined community",
//     },
//     {
//       icon: <ShieldCheck className="w-6 h-6 text-purple-400" />,
//       value: `₹${Math.floor(counts[2] / 10000000)}Cr+`,
//       label: "Profit Generated",
//       desc: "System-driven performance",
//     },
//   ];

//   return (
//     <section className="py-24 bg-gradient-to-b from-[#0F1424] to-[#0B0F1A] border-y border-white/10">
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Trusted by Traders Who Value{" "}
//           <span className="text-green-400">Discipline</span>
//         </h2>

//         <p className="text-gray-400 mb-12 max-w-2xl mx-auto">
//           Built for consistency, risk control, and structured execution—
//           not emotional trading.
//         </p>

//         {/* Live Indicator */}
//         <div className="flex justify-center items-center gap-2 text-xs text-green-400 mb-10">
//           <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
//           Live Performance Metrics
//         </div>

//         {/* Stats */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {stats.map((item, i) => (
//             <div
//               key={i}
//               className="group relative bg-[#13182A] border border-white/10 rounded-2xl p-8 hover:border-green-400/40 hover:shadow-xl hover:shadow-green-400/10 transition-all duration-300 overflow-hidden"
//             >
//               {/* Glow */}
//               <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
//                 <div className="absolute w-40 h-40 bg-green-400/10 blur-2xl rounded-full -top-10 -left-10" />
//               </div>

//               {/* Icon */}
//               <div className="mb-4 flex justify-center relative z-10">
//                 <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition">
//                   {item.icon}
//                 </div>
//               </div>

//               {/* Value */}
//               <h3 className="text-4xl font-bold text-white relative z-10">
//                 {item.value}
//               </h3>

//               {/* Label */}
//               <p className="mt-2 text-lg text-gray-300 relative z-10">
//                 {item.label}
//               </p>

//               {/* Description */}
//               <p className="mt-2 text-sm text-gray-500 relative z-10">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }







"use client";

import { TrendingUp, Users, ShieldCheck } from "lucide-react";
import { useEffect, useState } from "react";

export default function Stats() {
  const [counts, setCounts] = useState<number[]>([0, 0, 0]);

  const target: number[] = [92, 5000, 10000000];

  useEffect(() => {
    const interval = setInterval(() => {
      setCounts((prev) =>
        prev.map((val, i) => {
          const increment = target[i] / 50;
          if (val < target[i]) {
            return Math.min(val + increment, target[i]);
          }
          return val;
        })
      );
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />,
      value: `${Math.floor(counts[0])}%`,
      label: "Strategy Accuracy",
      desc: "Backtested rule-based system",
    },
    {
      icon: <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      value: `${Math.floor(counts[1] / 1000)}K+`,
      label: "Active Traders",
      desc: "Growing disciplined community",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
      value: `₹${Math.floor(counts[2] / 10000000)}Cr+`,
      label: "Profit Generated",
      desc: "System-driven performance",
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-gradient-to-b from-[#0F1424] to-[#0B0F1A] border-y border-white/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Trusted by Traders Who Value{" "}
          <span className="text-green-400">Discipline</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-12 max-w-2xl mx-auto">
          Built for consistency, risk control, and structured execution—
          not emotional trading.
        </p>

        {/* Live Indicator */}
        <div className="flex justify-center items-center gap-2 text-[11px] sm:text-xs text-green-400 mb-8 sm:mb-10">
          <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          Live Performance Metrics
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {stats.map((item, i) => (
            <div
              key={i}
              className="group relative bg-[#13182A] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-green-400/40 hover:shadow-xl hover:shadow-green-400/10 transition-all duration-300 overflow-hidden"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition">
                <div className="absolute w-28 h-28 sm:w-40 sm:h-40 bg-green-400/10 blur-2xl rounded-full -top-10 -left-10" />
              </div>

              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex justify-center relative z-10">
                <div className="p-2 sm:p-3 bg-white/5 rounded-xl group-hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>

              {/* Value */}
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white relative z-10">
                {item.value}
              </h3>

              {/* Label */}
              <p className="mt-1 sm:mt-2 text-sm sm:text-lg text-gray-300 relative z-10">
                {item.label}
              </p>

              {/* Description */}
              <p className="mt-1 sm:mt-2 text-xs sm:text-sm text-gray-500 relative z-10">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}