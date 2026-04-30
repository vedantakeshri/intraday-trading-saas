"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { label: "Features", href: "#features" },
    { label: "How It Works", href: "#how" },
    { label: "Pricing", href: "#pricing" },
  ];

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-black/40 border-b border-white/10">
      <nav className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          href="/"
          className="text-xl font-bold text-white tracking-tight"
        >
          TradeFlow<span className="text-green-400">.</span>
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              className="relative hover:text-white transition"
            >
              {link.label}
              <span className="absolute left-0 -bottom-1 w-0 h-[1px] bg-green-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-green-400 text-black px-5 py-2 rounded-lg text-sm font-semibold hover:opacity-90 transition shadow-md shadow-green-400/20"
          >
            Start Free Trial
          </Link>
        </div>

        {/* MOBILE BUTTON */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white"
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {/* MOBILE MENU */}
      <div
        className={`md:hidden transition-all duration-300 overflow-hidden ${
          open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="px-6 pb-6 space-y-4 bg-black/90 border-t border-white/10">
          
          {navLinks.map((link, i) => (
            <a
              key={i}
              href={link.href}
              onClick={() => setOpen(false)}
              className="block text-gray-300 hover:text-white transition"
            >
              {link.label}
            </a>
          ))}

          <div className="pt-4 border-t border-white/10">
            <Link
              href="/login"
              className="block text-gray-300 mb-3 hover:text-white"
            >
              Login
            </Link>

            <Link
              href="/register"
              className="block bg-green-400 text-black px-4 py-2 rounded-lg text-center font-semibold"
            >
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}