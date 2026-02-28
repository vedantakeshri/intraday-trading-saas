"use client";

type TimeRange = "today" | "week" | "month";

interface TimeFilterProps {
  value: TimeRange;
  onChange: (value: TimeRange) => void;
}

export default function TimeFilter({ value, onChange }: TimeFilterProps) {
  const options: { label: string; value: TimeRange }[] = [
    { label: "Today", value: "today" },
    { label: "This Week", value: "week" },
    { label: "This Month", value: "month" },
  ];

  return (
    <div className="flex gap-1 bg-gray-900 border border-gray-800 rounded-lg p-1">
      {options.map((opt) => (
        <button
          key={opt.value}
          onClick={() => onChange(opt.value)}
          className={`px-4 py-1.5 text-sm rounded-md transition
            ${
              value === opt.value
                ? "bg-green-500 text-black font-semibold"
                : "text-gray-400 hover:bg-gray-800"
            }`}
        >
          {opt.label}
        </button>
      ))}
    </div>
  );
}