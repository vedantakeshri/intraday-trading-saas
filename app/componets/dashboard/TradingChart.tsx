"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    TradingView: any;
  }
}

export default function TradingChart() {
  useEffect(() => {
    // Load script only once
    if (document.getElementById("tradingview-script")) {
      createWidget();
      return;
    }

    const script = document.createElement("script");
    script.id = "tradingview-script";
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;

    script.onload = () => createWidget();

    document.body.appendChild(script);
  }, []);

  const createWidget = () => {
    if (!window.TradingView) return;

    new window.TradingView.widget({
      autosize: true,
      symbol: "NSE:NIFTY",
      interval: "5",
      timezone: "Asia/Kolkata",
      theme: "dark",
      style: "1",
      locale: "en",
      enable_publishing: false,
      hide_top_toolbar: false,
      hide_legend: false,
      container_id: "tv_chart_container",
    });
  };

  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl p-2 h-[420px]">
      <div id="tv_chart_container" className="h-full w-full" />
    </div>
  );
}