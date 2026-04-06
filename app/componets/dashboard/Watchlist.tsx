// import WatchlistItem from "./WatchlistItem";

// export default function Watchlist() {
//   return (
//     <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
//       <h2 className="text-lg font-semibold mb-4">Watchlist</h2>

//       <WatchlistItem name="NIFTY 50" price="22,150" change="+0.65%" positive />
//       <WatchlistItem name="BANKNIFTY" price="46,420" change="-0.32%" />
//       <WatchlistItem name="HDFC" price="1,620" change="+1.12%" positive />
//     </div>
//   );
// }











"use client";

import { useEffect, useState } from "react";
import { ArrowUpRight, ArrowDownRight, Star } from "lucide-react";

type Stock = {
  name: string;
  price: number;
  change: number;
};

export default function Watchlist() {
  const [stocks, setStocks] = useState<Stock[]>([
    { name: "NIFTY 50", price: 22150, change: 0.65 },
    { name: "BANKNIFTY", price: 46420, change: -0.32 },
    { name: "HDFC", price: 1620, change: 1.12 },
  ]);

  // 🔥 Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setStocks((prev) =>
        prev.map((stock) => {
          const randomChange = (Math.random() - 0.5) * 2;
          const newPrice = stock.price + randomChange;

          return {
            ...stock,
            price: parseFloat(newPrice.toFixed(2)),
            change: parseFloat(
              ((newPrice - stock.price) / stock.price * 100).toFixed(2)
            ),
          };
        })
      );
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-5 shadow-xl backdrop-blur">
      
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-semibold">📊 Watchlist</h2>
        <button className="text-sm text-blue-400 hover:underline">
          + Add Stock
        </button>
      </div>

      <div className="space-y-3">
        {stocks.map((stock, index) => {
          const isPositive = stock.change >= 0;

          return (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg bg-gray-900/60 hover:bg-gray-800 transition"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <Star className="w-4 h-4 text-yellow-400" />
                <div>
                  <p className="font-medium">{stock.name}</p>
                  <p className="text-xs text-gray-400">NSE</p>
                </div>
              </div>

              {/* Right */}
              <div className="text-right">
                <p className="font-semibold">
                  ₹{stock.price.toLocaleString()}
                </p>

                <p
                  className={`text-sm flex items-center gap-1 justify-end ${
                    isPositive ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {isPositive ? (
                    <ArrowUpRight size={14} />
                  ) : (
                    <ArrowDownRight size={14} />
                  )}
                  {stock.change}%
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}