"use client";

import { AlertTriangle } from "lucide-react";

type Props = {
  maxLoss?: number;
  currentLoss?: number;
  trades?: number;
  maxTrades?: number;
};

export default function RiskPanel({
  maxLoss = 3000,
  currentLoss = 1800,
  trades = 5,
  maxTrades = 10,
}: Props) {
  const lossPercent = (currentLoss / maxLoss) * 100;

  const isDanger = lossPercent >= 80;
  const isBlocked = lossPercent >= 100;

  return (
    <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-5 shadow-xl space-y-4">

      <h2 className="text-lg font-semibold flex items-center gap-2">
        ⚠ Risk Control
      </h2>

      {/* Loss */}
      <div>
        <p className="text-sm text-gray-400">Daily Loss</p>
        <p className="text-2xl font-bold text-red-400">
          -₹{currentLoss.toLocaleString()}
        </p>

        {/* Progress Bar */}
        <div className="w-full h-2 bg-gray-700 rounded mt-2">
          <div
            className={`h-2 rounded ${
              isDanger ? "bg-red-500" : "bg-yellow-400"
            }`}
            style={{ width: `${lossPercent}%` }}
          />
        </div>

        <p className="text-xs text-gray-400 mt-1">
          {lossPercent.toFixed(0)}% of max ₹{maxLoss}
        </p>
      </div>

      {/* Trades */}
      <div className="text-sm text-gray-400">
        Trades Taken:{" "}
        <span className="text-white">
          {trades} / {maxTrades}
        </span>
      </div>

      {/* Warning */}
      {isDanger && (
        <div className="flex items-center gap-2 text-yellow-400 text-xs">
          <AlertTriangle size={14} />
          High risk — reduce trading
        </div>
      )}

      {/* Blocked */}
      {isBlocked && (
        <div className="bg-red-500/20 text-red-400 text-sm p-2 rounded text-center">
          🚫 Trading Blocked — Max loss reached
        </div>
      )}

      {/* CTA */}
      <button
        disabled={isBlocked}
        className="w-full mt-2 py-2 rounded-lg bg-blue-500 disabled:opacity-40"
      >
        Continue Trading
      </button>
    </div>
  );
}