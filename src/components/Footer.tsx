import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="py-8 text-center text-purple-500 border-t border-white/10 backdrop-blur-md">
      <p className="mb-4">
        &copy; {new Date().getFullYear()} DJ VibeMaster. All rights reserved.
      </p>
      <div className="flex justify-center gap-6 text-xl">
        <a href="#" className="hover:text-purple-300 transition">🎵 SoundCloud</a>
        <a href="#" className="hover:text-purple-300 transition">📸 Instagram</a>
        <a href="#" className="hover:text-purple-300 transition">📞 WhatsApp</a>
      </div>
    </footer>
  );
};

export default Footer;
