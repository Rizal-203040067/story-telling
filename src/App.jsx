import { useRef } from "react";
import StoryScene from "./components/StoryScene";
import FinalScene from "./components/FinalScene";
import { scenes } from "./data/scenes";
import BackgroundMusic from "./components/BackgroundMusic";

export default function App() {
  const scrollRef = useRef(null);

  return (
    <>
      <BackgroundMusic />

      <main
        ref={scrollRef}
        className="h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth"
        style={{ WebkitOverflowScrolling: "touch" }}>
        {/* STORY SCENES */}
        {scenes.map((scene, index) => (
          <StoryScene key={index} scene={scene} scroller={scrollRef} />
        ))}

        {/* FINAL SCENE (NO SCROLL LOGIC) */}
        <FinalScene />
      </main>

      <button
        onClick={() => {
          const audio = document.querySelector("audio");
          audio.muted = !audio.muted;
        }}
        className="fixed bottom-4 right-4 z-50 bg-white/70 backdrop-blur px-3 py-1 rounded-full text-sm">
        🔊
      </button>
    </>
  );
}
