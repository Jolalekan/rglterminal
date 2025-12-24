"use client";

import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const NeedUs = () => {
  const router = useRouter();
  const contactInfo = [
    {
      icon: Phone,
      label: "Phone",
      value: "+234 906 000 5911",
      href: "tel:+2349060005911",
    },
    {
      icon: Mail,
      label: "Email",
      value: "info@rglterminal.com",
      href: "mailto:info@rglterminal.com",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Lagos, Nigeria",
      href: "#",
    },
    {
      icon: Clock,
      label: "Working Hours",
      value: "Mon - Fri: 8AM - 6PM",
      href: "#",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-20 scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="space-y-8 lg:pl-12"
          >
            <motion.div variants={itemVariants}>
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
                Get In Touch
              </span>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            >
              We&apos;re ready when
              <span className="text-yellow-600"> you need us</span>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg text-gray-600 leading-relaxed"
            >
              Our team is always available to assist you with any shipping or
              logistics needs. Reach out to us through any of the channels
              below.
            </motion.p>

            <motion.div
              variants={containerVariants}
              className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6"
            >
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -4 }}
                  className={`
        bg-white rounded-2xl p-7
        shadow-lg hover:shadow-2xl
        transition-all duration-300
        group cursor-pointer
        ${index % 2 === 0 ? "md:translate-y-8" : ""}
      `}
                >
                  <div className="flex items-start gap-4">
                    {/* Icon */}
                    <div className="flex-shrink-0 w-14 h-14 bg-yellow-50 rounded-xl flex items-center justify-center group-hover:bg-yellow-100 transition-colors">
                      <item.icon size={26} className="text-yellow-600" />
                    </div>

                    {/* Text */}
                    <div className="flex-1">
                      <p className="text-sm text-gray-500 font-medium mb-1">
                        {item.label}
                      </p>
                      <p className="text-gray-900 font-semibold leading-snug">
                        {item.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="pt-6">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition shadow-lg hover:shadow-2xl flex items-center space-x-2"
                onClick={() => router.push("/contact")}
              >
                <span>Schedule a Consultation</span>
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </motion.button>
            </motion.div>
          </motion.div>
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[700px] rounded-2xl overflow-hidden shadow-2xl group"
          >
            <Image
              src="/img9.jpg"
              alt="need us image"
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />

            {/* Floating badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="absolute bottom-8 left-8 bg-white rounded-xl p-4 shadow-xl"
            >
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                <span className="font-semibold text-gray-900">
                  Available 24/7
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default NeedUs;
