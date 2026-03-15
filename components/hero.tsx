"use client"

import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <Image
        src="/hero.jpeg"  
        alt="Hero background"
        fill
        className="object-cover"
        priority
      />
      
      {/* Dark Overlay (optional) */}
      <div className="absolute inset-0 bg-black/50" />
      
      {/* Content */}
      <div className="relative z-10 flex h-full items-center justify-center px-4">
        <span className='flex flex-col'>

        <h1 className="text-center text-4xl font-bold text-white md:text-6xl lg:text-7xl">
          Seamless Shipping and
          <br />
          Goods Management
        </h1>
       <Link href="/services" className="flex justify-center mt-16">
                                <motion.div
                                  className="relative bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg cursor-pointer overflow-hidden inline-flex items-center gap-2"
                                  whileHover="hover"
                                  initial="initial"
                                  >
                                  <motion.span 
                                    className="absolute inset-0 bg-yellow-700"
                                    variants={{
                                      initial: { x: '-100%' },
                                      hover: { x: 0 }
                                    }}
                                    transition={{ duration: 0.3, ease: 'easeOut' }}
                                    />
                                  
          
                                  <span className="relative z-10">LEARN MORE</span>
      
                                  <motion.div
                                    className="relative z-10 flex items-center"
                                    variants={{
                                      initial: { opacity: 0, x: -8 },
                                      hover: { opacity: 1, x: 0 }
                                    }}
                                    transition={{ duration: 0.3 }}
                                    >
                                    <ArrowRight className="w-5 h-5" />
                                  </motion.div>
                                </motion.div>
                              </Link>
                                    </span>
      </div>

    </div>
  )
}

export default Hero