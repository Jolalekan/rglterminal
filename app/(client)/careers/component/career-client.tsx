"use client"

import Image from "next/image"
import { motion } from "framer-motion"

const CareerClient = () => {
  

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/trucks1.jpeg"
          alt="career page image"
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
              {/* <span className="inline-block bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 mb-6">
                Join Our Team
              </span> */}
              {/* <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Your Gateway to a <span className="text-yellow-400">Shipping Career</span> in Nigeria
              </h1> */}
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                RGL Terminal offers comprehensive maritime shipping services, ensuring efficient 
                and reliable transport of goods across international waters. Join our team of 
                experts and build a rewarding career in logistics.
              </p>
              
            </motion.div>
          </div>
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
            <h2 className="text-xl text-gray-700 text-center">Please check in the company for available position, you can also contact us through our email and phone number</h2>
          </motion.div>
        </div>
      </section>

    </div>
  )
}

export default CareerClient