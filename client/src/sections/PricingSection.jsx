import { Check } from "lucide-react";
import React from "react";

const plans = [
  {
    name: "Starter",
    price: "$0",
    duration: "/month",
    description: "Perfect for developers getting started with UI design",
    features: [
      "Access to free UI designs",
      "Download preview images",
      "Basic components library",
      "Community support",
    ],
    highlighted: false,
  },
  {
    name: "Pro",
    badge: "Most Popular",
    price: "$29",
    duration: "/month",
    description: "Best for developers building real-world projects",
    features: [
      "Full UI design library",
      "Production-ready React & Tailwind components",
      "Editable source files",
      "One-click downloads",
      "Priority support",
    ],
    highlighted: false,
  },
  {
    name: "Enterprise",
    price: "Custom",
    description: "Advanced solutions for teams and agencies",
    features: [
      "Unlimited design & component access",
      "Team collaboration",
      "Custom UI components",
      "Private design requests",
      "Dedicated account manager",
      "24/7 priority support",
    ],
    highlighted: false,
  },
];
const PricingSection = () => {
  return (
    <section className="container mx-auto px-4 py-32">
      <div className="text-center max-w-2xl mx-auto mb-20">
        <h2 className="text-4xl md:text-6xl font-semibold mb-6">
          Choose Your <span className="text-indigo-400">Coding</span>
          <br />
          <span className="text-indigo-400">Plan</span>
        </h2>
        <p className="text-zinc-400 text-lg">
          Select the perfect Coding plan with advanced features and competitive
          fees
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`group flex flex-col rounded-3xl border p-8 transition-all duration-300 h-full
            ${
              plan.highlighted
                ? "border-white/10 bg-indigo-500/[0.04] hover:border-indigo-400/70"
                : "border-white/10 bg-white/[0.02] hover:border-indigo-400/70"
            }`}
          >
            {plan.badge && (
              <span className="self-start mb-4 text-xs px-3 py-1 rounded-full bg-indigo-500/20 text-indigo-300">
                {plan.badge}
              </span>
            )}

            <h3 className="text-xl font-semibold mb-3">{plan.name}</h3>

            <div className="flex items-end gap-1 mb-4">
              <span className="text-4xl font-bold text-indigo-400">
                {plan.price}
              </span>
              {plan.duration && (
                <span className="text-zinc-400">{plan.duration}</span>
              )}
            </div>

            <p className="text-zinc-400 mb-6">{plan.description}</p>

            <ul className="space-y-3 mb-10 flex-grow">
              {plan.features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3 text-sm">
                  <Check className="w-4 h-4 text-indigo-400 shrink-0" />
                  <span className="text-zinc-300">{feature}</span>
                </li>
              ))}
            </ul>

            <button
              className={`mt-auto w-full py-3 rounded-xl text-sm font-medium transition-all duration-300
              ${
                plan.highlighted
                  ? "bg-indigo-500 hover:bg-indigo-600"
                  : "bg-white/10 hover:bg-indigo-500 hover:text-white"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};

export default PricingSection;
