import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "David Wilson",
    role: "Early Forex Investor",
    image: "/av1.png",
    text:
      "The customer support is exceptional, and the platform’s intuitive design made getting started with crypto trading seamless. A game-changer for both beginners and pros.",
  },
  {
    name: "Emily Zhang",
    role: "DeFi Developer",
    image: "/av2.png",
    text:
      "We’ve seen remarkable improvements in our trading efficiency since switching to ForexTrade. The smart order routing and liquidity aggregation are particularly impressive.",
  },
  {
    name: "James Rodriguez",
    role: "Forex Security Expert",
    image: "/av3.png",
    text:
      "The security features are robust and the regular updates keep us ahead of emerging threats. It’s exactly what the Forex industry needed.",
  },
  {
    name: "Lisa Thompson",
    role: "Portfolio Manager",
    image: "/av4.png",
    text:
      "The platform’s advanced trading strategies and intuitive interface are invaluable for managing complex portfolios effectively.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-semibold mb-4">
          Trusted by <span className="text-indigo-400">Traders</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Join thousands of satisfied traders on ForexTrade
        </p>
      </div>

      <div className="relative overflow-hidden">
        <motion.div
          className="flex gap-8 w-max"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 35,
            repeat: Infinity,
          }}
          whileHover={{ animationPlayState: "paused" }}
        >
          {[...testimonials, ...testimonials].map((item, index) => (
            <div
              key={index}
              className="w-[340px] md:w-[420px] p-6 rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm"
            >
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium">{item.name}</h4>
                  <p className="text-sm text-zinc-400">{item.role}</p>
                </div>
              </div>
              <p className="text-zinc-300 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          ))}
        </motion.div>

        <div className="pointer-events-none absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-black to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-black to-transparent" />
      </div>
    </section>
  );
};

export default TestimonialsSection;
