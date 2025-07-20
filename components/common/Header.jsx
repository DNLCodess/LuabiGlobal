"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Globe, Menu, X } from "lucide-react";
import Link from "next/link";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <motion.div
            className="flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
          >
            <Globe className="h-8 w-8 text-indigo" />
            <span className="text-xl font-bold text-midnight">
              Luabi Travels
            </span>
          </motion.div>
          <nav className="hidden md:flex space-x-8">
            {["Home", "About", "Services", "Destinations", "Contact"].map(
              (item) => (
                <motion.a
                  key={item}
                  href={
                    item === "Contact" ? "/contact" : `#${item.toLowerCase()}`
                  }
                  className="text-midnight hover:text-indigo transition-colors font-medium"
                  whileHover={{ y: -2 }}
                >
                  {item}
                </motion.a>
              )
            )}
          </nav>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden bg-white border-t border-gray-200"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {["Home", "About", "Services", "Destinations", "Contact"].map(
                (item) => (
                  <a
                    key={item}
                    href={
                      item === "Contact" ? "/contact" : `#${item.toLowerCase()}`
                    }
                    className="block px-3 py-2 text-midnight hover:text-indigo font-medium"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                )
              )}
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
