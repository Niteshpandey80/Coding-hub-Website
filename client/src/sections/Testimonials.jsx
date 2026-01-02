import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Aarav Mehta",
    role: "Frontend Developer",
    image: "/av1.png",
    text:
      "CodingHub helped me build landing pages much faster. The UI designs and ready-made components are clean, modern, and easy to integrate into my projects.",
  },
  {
    name: "Sophia Chen",
    role: "Full Stack Developer",
    image: "/av2.png",
    text:
      "The component library saved me hours of development time. Everything is well-structured, responsive, and production-ready.",
  },
  {
    name: "Daniel Johnson",
    role: "UI/UX Designer",
    image: "/av3.png",
    text:
      "I love how I can preview full designs before downloading. CodingHub bridges the gap between design and development perfectly.",
  },
  {
    name: "Priya Sharma",
    role: "Startup Founder",
    image: "/av4.png",
    text:
      "With CodingHub, our team ships faster. The designs are premium-quality and the Pro plan is absolutely worth it for startups.",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-semibold mb-4">
          Trusted by <span className="text-indigo-400">Coders</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Join thousands of satisfied Coders on CodingHub
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
