"use client";

import { useState } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";
import { useRouter } from "next/navigation";

type Order = {
  id: number;
  symbol: string;
  type: "Market" | "Limit";
  side: "BUY" | "SELL";
  qty: number;
  price: number;
  status: "OPEN" | "CLOSED";
  pnl: number;
};

export default function OrdersPage() {
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(true);


  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const [filter, setFilter] = useState("ALL");

  const orders: Order[] = [
    {
      id: 1,
      symbol: "NIFTY",
      type: "Market",
      side: "BUY",
      qty: 10,
      price: 22000,
      status: "CLOSED",
      pnl: 500,
    },
    {
      id: 2,
      symbol: "BANKNIFTY",
      type: "Limit",
      side: "SELL",
      qty: 5,
      price: 46000,
      status: "OPEN",
      pnl: -200,
    },
    {
      id: 3,
      symbol: "TCS",
      type: "Market",
      side: "BUY",
      qty: 2,
      price: 3800,
      status: "CLOSED",
      pnl: 1200,
    },
  ];

  const filteredOrders =
    filter === "ALL"
      ? orders
      : orders.filter((o) => o.status === filter);

  const totalPnL = orders.reduce((acc, o) => acc + o.pnl, 0);
  const winRate =
    (orders.filter((o) => o.pnl > 0).length / orders.length) * 100;

  return (
    <div className=" h-screen bg-[#0b1220] text-white">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      {/* <div className="flex-1 flex flex-col"> */}
      <div className={`${sidebarOpen ? "ml-64" : "ml-16"} transition-all`}>


        {/* Topbar */}
        <Topbar onLogout={handleLogout} />

        {/* Content */}
        <div className="p-6 space-y-6 overflow-y-auto">

          {/* Header */}
          <h2 className="text-2xl font-semibold">📊 Order History</h2>

          {/* 🔥 Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Total PnL</p>
              <p
                className={`text-xl font-bold ${
                  totalPnL >= 0 ? "text-green-400" : "text-red-400"
                }`}
              >
                ₹{totalPnL}
              </p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Trades</p>
              <p className="text-xl font-bold">{orders.length}</p>
            </div>

            <div className="bg-white/5 p-4 rounded-xl border border-white/10">
              <p className="text-sm text-gray-400">Win Rate</p>
              <p className="text-xl font-bold text-blue-400">
                {winRate.toFixed(0)}%
              </p>
            </div>
          </div>

          {/* 🔍 Filters */}
          <div className="flex gap-3">
            {["ALL", "OPEN", "CLOSED"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-4 py-1 rounded-full text-sm ${
                  filter === f
                    ? "bg-blue-500 text-white"
                    : "bg-gray-800 text-gray-400"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* 📋 Table */}
          <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">

            <table className="w-full text-sm">
              <thead className="bg-gray-800 text-gray-400">
                <tr>
                  <th className="p-3 text-left">Symbol</th>
                  <th className="p-3">Type</th>
                  <th className="p-3">Side</th>
                  <th className="p-3">Qty</th>
                  <th className="p-3">Price</th>
                  <th className="p-3">Status</th>
                  <th className="p-3">PnL</th>
                </tr>
              </thead>

              <tbody>
                {filteredOrders.map((o) => (
                  <tr
                    key={o.id}
                    className="border-t border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="p-3 font-medium">{o.symbol}</td>

                    <td className="text-center">{o.type}</td>

                    <td
                      className={`text-center ${
                        o.side === "BUY"
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      {o.side}
                    </td>

                    <td className="text-center">{o.qty}</td>

                    <td className="text-center">₹{o.price}</td>

                    <td className="text-center">
                      <span
                        className={`px-2 py-1 rounded text-xs ${
                          o.status === "OPEN"
                            ? "bg-yellow-500/20 text-yellow-400"
                            : "bg-green-500/20 text-green-400"
                        }`}
                      >
                        {o.status}
                      </span>
                    </td>

                    <td
                      className={`text-center font-semibold ${
                        o.pnl >= 0
                          ? "text-green-400"
                          : "text-red-400"
                      }`}
                    >
                      ₹{o.pnl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
  );
}