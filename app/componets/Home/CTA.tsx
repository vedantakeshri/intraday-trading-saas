// "use client";

// import Link from "next/link";

// export default function CTA() {
//   return (
//     <section className="py-28 bg-gradient-to-br from-[#0B0F1A] to-[#13182A] text-center relative overflow-hidden">
      
//       {/* Glow Effect */}
//       <div className="absolute inset-0 flex justify-center">
//         <div className="w-[500px] h-[500px] bg-green-400/10 blur-3xl rounded-full" />
//       </div>

//       <div className="relative max-w-3xl mx-auto px-6">
        
//         {/* Heading */}
//         <h2 className="text-4xl md:text-5xl font-bold leading-tight">
//           Stop Guessing Trades.
//           <br />
//           Start Trading with{" "}
//           <span className="text-green-400">Discipline</span>
//         </h2>

//         {/* Subtext */}
//         <p className="mt-6 text-gray-400 text-lg">
//           Join traders using a rule-based system with built-in risk management.
//           No emotions. No overtrading. Just structured execution.
//         </p>

//         {/* Trust Points */}
//         <div className="mt-6 flex flex-wrap justify-center gap-4 text-sm text-gray-400">
//           <span>✔ No Credit Card Required</span>
//           <span>✔ Cancel Anytime</span>
//           <span>✔ Instant Access</span>
//         </div>

//         {/* CTA Button */}
//         <div className="mt-10">
//           <Link
//             href="/register"
//             className="inline-block bg-green-400 text-black px-10 py-4 rounded-xl font-semibold text-lg hover:opacity-90 transition shadow-lg shadow-green-400/20"
//           >
//             Start Free Trial
//           </Link>
//         </div>

//         {/* Urgency */}
//         <p className="mt-4 text-xs text-gray-500">
//           🔥 Limited access — new users joining every day
//         </p>
//       </div>
//     </section>
//   );
// }










"use client";

import Link from "next/link";

export default function CTA() {
  return (
    <section className="py-14 sm:py-16 lg:py-28 bg-gradient-to-br from-[#0B0F1A] to-[#13182A] text-center relative overflow-hidden">

      {/* Glow Effect */}
      <div className="absolute inset-0 flex justify-center">
        <div className="w-[280px] h-[280px] sm:w-[400px] sm:h-[400px] lg:w-[500px] lg:h-[500px] bg-green-400/10 blur-3xl rounded-full" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6">

        {/* Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-tight">
          Stop Guessing Trades.
          <br />
          Start Trading with{" "}
          <span className="text-green-400">Discipline</span>
        </h2>

        {/* Subtext */}
        <p className="mt-4 sm:mt-6 text-gray-400 text-sm sm:text-base lg:text-lg">
          Join traders using a rule-based system with built-in risk management.
          No emotions. No overtrading. Just structured execution.
        </p>

        {/* Trust Points */}
        <div className="mt-5 sm:mt-6 flex flex-wrap justify-center gap-2 sm:gap-4 text-[11px] sm:text-sm text-gray-400">
          <span>✔ No Credit Card Required</span>
          <span>✔ Cancel Anytime</span>
          <span>✔ Instant Access</span>
        </div>

        {/* CTA Button */}
        <div className="mt-8 sm:mt-10">
          <Link
            href="/register"
            className="inline-block bg-green-400 text-black px-6 sm:px-8 lg:px-10 py-3 sm:py-4 rounded-xl font-semibold text-base sm:text-lg hover:opacity-90 transition shadow-lg shadow-green-400/20"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Urgency */}
        <p className="mt-3 sm:mt-4 text-[10px] sm:text-xs text-gray-500">
          🔥 Limited access — new users joining every day
        </p>
      </div>
    </section>
  );
}