// import React from "react";

// const Testimonials: React.FC = () => {
//   const testimonials = [
//     {
//       quote: "He turned our wedding into a concert. Unforgettable vibes!",
//       name: "Riya & Akash",
//     },
//     {
//       quote: "Perfect for our office party. Professional and high energy.",
//       name: "Tata Tech HR",
//     },
//     {
//       quote: 'Literally the best party DJ we\'ve ever hired. Period.',

//       name: "Manish (Event Planner)",
//     },
//   ];

//   return (
//     <section className="py-20 bg-black/30 backdrop-blur-xl text-center px-6 md:px-12">
//       <h3 className="text-4xl font-bold text-purple-300 mb-10">What Clients Say</h3>
//       <div className="space-y-10 max-w-4xl mx-auto">
//         {testimonials.map(({ quote, name }) => (
//           <div
//             key={name}
//             className="bg-white/5 border border-purple-900 p-6 rounded-xl shadow-md"
//           >
//             <p className="text-lg text-purple-200 italic">&quot;{quote}&quot;</p>

//             <p className="mt-3 text-sm text-purple-400 font-medium">— {name}</p>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Testimonials;



// components/Testimonials.tsx
import React from "react";

const Testimonials: React.FC = () => {
  return (
    <section className="py-24 px-6 md:px-12 bg-black/90 text-white">
      <div className="max-w-6xl mx-auto text-center">
        <h3 className="text-4xl md:text-5xl font-bold text-yellow-400 mb-10">
          What They Say
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <div className="bg-yellow-500/5 border border-yellow-500/20 p-6 rounded-xl text-left shadow-sm">
            <p className="text-yellow-100 text-lg">
              “Goldbeard brought our wedding to life. People are still talking about it 6 months later!”
            </p>
            <p className="mt-4 text-yellow-300 font-semibold">– Priya & Nikhil</p>
          </div>

          <div className="bg-yellow-500/5 border border-yellow-500/20 p-6 rounded-xl text-left shadow-sm">
            <p className="text-yellow-100 text-lg">
              “Every set is fresh, high energy, and tuned to the crowd. A true artist.”
            </p>
            <p className="mt-4 text-yellow-300 font-semibold">– Club Hyperion Manager</p>
          </div>

          <div className="bg-yellow-500/5 border border-yellow-500/20 p-6 rounded-xl text-left shadow-sm">
            <p className="text-yellow-100 text-lg">
              “Booking DJ Goldbeard was the best decision for our product launch. Our brand went viral.”
            </p>
            <p className="mt-4 text-yellow-300 font-semibold">– SonicTech Events Team</p>
          </div>

          <div className="bg-yellow-500/5 border border-yellow-500/20 p-6 rounded-xl text-left shadow-sm">
            <p className="text-yellow-100 text-lg">
              “His energy, transitions, and crowd control are unmatched. Gold standard.”
            </p>
            <p className="mt-4 text-yellow-300 font-semibold">– DJ Krys</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
