"use client";

import { Dispatch, SetStateAction } from "react";

type SidebarProps = {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export default function Sidebar({ open, setOpen }: SidebarProps) {
  return (
    <aside
      className={`fixed top-0 left-0 h-screen bg-gray-900 border-r border-gray-800
      transition-all duration-300 z-40
      ${open ? "w-64" : "w-16"}`}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-gray-800">
        {open && <h1 className="font-bold">Intraday SaaS</h1>}
        <button
          onClick={() => setOpen(!open)}
          className="text-gray-400 hover:text-white"
        >
          ☰
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-3 space-y-2">
        {[
          "Dashboard",
          "Trading",
          "Orders",
          "Analytics",
          "Risk",
          "Settings",
        ].map(item => (
          <div
            key={item}
            className="flex items-center gap-3 p-2 rounded cursor-pointer
            hover:bg-gray-800 text-gray-300"
          >
            <span className="text-lg">•</span>
            {open && <span>{item}</span>}
          </div>
        ))}
      </nav>
    </aside>
  );
}