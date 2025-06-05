import React from "react";

const EventsSection: React.FC = () => {
  const events = [
    {
      title: "House Parties",
      desc: "Intimate vibes and hard-hitting beats for chill or wild nights.",
    },
    {
      title: "Weddings",
      desc: "Your big day deserves a flawless mix of love, lights, and sound.",
    },
    {
      title: "Corporate Events",
      desc: "Polished beats to energize formal venues and professional setups.",
    },
  ];

  return (
    <section id="events" className="py-20 max-w-7xl mx-auto px-6 md:px-12">
      <h3 className="text-4xl font-semibold mb-12 text-center text-purple-300">
        We Spin for Every Vibe
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {events.map(({ title, desc }) => (
          <div
            key={title}
            className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300"
          >
            <h4 className="text-2xl font-bold mb-3">{title}</h4>
            <p className="text-purple-300 text-lg">{desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
