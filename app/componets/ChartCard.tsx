import React from 'react'
import LockedOverlay from './LockedOverlay'

const ChartCard = () => {
  return (
    <>
        <div className="relative bg-[#13182A] border border-white/10 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-4">
        <h3 className="font-semibold">NIFTY • Intraday</h3>
        <div className="flex gap-2 text-sm text-gray-400">
          <span className="px-2 py-1 bg-black/30 rounded">1m</span>
          <span className="px-2 py-1 bg-black/30 rounded">5m</span>
          <span className="px-2 py-1 bg-black/30 rounded">15m</span>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="h-[360px] rounded-xl bg-gradient-to-br from-indigo-500/20 to-cyan-500/20 flex items-center justify-center">
        <span className="text-gray-300 text-sm">
          Candlestick Chart Preview
        </span>
      </div>

      <LockedOverlay label="Live chart available after login" />
    </div>

    </>
  )
}

export default ChartCard