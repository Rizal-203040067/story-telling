import finalBg from "../assets/final-bg.png";

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
        <h1 className="text-3xl font-light leading-snug mb-6">
          Bahagia Selalu beby...
        </h1>

        <h2 className="text-3xl font-light leading-snug mb-6">
          Aku ga akan pernah lupain kamu.
        </h2>
      </div>
    </section>
  );
}
