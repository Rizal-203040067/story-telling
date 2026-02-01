import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function StoryScene({ scene, scroller }) {
  const sectionRef = useRef(null);
  const bgRef = useRef(null);
  const imageRef = useRef(null);
  const textRef = useRef(null);

  const words = scene.text.split(" ");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 🌊 Background parallax
      gsap.fromTo(
        bgRef.current,
        { y: -50 },
        {
          y: 50,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            scroller: scroller.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 0.6,
          },
        },
      );

      // 💕 Image parallax
      gsap.fromTo(
        imageRef.current,
        { y: 120, opacity: 0 },
        {
          y: -80,
          opacity: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            scroller: scroller.current,
            start: "top 80%",
            end: "bottom 20%",
            scrub: 0.6,
          },
        },
      );

      // 💌 Romantic word-by-word reveal
      gsap.fromTo(
        textRef.current.children,
        { opacity: 0, y: 12 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.2,
          ease: "power2.out",
          immediateRender: false,
          scrollTrigger: {
            trigger: sectionRef.current,
            scroller: scroller.current,
            start: "top 65%",
            end: "center center",
            scrub: 0.6,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative h-screen snap-start overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div
        ref={bgRef}
        className="absolute inset-0 scale-110"
        style={{ backgroundColor: scene.bg }}
      />

      <div className="absolute inset-0 -z-10 blur-3xl rounded-full bg-white/40">
        {[...Array(6)].map((_, i) => (
          <span
            key={i}
            className="absolute w-2 h-2 rounded-full bg-white/20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${8 + i * 2}s ease-in-out infinite`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-4 px-6">
        <img
          ref={imageRef}
          src={scene.image}
          alt=""
          className="w-48 rounded-xl shadow-xl"
        />

        <p
          ref={textRef}
          className="text-xl text-center text-gray-800 max-w-sm leading-relaxed">
          {words.map((word, index) => (
            <span key={index} className="inline-block opacity-0">
              {word}&nbsp;
            </span>
          ))}
        </p>
      </div>
    </section>
  );
}
