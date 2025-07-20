"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ChevronRight } from "lucide-react";

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-r from-indigo to-midnight text-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <motion.h2 className="text-4xl font-bold mb-4">
          Ready for Your Next Adventure?
        </motion.h2>
        <p className="text-lg mb-8 opacity-90">
          Let us plan your dream destination with ease and professionalism.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link href="/contact">
            <motion.button className="bg-orange px-6 py-3 rounded-full font-bold shadow-lg hover:bg-orange/90 transition">
              Plan My Trip <Calendar className="inline ml-2 h-5 w-5" />
            </motion.button>
          </Link>
          <Link href="/contact">
            <motion.button className="border border-white px-6 py-3 rounded-full font-bold hover:bg-white/20 transition">
              Contact Us <ChevronRight className="inline ml-2 h-5 w-5" />
            </motion.button>
          </Link>
        </div>
      </div>
    </section>
  );
}
