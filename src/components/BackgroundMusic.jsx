import { useEffect, useRef } from "react";
import music from "../assets/music.mp3";

export default function BackgroundMusic() {
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    // play setelah user scroll / tap (biar mobile aman)
    const startMusic = () => {
      audio.volume = 0.4; // lembut
      audio.play().catch(() => {});
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("click", startMusic);
    };

    window.addEventListener("touchstart", startMusic);
    window.addEventListener("click", startMusic);

    return () => {
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("click", startMusic);
    };
  }, []);

  return <audio ref={audioRef} src={music} loop preload="auto" />;
}
