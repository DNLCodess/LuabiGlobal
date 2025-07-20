"use client";

import { Globe } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-midnight text-white py-16">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-8">
        <div>
          <div className="flex items-center mb-4">
            <Globe className="h-6 w-6 text-orange mr-2" />
            <h4 className="text-lg font-bold">Luabi Travels</h4>
          </div>
          <p className="text-sm text-white/80">
            Creating extraordinary travel experiences that connect you with the
            world's most beautiful destinations.
          </p>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-2">Quick Links</h5>
          <ul className="space-y-1 text-sm text-white/70">
            <li>
              <a href="#about">About Us</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="#destinations">Destinations</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div>
          <h5 className="text-lg font-semibold mb-2">Contact Info</h5>
          <p className="text-sm text-white/70">Phone: +1 (555) 123-4567</p>
          <p className="text-sm text-white/70">Email: info@luabitravels.com</p>
        </div>
      </div>
      <div className="text-center mt-12 text-white/50 text-sm">
        © 2025 Luabi Travels. All rights reserved.
      </div>
    </footer>
  );
}
