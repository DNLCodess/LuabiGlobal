"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Users, Heart, Award, ArrowRight } from "lucide-react";

export default function MeetTheTeamSection() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    {
      icon: "users",
      number: "25+",
      label: "Team Members",
      description: "Passionate travel experts",
    },
    {
      icon: "heart",
      number: "1000+",
      label: "Happy Clients",
      description: "Dreams turned into reality",
    },
    {
      icon: "award",
      number: "5+",
      label: "Years Experience",
      description: "Creating magical journeys",
    },
  ];

  const titleVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.25, 0.46, 0.45, 0.94],
        type: "spring",
        damping: 20,
        stiffness: 100,
      },
    },
  };

  const statsVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const statItemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  // Custom animated icons for stats
  const AnimatedUsersIcon = () => (
    <div className="relative w-6 h-6">
      <motion.div
        className="w-6 h-6 rounded-full border-2"
        style={{ borderColor: "#FFFFFF" }}
        animate={{
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute top-1 left-1.5 w-1 h-1 rounded-full"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <div
          className="absolute top-1 right-1.5 w-1 h-1 rounded-full"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <div
          className="absolute bottom-1.5 left-1 w-4 h-1 rounded-full"
          style={{ backgroundColor: "#FFFFFF" }}
        />
      </motion.div>
      <motion.div
        className="absolute -top-1 -right-1 w-1 h-1 rounded-full"
        style={{ backgroundColor: "#FFFFFF" }}
        animate={{
          opacity: [0, 1, 0],
          scale: [0.5, 1.2, 0.5],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 0.5,
        }}
      />
    </div>
  );

  const AnimatedHeartIcon = () => (
    <div className="relative w-6 h-6">
      <motion.div
        className="w-6 h-6 relative"
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute top-1.5 left-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <div
          className="absolute top-1.5 right-1 w-2 h-2 rounded-full"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <div
          className="absolute top-3 left-2 w-2 h-2 rotate-45"
          style={{ backgroundColor: "#FFFFFF" }}
        />
      </motion.div>
      <motion.div
        className="absolute inset-0 border border-white/30 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 0, 0.5],
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    </div>
  );

  const AnimatedAwardIcon = () => (
    <div className="relative w-6 h-6">
      <motion.div
        className="w-6 h-6 relative"
        animate={{
          rotate: [0, 5, -5, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      >
        <div
          className="absolute top-0 left-2 w-2 h-4 rounded-t-full"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <div
          className="absolute top-4 left-1 w-4 h-2 rounded-full"
          style={{ backgroundColor: "#FFFFFF" }}
        />
        <motion.div
          className="absolute top-2 left-2.5 w-1 h-1 rounded-full"
          style={{ backgroundColor: "#FFA200" }}
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>
      <motion.div
        className="absolute -top-1 left-1 w-1 h-1 rounded-full"
        style={{ backgroundColor: "#FFFFFF" }}
        animate={{
          y: [0, -3, 0],
          opacity: [0, 1, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          delay: 1,
        }}
      />
    </div>
  );

  const getStatIcon = (iconType) => {
    switch (iconType) {
      case "users":
        return <AnimatedUsersIcon />;
      case "heart":
        return <AnimatedHeartIcon />;
      case "award":
        return <AnimatedAwardIcon />;
      default:
        return <AnimatedUsersIcon />;
    }
  };

  return (
    <section className="relative py-24 px-6 bg-gradient-to-br from-white via-gray-50 to-gray-100 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-20">
        <div
          className="absolute top-32 right-20 w-96 h-96 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(255, 162, 0, 0.08)" }}
        ></div>
        <div
          className="absolute bottom-32 left-20 w-80 h-80 rounded-full blur-3xl"
          style={{ backgroundColor: "rgba(73, 28, 160, 0.08)" }}
        ></div>
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          ref={ref}
          variants={titleVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
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
            Our Team
          </motion.div>

          <h2
            className="text-5xl md:text-6xl font-bold mb-6 leading-tight"
            style={{ color: "#3A1E66" }}
          >
            Meet the
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r ml-4"
              style={{
                backgroundImage: "linear-gradient(to right, #491CA0, #FFA200)",
              }}
            >
              Luabi Global
            </span>
            <br />
            <span
              className="text-transparent bg-clip-text bg-gradient-to-r"
              style={{
                backgroundImage: "linear-gradient(to right, #FFA200, #491CA0)",
              }}
            >
              Family
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Our passionate team of travel experts is dedicated to crafting
            extraordinary experiences that transform your travel dreams into
            unforgettable realities.
          </p>
        </motion.div>

        {/* Team Image Section */}
        <motion.div
          variants={imageVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="relative mb-20"
        >
          <div className="relative group">
            {/* Main team image */}
            <motion.div
              className="relative overflow-hidden rounded-3xl shadow-2xl"
              whileHover={{
                scale: 1.02,
                transition: { duration: 0.6, ease: "easeOut" },
              }}
            >
              {/* Placeholder for team image - replace with actual image */}
              <div className="relative w-full aspect-[16/10] md:aspect-[21/9] lg:aspect-[16/7] bg-gradient-to-br from-gray-200 via-gray-100 to-gray-200">
                {/* Replace this div with your actual image */}
                <img
                  src="/team.jpg" // Replace with your team image path
                  alt="Luabi Global Team"
                  className="w-full h-full object-cover object-center"
                  style={{
                    objectPosition: "center 30%", // Adjust this to focus on faces
                  }}
                />

                {/* Overlay gradient for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>

              {/* Floating elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 rounded-full shadow-lg"
                style={{ backgroundColor: "#FFA200" }}
                animate={{
                  y: [0, -10, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <div className="absolute inset-2 bg-white rounded-full animate-pulse"></div>
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-6 h-6 rounded-full shadow-lg"
                style={{ backgroundColor: "#491CA0" }}
                animate={{
                  y: [0, 10, 0],
                  rotate: [0, -180, -360],
                }}
                transition={{
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2,
                }}
              >
                <div className="absolute inset-1 bg-white rounded-full animate-pulse"></div>
              </motion.div>

              {/* Corner decorations */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-4 border-t-4 border-white/30 rounded-tl-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-4 border-b-4 border-white/30 rounded-br-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </motion.div>

            {/* Team caption */}
            <motion.div
              className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 bg-white rounded-2xl px-8 py-4 shadow-xl border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <p className="text-sm font-medium text-gray-600 text-center">
                The faces behind your extraordinary journeys
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="text-center"
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
            <span className="font-medium">Get to Know Us Better</span>
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
