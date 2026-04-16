


"use client";

import { usePathname, useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Search,
  BarChart2,
  ClipboardList,
  Brain,
  LineChart,
  Activity,
  Bell,
  Shield,
  CreditCard,
  Settings,
} from "lucide-react";

const sections = [
  {
    title: "TRADING",
    items: [
      { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
      { name: "Scanner", icon: Search, badge: 5, path: "/scanner" },
      { name: "Positions", icon: BarChart2, badge: 3, path: "/positions" }, // 🔥 dynamic later
      { name: "Orders", icon: ClipboardList, path: "/orders" },
      { name: "Strategy", icon: Brain, path: "/strategy" },
    ],
  },
  {
    title: "ANALYSIS",
    items: [
      { name: "Charts", icon: LineChart, path: "/chart" },
      { name: "Backtest", icon: Activity, path: "/backtest" },
      { name: "Alerts", icon: Bell, badge: 3, path: "/alerts" },
    ],
  },
  {
    title: "ACCOUNT",
    items: [
      { name: "Risk Control", icon: Shield, path: "/risk" },
      { name: "Billing", icon: CreditCard, path: "/billing" },
      { name: "Settings", icon: Settings, path: "/settings" },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname(); // 🔥 current route
  const router = useRouter(); // 🔥 navigation

  return (
    <div className="fixed top-0 left-0 h-full w-64 bg-[#05070d]/90 backdrop-blur-xl border-r border-white/10 flex flex-col justify-between">
      
      {/* 🔥 Top */}
      <div>
        <div className="space-y-6 p-3">
          {sections.map((section) => (
            <div key={section.title}>
              <p className="text-[10px] text-gray-500 mb-2 px-2 tracking-[2px] uppercase">
                {section.title}
              </p>

              <div className="space-y-1">
                {section.items.map((item) => {
                  const Icon = item.icon;

                  // 🔥 Active based on route
                  const isActive = pathname === item.path;

                  return (
                    <div
                      key={item.name}
                      onClick={() => router.push(item.path)}
                      className={`group relative flex items-center justify-between px-3 py-2 rounded-xl cursor-pointer transition-all duration-300
                        
                        ${
                          isActive
                            ? "bg-gradient-to-r from-blue-500/20 to-blue-500/5 border border-blue-500/20 shadow-lg shadow-blue-500/10"
                            : "hover:bg-white/5"
                        }
                      `}
                    >
                      {/* 🔥 Left glow */}
                      {isActive && (
                        <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-blue-500 rounded-r-full shadow-md shadow-blue-500/50" />
                      )}

                      <div className="flex items-center gap-3">
                        <Icon
                          size={15}
                          className={`transition ${
                            isActive
                              ? "text-blue-400"
                              : "text-gray-400 group-hover:text-white"
                          }`}
                        />

                        <span
                          className={`text-[13px] transition ${
                            isActive
                              ? "text-blue-400"
                              : "text-gray-300 group-hover:text-white"
                          }`}
                        >
                          {item.name}
                        </span>
                      </div>

                      {/* 🔥 Badge */}
                      {item.badge && (
                        <span
                          className={`text-[9px] px-2 py-0.5 rounded-full transition transform group-hover:scale-110
                            ${
                              item.name === "Scanner"
                                ? "bg-green-500 text-black"
                                : "bg-red-500 text-white"
                            }
                          `}
                        >
                          {item.badge}
                        </span>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 🔥 Bottom */}
      <div className="p-4 space-y-4">
        <div className="relative overflow-hidden bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 rounded-xl p-4 group hover:scale-[1.02] transition">
          <div className="absolute inset-0 bg-blue-500/5 opacity-0 group-hover:opacity-100 transition blur-xl" />

          <p className="text-xs text-blue-400 mb-2 tracking-wider">
            🚀 PRO PLAN
          </p>

          <p className="text-xs text-gray-400 mb-2">
            Sim trades: <span className="text-yellow-400">30/50</span>
          </p>

          <div className="w-full h-1.5 bg-gray-800 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-yellow-400 to-yellow-300 rounded-full animate-pulse"
              style={{ width: "60%" }}
            />
          </div>

          <p className="text-[10px] text-gray-500 mt-1 text-right">60%</p>
        </div>
      </div>
    </div>
  );
}
