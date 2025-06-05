import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="backdrop-blur-sm bg-white/5 sticky top-0 z-50 border-b border-white/10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-12">
        <h1 className="text-3xl font-bold tracking-wider">DJ VibeMaster</h1>
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li><a href="#events" className="hover:text-purple-400 transition">Events</a></li>
            <li><a href="#about" className="hover:text-purple-400 transition">About</a></li>
            <li><a href="#booking" className="hover:text-purple-400 transition">Book</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
