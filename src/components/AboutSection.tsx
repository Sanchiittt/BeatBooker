import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 max-w-4xl mx-auto px-6 md:px-12 text-center">
      <h3 className="text-4xl font-semibold mb-8 text-purple-300">About DJ VibeMaster</h3>
      <p className="text-lg md:text-xl text-purple-400 leading-relaxed">
        With over a decade of experience, DJ VibeMaster brings dynamic soundscapes,
        crowd-hyping transitions, and flawless playlists that match the energy of any venue.
        We don’t just play tracks — we deliver memories.
      </p>
    </section>
  );
};

export default AboutSection;
