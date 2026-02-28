import StatCard from "./StatCard";

/* ---------------- TYPES ---------------- */
type TimeRange = "today" | "week" | "month";

type StatType =
  | "pnl"
  | "openTrades"
  | "closedTrades"
  | "capital"
  | "margin"
  | "winrate";

/* ---------------- DATA ---------------- */
const statsData: Record<
  TimeRange,
  {
    title: string;
    value: string;
    type: StatType;
    positive?: boolean;
  }[]
> = {
  today: [
    { title: "Today's P&L", value: "+₹2,450", type: "pnl", positive: true },
    { title: "Open Trades", value: "3", type: "openTrades" },
    { title: "Closed Trades", value: "2", type: "closedTrades" },
    { title: "Capital Used", value: "₹45,000", type: "capital" },
    { title: "Available Margin", value: "₹55,000", type: "margin" },
    { title: "Win Rate", value: "60%", type: "winrate" },
  ],

  week: [
    { title: "Weekly P&L", value: "+₹8,920", type: "pnl", positive: true },
    { title: "Open Trades", value: "5", type: "openTrades" },
    { title: "Closed Trades", value: "18", type: "closedTrades" },
    { title: "Capital Used", value: "₹60,000", type: "capital" },
    { title: "Available Margin", value: "₹40,000", type: "margin" },
    { title: "Win Rate", value: "64%", type: "winrate" },
  ],

  month: [
    { title: "Monthly P&L", value: "+₹18,340", type: "pnl", positive: true },
    { title: "Open Trades", value: "2", type: "openTrades" },
    { title: "Closed Trades", value: "85", type: "closedTrades" },
    { title: "Capital Used", value: "₹75,000", type: "capital" },
    { title: "Available Margin", value: "₹25,000", type: "margin" },
    { title: "Win Rate", value: "68%", type: "winrate" },
  ],
};

/* ---------------- COMPONENT ---------------- */
export default function StatsCards({ range }: { range: TimeRange }) {
  const stats = statsData[range];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-4">
      {stats.map((stat) => (
        <StatCard
          key={stat.title}
          title={stat.title}
          value={stat.value}
          type={stat.type}
          positive={stat.positive}
        />
      ))}
    </div>
  );
}