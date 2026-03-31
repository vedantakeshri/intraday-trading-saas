"use client";

import { useState } from "react";
import { ArrowUpRight, ArrowDownRight } from "lucide-react";

const orders = [
  {
    id: "ORD-1021",
    symbol: "RELIANCE",
    type: "BUY",
    qty: 10,
    price: 2460,
    status: "Completed",
    time: "09:45 AM",
  },
  {
    id: "ORD-1022",
    symbol: "TCS",
    type: "SELL",
    qty: 5,
    price: 3890,
    status: "Pending",
    time: "10:12 AM",
  },
  {
    id: "ORD-1023",
    symbol: "INFY",
    type: "BUY",
    qty: 20,
    price: 1520,
    status: "Rejected",
    time: "10:40 AM",
  },
];

export default function OrdersPage() {
  const [statusFilter, setStatusFilter] = useState("All");

  const filteredOrders =
    statusFilter === "All"
      ? orders
      : orders.filter((o) => o.status === statusFilter);

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Orders</h1>
          <p className="text-sm text-gray-400">
            Track and manage your executed & pending orders
          </p>
        </div>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-gray-900 border border-gray-800 rounded-lg px-3 py-2 text-sm"
        >
          <option>All</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Rejected</option>
        </select>
      </div>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <StatCard title="Total Orders" value="128" />
        <StatCard title="Completed" value="96" success />
        <StatCard title="Pending" value="12" warning />
      </div>

      {/* TABLE */}
      <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-800/50 text-gray-400">
            <tr>
              <th className="px-4 py-3 text-left">Order ID</th>
              <th className="px-4 py-3 text-left">Symbol</th>
              <th className="px-4 py-3 text-left">Type</th>
              <th className="px-4 py-3 text-left">Qty</th>
              <th className="px-4 py-3 text-left">Price</th>
              <th className="px-4 py-3 text-left">Status</th>
              <th className="px-4 py-3 text-left">Time</th>
            </tr>
          </thead>

          <tbody>
            {filteredOrders.map((order) => (
              <tr
                // key={order.id}
                key={order.id}

                className="border-t border-gray-800 hover:bg-gray-800/40 transition"
              >
                <td className="px-4 py-3 font-medium">{order.id}</td>
                <td className="px-4 py-3">{order.symbol}</td>

                <td className="px-4 py-3">
                  <span
                    className={`inline-flex items-center gap-1 font-medium ${
                      order.type === "BUY"
                        ? "text-green-400"
                        : "text-red-400"
                    }`}
                  >
                    {order.type === "BUY" ? (
                      <ArrowUpRight className="w-4 h-4" />
                    ) : (
                      <ArrowDownRight className="w-4 h-4" />
                    )}
                    {order.type}
                  </span>
                </td>

                <td className="px-4 py-3">{order.qty}</td>
                <td className="px-4 py-3">₹{order.price}</td>

                <td className="px-4 py-3">
                  <StatusBadge status={order.status} />
                </td>

                <td className="px-4 py-3 text-gray-400">{order.time}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {filteredOrders.length === 0 && (
          <div className="p-6 text-center text-gray-400">
            No orders found
          </div>
        )}
      </div>
    </div>
  );
}

/* ---------------- COMPONENTS ---------------- */

function StatCard({
  title,
  value,
  success,
  warning,
}: {
  title: string;
  value: string;
  success?: boolean;
  warning?: boolean;
}) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-4">
      <p className="text-sm text-gray-400">{title}</p>
      <p
        className={`text-2xl font-bold ${
          success
            ? "text-green-400"
            : warning
            ? "text-yellow-400"
            : "text-white"
        }`}
      >
        {value}
      </p>
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  const styles: Record<string, string> = {
    Completed: "bg-green-500/10 text-green-400",
    Pending: "bg-yellow-500/10 text-yellow-400",
    Rejected: "bg-red-500/10 text-red-400",
  };

  return (
    <span
      className={`px-3 py-1 rounded-full text-xs font-medium ${
        styles[status]
      }`}
    >
      {status}
    </span>
  );
}