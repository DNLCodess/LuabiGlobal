"use client";

import { Globe, Mail, Phone, MapPin } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const quickLinks = [
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#destinations", label: "Destinations" },
    { href: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    { icon: Globe, href: "#", label: "Website" },
    { icon: Mail, href: "mailto:info@luabitravels.com", label: "Email" },
  ];

  return (
    <footer
      className="relative py-16 overflow-hidden"
      style={{ backgroundColor: "#3A1E66" }}
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute top-10 right-20 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 162, 0, 0.2)" }}
        />
        <div
          className="absolute bottom-10 left-20 w-48 h-48 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(73, 28, 160, 0.2)" }}
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            {/* Logo Container - Properly Sized */}
            <div className="flex items-center mb-6">
              <div>
                <h3 className="text-2xl font-bold text-white">
                  Luabi
                  <span
                    className="text-transparent bg-clip-text bg-gradient-to-r ml-1"
                    style={{
                      backgroundImage:
                        "linear-gradient(to right, #491CA0, #FFA200)",
                    }}
                  >
                    Global
                  </span>
                </h3>
              </div>
            </div>

            <p className="text-white/80 leading-relaxed mb-6">
              Creating extraordinary travel experiences that connect you with
              the world's most beautiful destinations.
            </p>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, i) => {
                const IconComponent = social.icon;
                return (
                  <motion.a
                    key={i}
                    href={social.href}
                    className="w-10 h-10 rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110"
                    style={{ backgroundColor: "rgba(255, 255, 255, 0.1)" }}
                    whileHover={{
                      backgroundColor: "#FFA200",
                      transition: { duration: 0.3 },
                    }}
                    aria-label={social.label}
                  >
                    <IconComponent className="w-5 h-5 text-white" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h5 className="text-xl font-bold mb-6 text-white">Quick Links</h5>
            <ul className="space-y-3">
              {quickLinks.map((link, i) => (
                <li key={i}>
                  <motion.a
                    href={link.href}
                    className="text-white/70 hover:text-white transition-colors duration-300 flex items-center group"
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <span
                      className="w-2 h-2 rounded-full mr-3 transition-all duration-300"
                      style={{ backgroundColor: "rgba(255, 162, 0, 0.5)" }}
                    />
                    {link.label}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h5 className="text-xl font-bold mb-6 text-white">Contact Info</h5>
            <div className="space-y-4">
              <motion.div
                className="flex items-center text-white/70 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Phone className="w-5 h-5 mr-3" style={{ color: "#FFA200" }} />
                <span>+234 703-432-0009</span>
              </motion.div>

              <motion.div
                className="flex items-center text-white/70 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <Mail className="w-5 h-5 mr-3" style={{ color: "#FFA200" }} />
                <a href="mailto:mayorfromthe60s@gmail.com">
                  mayorfromthe60s@gmail.com
                </a>
              </motion.div>

              <motion.div
                className="flex items-start text-white/70 hover:text-white transition-colors duration-300"
                whileHover={{ x: 5 }}
              >
                <MapPin
                  className="w-5 h-5 mr-3 mt-0.5"
                  style={{ color: "#FFA200" }}
                />
                <span>
                  Mega Plaza, 14 Idowu Martins
                  <br />
                  Victoria Island, Lagos
                </span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-white/20 mt-12 pt-8 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/50 text-sm">
              © 2025 Luabi Global. All rights reserved.
            </p>

            <div className="flex gap-6 text-sm">
              <motion.a
                href="/privacy"
                className="text-white/50 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Privacy Policy
              </motion.a>
              <motion.a
                href="/terms"
                className="text-white/50 hover:text-white transition-colors duration-300"
                whileHover={{ y: -2 }}
              >
                Terms of Service
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative gradient line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-1"
        style={{
          background: "linear-gradient(to right, #491CA0, #FFA200, #3A1E66)",
        }}
      />
    </footer>
  );
}
