import WatchlistItem from "./WatchlistItem";

export default function Watchlist() {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <h2 className="text-lg font-semibold mb-4">Watchlist</h2>

      <WatchlistItem name="NIFTY 50" price="22,150" change="+0.65%" positive />
      <WatchlistItem name="BANKNIFTY" price="46,420" change="-0.32%" />
      <WatchlistItem name="HDFC" price="1,620" change="+1.12%" positive />
    </div>
  );
}