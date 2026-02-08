import { useRef, useState } from "react";
import StoryScene from "./components/StoryScene";
import FinalScene from "./components/FinalScene";
import BackgroundMusic from "./components/BackgroundMusic";
import { scenes } from "./data/scenes";

export default function App() {
  const scrollRef = useRef(null);
  const musicRef = useRef(null);
  const [muted, setMuted] = useState(false);

  return (
    <>
      <BackgroundMusic ref={musicRef} />

      <main
        ref={scrollRef}
        className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}>
        {scenes.map((scene, index) => (
          <StoryScene
            key={index}
            scene={scene}
            index={index}
            scroller={scrollRef}
          />
        ))}

        <FinalScene />
      </main>

      {/* MUTE BUTTON */}
      <button
        onClick={() => {
          const isMuted = musicRef.current.toggleMute();
          setMuted(isMuted);
        }}
        className="fixed top-4 right-4 z-50 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-sm shadow-md">
        {muted ? "🔇" : "🔊"}
      </button>
    </>
  );
}
