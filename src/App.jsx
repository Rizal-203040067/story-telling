import { useRef } from "react";
import StoryScene from "./components/StoryScene";
import { scenes } from "./data/scenes";

export default function App() {
  const scrollRef = useRef(null);

  return (
    <main
      ref={scrollRef}
      className="h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth"
      style={{ WebkitOverflowScrolling: "touch" }}>
      {scenes.map((scene, index) => (
        <StoryScene key={index} scene={scene} scroller={scrollRef} />
      ))}
    </main>
  );
}
