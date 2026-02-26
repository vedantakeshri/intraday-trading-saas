import React from 'react'

const Stats = () => {
  return (
    <>
      <section className="border-y border-white/10 bg-[#0E1424]">
    <div className="max-w-7xl mx-auto px-6 py-16 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
      {[
        ["50+", "Free Simulation Trades"],
        ["0%", "Overnight Exposure"],
        ["100%", "Risk-Controlled Orders"],
        ["24/7", "Audit Logging"],
      ].map(([value, label]) => (
        <div key={label}>
          <p className="text-3xl font-bold text-emerald-400">{value}</p>
          <p className="text-sm text-gray-400 mt-2">{label}</p>
        </div>
      ))}
    </div>
  </section>
    </>
  )
}

export default Stats