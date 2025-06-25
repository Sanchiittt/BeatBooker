



import React from "react";
import Image from "next/image";

const Footer: React.FC = () => {
  return (
    <footer className="py-12 px-6 md:px-12 bg-black/90 border-t border-yellow-500/20 text-yellow-100">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mb-6 text-sm md:text-base">
          &copy; {new Date().getFullYear()} <span className="text-yellow-300 font-semibold">DJ Goldbeard</span>. All rights reserved.
        </p>

        <div className="flex justify-center gap-8 text-lg md:text-xl">
          <a
            href="https://odysee.com/@DJGoldbeard:3"
            className="hover:text-yellow-300 transition flex items-center gap-2"
          >
            <Image src="/assets/odyseelogo.png" alt="Odysee Logo" width={20} height={20} />
            Odysee
          </a>

          <a
            href="https://gram.social/dj_goldbeard"
            className="hover:text-yellow-300 transition flex items-center gap-2"
          >
            <Image src="/assets/gramlogo.svg" alt="Gram Logo" width={20} height={20} />
            Gram
          </a>

          {/* Future link
          <a
            href="#"
            className="hover:text-yellow-300 transition flex items-center gap-2"
          >
            <Image src="/assets/whatsapp.svg" alt="WhatsApp Logo" width={20} height={20} />
            WhatsApp
          </a>
          */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
