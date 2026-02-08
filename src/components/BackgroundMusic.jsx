import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
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
      const audio = audioRef.current;
      if (!audio) return;

      audio.volume = 0.4;
      audio.muted = false;
      audio.play().catch(() => {});

      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("scroll", startMusic);
    };

    window.addEventListener("click", startMusic, { once: true });
    window.addEventListener("touchstart", startMusic, { once: true });
    window.addEventListener("scroll", startMusic, { once: true });

    return () => {
      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("scroll", startMusic);
    };
  }, []);

  return <audio ref={audioRef} src={music} loop preload="auto" />;
});

export default BackgroundMusic;
