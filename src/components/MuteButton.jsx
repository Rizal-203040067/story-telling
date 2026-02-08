export default function MuteButton({ muted, onToggle }) {
  return (
    <button
      onClick={onToggle}
      className="fixed px-3 py-1 top-4 right-4 z-50
                 w-11 h-11 rounded-full
                 bg-black/40 backdrop-blur
                 flex items-center justify-center
                 text-white text-lg
                 active:scale-95 transition"
      aria-label="Toggle sound">
      {muted ? "🔇" : "🔊"}
    </button>
  );
}
