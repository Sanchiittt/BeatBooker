



import React from "react";

const EventsSection: React.FC = () => {
  const events = [
    {
      title: "Weddings",
      desc: "Golden memories, curated soundtracks for your special day.",
    },
    {
      title: "Club Nights",
      desc: "Residencies that shake walls and hearts — every weekend.",
    },
    {
      title: "Corporate Events",
      desc: "Professional sound. Unforgettable energy. Brand-aligned vibes.",
    },
    
  ];

  return (
    <section id="events" className="py-24 px-6 md:px-12 bg-black/30">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Where the Magic Happens
        </h3>
        <p className="text-lg text-yellow-200 max-w-2xl mx-auto mb-12">
          DJ Goldbeard has turned up the volume at iconic events around the globe — from private yacht parties to packed festival grounds.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {events.map(({ title, desc }) => (
            <div
              key={title}
              className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-[1.02] transition duration-300"
            >
              <h4 className="text-xl font-semibold text-yellow-300 mb-2">
                {title}
              </h4>
              <p className="text-yellow-100">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
