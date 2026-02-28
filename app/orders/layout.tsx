"use client";

import { useState } from "react";
import Topbar from "../componets/dashboard/Topbar";
import Sidebar from "../componets/dashboard/Sidebar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <html lang="en">
      <body className="bg-gray-950 text-white">
        <Sidebar open={sidebarOpen} setOpen={setSidebarOpen} />

        {/* MAIN CONTENT */}
        <div
          className={`transition-all duration-300 ${
            sidebarOpen ? "ml-64" : "ml-16"
          }`}
        >
          <Topbar />
          <main className="p-6">{children}</main>
        </div>
      </body>
    </html>
  );
}