import { useRef, useState } from "react";
import StoryScene from "./components/StoryScene";
import FinalScene from "./components/FinalScene";
import StartOverlay from "./components/StartOverlay";
import MuteButton from "./components/MuteButton";
import { scenes } from "./data/scenes";
import bgMusic from "./assets/bg-music.mp3";

export default function App() {
  const scrollRef = useRef(null);
  const audioRef = useRef(null);

  const [started, setStarted] = useState(false);
  const [muted, setMuted] = useState(false);

  const handleStart = () => {
    const audio = audioRef.current;
    audio.volume = 0;
    audio.muted = false;
    audio.play();

    // soft fade in
    let v = 0;
    const fade = setInterval(() => {
      v += 0.02;
      audio.volume = Math.min(v, 0.4);
      if (v >= 0.4) clearInterval(fade);
    }, 100);

    setStarted(true);
  };

  const toggleMute = () => {
    const audio = audioRef.current;
    audio.muted = !audio.muted;
    setMuted(audio.muted);
  };

  return (
    <>
      {!started && <StartOverlay onStart={handleStart} />}

      {/* MUSIC */}
      <audio ref={audioRef} loop playsInline>
        <source src={bgMusic} type="audio/mpeg" />
      </audio>

      {/* MUTE BUTTON */}
      {started && <MuteButton muted={muted} onToggle={toggleMute} />}

      <main
        ref={scrollRef}
        className={`h-screen overflow-y-scroll snap-y snap-proximity scroll-smooth
          ${!started ? "pointer-events-none" : ""}`}
        style={{ WebkitOverflowScrolling: "touch" }}>
        {scenes.map((scene, index) => (
          <StoryScene key={index} scene={scene} scroller={scrollRef} />
        ))}

        <FinalScene />
      </main>
    </>
  );
}
