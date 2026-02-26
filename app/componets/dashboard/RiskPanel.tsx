export default function RiskPanel() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">Risk Control</h2>

      <p className="text-sm text-gray-400">Max Loss Allowed</p>
      <p className="text-xl font-bold text-red-400">-₹3,000</p>

      <div className="mt-4 text-sm text-gray-400">
        Trades Taken: <span className="text-white">5 / 10</span>
      </div>

      <p className="mt-3 text-xs text-yellow-400">
        ⚠ Stop trading if max loss is reached
      </p>
    </div>
  );
}