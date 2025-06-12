// import React from "react";

// const WhyChooseUs: React.FC = () => {
//   const reasons = [
//     { title: "10+ Years Experience", icon: "🎧" },
//     { title: "Premium Sound Setup", icon: "🔊" },
//     { title: "Tailored Playlists", icon: "🎶" },
//   ];

//   return (
//     <section className="py-20 max-w-6xl mx-auto px-6 md:px-12">
//       <h3 className="text-4xl font-bold text-center text-purple-300 mb-12">
//         Why Choose DJ VibeMaster?
//       </h3>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//         {reasons.map(({ title, icon }) => (
//           <div
//             key={title}
//             className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-purple-900/40 transition"
//           >
//             <div className="text-5xl mb-4">{icon}</div>
//             <h4 className="text-2xl font-semibold text-white">{title}</h4>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;



// components/WhyChooseUs.tsx
// import React from "react";

// const WhyChooseUs: React.FC = () => {
//   return (
//     <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-yellow-900/20 via-black/80 to-yellow-950/30 text-white">
//       <div className="max-w-6xl mx-auto text-center">
//         <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
//           Why Goldbeard?
//         </h3>
//         <p className="text-yellow-100 max-w-2xl mx-auto mb-12">
//           Booking DJ Goldbeard means unforgettable nights, professional experience, and a brand that brings its own crowd.
//         </p>

//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/20 shadow-md">
//             <h4 className="text-xl font-semibold text-yellow-300 mb-2">Elite Sound</h4>
//             <p className="text-yellow-100">Top-tier equipment and custom-mixed tracks that energize any venue.</p>
//           </div>
//           <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/20 shadow-md">
//             <h4 className="text-xl font-semibold text-yellow-300 mb-2">Experience</h4>
//             <p className="text-yellow-100">Years in the game, thousands of events, and a track record of high-energy success.</p>
//           </div>
//           <div className="bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/20 shadow-md">
//             <h4 className="text-xl font-semibold text-yellow-300 mb-2">Hype Factor</h4>
//             <p className="text-yellow-100">Goldbeard’s name draws crowds — your event gains instant buzz.</p>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default WhyChooseUs;




import React from "react";

const reasons = [
  {
    icon: "🎧",
    title: "Elite Sound",
    desc: "Top-tier equipment and custom-mixed tracks that energize any venue.",
  },
  {
    icon: "🏆",
    title: "Experience",
    desc: "Years in the game, thousands of events, and a track record of high-energy success.",
  },
  {
    icon: "🔥",
    title: "Hype Factor",
    desc: "Goldbeard’s name draws crowds — your event gains instant buzz.",
  },
];

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-gradient-to-br from-yellow-900/20 via-black/80 to-yellow-950/30 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-4">
          Why Goldbeard?
        </h3>
        <p className="text-yellow-100 max-w-2xl mx-auto mb-12">
          Booking DJ Goldbeard means unforgettable nights, professional experience, and a brand that brings its own crowd.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {reasons.map(({ icon, title, desc }) => (
            <div
              key={title}
              className="group bg-yellow-500/10 p-6 rounded-xl border border-yellow-500/20 shadow-md hover:shadow-yellow-400/30 hover:scale-[1.03] transition-all duration-300 ease-in-out"
            >
              <div className="text-4xl mb-4 group-hover:-translate-y-1 transition-transform">{icon}</div>
              <h4 className="text-xl font-semibold text-yellow-300 mb-2 group-hover:text-yellow-400 transition-colors">
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

export default WhyChooseUs;
