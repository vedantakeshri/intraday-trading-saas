"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Sidebar from "../componets/dashboard/Sidebar";
import Topbar from "../componets/dashboard/Topbar";

type SettingsType = {
  autoTrade: boolean;
  tradeType: "ALL" | "BUY_ONLY" | "SELL_ONLY";
  allowedSymbols: string[];
  maxCapitalPercent: number;
  maxLoss: number;
  maxTrades: number;
  delay: number;
  confirmBeforeTrade: boolean;
  notifications: {
    signal: boolean;
    execution: boolean;
    sl: boolean;
    target: boolean;
  };
};

const defaultSettings: SettingsType = {
  autoTrade: true,
  tradeType: "ALL",
  allowedSymbols: ["NIFTY", "BANKNIFTY"],
  maxCapitalPercent: 50,
  maxLoss: 500,
  maxTrades: 5,
  delay: 5,
  confirmBeforeTrade: false,
  notifications: {
    signal: true,
    execution: true,
    sl: true,
    target: true,
  },
};

export default function SettingsPage() {
  const router = useRouter();

  const [settings, setSettings] = useState<SettingsType>(defaultSettings);
  const [sidebarOpen, setSidebarOpen] = useState(true);
const [showToast, setShowToast] = useState(false);
  const [saved, setSaved] = useState(false);
  const [dirty, setDirty] = useState(false);

  // Load settings
  useEffect(() => {
    const stored = localStorage.getItem("tradeSettings");
    if (stored) setSettings(JSON.parse(stored));
  }, []);

  // Logout
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    router.push("/login");
  };

  const handleChange = (newSettings: SettingsType) => {
    setSettings(newSettings);
    setDirty(true);
  };

  const handleSave = () => {
  localStorage.setItem("tradeSettings", JSON.stringify(settings));
  setSaved(true);
  setDirty(false);

  setShowToast(true);
  setTimeout(() => {
    setSaved(false);
    setShowToast(false);
  }, 2000);
};



  const toggleSymbol = (symbol: string) => {
    const updated = {
      ...settings,
      allowedSymbols: settings.allowedSymbols.includes(symbol)
        ? settings.allowedSymbols.filter((s) => s !== symbol)
        : [...settings.allowedSymbols, symbol],
    };
    handleChange(updated);
  };

  return (
    <div className="min-h-screen text-white bg-gradient-to-br from-[#0b0f1a] via-[#0d1320] to-[#05070d]">
      
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className={`${sidebarOpen ? "ml-64" : "ml-16"} transition-all`}>

      
      <div className="flex-1">
        
        <Topbar onLogout={handleLogout} />

        <main className="p-6 space-y-6 max-w-[1400px] mx-auto">

          {/* Header */}
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-3xl font-bold">Settings</h1>
              <p className="text-gray-400">
                Configure your trading engine behavior
              </p>
            </div>

            <div className="text-sm">
              {dirty && <span className="text-yellow-400">Unsaved changes</span>}
              {saved && <span className="text-green-400">Saved ✅</span>}
            </div>
          </div>

          {/* Auto Trading */}
          <Card title="Auto Trading">
            <Toggle
              label="Enable Auto Trading"
              value={settings.autoTrade}
              onChange={(v) => handleChange({ ...settings, autoTrade: v })}
            />
          </Card>

          {/* Trade Preferences */}
          <Card title="Trade Preferences">
            <Select
              label="Trade Type"
              value={settings.tradeType}
              options={[
                { label: "All", value: "ALL" },
                { label: "Buy Only", value: "BUY_ONLY" },
                { label: "Sell Only", value: "SELL_ONLY" },
              ]}
              onChange={(v: string) =>
                handleChange({
                  ...settings,
                  tradeType: v as SettingsType["tradeType"],
                })
              }
            />

            <div>
              <p className="text-sm text-gray-400 mb-2">Symbols</p>
              <div className="flex gap-2">
                {["NIFTY", "BANKNIFTY", "FINNIFTY"].map((s) => (
                  <button
                    key={s}
                    onClick={() => toggleSymbol(s)}
                    className={`px-3 py-1 rounded-full text-sm ${
                      settings.allowedSymbols.includes(s)
                        ? "bg-green-400 text-black"
                        : "bg-gray-800 text-gray-400"
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>
            </div>
          </Card>

          {/* Risk */}
          <Card title="Risk Management">
            <Slider
              label="Capital Usage"
              value={settings.maxCapitalPercent}
              min={10}
              max={100}
              onChange={(v) =>
                handleChange({ ...settings, maxCapitalPercent: v })
              }
            />

            <Input
              label="Max Loss (₹)"
              value={settings.maxLoss}
              onChange={(v) =>
                handleChange({ ...settings, maxLoss: Number(v) })
              }
            />

            <Input
              label="Max Trades"
              value={settings.maxTrades}
              onChange={(v) =>
                handleChange({ ...settings, maxTrades: Number(v) })
              }
            />
          </Card>

          {/* Execution */}
          <Card title="Execution Rules">
            <Select
              label="Execution Delay"
              value={settings.delay}
              options={[
                { label: "1 min", value: 1 },
                { label: "3 min", value: 3 },
                { label: "5 min", value: 5 },
              ]}
              onChange={(v: string) =>
                handleChange({ ...settings, delay: Number(v) })
              }
            />

            <Toggle
              label="Confirm Before Trade"
              value={settings.confirmBeforeTrade}
              onChange={(v) =>
                handleChange({ ...settings, confirmBeforeTrade: v })
              }
            />
          </Card>

          {/* Notifications */}
          <Card title="Notifications">
            {Object.entries(settings.notifications).map(([key, value]) => (
              <Toggle
                key={key}
                label={key.toUpperCase()}
                value={value}
                onChange={(v) =>
                  handleChange({
                    ...settings,
                    notifications: {
                      ...settings.notifications,
                      [key]: v,
                    },
                  })
                }
              />
            ))}
          </Card>

          {/* Save */}
          <div className="sticky bottom-6 flex justify-end">
            <button
              onClick={handleSave}
              disabled={!dirty}
              className={`px-6 py-3 rounded-xl font-semibold ${
                dirty
                  ? "bg-green-400 text-black"
                  : "bg-gray-700 text-gray-400"
              }`}
            >
              Save Changes
            </button>
          </div>
          {showToast && (
  <div className="fixed bottom-6 right-6 bg-green-500 text-black px-6 py-3 rounded-xl shadow-lg animate-slide-up">
    ✅ Settings saved
  </div>
)}
        </main>
      </div>
      </div>
    </div>
  );
}

/* COMPONENTS */

function Card({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-[#13182A] border border-white/10 rounded-2xl p-6 space-y-4">
      <h2 className="text-lg font-semibold">{title}</h2>
      {children}
    </div>
  );
}

function Toggle({
  label,
  value,
  onChange,
}: {
  label: string;
  value: boolean;
  onChange: (v: boolean) => void;
}) {
  return (
    <div className="flex justify-between">
      <span>{label}</span>
      <button onClick={() => onChange(!value)}>
        {value ? "ON" : "OFF"}
      </button>
    </div>
  );
}

function Select({
  label,
  value,
  options,
  onChange,
}: {
  label: string;
  value: string | number;
  options: { label: string; value: string | number }[];
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p className="text-sm text-gray-400">{label}</p>
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-800 p-2 rounded"
      >
        {options.map((o) => (
          <option key={o.value} value={o.value}>
            {o.label}
          </option>
        ))}
      </select>
    </div>
  );
}

function Slider({
  label,
  value,
  min,
  max,
  onChange,
}: {
  label: string;
  value: number;
  min: number;
  max: number;
  onChange: (v: number) => void;
}) {
  return (
    <div>
      <p>{label}: {value}%</p>
      <input
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

function Input({
  label,
  value,
  onChange,
}: {
  label: string;
  value: number;
  onChange: (v: string) => void;
}) {
  return (
    <div>
      <p>{label}</p>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full bg-gray-800 p-2 rounded"
      />
    </div>
  );
}