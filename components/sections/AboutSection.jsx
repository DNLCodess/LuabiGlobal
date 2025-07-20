"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Plane,
  Shield,
  Heart,
  Clock,
  Users,
  MapPin,
  Award,
  Star,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

export default function AboutSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Plane,
      title: "Flight Reservations",
      description:
        "Budget-friendly to premium flights with flexible booking options and exclusive deals",
      features: [
        "Best price guarantee",
        "Flexible cancellation",
        "24/7 booking support",
      ],
    },
    {
      icon: Shield,
      title: "24/7 Support & Crisis Management",
      description:
        "Round-the-clock assistance and emergency support wherever you are in the world",
      features: [
        "Emergency hotline",
        "Real-time assistance",
        "Global coverage",
      ],
    },
    {
      icon: Heart,
      title: "Travel Companionship",
      description:
        "VIP experiences and personalized travel companion services for unforgettable journeys",
      features: ["Personal concierge", "VIP access", "Curated experiences"],
    },
    {
      icon: Clock,
      title: "Visa Assistance",
      description:
        "Complete visa processing and documentation support with expert guidance",
      features: ["Document review", "Fast processing", "Success guarantee"],
    },
  ];

  const stats = [
    {
      icon: Users,
      label: "Happy Travelers",
      value: "10,000+",
      color: "text-orange",
      bgColor: "bg-orange/10",
      description: "Satisfied customers worldwide",
    },
    {
      icon: MapPin,
      label: "Destinations Covered",
      value: "150+",
      color: "text-indigo",
      bgColor: "bg-indigo/10",
      description: "Countries and cities",
    },
    {
      icon: Award,
      label: "Years of Experience",
      value: "12+",
      color: "text-midnight",
      bgColor: "bg-midnight/10",
      description: "In the travel industry",
    },
    {
      icon: Star,
      label: "Customer Rating",
      value: "4.9/5",
      color: "text-orange",
      bgColor: "bg-orange/10",
      description: "Average customer satisfaction",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 40, scale: 0.95 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        damping: 20,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-br from-white via-gray-50/50 to-indigo/5 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-32 left-20 w-64 h-64 bg-orange/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-80 h-80 bg-indigo/15 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-midnight/5 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header Section */}
        <motion.div
          ref={ref}
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-20"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo/10 to-orange/10 text-indigo px-6 py-3 rounded-full text-sm font-medium mb-8 border border-indigo/20"
          >
            <div className="w-2 h-2 bg-orange rounded-full animate-pulse"></div>
            About Luabi Travel
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-midnight mb-8 leading-tight"
          >
            Your Trusted Travel
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-orange ml-4">
              Partner
            </span>
          </motion.h2>

          <motion.div variants={itemVariants} className="max-w-4xl mx-auto">
            <p className="text-xl text-gray-600 mb-6 leading-relaxed">
              Since 2012, we've provided affordable, premium travel experiences
              to thousands of adventurers worldwide.
            </p>
            <p className="text-lg text-gray-500">
              At Luabi, your journey begins with trust and ends with
              unforgettable memories.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid gap-16 lg:grid-cols-5 lg:gap-12">
          {/* Service Cards - Left Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-3 space-y-8"
          >
            <div className="mb-8">
              <h3 className="text-3xl font-bold text-midnight mb-4">
                What We Offer
              </h3>
              <p className="text-gray-600">
                Comprehensive travel services designed to make your journey
                seamless and memorable.
              </p>
            </div>

            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <motion.div
                  key={service.title}
                  variants={itemVariants}
                  whileHover={{
                    y: -4,
                    transition: { duration: 0.2 },
                  }}
                  className="group relative"
                >
                  <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-500 relative overflow-hidden">
                    {/* Hover gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-indigo/5 via-transparent to-orange/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                    <div className="relative flex gap-6 items-start">
                      <div className="flex-shrink-0">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange to-orange/80 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <IconComponent className="w-7 h-7 text-white" />
                        </div>
                      </div>

                      <div className="flex-1 min-w-0">
                        <h4 className="font-bold text-midnight text-xl mb-3 group-hover:text-indigo transition-colors duration-300">
                          {service.title}
                        </h4>
                        <p className="text-gray-600 mb-4 leading-relaxed">
                          {service.description}
                        </p>

                        {/* Features */}
                        <div className="flex flex-wrap gap-2 mb-4">
                          {service.features.map((feature, idx) => (
                            <div
                              key={idx}
                              className="flex items-center gap-1.5 text-sm text-gray-500 bg-gray-50 px-3 py-1 rounded-full"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500" />
                              {feature}
                            </div>
                          ))}
                        </div>

                        <div className="flex items-center gap-2 text-indigo font-medium text-sm group-hover:gap-3 transition-all duration-300 cursor-pointer">
                          <span>Learn More</span>
                          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                        </div>
                      </div>
                    </div>

                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-2 h-2 bg-orange rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse"></div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Stats Section - Right Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="sticky top-8">
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-midnight mb-4">
                  Our Impact
                </h3>
                <p className="text-gray-600">
                  Numbers that speak to our commitment and success.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6">
                {stats.map((stat, index) => {
                  const IconComponent = stat.icon;
                  return (
                    <motion.div
                      key={stat.label}
                      variants={statsVariants}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      className="group bg-white border border-gray-100 shadow-lg rounded-2xl p-8 hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                    >
                      {/* Background gradient */}
                      <div
                        className={`absolute inset-0 ${stat.bgColor} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                      ></div>

                      <div className="relative flex items-center gap-4">
                        <div
                          className={`w-16 h-16 ${stat.bgColor} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                        >
                          <IconComponent className={`w-8 h-8 ${stat.color}`} />
                        </div>

                        <div className="flex-1">
                          <div
                            className={`text-3xl font-bold ${stat.color} mb-1`}
                          >
                            {stat.value}
                          </div>
                          <p className="font-medium text-midnight text-lg">
                            {stat.label}
                          </p>
                          <p className="text-sm text-gray-500 mt-1">
                            {stat.description}
                          </p>
                        </div>
                      </div>

                      {/* Decorative corner */}
                      <div className="absolute top-2 right-2 w-3 h-3 bg-orange/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </motion.div>
                  );
                })}
              </div>

              {/* CTA Button */}
              <motion.div variants={itemVariants} className="mt-8">
                <div className="bg-gradient-to-r from-indigo to-midnight text-white px-8 py-4 rounded-xl hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-pointer text-center">
                  <div className="flex items-center justify-center gap-3">
                    <span className="font-medium">Start Your Journey</span>
                    <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
