"use client";
import { motion } from "framer-motion";
import { ArrowRight, Home, Search, MapPin, Compass } from "lucide-react";
import { useRouter } from "next/navigation";

export default function NotFoundPage() {
  const router = useRouter();

  // Custom animated icons
  const AnimatedCompassIcon = () => (
    <div className="relative w-12 h-12">
      <motion.div
        className="w-12 h-12 border-4 rounded-full relative"
        style={{ borderColor: "#FFFFFF" }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Compass needle */}
        <motion.div
          className="absolute top-1 left-1/2 w-0.5 h-4 transform -translate-x-1/2 origin-bottom"
          style={{ backgroundColor: "#FFA200" }}
          animate={{
            rotate: [0, 45, -30, 15, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        {/* Center dot */}
        <div
          className="absolute top-1/2 left-1/2 w-2 h-2 rounded-full transform -translate-x-1/2 -translate-y-1/2"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        {/* Direction markers */}
        <div
          className="absolute -top-1 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <div
          className="absolute -bottom-1 left-1/2 w-1 h-1 rounded-full transform -translate-x-1/2"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <div
          className="absolute top-1/2 -left-1 w-1 h-1 rounded-full transform -translate-y-1/2"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <div
          className="absolute top-1/2 -right-1 w-1 h-1 rounded-full transform -translate-y-1/2"
          style={{ backgroundColor: "#FFFFFF" }}
        />
      </motion.div>
    </div>
  );

  const FloatingElement = ({
    delay = 0,
    size = "w-4 h-4",
    color = "#FFA200",
  }) => (
    <motion.div
      className={`${size} rounded-full absolute`}
      style={{ backgroundColor: color }}
      animate={{
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 180, 360],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
        delay: delay,
      }}
    >
      <div className="absolute inset-1 bg-white/30 rounded-full animate-pulse" />
    </motion.div>
  );

  const quickLinks = [
    {
      icon: Home,
      label: "Back to Home",
      description: "Return to our homepage",
      action: () => router.push("/"),
    },

    {
      icon: MapPin,
      label: "Contact Us",
      description: "Get in touch with our team",
      action: () => router.push("/contact"),
    },
  ];

  return (
    <div className="min-h-screen relative bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden flex items-center justify-center px-6">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 162, 0, 0.1)" }}
        />
        <div
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(73, 28, 160, 0.1)" }}
        />
        <div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(58, 30, 102, 0.05)" }}
        />
      </div>

      {/* Floating elements */}
      <FloatingElement delay={0} size="w-3 h-3" color="#FFA200" />
      <FloatingElement delay={1} size="w-2 h-2" color="#491CA0" />
      <FloatingElement delay={2} size="w-4 h-4" color="#3A1E66" />

      <div className="absolute top-20 left-20">
        <FloatingElement delay={0.5} size="w-6 h-6" color="#FFA200" />
      </div>
      <div className="absolute bottom-32 right-32">
        <FloatingElement delay={1.5} size="w-5 h-5" color="#491CA0" />
      </div>
      <div className="absolute top-40 right-20">
        <FloatingElement delay={2.5} size="w-3 h-3" color="#3A1E66" />
      </div>

      <div className="relative max-w-4xl mx-auto text-center">
        {/* Main Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* 404 Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-8"
            style={{
              backgroundColor: "rgba(73, 28, 160, 0.1)",
              color: "#491CA0",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#FFA200" }}
            />
            Page Not Found
          </motion.div>

          {/* Animated Compass Icon */}
          <motion.div
            className="inline-flex items-center justify-center w-24 h-24 rounded-3xl mb-8 shadow-2xl"
            style={{
              background: "linear-gradient(135deg, #491CA0, #3A1E66)",
            }}
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{
              delay: 0.4,
              duration: 1,
              type: "spring",
              stiffness: 100,
              damping: 20,
            }}
            whileHover={{
              scale: 1.1,
              rotate: [0, -10, 10, 0],
              transition: { duration: 0.6 },
            }}
          >
            <AnimatedCompassIcon />
          </motion.div>

          {/* 404 Number */}
          <motion.div
            className="text-8xl md:text-9xl font-black mb-6 leading-none"
            style={{ color: "#3A1E66" }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.6, duration: 0.8, type: "spring" }}
          >
            4
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r mx-2"
              style={{
                backgroundImage: "linear-gradient(to right, #491CA0, #FFA200)",
              }}
            >
              0
            </span>
            4
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ color: "#3A1E66" }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            Oops! You've Lost Your Way
          </motion.h1>

          {/* Description */}
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.6 }}
          >
            It seems like you've wandered off the beaten path. Don't worry –
            even the best explorers sometimes need to recalibrate their compass.
            Let's get you back on track to your next adventure!
          </motion.p>

          {/* Quick Links */}
          <motion.div
            className="grid md:grid-cols-2 gap-6 mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            {quickLinks.map((link, i) => {
              const IconComponent = link.icon;
              return (
                <motion.div
                  key={i}
                  className="group relative cursor-pointer"
                  whileHover={{
                    y: -5,
                    transition: { duration: 0.3, ease: "easeOut" },
                  }}
                  onClick={link.action}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.4 + i * 0.1, duration: 0.6 }}
                >
                  <div className="relative bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                    {/* Background gradient */}
                    <div
                      className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background:
                          "linear-gradient(135deg, transparent, transparent, rgba(73, 28, 160, 0.03))",
                      }}
                    />

                    {/* Icon */}
                    <div className="relative mb-4">
                      <motion.div
                        className="w-12 h-12 rounded-xl flex items-center justify-center shadow-md"
                        style={{
                          background:
                            "linear-gradient(135deg, #491CA0, #3A1E66)",
                        }}
                        whileHover={{
                          scale: 1.1,
                          rotate: [0, -5, 5, 0],
                          transition: { duration: 0.6 },
                        }}
                      >
                        <IconComponent className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    {/* Content */}
                    <h3
                      className="text-lg font-bold mb-2"
                      style={{ color: "#3A1E66" }}
                    >
                      {link.label}
                    </h3>
                    <p className="text-gray-600 text-sm">{link.description}</p>

                    {/* Arrow indicator */}
                    <motion.div
                      className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{
                        x: 2,
                        transition: { duration: 0.2 },
                      }}
                    >
                      <ArrowRight
                        className="w-4 h-4"
                        style={{ color: "#491CA0" }}
                      />
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Main CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8, duration: 0.6 }}
          >
            <motion.button
              className="inline-flex items-center gap-4 text-white px-8 py-4 rounded-full font-medium shadow-lg cursor-pointer"
              style={{
                background: "linear-gradient(to right, #491CA0, #3A1E66)",
              }}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(73, 28, 160, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onClick={() => router.push("/")}
            >
              <Home className="w-5 h-5" />
              <span>Take Me Home</span>
              <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
