// "use client";

// import { Zap, ShieldCheck, TrendingUp } from "lucide-react";

// export default function HowItWorks() {
//   const steps = [
//     {
//       icon: <Zap className="w-6 h-6 text-yellow-400" />,
//       title: "Get Real-Time Signals",
//       desc: "Receive high-probability intraday signals based on rule-based strategies and live market data.",
//     },
//     {
//       icon: <ShieldCheck className="w-6 h-6 text-green-400" />,
//       title: "Follow SL & Target",
//       desc: "Every trade comes with predefined stop-loss and targets to eliminate emotional decisions.",
//     },
//     {
//       icon: <TrendingUp className="w-6 h-6 text-blue-400" />,
//       title: "Exit with Discipline",
//       desc: "Automatic or guided exits ensure you protect capital and lock in profits consistently.",
//     },
//   ];

//   return (
//     <section id="how" className="py-24 bg-[#0F1424] text-center">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           How It Works
//         </h2>

//         <p className="text-gray-400 max-w-2xl mx-auto mb-14">
//           A simple, disciplined process designed to remove emotions and
//           improve trading consistency.
//         </p>

//         {/* Steps */}
//         <div className="grid md:grid-cols-3 gap-8 relative">
//           {steps.map((step, i) => (
//             <div
//               key={i}
//               className="relative group bg-[#13182A] border border-white/10 rounded-2xl p-8 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300"
//             >
//               {/* Step Number */}
//               <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-xs bg-green-400 text-black px-3 py-1 rounded-full font-semibold">
//                 Step {i + 1}
//               </div>

//               {/* Icon */}
//               <div className="mb-4 flex justify-center">
//                 <div className="p-3 bg-white/5 rounded-xl group-hover:scale-110 transition">
//                   {step.icon}
//                 </div>
//               </div>

//               {/* Title */}
//               <h3 className="text-xl font-semibold text-white">
//                 {step.title}
//               </h3>

//               {/* Description */}
//               <p className="mt-3 text-sm text-gray-400">
//                 {step.desc}
//               </p>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Line */}
//         <p className="mt-14 text-sm text-gray-500">
//           No guesswork. No emotions. Just a structured trading system.
//         </p>
//       </div>
//     </section>
//   );
// }












"use client";

import { Zap, ShieldCheck, TrendingUp } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Zap className="w-5 h-5 sm:w-6 sm:h-6 text-yellow-400" />,
      title: "Get Real-Time Signals",
      desc: "Receive high-probability intraday signals based on rule-based strategies and live market data.",
    },
    {
      icon: <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6 text-green-400" />,
      title: "Follow SL & Target",
      desc: "Every trade comes with predefined stop-loss and targets to eliminate emotional decisions.",
    },
    {
      icon: <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400" />,
      title: "Exit with Discipline",
      desc: "Automatic or guided exits ensure you protect capital and lock in profits consistently.",
    },
  ];

  return (
    <section id="how" className="py-14 sm:py-16 lg:py-24 bg-[#0F1424] text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          How It Works
        </h2>

        <p className="text-gray-400 text-sm sm:text-base max-w-2xl mx-auto mb-10 sm:mb-14">
          A simple, disciplined process designed to remove emotions and
          improve trading consistency.
        </p>

        {/* Steps */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 relative">
          {steps.map((step, i) => (
            <div
              key={i}
              className="relative group bg-[#13182A] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300"
            >
              {/* Step Number */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] sm:text-xs bg-green-400 text-black px-2 sm:px-3 py-1 rounded-full font-semibold">
                Step {i + 1}
              </div>

              {/* Icon */}
              <div className="mb-3 sm:mb-4 flex justify-center">
                <div className="p-2 sm:p-3 bg-white/5 rounded-xl group-hover:scale-110 transition">
                  {step.icon}
                </div>
              </div>

              {/* Title */}
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold text-white">
                {step.title}
              </h3>

              {/* Description */}
              <p className="mt-2 sm:mt-3 text-xs sm:text-sm text-gray-400 leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Bottom Line */}
        <p className="mt-10 sm:mt-14 text-xs sm:text-sm text-gray-500 max-w-xl mx-auto">
          No guesswork. No emotions. Just a structured trading system.
        </p>
      </div>
    </section>
  );
}