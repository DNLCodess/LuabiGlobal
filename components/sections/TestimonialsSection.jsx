"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "USA",
      text: "Luabi Travels made our honeymoon magical. Everything was perfect.",
      rating: 5,
    },
    {
      name: "Michael Chen",
      location: "Canada",
      text: "Unforgettable family vacation. Professional and knowledgeable team.",
      rating: 5,
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-midnight text-white">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-6"
        >
          What Travelers Say
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8 mt-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="bg-white/10 p-6 rounded-xl backdrop-blur border border-white/20 text-left"
            >
              <div className="flex items-center mb-2">
                {[...Array(t.rating)].map((_, j) => (
                  <Star key={j} className="w-5 h-5 text-orange fill-orange" />
                ))}
              </div>
              <p className="text-sm mb-4 italic">“{t.text}”</p>
              <div className="font-semibold">{t.name}</div>
              <div className="text-sm text-white/70">{t.location}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
