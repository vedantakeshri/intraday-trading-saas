"use client";

export default function TradingHeader() {
  return (
    <div className="flex justify-between items-center bg-gray-900 border border-gray-800 rounded-xl p-3">
      <select className="bg-gray-800 px-3 py-1 rounded text-sm">
        <option value="NSE:NIFTY">NIFTY</option>
        <option value="NSE:BANKNIFTY">BANKNIFTY</option>
        <option value="NSE:FINNIFTY">FINNIFTY</option>
      </select>

      <div className="flex gap-2">
        {["1", "5", "15", "60"].map(tf => (
          <button
            key={tf}
            className="px-3 py-1 text-sm rounded bg-gray-800 hover:bg-gray-700"
          >
            {tf}m
          </button>
        ))}
      </div>
    </div>
  );
}