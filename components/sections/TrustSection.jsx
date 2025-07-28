"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Plus,
  Minus,
  HelpCircle,
  MessageCircle,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";

export default function QASection() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How far in advance should I book my trip?",
      answer:
        "We recommend booking international trips 2-3 months in advance for the best deals and availability. However, we can accommodate last-minute bookings as well. For peak seasons and popular destinations, booking 4-6 months ahead ensures better rates and accommodation choices.",
      category: "Booking",
    },
    {
      question: "What if I need to cancel or modify my booking?",
      answer:
        "Our flexible booking policies allow modifications up to 24 hours before departure for most packages. Cancellation terms vary by destination and booking type, but we always work to minimize fees and provide maximum refund where possible. Travel insurance is available for additional protection.",
      category: "Policies",
    },
    {
      question: "Do you provide visa assistance and documentation help?",
      answer:
        "Yes! We offer complete visa processing services including document review, application submission, and tracking. Our visa experts are familiar with requirements for over 150 countries and maintain up-to-date knowledge of changing regulations to ensure smooth processing.",
      category: "Documentation",
    },
    {
      question: "What kind of support do you provide during travel?",
      answer:
        "We provide 24/7 support through our global network. This includes emergency assistance, rebooking services, local contact support, and real-time travel updates. Our mobile app keeps you connected with our support team wherever you are in the world.",
      category: "Support",
    },
    {
      question: "Are your travel packages customizable?",
      answer:
        "Absolutely! Every traveler is unique, and so should be their journey. We customize everything from accommodations and activities to dining preferences and transportation. Our travel consultants work closely with you to create personalized itineraries that match your interests and budget.",
      category: "Customization",
    },
    {
      question: "What safety measures do you have in place?",
      answer:
        "Your safety is our top priority. We partner only with vetted suppliers, provide comprehensive travel insurance options, maintain 24/7 emergency support, and offer real-time safety updates. We also provide detailed safety briefings and local emergency contacts for every destination.",
      category: "Safety",
    },
    {
      question: "How do your prices compare to booking directly?",
      answer:
        "Our industry relationships and bulk purchasing power often allow us to offer better rates than individual bookings. Plus, you get the added value of our expertise, support, and package deals. We also offer price matching on comparable packages to ensure you get the best value.",
      category: "Pricing",
    },
    {
      question: "What payment options do you accept?",
      answer:
        "We accept all major credit cards, bank transfers, and offer flexible payment plans for larger bookings. Secure payment processing ensures your financial information is protected. We also provide payment scheduling options to help you manage your travel budget effectively.",
      category: "Payment",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const faqVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      ref={ref}
      className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-indigo/5 overflow-hidden"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange/10 rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 bg-indigo/10 text-indigo px-4 py-2 rounded-full text-sm font-medium mb-6"
          >
            <HelpCircle className="w-4 h-4" />
            Frequently Asked Questions
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-5xl md:text-6xl font-bold text-midnight mb-6 leading-tight"
          >
            Got Questions?
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo to-orange ml-4">
              We've Got Answers
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Everything you need to know about planning your perfect trip with
            Luabi Travel.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* FAQ List */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-2"
          >
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  variants={faqVariants}
                  className="group"
                >
                  <div className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                    <button
                      onClick={() => toggleFAQ(index)}
                      className="w-full p-6 text-left flex items-center justify-between hover:bg-gray-50/50 transition-colors duration-200"
                    >
                      <div className="flex-1 pr-4">
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-xs font-medium text-indigo bg-indigo/10 px-2 py-1 rounded-full">
                            {faq.category}
                          </span>
                        </div>
                        <h3 className="text-lg font-semibold text-midnight group-hover:text-indigo transition-colors duration-200">
                          {faq.question}
                        </h3>
                      </div>
                      <div
                        className={`flex-shrink-0 w-8 h-8 rounded-full bg-indigo/10 flex items-center justify-center transition-all duration-300 ${
                          openIndex === index
                            ? "rotate-180 bg-indigo text-white"
                            : "text-indigo"
                        }`}
                      >
                        {openIndex === index ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </div>
                    </button>

                    <motion.div
                      initial={false}
                      animate={{
                        height: openIndex === index ? "auto" : 0,
                        opacity: openIndex === index ? 1 : 0,
                      }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-l-2 border-orange/20 pl-4">
                          <p className="text-gray-600 leading-relaxed">
                            {faq.answer}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Support Sidebar */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="lg:col-span-1"
          >
            <div className="sticky top-8 space-y-6">
              <motion.div
                variants={itemVariants}
                className="bg-gradient-to-br from-indigo to-midnight text-white rounded-2xl p-8 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-black/20"></div>
                <div className="absolute top-4 right-4 w-20 h-20 bg-white/10 rounded-full blur-2xl"></div>

                <div className="relative">
                  <MessageCircle className="w-8 h-8 text-orange mb-4" />
                  <h3 className="text-2xl font-bold mb-3">
                    Still Have Questions?
                  </h3>
                  <p className="text-white/90 mb-6 leading-relaxed">
                    Our travel experts are here to help you plan the perfect
                    journey.
                  </p>

                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Phone className="w-5 h-5 text-orange" />
                      <div>
                        <p className="font-medium">Call Us</p>
                        <p className="text-sm text-white/80">
                          +1 (555) 123-4567
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 p-3 bg-white/10 rounded-lg backdrop-blur-sm">
                      <Mail className="w-5 h-5 text-orange" />
                      <div>
                        <p className="font-medium">Email Us</p>
                        <p className="text-sm text-white/80">
                          hello@luabitravel.com
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
              >
                <h4 className="font-bold text-midnight mb-3">
                  Quick Response Times
                </h4>
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Phone Support</span>
                    <span className="font-medium text-green-600">
                      Immediate
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Email Support</span>
                    <span className="font-medium text-blue-600"> 2 hours</span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Emergency Line</span>
                    <span className="font-medium text-red-600">
                      24/7 Available
                    </span>
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
