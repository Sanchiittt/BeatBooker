



// components/AboutSection.tsx
import React from "react";
import Image from "next/image";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-black/80">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <Image
            src="/assets/aboutimg2.jpg"
            alt="DJ Goldbeard profile"
            width={500}
            height={500}
            className="rounded-2xl shadow-xl border border-yellow-600"
          />
        </div>
        <div>
          <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
            Meet DJ Goldbeard
          </h3>
          <p className="text-yellow-100 text-lg">
            DJ Goldbeard has been igniting stages and sound systems for over a decade. Known for his signature gold-accented look and high-voltage mixes, he’s the go-to DJ for upscale parties and viral livestreams.
          </p>
          <p className="text-yellow-200 mt-4">
            His beats blend deep house, EDM, hip-hop, and global bass to create immersive musical journeys. With over <strong className="text-yellow-300">1 million followers</strong> across platforms and features on viral video compilations, Goldbeard’s sound is a sensation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
