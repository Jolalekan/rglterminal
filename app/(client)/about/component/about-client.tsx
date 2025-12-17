"use client";

import Frequently from "@/components/frequently"
import Welcome from "@/components/welcome"
import { motion } from "framer-motion"
import { Target, Lightbulb, Award, Users } from "lucide-react"

const AboutClient = () => {
  
  const values = [
    {
      icon: Award,
      title: "Integrity",
      description: "We uphold the highest standards of honesty and ethical conduct in all our operations."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in every aspect of our service delivery and client relationships."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace new technologies and creative solutions to improve our logistics services."
    },
    {
      icon: Users,
      title: "Sustainability",
      description: "We are committed to environmentally responsible practices that protect our planet."
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }

  return (
    <div>
      {/* Hero Section */}
      <section className="h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/img10.jpg')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 mb-6">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Where Precision Logistics Meets{' '}
              <span className="text-yellow-400">Seamless Operations</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              Driving your business success through innovative container warehousing 
              and international logistics management.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto"
          >
            {/* Vision */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-yellow-600 rounded-xl flex items-center justify-center mr-4">
                  <Target className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Vision</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To contribute to a sustainable and innovative container warehousing, 
                international logistics management and eventually become the most preferred 
                Bonded Terminal while respecting the integrity of all men, women and the 
                world at large.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div 
              variants={itemVariants}
              className="bg-gradient-to-br from-blue-50 to-blue-100/50 rounded-2xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow"
            >
              <div className="flex items-center mb-6">
                <div className="w-14 h-14 bg-blue-600 rounded-xl flex items-center justify-center mr-4">
                  <Lightbulb className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-gray-900">Our Mission</h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                To provide efficient, reliable and cost-effective logistics solutions 
                that enhance the competitiveness of our clients in the global marketplace.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
              What Drives Us
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Our Core <span className="text-yellow-600">Values</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our operations and shape our commitment to excellence.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors">
                  <value.icon className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h4>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>


      {/* Other Sections */}
      <Welcome />
      <Frequently />
    </div>
  )
}

export default AboutClient