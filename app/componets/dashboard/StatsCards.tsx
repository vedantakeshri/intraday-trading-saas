import StatCard from "./StatCard";

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
      <StatCard title="Today's P&L" value="+₹2,450" positive />
      <StatCard title="Open Positions" value="3" />
      <StatCard title="Capital Used" value="₹45,000" />
      <StatCard title="Available Margin" value="₹55,000" />
      <StatCard title="Trades Today" value="5" />
    </div>
  );
}