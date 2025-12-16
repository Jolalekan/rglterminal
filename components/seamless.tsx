'use client'

import Image from 'next/image'
import { motion } from 'framer-motion'

const Seamless = () => {
  const scrollText1 = "Seamless Shipping • Fast Delivery • Global Logistics • Trusted Service • "
  const scrollText2 = "Reliable • Efficient • Secure • Professional • On-Time • "

  return (
    <section className="bg-gradient-to-b from-white via-gray-50 to-yellow-50  relative w-full h-[400px] md:h-[500px] overflow-hidden">
 
      {/* Content */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center">
        
        {/* First Scrolling Row - Left to Right */}
        <div className="w-full overflow-hidden py-3 border-y border-yellow-400/30">
          <motion.div
            animate={{ x: [0, -1000] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 25,
                ease: "linear"
              }
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(10)].map((_, index) => (
              <span
                key={index}
                className="text-xl md:text-2xl font-semibold text-black/70 mx-3"
              >
                {scrollText1}
              </span>
            ))}
          </motion.div>
        </div>

        {/* Main Heading */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="my-8 px-4"
        >
          <h2 className="text-center text-4xl font-bold text-black md:text-6xl lg:text-7xl max-w-5xl">
            Seamless Shipping and{' '}
            <span className="text-yellow-400 inline-block">
              <motion.span
                animate={{ 
                  textShadow: [
                    "0 0 20px rgba(251, 191, 36, 0.5)",
                    "0 0 40px rgba(251, 191, 36, 0.8)",
                    "0 0 20px rgba(251, 191, 36, 0.5)"
                  ]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                Delivery
              </motion.span>
            </span>
          </h2>
        </motion.div>

        {/* Second Scrolling Row - Right to Left */}
        <div className="w-full overflow-hidden py-3 border-y border-yellow-400/30">
          <motion.div
            animate={{ x: [-1000, 0] }}
            transition={{
              x: {
                repeat: Infinity,
                repeatType: "loop",
                duration: 20,
                ease: "linear"
              }
            }}
            className="flex whitespace-nowrap"
          >
            {[...Array(10)].map((_, index) => (
              <span
                key={index}
                className="text-xl md:text-2xl font-semibold text-yellow-400 mx-3"
              >
                {scrollText2}
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Seamless