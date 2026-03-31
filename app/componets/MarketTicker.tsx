"use client";

import { useEffect, useState } from "react";

type MarketData = {
  price: number;
  change: number;
};

export default function MarketTicker() {
  const [nifty, setNifty] = useState<MarketData>({
    price: 22500,
    change: 0.5,
  });

  const [banknifty, setBanknifty] = useState<MarketData>({
    price: 48000,
    change: -0.2,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setNifty((prev) => {
        const change = (Math.random() - 0.5) * 20;
        const newPrice = prev.price + change;

        return {
          price: newPrice,
          change: (change / prev.price) * 100,
        };
      });

      setBanknifty((prev) => {
        const change = (Math.random() - 0.5) * 50;
        const newPrice = prev.price + change;

        return {
          price: newPrice,
          change: (change / prev.price) * 100,
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const renderMarket = (label: string, data: MarketData) => {
    const isUp = data.change > 0;

    return (
      <span className="flex items-center gap-1">
        {label}
        <span
          className={`flex items-center gap-1 font-medium ${
            isUp ? "text-green-400" : "text-red-400"
          }`}
        >
          {data.price.toFixed(2)}
          <span>({data.change.toFixed(2)}%)</span>
          <span className="ml-1">{isUp ? "▲" : "▼"}</span>
        </span>
      </span>
    );
  };

  return (
    <div className="flex items-center gap-4 text-xs">
      {renderMarket("NIFTY", nifty)}
      {renderMarket("BANKNIFTY", banknifty)}
    </div>
  );
}