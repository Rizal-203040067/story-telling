export default function StartOverlay({ onStart }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
      <button
        onClick={onStart}
        className="px-10 py-6 rounded-2xl bg-white/10 backdrop-blur
                   text-white text-center active:scale-95 transition">
        <p className="text-xl">💗</p>
      </button>
    </div>
  );
}
