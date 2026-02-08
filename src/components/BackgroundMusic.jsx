import { useEffect, useRef, forwardRef, useImperativeHandle } from "react";
import music from "../assets/music.mp3";

const BackgroundMusic = forwardRef((_, ref) => {
  const audioRef = useRef(null);

  // expose mute toggle ke parent
  useImperativeHandle(ref, () => ({
    toggleMute() {
      if (!audioRef.current) return true;
      audioRef.current.muted = !audioRef.current.muted;
      return audioRef.current.muted;
    },
  }));

  useEffect(() => {
    const startMusic = () => {
      if (!audioRef.current) return;

      audioRef.current.play().catch(() => {
        // silently fail (normal on some browsers)
      });

      window.removeEventListener("click", startMusic);
      window.removeEventListener("touchstart", startMusic);
      window.removeEventListener("scroll", startMusic);
    };

    // first user interaction triggers audio
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
