"use client";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from 'framer-motion'

const Welcome = () => {
  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-yellow-50 min-h-screen py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl"
          >
            <Image 
              src="/img6.jpg" 
              alt="welcome" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </motion.div>

          {/* Content Side */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            // viewport={{ once: true }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{duration:0.8, type: "spring", stiffness: 80, damping: 15 }}
            // transition={{ duration: 0.8 }}
            className="space-y-6 lg:pl-12"
          >
            <div className="inline-block">
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to Our <span className="text-yellow-600">Shipping Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We are glad to have you here. With over 20 years of experience in logistics 
              and goods management, we provide seamless shipping solutions that connect 
              businesses across the globe.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us a trusted 
              partner for companies of all sizes. Explore our services and discover how we 
              can streamline your supply chain.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <Link href="/about">
                <motion.div
                  className="relative bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg cursor-pointer overflow-hidden inline-flex items-center gap-2"
                  whileHover="hover"
                  initial="initial"
                >
                  {/* Background color transition from left to right */}
                  <motion.span 
                    className="absolute inset-0 bg-yellow-700"
                    variants={{
                      initial: { x: '-100%' },
                      hover: { x: 0 }
                    }}
                    transition={{ duration: 0.3, ease: 'easeOut' }}
                  />
                  
                  {/* Text content */}
                  <span className="relative z-10">Learn More</span>
                  
                  {/* Arrow that appears on hover */}
                  <motion.div
                    className="relative z-10 flex items-center"
                    variants={{
                      initial: { opacity: 0, x: -8 },
                      hover: { opacity: 1, x: 0 }
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight className="w-5 h-5" />
                  </motion.div>
                </motion.div>
              </Link>

              <Link href="/contact">
                <motion.button 
                  whileHover={{ scale: 1.05, borderColor: '#2563eb', color: '#2563eb' }}
                  whileTap={{ scale: 0.95 }}
                  className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold transition"
                >
                  Contact Us
                </motion.button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;