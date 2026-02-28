"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Dispatch, SetStateAction } from "react";
import {
  Home,
  LineChart,
  List,
  BarChart2,
  Shield,
  Settings,
  ChevronLeft,
} from "lucide-react";

type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: Home },
  { label: "Trading", href: "/trading", icon: LineChart },
  { label: "Orders", href: "/orders", icon: List },
  { label: "Analytics", href: "/analytics", icon: BarChart2 },
  { label: "Risk", href: "/risk", icon: Shield },
  { label: "Settings", href: "/settings", icon: Settings },
];

export default function Sidebar({ open, setOpen }: SidebarProps) {
  const pathname = usePathname();

  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gray-900 border-r border-gray-800
      transition-all duration-300 z-40
      ${open ? "w-64" : "w-16"}`}
    >
      {/* Header */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
        {open && <h1 className="font-bold text-white">Intraday SaaS</h1>}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 hover:text-white"
        >
          <ChevronLeft
            className={`w-5 h-5 transition-transform ${
              open ? "rotate-0" : "rotate-180"
            }`}
          />
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-2 space-y-1">
        {menuItems.map(({ label, href, icon: Icon }) => {
          const isActive = pathname === href;

          return (
            <Link
              key={label}
              href={href}
              className={`group flex items-center gap-3 p-3 rounded-lg
              transition-all
              ${
                isActive
                  ? "bg-indigo-600/20 text-indigo-400"
                  : "text-gray-400 hover:bg-gray-800 hover:text-white"
              }`}
            >
              <Icon className="w-5 h-5" />

              {open && <span className="text-sm font-medium">{label}</span>}

              {!open && (
                <span
                  className="absolute left-16 bg-gray-800 text-white text-xs px-2 py-1
                  rounded opacity-0 group-hover:opacity-100 pointer-events-none"
                >
                  {label}
                </span>
              )}
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}