"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Plane, Globe, Shield, ArrowRight } from "lucide-react";

export default function ServicesSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const services = [
    {
      icon: Plane,
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
      icon: Globe,
      title: "Global Adventures",
      description:
        "Explore breathtaking destinations across all continents with expert guidance.",
      features: ["150+ destinations", "Cultural immersion", "Hidden gems"],
    },
    {
      icon: Shield,
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

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-indigo/5 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 right-10 w-72 h-72 bg-orange/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-indigo/10 rounded-full blur-3xl"></div>
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
            className="inline-flex items-center gap-2 bg-indigo/10 text-indigo px-4 py-2 rounded-full text-sm font-medium mb-6"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={inView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
            Our Services
          </motion.div>

          <h2 className="text-5xl md:text-6xl font-bold text-midnight mb-6 leading-tight">
            Crafting Your Perfect
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-orange ml-4">
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
            const IconComponent = service.icon;
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
                  <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-indigo/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                  {/* Icon container */}
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-indigo to-indigo/80 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-orange rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 animate-pulse"></div>
                  </div>

                  {/* Content */}
                  <div className="relative">
                    <h3 className="text-2xl font-bold text-midnight mb-4 group-hover:text-indigo transition-colors duration-300">
                      {service.title}
                    </h3>

                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {service.description}
                    </p>

                    {/* Features list */}
                    <div className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center gap-2 text-sm text-gray-500"
                        >
                          <div className="w-1.5 h-1.5 bg-orange rounded-full"></div>
                          {feature}
                        </div>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center gap-2 text-indigo font-medium group-hover:gap-3 transition-all duration-300 cursor-pointer">
                      <span>Learn More</span>
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                    </div>
                  </div>

                  {/* Hover effect border */}
                  <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-orange/20 transition-colors duration-300"></div>
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
          <div className="inline-flex items-center gap-4 bg-gradient-to-r from-indigo to-midnight text-white px-8 py-4 rounded-full hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer">
            <span className="font-medium">Start Planning Your Adventure</span>
            <ArrowRight className="w-5 h-5" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
