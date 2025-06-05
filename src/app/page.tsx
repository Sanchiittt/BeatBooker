// 'use client';
// import React from "react";

// const Home: React.FC = () => {
//   return (
//     <main
//       className="min-h-screen text-white font-sans scroll-smooth"
//       style={{
//         background: "linear-gradient(to bottom right, #1D012F, #000000)",
//       }}
//     >
//       {/* Navbar */}
//       <header className="backdrop-blur-sm bg-white/5 sticky top-0 z-50 border-b border-white/10 shadow-md">
//         <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-12">
//           <h1 className="text-3xl font-bold tracking-wider">DJ VibeMaster</h1>
//           <nav>
//             <ul className="flex space-x-8 text-lg font-medium">
//               <li><a href="#events" className="hover:text-purple-400 transition">Events</a></li>
//               <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
//               <li><a href="#booking" className="hover:text-purple-400 transition">Book</a></li>
//             </ul>
//           </nav>
//         </div>
//       </header>

//       {/* Hero */}
//       <section className="relative h-[90vh] overflow-hidden flex items-center justify-center text-center px-6 md:px-12">
//         <img
//           src="/dj-hero.jpg"
//           alt="DJ Performing"
//           className="absolute inset-0 w-full h-full object-cover opacity-30"
//         />
//         <div className="absolute inset-0 bg-gradient-to-br from-black/60 via-purple-900/70 to-black/80" />
       
//    <div className="z-10 text-center max-w-3xl">
//   <h2 className="text-5xl md:text-6xl font-extrabold bg-gradient-to-r from-purple-400 via-pink-500 to-indigo-400 text-transparent bg-clip-text animate-pulse">
//     Drop the Beat. Own the Night.
//   </h2>
//   <p className="mt-6 text-xl text-purple-200">
//     Premier DJ experience for weddings, parties & private events.
//   </p>

//   {/* Book Button */}
//   <a
//     href="#booking"
//     className="mt-8 inline-block bg-purple-700 hover:bg-purple-800 transition rounded-full py-3 px-10 text-white font-bold text-lg shadow-md"
//   >
//     Book Now
//   </a>

//   {/* Trust Badges */}
//  {/* Trust Badges - Differentiated from Button */}
// <div className="mt-8 flex flex-wrap justify-center gap-4 text-purple-300 font-semibold text-base">
//   <div className="flex items-center gap-2 border border-purple-500/30 bg-gradient-to-tr from-white/5 to-white/0 px-4 py-2 rounded-xl shadow-inner hover:shadow-purple-800/30 transition">
//     <span className="text-xl">🎧</span> 500+ Events
//   </div>
//   <div className="flex items-center gap-2 border border-purple-500/30 bg-gradient-to-tr from-white/5 to-white/0 px-4 py-2 rounded-xl shadow-inner hover:shadow-purple-800/30 transition">
//     <span className="text-xl">💯</span> 5-Star Rated
//   </div>
//   <div className="flex items-center gap-2 border border-purple-500/30 bg-gradient-to-tr from-white/5 to-white/0 px-4 py-2 rounded-xl shadow-inner hover:shadow-purple-800/30 transition">
//     <span className="text-xl">📍</span> PAN India
//   </div>
// </div>

// </div>


//       </section>

//       {/* Events */}
//       <section id="events" className="py-20 max-w-7xl mx-auto px-6 md:px-12">
//         <h3 className="text-4xl font-semibold mb-12 text-center text-purple-300">We Spin for Every Vibe</h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
//           {[
//             {
//               title: "House Parties",
//               desc: "Intimate vibes and hard-hitting beats for chill or wild nights.",
//             },
//             {
//               title: "Weddings",
//               desc: "Your big day deserves a flawless mix of love, lights, and sound.",
//             },
//             {
//               title: "Corporate Events",
//               desc: "Polished beats to energize formal venues and professional setups.",
//             },
//           ].map(({ title, desc }) => (
//             <div
//               key={title}
//               className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl hover:shadow-2xl hover:scale-[1.02] transition duration-300"
//             >
//               <h4 className="text-2xl font-bold mb-3">{title}</h4>
//               <p className="text-purple-300 text-lg">{desc}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* About */}
//       <section id="about" className="py-20 max-w-4xl mx-auto px-6 md:px-12 text-center">
//         <h3 className="text-4xl font-semibold mb-8 text-purple-300">About DJ VibeMaster</h3>
//         <p className="text-lg md:text-xl text-purple-400 leading-relaxed">
//           With over a decade of experience, DJ VibeMaster brings dynamic soundscapes, crowd-hyping transitions, and flawless playlists
//           that match the energy of any venue. We don’t just play tracks — we deliver memories.
//         </p>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 max-w-6xl mx-auto px-6 md:px-12">
//         <h3 className="text-4xl font-bold text-center text-purple-300 mb-12">
//           Why Choose DJ VibeMaster?
//         </h3>
//         <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
//           {[
//             { title: "10+ Years Experience", icon: "🎧" },
//             { title: "Premium Sound Setup", icon: "🔊" },
//             { title: "Tailored Playlists", icon: "🎶" },
//           ].map(({ title, icon }) => (
//             <div
//               key={title}
//               className="bg-white/5 border border-white/10 backdrop-blur-lg p-8 rounded-2xl shadow-lg hover:shadow-purple-900/40 transition"
//             >
//               <div className="text-5xl mb-4">{icon}</div>
//               <h4 className="text-2xl font-semibold text-white">{title}</h4>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Testimonials */}
//       <section className="py-20 bg-black/30 backdrop-blur-xl text-center px-6 md:px-12">
//         <h3 className="text-4xl font-bold text-purple-300 mb-10">What Clients Say</h3>
//         <div className="space-y-10 max-w-4xl mx-auto">
//           {[
//             {
//               quote: "He turned our wedding into a concert. Unforgettable vibes!",
//               name: "Riya & Akash",
//             },
//             {
//               quote: "Perfect for our office party. Professional and high energy.",
//               name: "Tata Tech HR",
//             },
//             {
//               quote: "Literally the best party DJ we've ever hired. Period.",
//               name: "Manish (Event Planner)",
//             },
//           ].map(({ quote, name }) => (
//             <div
//               key={name}
//               className="bg-white/5 border border-purple-900 p-6 rounded-xl shadow-md"
//             >
//               <p className="text-lg text-purple-200 italic">"{quote}"</p>
//               <p className="mt-3 text-sm text-purple-400 font-medium">— {name}</p>
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="py-8 text-center text-purple-500 border-t border-white/10 backdrop-blur-md">
//         <p className="mb-4">
//           &copy; {new Date().getFullYear()} DJ VibeMaster. All rights reserved.
//         </p>
//         <div className="flex justify-center gap-6 text-xl">
//           <a href="#" className="hover:text-purple-300 transition">🎵 SoundCloud</a>
//           <a href="#" className="hover:text-purple-300 transition">📸 Instagram</a>
//           <a href="#" className="hover:text-purple-300 transition">📞 WhatsApp</a>
//         </div>
//       </footer>
//     </main>
//   );
// };

// export default Home;







'use client';
import React from "react";

import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import EventsSection from "../components/EventsSection";
import AboutSection from "../components/AboutSection";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";

const Page: React.FC = () => {
  return (
    <main
      className="min-h-screen text-white font-sans scroll-smooth"
      style={{
        background: "linear-gradient(to bottom right, #1D012F, #000000)",
      }}
    >
      <Navbar />
      <HeroSection />
      <EventsSection />
      <AboutSection />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </main>
  );
};

export default Page;

