'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Package, Clock, MapPin, Shield } from 'lucide-react'

const Monitor = () => {
  const features = [
    {
      icon: Package,
      title: "Real-Time Tracking",
      description: "Track every shipment in real-time"
    },
    {
      icon: Clock,
      title: "On-Time Delivery",
      description: "99.9% on-time delivery rate"
    },
    {
      icon: MapPin,
      title: "Global Coverage",
      description: "Worldwide shipping network"
    },
    {
      icon: Shield,
      title: "Fully Insured",
      description: "Complete cargo protection"
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
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
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/container1.jpg" 
        alt="container background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-block bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30">
                  Advanced Monitoring System
                </span>
              </motion.div>

              {/* Main Heading */}
              <motion.h2 
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-7xl font-bold text-white leading-tight"
              >
                We monitor every pallet to
                <span className="text-yellow-400"> ensure on-time delivery</span>
              </motion.h2>

              {/* Description */}
              <motion.p 
                variants={itemVariants}
                className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-2xl"
              >
                24/7 monitoring and optimization to ensure on-time deliveries, every time.
              </motion.p>

              {/* Stats Row */}
              <motion.div 
                variants={containerVariants}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-8"
              >
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/10 backdrop-blur-md rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
                  >
                    <feature.icon className="w-8 h-8 text-yellow-400 mb-3" />
                    <h3 className="text-white font-bold text-lg mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {feature.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>

              {/* CTA Buttons */}
              <motion.div 
                variants={itemVariants}
                className="flex flex-wrap gap-4 pt-6"
              >
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition shadow-2xl flex items-center space-x-2"
                >
                  <span>Track Your Shipment</span>
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

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-white/10 backdrop-blur-md text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/20 transition border border-white/30"
                >
                  Learn More
                </motion.button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Animated pulse indicators */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 right-10 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
      />
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-green-500 rounded-full" />
    </div>
  )
}

export default Monitor



// import Image from 'next/image'

// const Monitor = () => {
//   return (
//     <div className="relative h-screen w-full overflow-hidden">
//       {/* Background Image */}
//       <Image
//         src="/container1.jpg" 
//         alt="container background"
//         fill
//         className="object-cover"
//         priority
//       />
      
//       {/* Dark Overlay (optional) */}
//       <div className="absolute inset-0 bg-black/50" />

//       <div>
//        <h2>
//          We monitor every pallet to
// ensure on-time delivery
//         </h2>

// <p>

//  24/7 monitoring and optimisation to ensure on-time deliveries, every-time.
// </p>
//       </div>
//     </div>
//   )
// }

// export default Monitor