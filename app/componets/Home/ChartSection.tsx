"use client";

import React from "react";
import { useRouter } from "next/navigation";

const charts = [
  {
    title: "Intraday Price Movement",
    desc: "Track real-time price movement with clear trend visualization.",
  },
  {
    title: "Buy / Sell Signals",
    desc: "AI-based signals to help traders take faster decisions.",
  },
  {
    title: "Profit & Loss Overview",
    desc: "Instant visibility of gains and losses for every trade.",
  },
];

const ChartsSection = () => {
    const router = useRouter();
  return (
    <section className="bg-[#0B0F1A] py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Visual Trading Insights That Drive Decisions
          </h2>
          <p className="text-gray-400 text-lg">
            Understand the market instantly with powerful charts and real-time analytics built for intraday traders.
          </p>
        </div>

        {/* Charts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {charts.map((item, index) => (
            <div
              key={index}
              className="bg-[#13182A] rounded-2xl p-6 border border-white/10 hover:border-indigo-500 transition"
            >
              {/* Chart Placeholder */}
              <div className="h-40 rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center mb-6">
                <span className="text-gray-300 text-sm">
                  Chart Preview
                </span>
              </div>

              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <button
  onClick={() => router.push("/dashboard-preview")}
  className="bg-indigo-600 hover:bg-indigo-700 transition px-8 py-4 rounded-xl font-semibold"
>
  View Live Dashboard
</button>
        </div>
      </div>
    </section>
  );
};

export default ChartsSection;