"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: "travel",
      title: "Custom Travel Planning",
      description:
        "Personalized itineraries crafted to match your unique travel style and preferences.",
      features: [
        "Tailored experiences",
        "Local insights",
        "Flexible scheduling",
      ],
    },
    {
      icon: "globe",
      title: "Global Adventures",
      description:
        "Explore breathtaking destinations across all continents with expert guidance.",
      features: ["150+ destinations", "Cultural immersion", "Hidden gems"],
    },
    {
      icon: "support",
      title: "Premium Support",
      description:
        "24/7 assistance ensuring a seamless journey from start to finish.",
      features: [
        "Round-the-clock support",
        "Emergency assistance",
        "Real-time updates",
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  // Custom animated icons
  const AnimatedTravelIcon = () => (
    <div className="relative w-8 h-8">
      {/* Plane body */}
      <motion.div
        className="absolute top-3 left-1 w-6 h-2 rounded-full"
        style={{ backgroundColor: "#FFFFFF" }}
        animate={{
          x: [0, 2, 0],
          y: [0, -1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Wings */}
      <motion.div
        className="absolute top-2 left-2 w-4 h-4 border-2 rounded-full border-b-transparent"
        style={{ borderColor: "#FFFFFF" }}
        animate={{
          rotate: [0, 5, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Trail dots */}
      <motion.div
        className="absolute top-4 left-0 w-1 h-1 rounded-full"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.2,
        }}
      />
      <motion.div
        className="absolute top-4 left-0.5 w-1 h-1 rounded-full"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.4)" }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          delay: 0.4,
        }}
      />
    </div>
  );

  const AnimatedGlobeIcon = () => (
    <div className="relative w-8 h-8">
      {/* Main globe */}
      <motion.div
        className="w-8 h-8 border-2 rounded-full relative overflow-hidden"
        style={{ borderColor: "#FFFFFF" }}
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      >
        {/* Continents */}
        <div
          className="absolute top-1 left-1 w-2 h-1 rounded-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}
        />
        <div
          className="absolute top-3 right-1 w-1.5 h-1.5 rounded-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
        />
        <div
          className="absolute bottom-2 left-2 w-1 h-1 rounded-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.7)" }}
        />
        <div
          className="absolute top-2 left-3 w-1 h-2 rounded-full"
          style={{ backgroundColor: "rgba(255, 255, 255, 0.5)" }}
        />
      </motion.div>
      {/* Orbiting satellites */}
      <motion.div
        className="absolute -top-1 left-3 w-1 h-1 rounded-full"
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformOrigin: "1px 18px",
          backgroundColor: "#FFFFFF",
        }}
      />
      <motion.div
        className="absolute top-7 right-2 w-0.5 h-0.5 rounded-full"
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "linear",
        }}
        style={{
          transformOrigin: "-10px -14px",
          backgroundColor: "rgba(255, 255, 255, 0.7)",
        }}
      />
    </div>
  );

  const AnimatedSupportIcon = () => (
    <div className="relative w-8 h-8">
      {/* Shield base */}
      <motion.div
        className="w-8 h-8 rounded-t-full rounded-b-sm relative"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.9)" }}
        animate={{
          scale: [1, 1.05, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        {/* Checkmark */}
        <motion.div
          className="absolute top-2 left-2 w-1 h-2 border-r-2 border-b-2 transform rotate-45"
          style={{ borderColor: "#491CA0" }}
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatDelay: 2,
          }}
        />
      </motion.div>
      {/* Protective aura */}
      <motion.div
        className="absolute -inset-2 border rounded-full"
        style={{ borderColor: "rgba(255, 255, 255, 0.3)" }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.1, 0.3],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      {/* Signal waves */}
      <motion.div
        className="absolute -top-2 left-1 w-1 h-1 rounded-full"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
        animate={{
          y: [0, -4, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
      <motion.div
        className="absolute -top-2 right-1 w-1 h-1 rounded-full"
        style={{ backgroundColor: "rgba(255, 255, 255, 0.6)" }}
        animate={{
          y: [0, -4, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </div>
  );

  const getIconComponent = (iconType) => {
    switch (iconType) {
      case "travel":
        return <AnimatedTravelIcon />;
      case "globe":
        return <AnimatedGlobeIcon />;
      case "support":
        return <AnimatedSupportIcon />;
      default:
        return <AnimatedTravelIcon />;
    }
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div
          className="absolute top-20 right-10 w-72 h-72 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 162, 0, 0.1)" }}
        ></div>
        <div
          className="absolute bottom-20 left-10 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(73, 28, 160, 0.1)" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium mb-6"
            style={{
              backgroundColor: "rgba(73, 28, 160, 0.1)",
              color: "#491CA0",
            }}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div
              className="w-2 h-2 rounded-full animate-pulse"
              style={{ backgroundColor: "#FFA200" }}
            ></div>
            Our Services
          </motion.div>

          <h2
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "#3A1E66" }}
          >
            Crafting Your Perfect
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r ml-4"
              style={{
                backgroundImage: "linear-gradient(to right, #491CA0, #FFA200)",
              }}
            >
              Journey
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
            From initial planning to final execution, we handle every detail of
            your trip with precision and care.
          </p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid md:grid-cols-3 gap-8"
        >
          {services.map((service, i) => {
            return (
              <motion.div
                key={i}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.3, ease: "easeOut" },
                }}
                className="group relative"
              >
                <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 overflow-hidden">
                  {/* Card background gradient */}
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background:
                        "linear-gradient(135deg, transparent, transparent, rgba(73, 28, 160, 0.03))",
                    }}
                  ></div>

                  {/* Icon container */}
                  <div className="relative mb-6">
                    <motion.div
                      className="w-16 h-16 rounded-2xl flex items-center justify-center mb-4 shadow-lg"
                      style={{
                        background: "linear-gradient(135deg, #491CA0, #3A1E66)",
                      }}
                      whileHover={{
                        scale: 1.1,
                        rotate: [0, -5, 5, 0],
                        transition: { duration: 0.6 },
                      }}
                      animate={{
                        boxShadow: [
                          "0 10px 25px rgba(73, 28, 160, 0.3)",
                          "0 15px 35px rgba(73, 28, 160, 0.4)",
                          "0 10px 25px rgba(73, 28, 160, 0.3)",
                        ],
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      {getIconComponent(service.icon)}
                    </motion.div>
                    <motion.div
                      className="absolute -top-2 -right-2 w-6 h-6 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
                      style={{ backgroundColor: "#FFA200" }}
                      animate={{
                        scale: [1, 1.2, 1],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
                    </motion.div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3
                      className="text-2xl font-bold mb-4 group-hover:transition-colors duration-300"
                      style={{
                        color: "#000000",
                      }}
                    >
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <motion.div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-500"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <motion.div
                            className="w-1.5 h-1.5 rounded-full"
                            style={{ backgroundColor: "#FFA200" }}
                            animate={{
                              scale: [1, 1.2, 1],
                            }}
                            transition={{
                              duration: 2,
                              repeat: Infinity,
                              delay: idx * 0.3,
                            }}
                          ></motion.div>
                          {feature}
                        </motion.div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div
                      className="flex items-center gap-2 font-medium group-hover:gap-3 transition-all duration-300 cursor-pointer"
                      style={{ color: "#491CA0" }}
                    >
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div
                    className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:transition-colors duration-300"
                    style={{
                      borderColor: "transparent",
                    }}
                  ></div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-16"
        >
          <motion.div
            className="inline-flex items-center gap-4 text-white px-8 py-4 rounded-full hover:shadow-lg cursor-pointer"
            style={{
              background: "linear-gradient(to right, #491CA0, #3A1E66)",
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(73, 28, 160, 0.3)",
            }}
            transition={{ duration: 0.3 }}
          >
            <span className="font-medium">Start Planning Your Adventure</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
