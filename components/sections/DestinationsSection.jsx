"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function DestinationsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const destinations = [
    {
      name: "Santorini, Greece",
      description: "Stunning sunsets and azure waters.",
      image: "/destinations/santorini.jpg",
      price: "From $2,499",
    },
    {
      name: "Kyoto, Japan",
      description: "Ancient temples and cherry blossoms.",
      image: "/destinations/kyoto.jpg",
      price: "From $3,299",
    },
    {
      name: "Machu Picchu, Peru",
      description: "Mystical ruins in the clouds.",
      image: "/destinations/machu.jpg",
      price: "From $2,899",
    },
  ];

  return (
    <section id="destinations" ref={ref} className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-midnight mb-6"
        >
          Popular Destinations
        </motion.h2>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12">
          Discover dream destinations selected by our travel experts.
        </p>
        <div className="grid md:grid-cols-3 gap-8">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-gray-50 border border-gray-100 rounded-xl overflow-hidden shadow-md hover:shadow-lg"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6 text-left">
                <h3 className="text-xl font-bold text-midnight">{dest.name}</h3>
                <p className="text-sm text-gray-600 mt-1">{dest.description}</p>
                <p className="mt-3 text-orange font-semibold">{dest.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
