"use client";
import { motion } from "framer-motion";

export default function Loading() {
  // Simplified animated loading elements
  const PulsingDot = ({ delay = 0, size = "w-3 h-3" }) => (
    <motion.div
      className={`${size} rounded-full`}
      style={{ backgroundColor: "#FFA200" }}
      animate={{
        scale: [1, 1.2, 1],
        opacity: [0.6, 0.8, 0.6],
      }}
      transition={{
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );

  // Reduced and slower floating elements
  const FloatingCircle = ({
    delay = 0,
    size = "w-2 h-2",
    color = "#491CA0",
    position = "top-20 left-20",
  }) => (
    <motion.div
      className={`${size} rounded-full absolute ${position} opacity-20`}
      style={{ backgroundColor: color }}
      animate={{
        y: [0, -8, 0],
        opacity: [0.1, 0.2, 0.1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    />
  );

  const ProgressBar = () => (
    <div className="w-48 h-1.5 bg-gray-200 rounded-full overflow-hidden">
      <motion.div
        className="h-full rounded-full"
        style={{
          background: "linear-gradient(to right, #491CA0, #FFA200)",
        }}
        initial={{ width: "0%" }}
        animate={{ width: "100%" }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );

  const LogoPlaceholder = () => (
    <motion.div
      className="relative w-40 h-40 mb-8 mx-auto"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1.2, ease: "easeOut" }}
    >
      {/* Clean, minimal container for your text-heavy image */}
      <div className="w-full h-full bg-white rounded-xl shadow-lg flex items-center justify-center overflow-hidden border border-gray-100">
        {/* Your actual loading image with text goes here */}
        <img
          src="/logo2.svg"
          alt="Luabi Global Loading"
          className="w-full h-full object-cover object-center rounded-xl"
        />
      </div>

      {/* Very subtle border animation - won't compete with image text */}
      <motion.div
        className="absolute -inset-1 border border-gray-200 rounded-xl opacity-40"
        animate={{
          opacity: [0.2, 0.4, 0.2],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </motion.div>
  );

  const AnimatedText = ({ text, delay = 0 }) => (
    <motion.div
      className="overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 1 }}
    >
      <motion.div
        initial={{ y: 15 }}
        animate={{ y: 0 }}
        transition={{
          delay: delay + 0.3,
          duration: 0.8,
          ease: "easeOut",
        }}
      >
        {text}
      </motion.div>
    </motion.div>
  );

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-white via-gray-50/30 to-gray-100/50 overflow-hidden flex items-center justify-center px-6">
      {/* Minimal background elements - very subtle */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 162, 0, 0.03)" }}
        />
        <div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(73, 28, 160, 0.03)" }}
        />
      </div>

      {/* Very few, subtle floating elements */}
      <FloatingCircle
        delay={0}
        size="w-2 h-2"
        color="#FFA200"
        position="top-32 left-32"
      />
      <FloatingCircle
        delay={2}
        size="w-1.5 h-1.5"
        color="#491CA0"
        position="bottom-40 right-40"
      />
      <FloatingCircle
        delay={4}
        size="w-2 h-2"
        color="#3A1E66"
        position="top-40 right-32"
      />

      <div className="relative max-w-md mx-auto text-center">
        {/* Minimal loading badge */}
        <motion.div
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-medium mb-6 bg-white/60 backdrop-blur-sm"
          style={{ color: "#491CA0" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <PulsingDot size="w-1.5 h-1.5" />
          Loading
        </motion.div>

        {/* Logo/Image Container - this is your focal point */}
        <LogoPlaceholder />

        {/* Company Name - simplified animation */}
        <AnimatedText
          text={
            <h1
              className="text-2xl md:text-3xl font-bold mb-3"
              style={{ color: "#3A1E66" }}
            >
              Luabi
              <span
                className="text-transparent bg-clip-text bg-gradient-to-r ml-2"
                style={{
                  backgroundImage:
                    "linear-gradient(to right, #491CA0, #FFA200)",
                }}
              >
                Global
              </span>
            </h1>
          }
          delay={0.8}
        />

        {/* Loading Message */}
        <AnimatedText
          text={
            <p className="text-gray-500 mb-6 text-sm leading-relaxed">
              Preparing your journey...
            </p>
          }
          delay={1.2}
        />

        {/* Simplified Progress Bar */}
        <motion.div
          className="flex justify-center mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <ProgressBar />
        </motion.div>

        {/* Minimal Loading Dots */}
        <motion.div
          className="flex items-center justify-center gap-1.5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
        >
          <PulsingDot delay={0} size="w-2 h-2" />
          <PulsingDot delay={0.3} size="w-2 h-2" />
          <PulsingDot delay={0.6} size="w-2 h-2" />
        </motion.div>
      </div>
    </div>
  );
}
