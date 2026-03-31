export default function StatsCards() {
  const card =
    "bg-[#0f172a]/60 border border-white/10 rounded-xl p-5";

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
      
      <div className={card}>
        <p className="text-gray-400 text-sm">Today's P&L</p>
        <h2 className="text-2xl font-bold text-green-400">+₹13,753</h2>
        <p className="text-xs text-gray-500">+2.41% on capital</p>
      </div>

      <div className={card}>
        <p className="text-gray-400 text-sm">Open Positions</p>
        <h2 className="text-2xl font-bold">2</h2>
      </div>

      <div className={card}>
        <p className="text-gray-400 text-sm">Trades Today</p>
        <h2 className="text-2xl font-bold text-yellow-400">7</h2>
      </div>

      <div className={card}>
        <p className="text-gray-400 text-sm">Available Margin</p>
        <h2 className="text-2xl font-bold text-blue-400">₹1,94,520</h2>
      </div>

    </div>
  );
}