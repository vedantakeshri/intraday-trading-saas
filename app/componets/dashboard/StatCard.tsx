// export default function StatCard({
//   title,
//   value,
//   positive,
// }: {
//   title: string;
//   value: string;
//   positive?: boolean;
// }) {
//   return (
//     <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
//       <p className="text-sm text-gray-400">{title}</p>
//       <p className={`text-xl font-bold ${positive ? "text-green-400" : ""}`}>
//         {value}
//       </p>
//     </div>
//   );
// }






import {
  ArrowUpRight,
  ArrowDownRight,
  BarChart3,
  Wallet,
  TrendingUp,
  Layers,
} from "lucide-react";

const iconMap: any = {
  pnl: TrendingUp,
  openTrades: Layers,
  closedTrades: BarChart3,
  capital: Wallet,
  margin: Wallet,
  winrate: TrendingUp,
};

export default function StatCard({
  title,
  value,
  positive,
  type,
}: {
  title: string;
  value: string;
  positive?: boolean;
  type?: string;
}) {
  const Icon = iconMap[type] || BarChart3;

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 flex justify-between items-center hover:border-gray-700 transition">
      <div>
        <p className="text-sm text-gray-400">{title}</p>
        <p
          className={`text-xl font-semibold ${
            positive === undefined
              ? "text-white"
              : positive
              ? "text-green-400"
              : "text-red-400"
          }`}
        >
          {value}
        </p>
      </div>

      <Icon
        className={`w-6 h-6 ${
          positive ? "text-green-400" : "text-gray-500"
        }`}
      />
    </div>
  );
}