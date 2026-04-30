// "use client";

// import { Check } from "lucide-react";

// export default function Pricing() {
//   const features = [
//     "Real-time intraday signals",
//     "Stop-loss & target included",
//     "Rule-based trading system",
//     "Live dashboard access",
//     "Risk management alerts", 
//   ];

//   return (
//     <section id="pricing" className="py-24 bg-[#0F1424] text-center">
//       <div className="max-w-6xl mx-auto px-6">
        
//         {/* Heading */}
//         <h2 className="text-3xl md:text-4xl font-bold mb-4">
//           Simple, Transparent Pricing
//         </h2>

//         <p className="text-gray-400 mb-12">
//           One plan. Everything included. No hidden charges.
//         </p>

//         {/* Pricing Card */}
//         <div className="relative max-w-md mx-auto">
          
//           {/* Badge */}
//           <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-green-400 text-black text-xs px-3 py-1 rounded-full font-semibold">
//             Most Popular
//           </div>

//           <div className="bg-[#13182A] border border-white/10 rounded-2xl p-8 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300">
            
//             {/* Price */}
//             <h3 className="text-4xl font-bold">
//               ₹999<span className="text-lg text-gray-400">/month</span>
//             </h3>

//             <p className="text-gray-400 mt-2">
//               Full access to all features
//             </p>

//             {/* Features */}
//             <ul className="mt-6 space-y-3 text-left">
//               {features.map((f, i) => (
//                 <li key={i} className="flex items-center gap-2 text-gray-300">
//                   <Check className="w-4 h-4 text-green-400" />
//                   {f}
//                 </li>
//               ))}
//             </ul>

//             {/* CTA */}
//             <button className="mt-8 w-full bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition">
//               Start Free Trial
//             </button>

//             {/* Trust Line */}
//             <p className="text-xs text-gray-500 mt-3">
//               No credit card required • Cancel anytime
//             </p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }









"use client";

import { Check } from "lucide-react";

export default function Pricing() {
  const features = [
    "Real-time intraday signals",
    "Stop-loss & target included",
    "Rule-based trading system",
    "Live dashboard access",
    "Risk management alerts",
  ];

  return (
    <section id="pricing" className="py-14 sm:py-16 lg:py-24 bg-[#0F1424] text-center">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
          Simple, Transparent Pricing
        </h2>

        <p className="text-gray-400 text-sm sm:text-base mb-8 sm:mb-12">
          One plan. Everything included. No hidden charges.
        </p>

        {/* Pricing Card */}
        <div className="relative max-w-sm sm:max-w-md mx-auto">

          {/* Badge */}
          <div className="absolute -top-3 sm:-top-4 left-1/2 -translate-x-1/2 bg-green-400 text-black text-[10px] sm:text-xs px-2 sm:px-3 py-1 rounded-full font-semibold">
            Most Popular
          </div>

          <div className="bg-[#13182A] border border-white/10 rounded-xl sm:rounded-2xl p-5 sm:p-6 lg:p-8 hover:border-green-400/40 hover:shadow-lg hover:shadow-green-400/10 transition-all duration-300">

            {/* Price */}
            <h3 className="text-3xl sm:text-4xl font-bold">
              ₹999<span className="text-base sm:text-lg text-gray-400">/month</span>
            </h3>

            <p className="text-gray-400 mt-2 text-xs sm:text-sm">
              Full access to all features
            </p>

            {/* Features */}
            <ul className="mt-5 sm:mt-6 space-y-2 sm:space-y-3 text-left">
              {features.map((f, i) => (
                <li
                  key={i}
                  className="flex items-start sm:items-center gap-2 text-sm sm:text-base text-gray-300"
                >
                  <Check className="w-4 h-4 text-green-400 mt-0.5 sm:mt-0 flex-shrink-0" />
                  <span>{f}</span>
                </li>
              ))}
            </ul>

            {/* CTA */}
            <button className="mt-6 sm:mt-8 w-full bg-green-400 text-black px-5 sm:px-6 py-2.5 sm:py-3 rounded-lg font-semibold text-sm sm:text-base hover:opacity-90 transition">
              Start Free Trial
            </button>

            {/* Trust Line */}
            <p className="text-[10px] sm:text-xs text-gray-500 mt-3">
              No credit card required • Cancel anytime
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}