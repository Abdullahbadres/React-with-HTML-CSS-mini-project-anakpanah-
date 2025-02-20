import { useState } from "react";
// import React from "react";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white h-16 flex items-center px-6 shadow-lg z-50">
      <div className="container mx-auto flex justify-between items-center w-full">
        {/* Logo */}
        <div className="flex items-center">
        <img
          className="h-8 md:h-10 lg:h-12 w-auto max-h-full"
          src="https://i.ibb.co.com/rGwkb5cs/logo-anak-panah-kopi.png"
          alt="Anak Panah Coffee Logo"
        />
        </div>

        {/* Tagline */}
        <p className="text-sm md:text-2xl font-light uppercase tracking-wide text-center flex-1">
          OUR COFFEE CAN FIX YOUR LIFE
        </p>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-4 text-lg font-medium">
          <a href="#home" className="hover:text-amber-400 transition">
            HOME
          </a>
          <a href="#best-signature-menu" className="hover:text-amber-400 transition">
            BEST SIGNATURE MENU
          </a>
          <a href="#FULL MENU" className="hover:text-amber-400 transition">
            FULL MENU
          </a>
          <a href="#ABOUT US" className="hover:text-amber-400 transition">
            ABOUT US
          </a>
          <a href="https://wa.me/+628987588850">
            <img
              className="size-6"
              src="https://i.ibb.co.com/1JJgchrt/apk-contact-us.jpg"
              alt="Contact Icon"
            />
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden focus:outline-none ml-4"
        >
          <svg
            className="w-8 h-8 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg" //use???
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-black text-white flex flex-col text-center py-4 shadow-lg">
          <a href="#home" className="py-2 hover:bg-amber-400" onClick={() => setMenuOpen(false)}>
            HOME
          </a>
          <a href="#best-signature-menu" className="py-2 hover:bg-amber-400" onClick={() => setMenuOpen(false)}>
            BEST SIGNATURE MENU
          </a>
          <a href="#FULL MENU" className="py-2 hover:bg-amber-400" onClick={() => setMenuOpen(false)}>
            FULL MENU
          </a>
          <a href="#ABOUT US" className="py-2 hover:text-amber-400" onClick={() => setMenuOpen(false)}>
            ABOUT US
          </a>
          <a href="https://wa.me/+628987588850" className="py-2 hover:text-amber-400 transition">
            <img className="size-6 mx-auto" src="https://i.ibb.co.com/1JJgchrt/apk-contact-us.jpg" alt="Contact Icon" />
          </a>
          <img className="h-12 w-auto mx-auto mt-2" src="https://i.ibb.co.com/rGwkb5cs/logo-anak-panah-kopi.png" alt="Anak Panah Coffee Logo" />
        </div>
      )}
    </nav>
  );
}

export default Navbar