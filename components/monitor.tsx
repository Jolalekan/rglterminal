'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'
import { Package, Clock, MapPin, Shield } from 'lucide-react'

const Monitor = () => {
  const features = [
    {
      icon: Package,
      title: 'Real-Time Tracking',
      description: 'Track every shipment in real-time'
    },
    {
      icon: Clock,
      title: 'On-Time Delivery',
      description: '99.9% on-time delivery rate'
    },
    {
      icon: MapPin,
      title: 'Global Coverage',
      description: 'Worldwide shipping network'
    },
    {
      icon: Shield,
      title: 'Fully Insured',
      description: 'Complete cargo protection'
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
      transition: { duration: 0.6, ease: 'easeOut' }
    }
  }

  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/container1.jpg"
        alt="container background"
        fill
        priority
        className="object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />

      {/* Content */}
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT — Zig-Zag Feature Grid */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="grid grid-cols-2 gap-6"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className={`
                    bg-white/10 backdrop-blur-md rounded-xl p-6
                    border border-white/20 hover:bg-white/20
                    transition-all duration-300
                    ${index % 2 === 0 ? 'lg:translate-y-10' : ''}
                  `}
                >
                  <feature.icon className="w-8 h-8 text-yellow-400 mb-4" />
                  <h3 className="text-white font-bold text-lg mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>

            {/* RIGHT — Text Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: false, amount: 0.3 }}
              className="space-y-8 max-w-2xl"
            >
              {/* Badge */}
              <motion.div variants={itemVariants}>
                <span className="inline-block bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30">
                  Advanced Monitoring System
                </span>
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight"
              >
                We monitor every pallet to
                <span className="text-yellow-400">
                  {' '}ensure on-time delivery
                </span>
              </motion.h2>

              {/* Description */}
              <motion.p
                variants={itemVariants}
                className="text-xl text-gray-200 leading-relaxed"
              >
                24/7 monitoring and optimization to ensure on-time deliveries,
                every single time.
              </motion.p>
             
            </motion.div>
          </div>
        </div>
      </div>

      {/* Pulse Indicator */}
      <motion.div
        animate={{ scale: [1, 1.3, 1], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-10 right-10 w-4 h-4 bg-green-500 rounded-full shadow-lg shadow-green-500/50"
      />
      <div className="absolute bottom-10 right-10 w-4 h-4 bg-green-500 rounded-full" />
    </section>
  )
}

export default Monitor
