export default function Topbar() {
  return (
    <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-900">
      <h1 className="text-xl font-bold text-green-400">Intraday SaaS</h1>

      <div className="flex items-center gap-4">
        <span className="text-sm text-green-400">● Market Open</span>
        <input
          placeholder="Search stock..."
          className="px-3 py-1 rounded bg-gray-800 border border-gray-700 text-sm"
        />
        <div className="w-8 h-8 rounded-full bg-gray-700 flex items-center justify-center">
          U
        </div>
      </div>
    </header>
  );
}