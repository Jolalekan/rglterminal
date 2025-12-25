"use client";

import Image from 'next/image'
import { motion } from 'framer-motion'
import { CirclePlus, Mail, ArrowRight } from 'lucide-react'
import { useQuote } from '@/app/provider/quote-provider';


const StorageClient = () => {
    const { openQuote } = useQuote();
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
          src="/container2.jpg"
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
                    className="flex justify-between items-start space-x-4 bg-white rounded-lg p-4 hover:bg-blue-50 transition-colors shadow-sm"
                  >
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    <CirclePlus className="w-6 h-6 text-blue-600 flex-shrink-0 mt-0.5" />
                  </motion.div>
                ))}
              </div>

             
                  <motion.button
                    onClick={openQuote}
                    initial="initial"
                    whileHover="hover"
                    whileTap={{ scale: 0.95 }}
                    className="
                      relative px-8 py-4 rounded-lg font-semibold
                      overflow-hidden inline-flex items-center gap-3
                      bg-blue-600 text-white
                      shadow-lg hover:shadow-xl
                      cursor-pointer
                    "
                  >
                    {/* Sliding background overlay */}
                    <motion.span
                      aria-hidden
                      className="absolute inset-0 bg-blue-700"
                      variants={{
                        initial: { x: '-100%' },
                        hover: { x: 0 }
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
              
                    {/* Icon */}
                    <Mail size={20} className="relative z-10" />
              
                    {/* Text */}
                    <span className="relative z-10 whitespace-nowrap">
                      Get Storage Quote
                    </span>
              
                    {/* Arrow appears on hover */}
                    <motion.span
                      className="relative z-10 flex items-center"
                      variants={{
                        initial: { opacity: 0, x: -8 },
                        hover: { opacity: 1, x: 0 }
                      }}
                      transition={{ duration: 0.25, ease: 'easeOut' }}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </motion.span>
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
                src="/container1.jpg"
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

    
    </div>
  )
}

export default StorageClient