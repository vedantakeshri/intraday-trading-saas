// import Link from "next/link";
// import React from "react";

// type SignalProps = {
//   name: string;
//   type: "BUY" | "SELL";
//   price: string;
// };

// const Hero: React.FC = () => {
//   return (
//     <section className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12">
      
//       {/* LEFT CONTENT */}
//       <div>
//         <h1 className="text-4xl md:text-5xl font-bold leading-tight">
//           Intraday Trading, Built on{" "}
//           <span className="text-green-400">Rules</span> — Not Emotions
//         </h1>

//         <p className="mt-6 text-gray-400 text-lg">
//           A risk-controlled intraday trading platform with real-time signals,
//           capital protection, and mandatory force exits.
//         </p>

//         <p className="mt-4 text-sm text-gray-500">
//           MIS Only • No F&amp;O • No Overnight • Capital Protection First
//         </p>

//         <div className="mt-8 flex gap-4 flex-wrap">
//           <Link
//             href="/register"
//             className="bg-green-400 text-black px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition"
//           >
//             Start Free Simulation
//           </Link>

//           <Link
//             href="/demo"
//             className="border border-white/20 px-6 py-3 rounded-lg hover:bg-white/5 transition"
//           >
//             View Live Demo
//           </Link>
//         </div>
//       </div>

//       {/* RIGHT MOCK DASHBOARD */}
//       <div className="bg-white/5 border border-white/10 rounded-xl p-6">
//         <h3 className="text-sm text-gray-400 mb-4">Live Signals</h3>

//         <Signal name="NIFTY" type="BUY" price="22450" />
//         <Signal name="BANKNIFTY" type="SELL" price="48230" />
//         <Signal name="FINNIFTY" type="BUY" price="21480" />
//       </div>
//     </section>
//   );
// };

// const Signal: React.FC<SignalProps> = ({ name, type, price }) => {
//   return (
//     <div className="flex justify-between items-center bg-black/30 p-3 rounded-lg mb-2">
//       <span className="font-medium">{name}</span>

//       <span
//         className={`font-semibold ${
//           type === "BUY" ? "text-green-400" : "text-red-400"
//         }`}
//       >
//         {type} @ {price}
//       </span>
//     </div>
//   );
// };

// export default Hero;





import Link from "next/link";
import React from "react";

type SignalProps = {
  name: string;
  type: "BUY" | "SELL";
  price: string;
  time: string;
};

const Hero: React.FC = () => {
  return (
    <section className="max-w-7xl mx-auto px-6 py-28 grid md:grid-cols-2 gap-16 items-center">
      
      {/* LEFT CONTENT */}
      <div>
        <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold leading-tight">
          Intraday Trading, Built on{" "}
          <span className="text-green-400">Rules</span>
          <br />
          Not Emotions
        </h1>

        <p className="mt-6 text-gray-400 text-lg max-w-xl">
          A professional intraday trading platform with real-time signals,
          strict risk controls, and mandatory force-exit protection.
        </p>

        <p className="mt-4 text-sm text-gray-500">
          MIS Only • No F&amp;O • No Overnight • Capital Protection First
        </p>

        <div className="mt-10 flex gap-4 flex-wrap">
          <Link
            href="/register"
            className="bg-green-400 text-black px-7 py-3.5 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Start Free Simulation
          </Link>

          <Link
            href="/dashboard-preview"
            className="border border-white/20 px-7 py-3.5 rounded-lg hover:bg-white/5 transition"
          >
            View Live Dashboard
          </Link>
        </div>
      </div>

      {/* RIGHT MOCK DASHBOARD */}
      <div className="relative bg-gradient-to-br from-[#13182A] to-[#0B0F1A] border border-white/10 rounded-2xl p-6">
        
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-sm text-gray-300 uppercase tracking-wide">
            Live Market Signals
          </h3>

          <span className="flex items-center gap-2 text-xs text-green-400">
            <span className="h-2 w-2 bg-green-400 rounded-full animate-pulse" />
            Live
          </span>
        </div>

        {/* Signals */}
        <div className="space-y-3">
          <Signal name="NIFTY" type="BUY" price="22450" time="5s ago" />
          <Signal name="BANKNIFTY" type="SELL" price="48230" time="12s ago" />
          <Signal name="FINNIFTY" type="BUY" price="21480" time="3s ago" />
        </div>
      </div>
    </section>
  );
};

const Signal: React.FC<SignalProps> = ({ name, type, price, time }) => {
  const isBuy = type === "BUY";

  return (
    <div className="flex items-center justify-between bg-black/40 hover:bg-black/60 transition rounded-xl px-4 py-3">
      
      {/* Left */}
      <div>
        <p className="font-semibold text-white">{name}</p>
        <p className="text-xs text-gray-400">{time}</p>
      </div>

      {/* Right */}
      <div className="text-right">
        <span
          className={`text-xs font-semibold px-2 py-1 rounded-full 
          ${isBuy ? "bg-green-500/20 text-green-400" : "bg-red-500/20 text-red-400"}`}
        >
          {type}
        </span>
        <p className="text-sm mt-1 text-gray-400">@ {price}</p>
      </div>
    </div>
  );
};

export default Hero;