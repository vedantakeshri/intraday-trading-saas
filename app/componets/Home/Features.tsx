// "use client";

// import {
//   Zap,
//   ShieldCheck,
//   BarChart3,
//   Clock,
//   Brain,
//   TrendingUp,
// } from "lucide-react";

// export default function Features() {
//   const features = [
//     {
//       icon: <Zap className="w-6 h-6 text-yellow-400" />,
//       title: "Real-Time Signals",
//       desc: "Get instant intraday trade signals powered by live market data and rule-based algorithms.",
//     },
//     {
//       icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
//       title: "Built-in Risk Control",
//       desc: "Every trade includes predefined stop-loss and targets to protect your capital.",
//     },
//     {
//       icon: <Brain className="w-6 h-6 text-purple-400" />,
//       title: "Rule-Based System",
//       desc: "Eliminate emotions with a structured trading strategy designed for consistency.",
//     },
//     {
//       icon: <BarChart3 className="w-6 h-6 text-blue-400" />,
//       title: "Performance Tracking",
//       desc: "Track your trades, win rate, and overall performance in a clean dashboard.",
//     },
//     {
//       icon: <Clock className="w-6 h-6 text-orange-400" />,
//       title: "Time-Saving Automation",
//       desc: "No need to analyze charts all day—focus only on high-quality opportunities.",
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6 text-green-500" />,
//       title: "Consistency Focused",
//       desc: "Designed for long-term growth, not random wins or risky trades.",
//     },
//   ];

//   return (
//     <section id="features" className="py-24 bg-[#0F1424]">
//       <div className="max-w-6xl mx-auto px-6 text-center">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Powerful Features for{" "}
//           <span className="text-green-400">Serious Traders</span>
//         </h2>

//         <p className="text-gray-400 max-w-2xl mx-auto mb-14">
//           Everything you need to trade with discipline, manage risk,
//           and achieve consistent results.
//         </p>

//         {/* Grid */}
//         <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {features.map((feature, i) => (
//             <div
//               key={i}
//               className="group bg-[#13182A] border border-white/10 rounded-2xl p-8 text-left hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300"
//             >
//               {/* Icon */}
//               <div className="mb-4">
//                 <div className="inline-flex p-3 bg-white/5 rounded-xl group-hover:scale-110 transition">
//                   {feature.icon}
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-lg font-semibold text-white">
//                 {feature.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-3 text-sm text-gray-400 leading-relaxed">
//                 {feature.desc}
//               </p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import {
  Zap,
  ShieldCheck,
  BarChart3,
  Clock,
  Brain,
  TrendingUp,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />,
      title: "Real-Time Signals",
      desc: "Get instant intraday trade signals powered by live market data and rule-based algorithms.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />,
      title: "Built-in Risk Control",
      desc: "Every trade includes predefined stop-loss and targets to protect your capital.",
    },
    {
      icon: <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-purple-400" />,
      title: "Rule-Based System",
      desc: "Eliminate emotions with a structured trading strategy designed for consistency.",
    },
    {
      icon: <BarChart3 className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: "Performance Tracking",
      desc: "Track your trades, win rate, and overall performance in a clean dashboard.",
    },
    {
      icon: <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-orange-400" />,
      title: "Time-Saving Automation",
      desc: "No need to analyze charts all day—focus only on high-quality opportunities.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-green-500" />,
      title: "Consistency Focused",
      desc: "Designed for long-term growth, not random wins or risky trades.",
    },
  ];

  return (
    <section id="features" className="py-14 sm:py-16 lg:py-24 bg-[#0F1424]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 text-center">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Powerful Features for{" "}
          <span className="text-green-400">Serious Traders</span>
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-14">
          Everything you need to trade with discipline, manage risk,
          and achieve consistent results.
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {features.map((feature, i) => (
            <div
              key={i}
              className="group bg-[#13182A] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 text-left hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300"
            >
              {/* Icon */}
              <div className="mb-3 sm:mb-4">
                <div className="inline-flex p-2 sm:p-3 bg-white/5 rounded-xl group-hover:scale-110 transition">
                  {feature.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg font-semibold text-white">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}