import React from "react";

const WhyChooseUs: React.FC = () => {
  const reasons = [
    { title: "10+ Years Experience", icon: "🎧" },
    { title: "Premium Sound Setup", icon: "🔊" },
    { title: "Tailored Playlists", icon: "🎶" },
  ];

  return (
    <section className="py-20 max-w-6xl mx-auto px-6 md:px-12">
      <h3 className="text-4xl font-bold text-center text-purple-300 mb-12">
        Why Choose DJ VibeMaster?
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {reasons.map(({ title, icon }) => (
          <div
            key={title}
            className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-purple-900/40 transition"
          >
            <div className="text-5xl mb-4">{icon}</div>
            <h4 className="text-2xl font-semibold text-white">{title}</h4>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
