import LockedOverlay from "./LockedOverlay";


export default function SignalsPanel() {
  return (
    <div className="relative bg-[#13182A] border border-white/10 rounded-2xl p-6 h-full">
      <h3 className="font-semibold mb-4">Signals & Metrics</h3>

      <div className="space-y-4 text-sm">
        <Metric label="Available Capital" value="₹1,00,000" />
        <Metric label="Risk per Trade" value="1%" />
        <Metric label="Open Trades" value="2 / 5" />

        <div className="pt-4 border-t border-white/10">
          <p className="text-gray-400 mb-2">Live Signal</p>
          <div className="bg-black/30 p-3 rounded-lg flex justify-between">
            <span>BANKNIFTY</span>
            <span className="text-green-400">BUY</span>
          </div>
        </div>
      </div>

      <LockedOverlay label="Execution locked in preview mode" />
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex justify-between text-gray-300">
      <span>{label}</span>
      <span className="font-medium">{value}</span>
    </div>
  );
}