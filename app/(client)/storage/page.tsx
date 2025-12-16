'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Container, Shield, MapPin, CheckCircle, Gauge, Clock, Truck } from 'lucide-react'

const StoragePage = () => {
  const features = [
    {
      icon: Shield,
      title: "Secure Facility",
      description: "State-of-the-art security systems with 24/7 monitoring"
    },
    {
      icon: MapPin,
      title: "Prime Location",
      description: "Strategic positioning near major ports and transport routes"
    },
    {
      icon: Clock,
      title: "Quick Access",
      description: "Fast retrieval and dispatch of your containers anytime"
    },
    {
      icon: Gauge,
      title: "Capacity Management",
      description: "Efficient space utilization with flexible storage terms"
    }
  ]

  const services = [
    {
      title: "Short-term Storage",
      description: "Ideal for containers in transit or awaiting customs clearance",
      icon: Clock
    },
    {
      title: "Long-term Storage",
      description: "Secure storage solutions for extended periods with competitive rates",
      icon: Container
    },
    {
      title: "Container Maintenance",
      description: "Regular inspection and maintenance to keep your containers in top condition",
      icon: Shield
    },
    {
      title: "Easy Logistics",
      description: "Seamless integration with your supply chain and transport networks",
      icon: Truck
    }
  ]

  const benefits = [
    "Protected from weather and environmental damage",
    "Real-time inventory tracking and monitoring",
    "Flexible storage duration options",
    "Direct access to loading and unloading facilities",
    "Comprehensive insurance coverage available",
    "Experienced handling team"
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
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/img4.jpg"
          alt='Container Storage'
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
        
        <div className="relative z-10 h-full flex items-center">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-3xl"
            >
              <span className="inline-block bg-blue-600/20 text-blue-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-blue-400/30 mb-6">
                Storage Solutions
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Container <span className="text-blue-400">Storage</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Our bonded container storage services provide secure and efficient storage 
                solutions for your containers, ensuring they are protected and easily 
                accessible when needed.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-blue-600">Storage Facility</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Modern facilities equipped with the latest technology to keep your containers safe and secure.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-blue-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-blue-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
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
              What We Offer
            </span>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-4">
              Our Storage Services
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto"
          >
            {services.map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 hover:shadow-xl transition-shadow"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <service.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Benefits List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
                  Key Advantages
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  Benefits of Our Container Storage
                </h2>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex items-start space-x-4 bg-white rounded-lg p-4 hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    <CheckCircle className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                  </motion.div>
                ))}
              </div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl mt-8"
              >
                Get Storage Quote
              </motion.button>
            </motion.div>

            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/img4.jpg"
                alt="Container storage facility"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-blue-500">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {[
              { number: "50,000+", label: "Containers Stored" },
              { number: "99.9%", label: "Uptime Guarantee" },
              { number: "100+", label: "Acres of Space" },
              { number: "24/7", label: "Monitoring" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-blue-100 font-medium">{stat.label}</div>
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
            className="max-w-4xl mx-auto text-center"
          >
            <Container className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Need Container Storage?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact our team today to discuss your storage requirements and get a customized solution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition"
              >
                View All Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default StoragePage