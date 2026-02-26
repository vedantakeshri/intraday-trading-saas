"use client";

import { useState } from "react";

export default function OrderPanel() {
  const [orderType, setOrderType] = useState("Market");
  const [qty, setQty] = useState("");
  const [price, setPrice] = useState("");
  const [error, setError] = useState("");

  const balance = 25000; // mock
  const riskPerTrade = 500; // mock

  const isValid =
    qty &&
    Number(qty) > 0 &&
    (orderType === "Market" || (price && Number(price) > 0));

  const handleOrder = (side: "BUY" | "SELL") => {
    if (!isValid) {
      setError("Please enter valid order details");
      return;
    }

    setError("");

    const orderData = {
      side,
      orderType,
      qty,
      price: orderType === "Market" ? "Market Price" : price,
    };

    console.log("Order Placed:", orderData);
    alert(`${side} order placed successfully`);
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4 space-y-4">
      <h3 className="font-semibold">Place Order</h3>

      {/* Symbol & Balance */}
      <div className="flex justify-between text-sm text-gray-400">
        <span>Symbol: <b className="text-white">NIFTY</b></span>
        <span>Balance: ₹{balance}</span>
      </div>

      {/* Order Type */}
      <select
        value={orderType}
        onChange={e => setOrderType(e.target.value)}
        className="w-full bg-gray-800 p-2 rounded"
      >
        <option>Market</option>
        <option>Limit</option>
      </select>

      {/* Quantity */}
      <input
        type="number"
        placeholder="Quantity"
        value={qty}
        onChange={e => setQty(e.target.value)}
        className="w-full bg-gray-800 p-2 rounded"
      />

      {/* Price */}
      <input
        type="number"
        placeholder="Price"
        value={price}
        disabled={orderType === "Market"}
        onChange={e => setPrice(e.target.value)}
        className="w-full bg-gray-800 p-2 rounded disabled:opacity-50"
      />

      {/* Risk Info */}
      <div className="text-xs text-gray-400">
        Max Risk / Trade: ₹{riskPerTrade}
      </div>

      {/* Error */}
      {error && <p className="text-red-400 text-sm">{error}</p>}

      {/* Buttons */}
      <div className="flex gap-2">
        <button
          disabled={!isValid}
          onClick={() => handleOrder("BUY")}
          className="flex-1 bg-green-500 disabled:opacity-40 text-black py-2 rounded"
        >
          BUY
        </button>
        <button
          disabled={!isValid}
          onClick={() => handleOrder("SELL")}
          className="flex-1 bg-red-500 disabled:opacity-40 text-black py-2 rounded"
        >
          SELL
        </button>
      </div>
    </div>
  );
}