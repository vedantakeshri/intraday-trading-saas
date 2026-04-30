// "use client";

// import { AlertTriangle, Brain, TrendingDown } from "lucide-react";

// export default function Problem() {
//   const problems = [
//     {
//       icon: <Brain className="w-6 h-6 text-red-400" />,
//       title: "Emotional Trading",
//       desc: "Fear and greed drive most decisions, leading to inconsistent results and losses.",
//     },
//     {
//       icon: <AlertTriangle className="w-6 h-6 text-yellow-400" />,
//       title: "No Clear Strategy",
//       desc: "Random entries without rules or structure make trading feel like gambling.",
//     },
//     {
//       icon: <TrendingDown className="w-6 h-6 text-red-500" />,
//       title: "Poor Risk Management",
//       desc: "No stop-loss or discipline leads to heavy drawdowns and capital loss.",
//     },
//   ];

//   return (
//     <section className="py-24 bg-[#0B0F1A] text-center">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Why Most Traders{" "}
//           <span className="text-red-400">Fail Consistently</span>
//         </h2>

//         <p className="text-gray-400 max-w-2xl mx-auto mb-12">
//           It’s not the market—it’s the lack of discipline, structure,
//           and risk control that leads to losses.
//         </p>

//         {/* Problem Cards */}
//         <div className="grid md:grid-cols-3 gap-8">
//           {problems.map((item, i) => (
//             <div
//               key={i}
//               className="group bg-[#13182A] border border-white/10 rounded-2xl p-8 hover:border-red-400/40 hover:shadow-lg hover:shadow-red-400/10 transition-all duration-300"
//             >
//               {/* Icon */}
//               <div className="mb-4 flex justify-center">
//                 <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition">
//                   {item.icon}
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-white">
//                 {item.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-3 text-sm text-gray-400">
//                 {item.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Emotional Hook */}
//         <p className="mt-12 text-gray-500 text-sm">
//           Most traders don’t lose because of the market—they lose because they don’t follow a system.
//         </p>
//       </div>
//     </section>
//   );
// }






"use client";

import { AlertTriangle, Brain, TrendingDown } from "lucide-react";

export default function Problem() {
  const problems = [
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-red-400" />,
      title: "Emotional Trading",
      desc: "Fear and greed drive most decisions, leading to inconsistent results and losses.",
    },
    {
      icon: <AlertTriangle className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />,
      title: "No Clear Strategy",
      desc: "Random entries without rules or structure make trading feel like gambling.",
    },
    {
      icon: <TrendingDown className="w-5 h-5 sm:w-6 sm:h-6 text-red-500" />,
      title: "Poor Risk Management",
      desc: "No stop-loss or discipline leads to heavy drawdowns and capital loss.",
    },
  ];

  return (
    <section className="py-14 sm:py-16 lg:py-24 bg-[#0B0F1A] text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Why Most Traders{" "}
          <span className="text-red-400">Fail Consistently</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-8 sm:mb-12">
          It’s not the market—it’s the lack of discipline, structure,
          and risk control that leads to losses.
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {problems.map((item, i) => (
            <div
              key={i}
              className="group bg-[#13182A] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-red-400/40 hover:shadow-lg hover:shadow-red-400/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="p-2 sm:p-3 bg-white/5 rounded-xl group-hover:scale-110 transition">
                  {item.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                {item.title}
              </h3>

              {/* Description */}
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <p className="mt-8 sm:mt-12 text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
          Most traders don’t lose because of the market—they lose because they don’t follow a system.
        </p>
      </div>
    </section>
  );
}