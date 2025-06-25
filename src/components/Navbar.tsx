

// components/Navbar.tsx
import React from "react";
import Link from "next/link";
const Navbar: React.FC = () => {
  return (
    <header className="backdrop-blur-sm bg-yellow-500/5 sticky top-0 z-50 border-b border-yellow-400/10 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-6 md:px-12">
        <h1 className="text-3xl font-bold tracking-wider text-yellow-400">
          DJ Goldbeard
        </h1>
        <nav>
          <ul className="flex space-x-8 text-lg font-medium">
            <li>
              <a href="#events" className="hover:text-yellow-300 transition">
                Events
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-yellow-300 transition">
                About
              </a>
            </li>

            <Link href="/booking" className="hover:text-yellow-300 transition">
              Book Now
            </Link>

            <Link href="/admin" className="hover:text-yellow-300 transition">
              Admin
            </Link>


          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
