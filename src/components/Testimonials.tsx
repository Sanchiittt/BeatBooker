import React from "react";

const Testimonials: React.FC = () => {
  const testimonials = [
    {
      quote: "He turned our wedding into a concert. Unforgettable vibes!",
      name: "Riya & Akash",
    },
    {
      quote: "Perfect for our office party. Professional and high energy.",
      name: "Tata Tech HR",
    },
    {
      quote: 'Literally the best party DJ we\'ve ever hired. Period.',

      name: "Manish (Event Planner)",
    },
  ];

  return (
    <section className="py-20 bg-black/30 backdrop-blur-xl text-center px-6 md:px-12">
      <h3 className="text-4xl font-bold text-purple-300 mb-10">What Clients Say</h3>
      <div className="space-y-10 max-w-4xl mx-auto">
        {testimonials.map(({ quote, name }) => (
          <div
            key={name}
            className="bg-white/5 border border-purple-900 p-6 rounded-xl shadow-md"
          >
            <p className="text-lg text-purple-200 italic">"{quote}"</p>
            <p className="mt-3 text-sm text-purple-400 font-medium">— {name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
