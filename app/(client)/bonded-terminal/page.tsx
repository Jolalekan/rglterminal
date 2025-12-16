'use client'

import Image from 'next/image'
import React from 'react'
import { motion } from 'framer-motion'
import { Building2, Shield, FileCheck, Lock, Clock, Truck, CheckCircle, Package, BarChart3 } from 'lucide-react'

const BondedTerminal = () => {
  const services = [
    {
      icon: Lock,
      title: "Secure Storage",
      description: "24/7 monitored facilities with advanced security systems and access controls"
    },
    {
      icon: FileCheck,
      title: "Customs Compliance",
      description: "Full compliance with Nigerian Customs regulations and international standards"
    },
    {
      icon: Package,
      title: "Cargo Handling",
      description: "Expert handling of containers and goods with specialized equipment"
    },
    {
      icon: Clock,
      title: "Quick Processing",
      description: "Efficient clearance and release procedures to minimize delays"
    }
  ]

  const features = [
    {
      title: "Duty Deferment",
      description: "Store imported goods without immediate duty payment until release",
      icon: BarChart3
    },
    {
      title: "Temperature Control",
      description: "Climate-controlled storage for sensitive and perishable goods",
      icon: Shield
    },
    {
      title: "Real-Time Tracking",
      description: "Advanced inventory management system for complete visibility",
      icon: Package
    },
    {
      title: "Direct Port Access",
      description: "Strategic location with easy access to major Nigerian ports",
      icon: Truck
    }
  ]

  const benefits = [
    "Reduced customs duty burden through deferred payments",
    "Secure storage under customs supervision",
    "Flexible release options based on market demand",
    "Professional documentation and compliance support",
    "Modern handling equipment and trained personnel",
    "Insurance coverage for stored goods",
    "24/7 access and operations",
    "Competitive storage rates"
  ]

  const processes = [
    {
      step: "1",
      title: "Arrival & Documentation",
      description: "Goods arrive and are registered with customs authorities"
    },
    {
      step: "2",
      title: "Inspection & Storage",
      description: "Cargo inspection and secure storage in designated areas"
    },
    {
      step: "3",
      title: "Inventory Management",
      description: "Real-time tracking and inventory control systems"
    },
    {
      step: "4",
      title: "Release & Clearance",
      description: "Customs clearance and timely release of goods"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] overflow-hidden">
        <Image
          src="/img7.jpg"
          alt="Bonded Terminal"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/90 via-purple-900/70 to-purple-900/50" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block bg-purple-400/20 text-purple-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-purple-400/30 mb-6">
                Terminal Operations
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Bonded Container <span className="text-purple-300">Terminal</span> Operation
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                RGL Terminal provides bonded container terminal operations with secure storage 
                and handling of goods under customs supervision, ensuring compliance and 
                efficiency in every step of your supply chain.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-xl"
                >
                  Get Started
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition border border-white/30"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Bonded Terminal <span className="text-purple-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive terminal services designed to streamline your import/export operations.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-purple-600 transition-colors">
                  <service.icon className="w-8 h-8 text-purple-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
              How It Works
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Our <span className="text-purple-600">Process</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {processes.map((process, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative"
              >
                <div className="bg-gradient-to-br from-purple-50 to-purple-100/50 rounded-xl p-6 hover:shadow-lg transition-shadow">
                  <div className="w-14 h-14 bg-purple-600 rounded-full flex items-center justify-center mb-4 text-white font-bold text-2xl">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{process.title}</h3>
                  <p className="text-gray-600">{process.description}</p>
                </div>
                {/* Arrow connector (hidden on last item and mobile) */}
                {index < processes.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                    <svg className="w-8 h-8 text-purple-300" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features & Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/img7.jpg"
                alt="Terminal operations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <div className="text-3xl font-bold text-white">100K+</div>
                      <div className="text-sm text-purple-100">Containers Handled</div>
                    </div>
                    <div>
                      <div className="text-3xl font-bold text-white">99.9%</div>
                      <div className="text-sm text-purple-100">Accuracy Rate</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Benefits List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-purple-600 font-semibold text-sm uppercase tracking-wider">
                  Key Benefits
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Why Choose Our Terminal
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-3">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-3 bg-white rounded-lg p-4 hover:shadow-md transition-shadow"
                  >
                    <CheckCircle className="w-6 h-6 text-purple-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-purple-700 transition shadow-lg hover:shadow-xl mt-6"
              >
                Request Terminal Access
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Features */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-7 h-7 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600 text-sm">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-purple-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Building2 className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Need Bonded Terminal Services?
            </h2>
            <p className="text-xl text-purple-50 mb-8">
              Contact our terminal operations team to discuss your requirements and get started today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-purple-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Get a Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-purple-600 transition"
              >
                Schedule a Tour
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default BondedTerminal