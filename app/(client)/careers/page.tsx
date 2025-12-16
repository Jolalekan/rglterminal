'use client'

import Image from "next/image"
import { motion } from "framer-motion"
import { Briefcase, Users, TrendingUp, Award, MapPin, Clock, DollarSign, Heart } from "lucide-react"

const CareerPage = () => {
  const benefits = [
    {
      icon: DollarSign,
      title: "Competitive Salary",
      description: "Industry-leading compensation packages with performance bonuses"
    },
    {
      icon: TrendingUp,
      title: "Career Growth",
      description: "Clear career progression paths and professional development programs"
    },
    {
      icon: Heart,
      title: "Health Benefits",
      description: "Comprehensive health insurance for you and your family"
    },
    {
      icon: Clock,
      title: "Work-Life Balance",
      description: "Flexible working hours and generous vacation policies"
    }
  ]

  const openPositions = [
    {
      title: "Logistics Manager",
      department: "Operations",
      location: "Lagos, Nigeria",
      type: "Full-time"
    },
    {
      title: "Warehouse Supervisor",
      department: "Warehousing",
      location: "Port Harcourt, Nigeria",
      type: "Full-time"
    },
    {
      title: "Customs Clearance Officer",
      department: "Compliance",
      location: "Lagos, Nigeria",
      type: "Full-time"
    },
    {
      title: "Fleet Manager",
      department: "Transport",
      location: "Lagos, Nigeria",
      type: "Full-time"
    },
    {
      title: "Customer Service Representative",
      department: "Client Relations",
      location: "Lagos, Nigeria",
      type: "Full-time"
    },
    {
      title: "Operations Coordinator",
      department: "Operations",
      location: "Abuja, Nigeria",
      type: "Full-time"
    }
  ]

  const values = [
    {
      icon: Users,
      title: "Team Collaboration",
      description: "Work with passionate professionals who value teamwork"
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Strive for excellence in everything we do"
    },
    {
      icon: TrendingUp,
      title: "Innovation",
      description: "Embrace new ideas and continuous improvement"
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "Maintain the highest ethical standards"
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
          alt="Maritime Shipping"
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
              <span className="inline-block bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 mb-6">
                Join Our Team
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Gateway to a <span className="text-yellow-400">Shipping Career</span> in Nigeria
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                RGL Terminal offers comprehensive maritime shipping services, ensuring efficient 
                and reliable transport of goods across international waters. Join our team of 
                experts and build a rewarding career in logistics.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition shadow-lg hover:shadow-xl"
              >
                View Open Positions
              </motion.button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Why Work With Us */}
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
              Benefits
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Why Work <span className="text-yellow-600">With Us</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We believe in investing in our people and creating an environment where everyone can thrive.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors">
                  <benefit.icon className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{benefit.title}</h3>
                <p className="text-gray-600 leading-relaxed">{benefit.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
              Culture
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Our <span className="text-yellow-600">Values</span>
            </h2>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto"
          >
            {values.map((value, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-6 text-center hover:shadow-xl transition-shadow"
              >
                <div className="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <value.icon className="w-7 h-7 text-yellow-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-gray-600 text-sm">{value.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Open Positions */}
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
              Opportunities
            </span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mt-2 mb-4">
              Open <span className="text-yellow-600">Positions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Explore our current job openings and take the next step in your career.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-4xl mx-auto space-y-4"
          >
            {openPositions.map((position, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ x: 10 }}
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all cursor-pointer group"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors">
                      {position.title}
                    </h3>
                    <div className="flex flex-wrap gap-3 text-sm text-gray-600">
                      <span className="flex items-center">
                        <Briefcase className="w-4 h-4 mr-1" />
                        {position.department}
                      </span>
                      <span className="flex items-center">
                        <MapPin className="w-4 h-4 mr-1" />
                        {position.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-4 h-4 mr-1" />
                        {position.type}
                      </span>
                    </div>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition self-start md:self-center"
                  >
                    Apply Now
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-yellow-600 to-yellow-500">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Users className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Don&apos;t See the Right Position?
            </h2>
            <p className="text-xl text-yellow-50 mb-8">
              Send us your resume and we&apos;ll keep you in mind for future opportunities that match your skills.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
            >
              Submit Your Resume
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default CareerPage