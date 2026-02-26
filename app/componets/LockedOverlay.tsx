export default function LockedOverlay({ label }: { label: string }) {
  return (
    <div className="absolute inset-0 bg-black/60 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-center">
      <p className="text-sm text-gray-300 mb-4">{label}</p>
      <button className="bg-indigo-600 px-5 py-2 rounded-lg text-sm font-semibold">
        Unlock Access
      </button>
    </div>
  );
}