import finalBg from "../assets/final-bg.jpeg";

export default function FinalScene() {
  return (
    <section
      className="relative h-screen w-full snap-start flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url(${finalBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      {/* soft dark overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* content */}
      <div className="relative z-10 max-w-md px-6 text-center text-white animate-fadeIn">
        <p className="text-sm tracking-wide opacity-80 mb-4">and finally</p>

        <h1 className="text-3xl font-light leading-snug mb-6">you are here.</h1>

        <p className="text-base opacity-90 leading-relaxed">
          not because you rushed,
          <br />
          but because you stayed.
        </p>
      </div>
    </section>
  );
}
