// import React from "react";

// const EventsSection: React.FC = () => {
//   const events = [
//     {
//       title: "House Parties",
//       desc: "Intimate vibes and hard-hitting beats for chill or wild nights.",
//     },
//     {
//       title: "Weddings",
//       desc: "Your big day deserves a flawless mix of love, lights, and sound.",
//     },
//     {
//       title: "Corporate Events",
//       desc: "Polished beats to energize formal venues and professional setups.",
//     },
//   ];

//   return (
//     <section id="events" className="py-20 max-w-7xl mx-auto px-6 md:px-12">
//       <h3 className="text-4xl font-semibold mb-12 text-center text-purple-300">
//         We Spin for Every Vibe
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//         {events.map(({ title, desc }) => (
//           <div
//             key={title}
//             className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300"
//           >
//             <h4 className="text-2xl font-bold mb-3">{title}</h4>
//             <p className="text-purple-300 text-lg">{desc}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default EventsSection;


// components/EventsSection.tsx
// import React from "react";

// const EventsSection: React.FC = () => {
//   return (
//     <section id="events" className="py-24 px-6 md:px-12 bg-black/30">
//       <div className="max-w-6xl mx-auto text-center">
//         <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
//           Where the Magic Happens
//         </h3>
//         <p className="text-lg text-yellow-200 max-w-2xl mx-auto mb-12">
//           DJ Goldbeard has turned up the volume at iconic events around the globe — from private yacht parties to packed festival grounds.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
//           <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 shadow-md">
//             <h4 className="text-xl font-semibold text-yellow-300 mb-2">Weddings</h4>
//             <p className="text-yellow-100">Golden memories, curated soundtracks for your special day.</p>
//           </div>
//           <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 shadow-md">
//             <h4 className="text-xl font-semibold text-yellow-300 mb-2">Club Nights</h4>
//             <p className="text-yellow-100">Residencies that shake walls and hearts — every weekend.</p>
//           </div>
//           <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-xl p-6 shadow-md">
//             <h4 className="text-xl font-semibold text-yellow-300 mb-2">Corporate Events</h4>
//             <p className="text-yellow-100">Professional sound. Unforgettable energy. Brand-aligned vibes.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default EventsSection;



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
