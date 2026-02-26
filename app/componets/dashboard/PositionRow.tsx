export default function PositionRow({
  stock,
  qty,
  entry,
  ltp,
  pnl,
  positive,
}: {
  stock: string;
  qty: string;
  entry: string;
  ltp: string;
  pnl: string;
  positive?: boolean;
}) {
  return (
    <tr className="border-b border-gray-800">
      <td className="py-2">{stock}</td>
      <td className="text-center">{qty}</td>
      <td className="text-center">{entry}</td>
      <td className="text-center">{ltp}</td>
      <td className={`text-center ${positive ? "text-green-400" : "text-red-400"}`}>
        {pnl}
      </td>
      <td className="text-center">
        <button className="text-xs bg-red-500 hover:bg-red-600 px-2 py-1 rounded">
          Exit
        </button>
      </td>
    </tr>
  );
}