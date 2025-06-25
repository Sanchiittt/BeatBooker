




// app/page.tsx
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
        background: "linear-gradient(to bottom right, #0B0014, #000000)",
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


