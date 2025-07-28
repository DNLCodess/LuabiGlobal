"use client";
import React, { useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";
import { ChevronRight, Play } from "lucide-react";
import Image from "next/image";

function HeroSection() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { innerWidth, innerHeight } = window;
    mouseX.set((clientX / innerWidth - 0.5) * 15);
    mouseY.set((clientY / innerHeight - 0.5) * 15);
  };

  return (
    <section
      className="relative min-h-screen w-full overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Image */}
      <motion.div
        className="absolute inset-0 w-full h-full"
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 10, ease: "easeOut" }}
      >
        <motion.div style={{ y }} className="w-full h-full relative">
          <Image
            src="https://images.unsplash.com/photo-1570710891163-6d3b5c47248b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80"
            alt="Airplane wing view over tropical paradise"
            fill
            style={{ objectFit: "cover" }}
            onLoadingComplete={() => setImageLoaded(true)}
            priority
          />
        </motion.div>

        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-6">
        <motion.div
          style={{ opacity }}
          className="text-center text-white max-w-6xl mx-auto"
        >
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1.2,
              delay: 0.5,
              type: "spring",
              stiffness: 100,
              damping: 12,
            }}
          >
            <motion.h1
              className="text-5xl md:text-7xl lg:text-8xl font-black mb-8 leading-[0.85] tracking-tight"
              style={{
                textShadow:
                  "0 8px 32px rgba(0,0,0,0.6), 0 4px 16px rgba(0,0,0,0.4)",
              }}
            >
              <motion.span
                style={{ x: useTransform(springX, [-15, 15], [-8, 8]) }}
                className="inline-block text-white"
              >
                Discover the
              </motion.span>
              <br />
              <motion.span
                className="text-orange-400 font-black"
                style={{
                  filter: "drop-shadow(0 4px 20px rgba(251, 146, 60, 0.4))",
                }}
              >
                World with Luabi
              </motion.span>
            </motion.h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 0.8,
              type: "spring",
              stiffness: 120,
            }}
            className="text-2xl md:text-3xl lg:text-4xl mb-12 max-w-5xl mx-auto leading-relaxed font-light text-white"
            style={{
              textShadow:
                "0 4px 20px rgba(0,0,0,0.7), 0 2px 10px rgba(0,0,0,0.5)",
            }}
          >
            Your gateway to extraordinary adventures across the globe.
            <br />
            <span className="text-orange-200">
              Professional travel planning • Luxury flights • Dream
              destinations.
            </span>
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 1,
              delay: 1.1,
              type: "spring",
              stiffness: 100,
            }}
            className="flex flex-col sm:flex-row gap-8 justify-center items-center"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group relative bg-orange-500 hover:bg-orange-400 text-white px-14 py-4 rounded-full font-bold text-xl shadow-2xl hover:shadow-orange-500/40 transition-all duration-300 overflow-hidden border-2 border-orange-400"
            >
              <motion.div
                className="absolute inset-0 bg-orange-400"
                initial={{ x: "-100%" }}
                whileHover={{ x: "0%" }}
                transition={{ duration: 0.3 }}
              />
              <span className="relative z-10 flex items-center">
                Book Your Flight
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ChevronRight className="ml-3 h-7 w-7" />
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              whileHover={{
                scale: 1.05,
                y: -3,
              }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 25 }}
              className="group bg-white/20 hover:bg-white/30 text-white px-14 py-4 rounded-full font-bold text-xl border-2 border-white/40 hover:border-white/60 transition-all duration-300 backdrop-blur-sm"
            >
              <span className="flex items-center">
                <Play className="mr-3 h-7 w-7 group-hover:text-orange-300 transition-colors duration-300" />
                Explore Destinations
              </span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-20"
      >
        <motion.div
          className="flex flex-col items-center cursor-pointer"
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <div className="w-6 h-12 border-2 border-white/70 rounded-full flex justify-center backdrop-blur-sm bg-white/10">
            <motion.div
              className="w-1.5 h-4 bg-white/90 rounded-full mt-2"
              animate={{ y: [0, 16, 0], opacity: [1, 0.3, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <motion.span
            className="text-white/90 text-sm font-semibold mt-4 tracking-widest uppercase backdrop-blur-sm bg-black/20 px-3 py-1 rounded-full"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2.5, repeat: Infinity }}
            style={{
              textShadow: "0 2px 8px rgba(0,0,0,0.6)",
            }}
          >
            Scroll Down
          </motion.span>
        </motion.div>
      </motion.div>
    </section>
  );
}
export default HeroSection;
