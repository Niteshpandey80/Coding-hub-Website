import {
  Wallet,
  BarChart3,
  ShieldCheck,
  Bot,
} from "lucide-react";
import React, { useState } from "react";

const features = [
  {
    title: "Smart Wallet Tracking",
    description:
      "Track balances, monitor performance, and manage your crypto wallets with real-time insights.",
    icon: Wallet,
    image: "/fit1.png",
  },
  {
    title: "Real-Time Analytics",
    description:
      "Make informed decisions using live market data, charts, and performance indicators.",
    icon: BarChart3,
    image: "/fit2.png",
  },
  {
    title: "Risk Management Tools",
    description:
      "Set stop-loss, take-profit, and risk limits to protect your capital and trade with confidence.",
    icon: ShieldCheck,
    image: "/fit3.png",
  },
  {
    title: "Automated Trading Bots",
    description:
      "Deploy smart trading bots that execute strategies automatically based on market conditions.",
    icon: Bot,
    image: "/fit4.png",
  },
];

const FeaturesSection = () => {
  const [activeImage, setActiveImage] = useState(features[0].image);

  return (
    <section className="container mx-auto px-4 py-28">
      <div className="max-w-2xl mb-20">
        <h2 className="text-4xl md:text-6xl mb-6 tracking-tight clash-display">
          Advanced Trading <br />
          <span className="grad1 font-medium">Features & Tools</span>
        </h2>
        <p className="text-lg text-zinc-400">
          Experience professional-grade trading tools designed for modern
          traders.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-center">

        <div className="md:col-span-5 space-y-4">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div
                key={index}
                onMouseEnter={() => setActiveImage(feature.image)}
                className="group flex items-start gap-4 p-4 rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm cursor-pointer transition-all duration-300 hover:bg-indigo-500/10 hover:border-indigo-400/40"
              >
                <div className="p-2 rounded-xl bg-indigo-500/10 text-indigo-300 group-hover:bg-indigo-500/20 transition">
                  <Icon className="w-5 h-5" />
                </div>

                <div>
                  <h3 className="text-base font-medium text-indigo-300 mb-1 clash-display">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-zinc-400 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        <div className="md:col-span-7">
          <div className="relative h-[420px] rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-br from-indigo-500/10 to-purple-500/10">
            <img
              key={activeImage}
              src={activeImage}
              alt="Feature Preview"
              className="absolute inset-0 w-full h-full object-cover rounded-3xl opacity-0 animate-fadeIn"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
