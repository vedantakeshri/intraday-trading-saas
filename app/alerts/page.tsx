"use client";

import { useState, useEffect } from "react";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";
import {
  Bell,
  Trash2,
  ToggleLeft,
  ToggleRight,
} from "lucide-react";

type Alert = {
  id: number;
  symbol: string;
  type: "price" | "volume" | "rsi";
  condition: string;
  value: number;
  active: boolean;
  triggered: boolean;
  priority: "high" | "medium" | "low";
};

export default function AlertsPage() {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const [alerts, setAlerts] = useState<Alert[]>([]);
  const [tab, setTab] = useState<"active" | "triggered" | "history">("active");

  const [form, setForm] = useState({
    symbol: "",
    type: "price",
    condition: "Above",
    value: "",
    priority: "medium",
  });

  // 🔥 Simulate real-time trigger
  useEffect(() => {
    const interval = setInterval(() => {
      setAlerts((prev) =>
        prev.map((a) =>
          a.active && !a.triggered && Math.random() > 0.85
            ? { ...a, triggered: true }
            : a
        )
      );
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("authToken");
    window.location.href = "/login";
  };

  const addAlert = () => {
    if (!form.symbol || !form.value) return;

    const newAlert: Alert = {
      id: Date.now(),
      symbol: form.symbol.toUpperCase(),
      type: form.type as Alert["type"],
      condition: form.condition,
      value: Number(form.value),
      active: true,
      triggered: false,
      priority: form.priority as Alert["priority"],
    };

    setAlerts([newAlert, ...alerts]);

    setForm({
      symbol: "",
      type: "price",
      condition: "Above",
      value: "",
      priority: "medium",
    });
  };

  const toggleAlert = (id: number) => {
    setAlerts((prev) =>
      prev.map((a) =>
        a.id === id ? { ...a, active: !a.active } : a
      )
    );
  };

  const deleteAlert = (id: number) => {
    setAlerts((prev) => prev.filter((a) => a.id !== id));
  };

  const filteredAlerts = alerts.filter((a) => {
    if (tab === "active") return a.active && !a.triggered;
    if (tab === "triggered") return a.triggered;
    return true;
  });

  return (
    <div className="h-screen bg-[#05070d] text-white ">

      {/* Sidebar */}
      <Sidebar />



      {/* Main */}
      {/* <div className="flex-1 flex flex-col"> */}
      <div className={`${sidebarOpen ? "ml-64" : "ml-16"} transition-all`}>


        <Topbar onLogout={handleLogout} />

        <main className="p-3 sm:p-4 md:p-6 space-y-6 max-w-[1400px] mx-auto w-full">

          {/* 🔥 HEADER */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-500/10 rounded-lg">
                <Bell className="text-yellow-400" />
              </div>
              <div>
                <h1 className="text-xl md:text-2xl font-bold">
                  Pro Alerts Center
                </h1>
                <p className="text-xs text-gray-400">
                  Smart alerts for price, volume & RSI
                </p>
              </div>
            </div>

            {/* Stats */}
            <div className="flex gap-3 text-xs">
              <div className="bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                Active: {alerts.filter(a => a.active && !a.triggered).length}
              </div>
              <div className="bg-white/5 px-3 py-2 rounded-lg border border-white/10">
                Triggered: {alerts.filter(a => a.triggered).length}
              </div>
            </div>
          </div>

          {/* 🔥 Tabs */}
          <div className="flex gap-2">
            {["active", "triggered", "history"].map((t) => (
              <button
                key={t}
                onClick={() => setTab(t as any)}
                className={`px-4 py-1.5 text-sm rounded-lg transition ${
                  tab === t
                    ? "bg-yellow-500 text-black shadow-md"
                    : "bg-white/5 text-gray-300 hover:bg-white/10"
                }`}
              >
                {t.toUpperCase()}
              </button>
            ))}
          </div>

          {/* 🚀 Create Alert */}
          <div className="bg-white/5 border border-white/10 rounded-xl p-4 backdrop-blur-xl">
            <div className="grid grid-cols-2 md:grid-cols-6 gap-3">

              <input
                placeholder="Symbol"
                value={form.symbol}
                onChange={(e) =>
                  setForm({ ...form, symbol: e.target.value })
                }
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm focus:ring-1 focus:ring-yellow-500"
              />

              <select
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value })
                }
                className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-sm"
              >
                <option value="price">Price</option>
                <option value="volume">Volume</option>
                <option value="rsi">RSI</option>
              </select>

              <select
                value={form.condition}
                onChange={(e) =>
                  setForm({ ...form, condition: e.target.value })
                }
                className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-sm"
              >
                <option>Above</option>
                <option>Below</option>
              </select>

              <input
                type="number"
                placeholder="Value"
                value={form.value}
                onChange={(e) =>
                  setForm({ ...form, value: e.target.value })
                }
                className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-sm"
              />

              <select
                value={form.priority}
                onChange={(e) =>
                  setForm({ ...form, priority: e.target.value })
                }
                className="bg-white/5 border border-white/10 rounded-lg px-2 py-2 text-sm"
              >
                <option value="high">High</option>
                <option value="medium">Medium</option>
                <option value="low">Low</option>
              </select>

              <button
                onClick={addAlert}
                className="bg-yellow-500 text-black rounded-lg px-3 py-2 text-sm hover:bg-yellow-400 transition font-medium"
              >
                Add
              </button>
            </div>
          </div>

          {/* 📊 Alerts */}
          <div className="space-y-3">

            {filteredAlerts.length === 0 && (
              <div className="text-center py-10 text-gray-500 text-sm">
                🚫 No alerts found
              </div>
            )}

            {filteredAlerts.map((alert) => (
              <div
                key={alert.id}
                className="relative group flex flex-col md:flex-row justify-between gap-3 bg-[#0f172a]/70 border border-white/10 rounded-xl p-4 hover:border-yellow-500/30 hover:shadow-lg transition"
              >
                {/* Glow */}
                <div className="absolute inset-0 bg-yellow-500/5 opacity-0 group-hover:opacity-100 blur-xl transition" />

                {/* LEFT */}
                <div className="relative z-10">
                  <p className="font-semibold text-sm">
                    {alert.symbol}
                    <span className="text-xs text-gray-400 ml-2">
                      ({alert.type.toUpperCase()})
                    </span>
                  </p>

                  <p className="text-xs text-gray-400">
                    {alert.condition} {alert.value}
                  </p>

                  {/* Priority */}
                  <span
                    className={`inline-block mt-1 text-[10px] px-2 py-0.5 rounded-full ${
                      alert.priority === "high"
                        ? "bg-red-500/20 text-red-400"
                        : alert.priority === "medium"
                        ? "bg-yellow-500/20 text-yellow-400"
                        : "bg-green-500/20 text-green-400"
                    }`}
                  >
                    {alert.priority}
                  </span>

                  {/* Status */}
                  <div className="mt-1 text-xs">
                    {alert.triggered ? (
                      <span className="text-green-400">✅ Triggered</span>
                    ) : alert.active ? (
                      <span className="text-blue-400 animate-pulse">
                        ● LIVE
                      </span>
                    ) : (
                      <span className="text-gray-400">OFF</span>
                    )}
                  </div>
                </div>

                {/* RIGHT */}
                <div className="flex items-center gap-4 relative z-10">
                  <button onClick={() => toggleAlert(alert.id)}>
                    {alert.active ? (
                      <ToggleRight className="text-green-400" />
                    ) : (
                      <ToggleLeft className="text-gray-400" />
                    )}
                  </button>

                  <button onClick={() => deleteAlert(alert.id)}>
                    <Trash2 className="text-red-400 hover:text-red-300" size={16} />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </main>
      </div>
    </div>
  );
}