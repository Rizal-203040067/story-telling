import { useEffect, forwardRef, useImperativeHandle, useRef } from "react";
import music from "../assets/music.mp3";

const BackgroundMusic = forwardRef((_, ref) => {
  const audioRef = useRef(null);

  useImperativeHandle(ref, () => ({
    toggleMute() {
      audioRef.current.muted = !audioRef.current.muted;
      return audioRef.current.muted;
    },
  }));

  useEffect(() => {
    const startMusic = () => {
      audioRef.current.volume = 0.4;
      audioRef.current.play().catch(() => {});
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };

    window.addEventListener("click", startMusic);
    window.addEventListener("touchstart", startMusic);

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
    };
  }, []);

  return <audio ref={audioRef} src={music} loop preload="auto" />;
});

export default BackgroundMusic;
