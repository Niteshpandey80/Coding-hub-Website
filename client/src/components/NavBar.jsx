import { Command } from "lucide-react";
import React, { useEffect, useState } from "react";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
  className={`fixed top-4 left-1/2 -translate-x-1/2 z-50 transition-all duration-300
  ${
    isScrolled
      ? "h-14 bg-[#1b1b1b] border border-white/10 rounded-full px-6 w-[90vw] max-w-3xl"
      : "h-15 bg-[#1b1b1b] w-[96%] max-w-4xl rounded-2xl px-3"
  }`}
>

      <nav className="flex items-center justify-between h-full">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Command className="w-5 h-5 text-indigo-400" />
          <span className="font-semibold text-white">ForexTrader</span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6 text-sm text-gray-300">
          {["Features", "Prices", "Testimonials"].map((item) => (
            <a key={item} href="#" className="hover:text-white transition">
              {item}
            </a>
          ))}

          <button className="ml-2 px-4 py-1.5 rounded-full bg-indigo-500 text-white text-sm hover:bg-indigo-600 transition">
            Start Trading
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <img src="/menu.svg" alt="menu" className="w-6 h-6" />
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
