import React from 'react'
import PreviewHeader from '../componets/PreviewHeader'
import SignalPanel from '../componets/SignalPanel'
import ChartCard from '../componets/ChartCard'

const page = () => {
  return (
    <>
    <div className="min-h-screen bg-[#0B0F1A] text-white">
      <PreviewHeader />

      <main className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Chart Area */}
        <div className="lg:col-span-3">
          <ChartCard />
        </div>

        {/* Signals / Metrics */}
        <div>
          <SignalPanel />
        </div>
      </main>

      {/* CTA */}
      <section className="border-t border-white/10 py-12 text-center">
        <h2 className="text-2xl font-semibold mb-4">
          Unlock Live Trading & Simulation
        </h2>
        <p className="text-gray-400 mb-6">
          Start with 50 free simulation trades. No credit card required.
        </p>

        <div className="flex justify-center gap-4">
          <button className="bg-green-400 text-black px-8 py-3 rounded-lg font-semibold">
            Start Free Simulation
          </button>
          <button className="border border-white/20 px-8 py-3 rounded-lg">
            View Pricing
          </button>
        </div>
      </section>
    </div>
    </>
  )
}

export default page