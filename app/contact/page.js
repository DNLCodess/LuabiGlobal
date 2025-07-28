"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useState } from "react";
import Link from "next/link";
import {
  Globe,
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
  CheckCircle,
  ArrowLeft,
  MessageCircle,
  Star,
  Shield,
} from "lucide-react";

// Header Component
function ContactHeader() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center space-x-2">
            <motion.div
              className="flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
            >
              <Globe className="h-8 w-8 text-indigo" />
              <span className="text-xl font-bold text-midnight">
                Luabi Global
              </span>
            </motion.div>
          </Link>

          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05, x: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center space-x-2 text-midnight hover:text-indigo transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span className="font-medium">Back to Home</span>
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.header>
  );
}

// Contact Hero Section
function ContactHero() {
  return (
    <section className="pt-24 pb-16 bg-gradient-to-br from-midnight to-indigo text-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center mb-6"
          >
            <div className="flex items-center space-x-1 bg-orange/20 rounded-full px-4 py-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 text-orange fill-current" />
              ))}
              <span className="ml-2 text-sm font-medium">
                Trusted by 150+ travelers
              </span>
            </div>
          </motion.div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Let's Plan Your
            <span className="block bg-gradient-to-r from-orange to-yellow-300 bg-clip-text text-transparent">
              Perfect Journey
            </span>
          </h1>
          <p className="text-xl opacity-90 max-w-3xl mx-auto mb-8">
            Ready to explore the world? Our travel experts are here to help you
            create unforgettable experiences tailored to your dreams.
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="flex flex-wrap justify-center gap-6 text-sm"
          >
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
              <Shield className="h-4 w-4 text-orange" />
              <span>IATA Certified</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
              <Clock className="h-4 w-4 text-orange" />
              <span>24/7 Support</span>
            </div>
            <div className="flex items-center space-x-2 bg-white/10 rounded-full px-4 py-2">
              <MessageCircle className="h-4 w-4 text-orange" />
              <span>Quick Response</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

// Contact Form Component
function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    destination: "",
    returnDate: "",
    travelDate: "",
    groupSize: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    const {
      name,
      email,
      phone,
      destination,
      travelDate,
      returnDate,
      groupSize,
      message,
    } = formData;

    const text = `
✈️ New Travel Request:
Name: ${name}
Email: ${email}
Phone: ${phone}
Destination: ${destination}
Travel Date: ${travelDate}
Return Date: ${returnDate}
Group Size: ${groupSize}
Message: ${message}
  `;

    const whatsappUrl = `https://wa.me/2349153897950?text=${encodeURIComponent(
      text
    )}`;

    // Redirect to WhatsApp
    window.open(whatsappUrl, "_blank");

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Clear form after
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        destination: "",
        travelDate: "",
        returnDate: "",
        groupSize: "",
        message: "",
      });
    }, 5000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl shadow-2xl p-8 text-center border-t-4 border-orange"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
        >
          <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
        </motion.div>
        <h3 className="text-3xl font-bold text-midnight mb-4">Thank You!</h3>
        <p className="text-gray-600 text-lg mb-6">
          We've received your message and will get back to you within 24 hours
          to start planning your perfect trip.
        </p>
        <div className="bg-orange/10 rounded-xl p-4">
          <p className="text-orange font-medium">
            📧 Check your email for a confirmation message
          </p>
        </div>
      </motion.div>
    );
  }

  return (
    <div className="bg-white rounded-2xl shadow-2xl p-8 space-y-6 border-t-4 border-indigo">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-midnight mb-4">
          Tell Us About Your Dream Trip
        </h3>
        <p className="text-gray-600">
          Fill out the form below and we'll create a personalized itinerary just
          for you
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label className="text-sm font-semibold text-midnight">
            Full Name *
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo focus:border-indigo transition-all hover:border-indigo/50"
            placeholder="Enter your full name"
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label className="text-sm font-semibold text-midnight">
            Email Address *
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo focus:border-indigo transition-all hover:border-indigo/50"
            placeholder="your@email.com"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label className="text-sm font-semibold text-midnight">
            Phone Number
          </label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo focus:border-indigo transition-all hover:border-indigo/50"
            placeholder="+234 xxx xxx xxxx"
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label className="text-sm font-semibold text-midnight">
            Preferred Destination
          </label>
          <input
            type="text"
            name="destination"
            value={formData.destination}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo focus:border-indigo transition-all hover:border-indigo/50"
            placeholder="Where would you like to go?"
          />
        </motion.div>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label className="text-sm font-semibold text-midnight">
            Travel Date
          </label>
          <input
            type="date"
            name="travelDate"
            value={formData.travelDate}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo focus:border-indigo transition-all hover:border-indigo/50"
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label className="text-sm font-semibold text-midnight">
            Return Date
          </label>
          <input
            type="date"
            name="returnDate"
            value={formData.returnDate}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo focus:border-indigo transition-all hover:border-indigo/50"
          />
        </motion.div>

        <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
          <label className="text-sm font-semibold text-midnight">
            Group Size
          </label>
          <select
            name="groupSize"
            value={formData.groupSize}
            onChange={handleChange}
            className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo focus:border-indigo transition-all hover:border-indigo/50"
          >
            <option value="">Select size</option>
            <option value="1">Solo traveler</option>
            <option value="2">Couple (2 people)</option>
            <option value="3-5">Small group (3-5 people)</option>
            <option value="6-10">Medium group (6-10 people)</option>
            <option value="10+">Large group (10+ people)</option>
          </select>
        </motion.div>
      </div>

      <motion.div whileFocus={{ scale: 1.02 }} className="space-y-2">
        <label className="text-sm font-semibold text-midnight">
          Tell us more about your trip
        </label>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          rows={5}
          className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-indigo focus:border-indigo transition-all resize-none hover:border-indigo/50"
          placeholder="Share your travel preferences, special occasions, activities you enjoy, dietary requirements, or any special requests..."
        />
      </motion.div>

      <motion.button
        type="submit"
        disabled={isSubmitting}
        onClick={handleSubmit}
        whileHover={{ scale: 1.02, y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="w-full bg-gradient-to-r from-orange to-yellow-500 text-white py-5 rounded-xl font-bold text-lg shadow-2xl hover:shadow-orange/25 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {isSubmitting ? (
          <div className="flex items-center justify-center">
            <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white mr-3" />
            Sending Message...
          </div>
        ) : (
          <div className="flex items-center justify-center">
            Send Message & Get Quote
            <Send className="ml-3 h-5 w-5" />
          </div>
        )}
      </motion.button>

      <p className="text-center text-sm text-gray-500 mt-4">
        By submitting this form, you agree to our terms and privacy policy
      </p>
    </div>
  );
}

// Contact Info Component
function ContactInfo() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const contactDetails = [
    {
      icon: Phone,
      title: "Phone",
      details: ["+234 703-432-0009"],
      description: "Call us for immediate assistance",
      color: "text-green-600",
      bgColor: "bg-green-50",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["mayorfromthe60s@gmail.com", "info@luabitravels.com"],
      description: "We respond within 6 hours",
      color: "text-blue-600",
      bgColor: "bg-blue-50",
    },
    {
      icon: MapPin,
      title: "Office Location",
      details: [
        "4th Floor, Mega Plaza",
        "No 14 Idowu Martins,Victoria Island, Lagos, Nigeria",
      ],
      description: "Visit us for personalized consultation",
      color: "text-red-600",
      bgColor: "bg-red-50",
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: [
        "Monday - Friday: 8:00 AM - 6:00 PM",
        "Saturday: 9:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
      description: "West Africa Time (WAT)",
      color: "text-indigo",
      bgColor: "bg-indigo/5",
    },
  ];

  return (
    <div ref={ref} className="space-y-6">
      <div className="text-center mb-8">
        <h3 className="text-3xl font-bold text-midnight mb-4">Get In Touch</h3>
        <p className="text-gray-600">
          We're here to help you plan the perfect trip
        </p>
      </div>

      {contactDetails.map((detail, index) => (
        <motion.div
          key={detail.title}
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: index * 0.15 }}
          whileHover={{ x: 5, scale: 1.02 }}
          className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-indigo hover:shadow-xl transition-all"
        >
          <div className="flex items-start space-x-4">
            <div className={`${detail.bgColor} rounded-xl p-4`}>
              <detail.icon className={`h-7 w-7 ${detail.color}`} />
            </div>
            <div className="flex-1">
              <h4 className="font-bold text-midnight text-xl mb-2">
                {detail.title}
              </h4>
              <div className="space-y-1 mb-3">
                {detail.details.map((item, i) => (
                  <p key={i} className="text-gray-800 font-medium text-lg">
                    {item}
                  </p>
                ))}
              </div>
              <p className="text-gray-600">{detail.description}</p>
            </div>
          </div>
        </motion.div>
      ))}

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="bg-gradient-to-br from-indigo to-midnight rounded-2xl p-8 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-y-12" />
        <div className="relative z-10">
          <div className="flex items-center space-x-3 mb-4">
            <div className="bg-orange/20 rounded-full p-3">
              <MessageCircle className="h-7 w-7 text-orange" />
            </div>
            <h4 className="font-bold text-xl">24/7 Travel Support</h4>
          </div>
          <p className="opacity-90 text-lg mb-4">
            Our dedicated support team is available around the clock to assist
            you during your travels.
          </p>
          <div className="bg-white/20 rounded-xl p-4">
            <p className="font-medium">
              🆘 Emergency Hotline: +234 703 432 0009
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Map Component
function ContactMap() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={inView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.8 }}
      className="bg-white rounded-2xl shadow-2xl overflow-hidden"
    >
      <div className="bg-gradient-to-r from-indigo to-midnight text-white p-6 text-center">
        <h3 className="text-2xl font-bold mb-2">Visit Our Office</h3>
        <p className="opacity-90">
          Located in the heart of Victoria Island, Lagos
        </p>
      </div>

      <div className="h-96 bg-gray-200 relative">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1983.495290659312!2d3.4179757!3d6.4280557!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103bf44840cf0dcf%3A0x1c5b2f1e6c52dd5d!2sMega%20Plaza%2C%2014%20Idowu%20Martins%20St%2C%20Victoria%20Island%2C%20Lagos%20106104%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1722080912540!5m2!1sen!2sng"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="absolute inset-0 w-full h-full"
        ></iframe>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.5 }}
          className="absolute bottom-6 left-6 bg-white/95 backdrop-blur-md rounded-xl p-5 shadow-xl max-w-sm"
        >
          <div className="flex items-start space-x-3">
            <div className="bg-indigo/10 rounded-full p-2 flex-shrink-0">
              <MapPin className="h-5 w-5 text-indigo" />
            </div>
            <div>
              <p className="font-bold text-midnight text-lg">Luabi Global</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                4th Floor, Mega Plaza, 14 Idowu Martins,
                <br />
                Victoria Island, Lagos, Nigeria
              </p>
              <div className="mt-2 text-xs text-indigo font-medium">
                📍 Easy access via public transport
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

// Main Contact Page
export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <ContactHeader />
      <ContactHero />

      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <ContactForm />
            </div>
            <div>
              <ContactInfo />
            </div>
          </div>

          <div className="mt-20">
            <ContactMap />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-midnight text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent transform -skew-y-12" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Globe className="h-10 w-10 text-orange" />
              <span className="text-3xl font-bold">Luabi Global </span>
            </div>
            <p className="text-lg opacity-90 max-w-2xl mx-auto mb-8">
              Your trusted partner in creating extraordinary travel experiences
              that connect you with the world's most beautiful destinations.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h4 className="font-bold mb-3 text-orange">Quick Contact</h4>
                <p className="text-sm opacity-80">+234 703-4320-009</p>
                <p className="text-sm opacity-80">info@luabitravels.com</p>
              </div>
              <div>
                <h4 className="font-bold mb-3 text-orange">Office Hours</h4>
                <p className="text-sm opacity-80">Mon - Fri: 8AM - 6PM</p>
                <p className="text-sm opacity-80">Saturday: 9AM - 4PM</p>
              </div>
              <div className="mb-4">
                <h4 className="font-bold mb-3 text-orange">Follow Us</h4>
                <a
                  href="https://www.instagram.com/luabiglobal?igsh=OXZ3NHdncjhqMnNh"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-white hover:underline"
                >
                  @luabiglobal
                </a>
              </div>
            </div>
          </motion.div>

          <div className="border-t border-white/20 pt-8 opacity-70">
            <p>&copy; 2025 Luabi Global. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
