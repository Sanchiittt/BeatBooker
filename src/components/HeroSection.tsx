import React from "react";
import Image from "next/image";

const HeroSection: React.FC = () => {
  return (
    <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center px-6 md:px-12">
     


<Image
  src="/dj-hero.jpg"
  alt="DJ Performing"
  fill
  className="object-cover opacity-30"
/>

      <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/70 to-black/80" />

      <div className="z-10 text-center max-w-3xl">
        <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text animate-pulse">
          Drop the Beat. Own the Night.
        </h2>
        <p className="mt-6 text-xl text-purple-200">
          Premier DJ experience for weddings, parties & private events.
        </p>

        {/* Book Button */}
        <a
          href="#booking"
          className="mt-8 inline-block bg-purple-700 hover:bg-purple-800 transition rounded-full py-3 px-10 text-white font-bold text-lg shadow-md"
        >
          Book Now
        </a>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap justify-center gap-4 text-purple-300 font-semibold text-base">
          <div className="flex items-center gap-2 border border-purple-500/30 bg-gradient-to-tr from-white/5 to-white/0 px-4 py-2 rounded-xl shadow-inner hover:shadow-purple-800/30 transition">
            <span className="text-xl">🎧</span> 500+ Events
          </div>
          <div className="flex items-center gap-2 border border-purple-500/30 bg-gradient-to-tr from-white/5 to-white/0 px-4 py-2 rounded-xl shadow-inner hover:shadow-purple-800/30 transition">
            <span className="text-xl">💯</span> 5-Star Rated
          </div>
          <div className="flex items-center gap-2 border border-purple-500/30 bg-gradient-to-tr from-white/5 to-white/0 px-4 py-2 rounded-xl shadow-inner hover:shadow-purple-800/30 transition">
            <span className="text-xl">📍</span> PAN India
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
