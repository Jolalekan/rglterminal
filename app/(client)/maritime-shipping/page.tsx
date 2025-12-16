'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Ship, Anchor, Globe, Shield, CheckCircle, Clock, Award, TrendingUp } from "lucide-react"

const MaritimeShipping = () => {
  const services = [
    {
      icon: Ship,
      title: "Ocean Freight",
      description: "Full container load (FCL) and less than container load (LCL) shipping services"
    },
    {
      icon: Anchor,
      title: "Port Operations",
      description: "Efficient handling and management of cargo at major Nigerian ports"
    },
    {
      icon: Globe,
      title: "Global Network",
      description: "Connected to major shipping routes and international ports worldwide"
    },
    {
      icon: Shield,
      title: "Cargo Insurance",
      description: "Comprehensive insurance coverage for your maritime shipments"
    }
  ]

  const features = [
    {
      title: "Experienced Team",
      description: "Seasoned maritime professionals with decades of combined experience",
      icon: Award
    },
    {
      title: "On-Time Delivery",
      description: "99.9% on-time delivery rate with real-time shipment tracking",
      icon: Clock
    },
    {
      title: "Competitive Rates",
      description: "Cost-effective shipping solutions without compromising quality",
      icon: TrendingUp
    },
    {
      title: "Safety First",
      description: "Strict adherence to international maritime safety standards",
      icon: Shield
    }
  ]

  const shippingRoutes = [
    "West Africa to Europe",
    "West Africa to Asia",
    "West Africa to Americas",
    "Intra-African Routes",
    "Middle East Connections",
    "Far East Trade Routes"
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
          alt="Maritime Shipping"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-blue-900/90 via-blue-900/70 to-blue-900/50" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block bg-blue-400/20 text-blue-300 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30 mb-6">
                Maritime Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Gateway to <span className="text-blue-300">Shipping</span> in Nigeria
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                RGL Terminal offers comprehensive maritime shipping services, ensuring efficient 
                and reliable transport of goods across international waters. Our expertise in 
                logistics and commitment to customer satisfaction make us a trusted partner for 
                all your shipping needs.
              </p>
              <div className="flex flex-wrap gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl"
                >
                  Request a Quote
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

        {/* Wave decoration */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Our Services
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Comprehensive Maritime <span className="text-blue-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From port-to-port delivery to end-to-end logistics, we've got you covered.
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
                className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-xl p-6 hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <service.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed">{service.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
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
                alt="Maritime operations"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/50 to-transparent" />
              
              {/* Stats overlay */}
              <div className="absolute bottom-8 left-8 right-8 grid grid-cols-2 gap-4">
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white">15+</div>
                  <div className="text-sm text-blue-100">Years Experience</div>
                </div>
                <div className="bg-white/10 backdrop-blur-md rounded-lg p-4 border border-white/20">
                  <div className="text-3xl font-bold text-white">50+</div>
                  <div className="text-sm text-blue-100">Countries Served</div>
                </div>
              </div>
            </motion.div>

            {/* Features List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Why Choose Us
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Excellence in Maritime Shipping
                </h2>
              </div>

              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="flex items-start space-x-4 bg-white rounded-lg p-6 hover:shadow-lg transition-shadow"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Shipping Routes Section */}
      <section className="py-20 bg-blue-900 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              Global Shipping <span className="text-blue-300">Routes</span>
            </h2>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Connected to major trade routes across the globe
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
          >
            {shippingRoutes.map((route, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-white/10 backdrop-blur-md rounded-lg p-6 border border-white/20 hover:bg-white/20 transition-colors"
              >
                <div className="flex items-center space-x-3">
                  <Globe className="w-6 h-6 text-blue-300 flex-shrink-0" />
                  <span className="text-lg font-semibold">{route}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center bg-gradient-to-r from-blue-600 to-blue-500 rounded-2xl p-12 text-white shadow-2xl"
          >
            <Ship className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Ship Your Cargo?
            </h2>
            <p className="text-xl text-blue-50 mb-8">
              Get in touch with our maritime experts to discuss your shipping requirements and receive a competitive quote.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Get a Quote
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition"
              >
                Contact Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default MaritimeShipping