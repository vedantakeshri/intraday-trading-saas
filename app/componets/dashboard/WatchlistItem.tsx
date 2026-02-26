export default function WatchlistItem({
  name,
  price,
  change,
  positive,
}: {
  name: string;
  price: string;
  change: string;
  positive?: boolean;
}) {
  return (
    <div className="flex justify-between text-sm mb-2">
      <span>{name}</span>
      <span>
        {price}{" "}
        <span className={positive ? "text-green-400" : "text-red-400"}>
          {change}
        </span>
      </span>
    </div>
  );
}