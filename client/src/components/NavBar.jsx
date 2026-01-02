import { Command, Menu, X } from "lucide-react";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      setIsOpen(false); // close menu on scroll
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Navbar */}
      <header
        className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
        ${
          isScrolled
            ? "h-14 bg-[#1b1b1b] border border-white/10 rounded-full px-6 w-[90vw] max-w-3xl"
            : "h-16 bg-[#1b1b1b] w-[96%] max-w-4xl rounded-2xl px-4"
        }`}
      >
        <nav className="flex items-center justify-between h-full">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Command className="w-5 h-5 text-indigo-400" />
            <span className="font-semibold text-white">CodingHub</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
            {["Features", "Prices", "Testimonials"].map((item) => (
              <a key={item} href="#" className="hover:text-white transition">
                {item}
              </a>
            ))}
            <button className="ml-2 px-4 py-1.5 rounded-full bg-indigo-500 text-white text-sm hover:bg-indigo-600 transition">
              Start Coding
            </button>
          </div>

          {/* Mobile Icon */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </nav>
      </header>

      {/* Mobile Menu */}
      <div
        className={`fixed top-24 left-1/2 -translate-x-1/2 z-40 w-[90%]
        bg-[#1b1b1b] border border-white/10 rounded-2xl
        transition-all duration-300 md:hidden
        ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"}`}
      >
        <div className="flex flex-col gap-4 p-5 text-gray-300 text-sm">
          {["Features", "Prices", "Testimonials"].map((item) => (
            <a
              key={item}
              href="#"
              className="hover:text-white transition"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}

          <button className="mt-2 px-4 py-2 rounded-full bg-indigo-500 text-white hover:bg-indigo-600 transition">
            Start Coding
          </button>
        </div>
      </div>
    </>
  );
};

export default NavBar;
