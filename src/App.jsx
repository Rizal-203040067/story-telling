import { useRef } from "react";
import StoryScene from "./components/StoryScene";
import FinalScene from "./components/FinalScene";
import { scenes } from "./data/scenes";

export default function App() {
  const scrollRef = useRef(null);

  return (
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
  );
}
