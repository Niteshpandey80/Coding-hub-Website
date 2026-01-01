import {
  Github,
  Linkedin,
  Twitter,
  Code2,
} from "lucide-react";
import React from "react";

const Footer = () => {
  return (
    <footer className="relative bg-black border border-white/5 rounded-3xl mx-4 mb-6 overflow-hidden">
      <div className="container mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="space-y-5">
            <div className="flex items-center gap-2 text-white">
              <Code2 className="text-indigo-400" />
              <span className="text-lg font-semibold">CodeCraft</span>
            </div>

            <p className="text-sm text-zinc-400 max-w-xs">
              Empowering developers with modern tools, clean code practices,
              and scalable solutions.
            </p>

            <div className="flex gap-4">
              <a className="text-zinc-400 hover:text-white transition">
                <Github />
              </a>
              <a className="text-zinc-400 hover:text-white transition">
                <Linkedin />
              </a>
              <a className="text-zinc-400 hover:text-white transition">
                <Twitter />
              </a>
            </div>
          </div>

          {/* Platform */}
          <div>
            <h4 className="text-white font-medium mb-4">Platform</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer transition">
                Features
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Pricing
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Integrations
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="text-white font-medium mb-4">Resources</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer transition">
                Documentation
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Tutorials
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Blog
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-medium mb-4">Legal</h4>
            <ul className="space-y-3 text-sm text-zinc-400">
              <li className="hover:text-white cursor-pointer transition">
                Privacy Policy
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Terms of Service
              </li>
              <li className="hover:text-white cursor-pointer transition">
                Cookie Policy
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="my-10 border-t border-white/5" />

        {/* Bottom */}
        <p className="text-center text-sm text-zinc-500">
          © 2026 Nitesh Pandey. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
