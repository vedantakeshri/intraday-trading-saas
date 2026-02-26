import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <nav className="sticky top-0 z-50 bg-black/70 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="text-xl font-bold text-green-400">
          TradePulse
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          <Link href="#features" className="hover:text-white transition">
            Features
          </Link>

          <Link href="#risk" className="hover:text-white transition">
            Risk Controls
          </Link>

          <Link href="#pricing" className="hover:text-white transition">
            Pricing
          </Link>

          <Link
            href="/dashboard-preview"
            className="hover:text-white transition"
          >
            Live Demo
          </Link>
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-4">
          <Link
            href="/login"
            className="text-sm text-gray-300 hover:text-white transition"
          >
            Login
          </Link>

          <Link
            href="/register"
            className="bg-green-400 text-black px-5 py-2 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Start Free Simulation
          </Link>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;