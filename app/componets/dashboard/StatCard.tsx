export default function StatCard({
  title,
  value,
  positive,
}: {
  title: string;
  value: string;
  positive?: boolean;
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <p className="text-sm text-gray-400">{title}</p>
      <p className={`text-xl font-bold ${positive ? "text-green-400" : ""}`}>
        {value}
      </p>
    </div>
  );
}