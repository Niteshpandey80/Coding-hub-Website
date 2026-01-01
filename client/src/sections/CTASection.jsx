import { ArrowRight } from "lucide-react";
import React from "react";

const CTASection = () => {
  return (
    <section className="relative py-32 overflow-hidden">
      <img
        src="/crack.png"
        alt=""
        className="absolute inset-0 w-full h-full object-cover opacity-40"
      />

      <div className="relative container mx-auto px-4">
        <div className="mx-auto max-w-5xl rounded-3xl border border-white/10 bg-black/40 backdrop-blur-xl px-6 py-20 text-center">
          <h2 className="text-3xl md:text-5xl font-semibold mb-6">
            Ready to start Coding?
          </h2>

          <p className="text-zinc-400 max-w-2xl mx-auto mb-10 text-lg">
            Join thousands of Coding who have already discovered the power of
            our platform.
          </p>

          <button className="inline-flex items-center gap-2 px-8 py-4 rounded-full bg-indigo-500 text-white font-medium hover:bg-indigo-600 transition">
            Create Account
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
