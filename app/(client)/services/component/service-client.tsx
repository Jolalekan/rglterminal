"use client";

import Image from 'next/image'
import Link from 'next/link'
import { motion, animate } from 'framer-motion'
import { ArrowRight, Package, Warehouse, Container, Ship } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'
import { useInView } from 'framer-motion'
import ChooseUs from '@/components/choose-us'

const ServicesClient = () => {
  const Services = [
    {
      image: "/img1.jpg",
      href: "/warehousing",
      title: "Bonded Warehousing",
      description: "Secure and efficient storage solutions for your imported goods with full customs compliance.",
      icon: Warehouse,
      color: "yellow"
    },
    {
      image: "/container1.jpg",
      href: "/storage",
      title: "Container Storage",
      description: "Flexible container storage options tailored to your needs with 24/7 security monitoring.",
      icon: Container,
      color: "blue"
    },
    {
      image: "/ship.jpg",
      href: "/maritime-shipping",
      title: "Shipping",
      description: "Efficient water transport solutions connecting major ports and inland waterways.",
      icon: Ship,
      color: "green"
    },
    {
      image: "/img12.jpg",
      href: "/bonded-terminal",
      title: "Bonded Terminal",
      description: "Specialized handling for bulk commodities with state-of-the-art equipment and expertise.",
      icon: Package,
      color: "purple"
    },
  ]

  const stats = [
    { number: 20, suffix: "+", label: "Years Experience" },
    { number: 10500, suffix: "+", label: "Happy Clients" },
    { number: 100, suffix: "+", label: "Dedicated Staff" },
    { number: 100, suffix: "+", label: "Fleet Trucks" }
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  }

  const getColorClasses = (color: string) => {
    const colors: Record<string, { bg: string, text: string, hover: string, badge: string }> = {
      yellow: {
        bg: "bg-yellow-100",
        text: "text-yellow-600",
        hover: "group-hover:bg-yellow-600",
        badge: "bg-yellow-600"
      },
      blue: {
        bg: "bg-blue-100",
        text: "text-blue-600",
        hover: "group-hover:bg-blue-600",
        badge: "bg-blue-600"
      },
      green: {
        bg: "bg-green-100",
        text: "text-green-600",
        hover: "group-hover:bg-green-600",
        badge: "bg-green-600"
      },
      purple: {
        bg: "bg-purple-100",
        text: "text-purple-600",
        hover: "group-hover:bg-purple-600",
        badge: "bg-purple-600"
      }
    }
    return colors[color] || colors.yellow
  }

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="h-screen relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/img9.jpg')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            // transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="mt-4 inline-block bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 mb-6">
              What We Do
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Our <span className="text-yellow-400">Services</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              The world of international trade is growing and we are here to help you clear 
              and forward your freight. We are a logistics company that has the right connections, 
              expertise, and resources to get your product to its destination on time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section with Count Up */}
      <section className="py-16 bg-gray-50 border-y">
        <div className="container mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto"
          >
            {stats.map((stat, index) => (
              <CountUpStat 
                key={index}
                number={stat.number}
                suffix={stat.suffix}
                label={stat.label}
                delay={index * 0.1}
              />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Comprehensive Logistics <span className="text-yellow-600">Solutions</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              With over 15 years of experience, we offer fast turnaround times, competitive rates, 
              and friendly customer service that will make the process of international trade easy for you.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto"
          >
            {Services.map((service, index) => {
              const colorClasses = getColorClasses(service.color)
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="group"
                >
                  <Link href={service.href}>
                    <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                      {/* Content */}
                      <div className="p-6">
                        <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-yellow-600 transition-colors">
                          {service.title}
                        </h3>
                        <p className="text-gray-600 leading-relaxed mb-4">
                          {service.description}
                        </p>
                        
                        <div className="flex items-center text-yellow-600 font-semibold group-hover:translate-x-2 transition-transform">
                          <span>Learn More</span>
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </div>
                      </div>

                      {/* Image */}
                      <div className="relative h-64 overflow-hidden">
                        <Image
                          src={service.image}
                          alt={service.title}
                          fill
                          className="object-cover group-hover:scale-110 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                        
                        {/* Icon Badge */}
                        <div className={`absolute top-6 left-6 w-14 h-14 ${colorClasses.badge} rounded-xl flex items-center justify-center shadow-lg`}>
                          <service.icon className="w-7 h-7 text-white" />
                        </div>
                      </div>

                     
                    </div>
                  </Link>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}

      <ChooseUs/>

    </div>
  )
}

// Count Up Component
const CountUpStat = ({ number, suffix, label, delay }: { number: number, suffix: string, label: string, delay: number }) => {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  useEffect(() => {
    if (isInView) {
      const controls = animate(0, number, {
        duration: 2,
        delay: delay,
        ease: "easeOut",
        onUpdate: (latest) => {
          setCount(Math.floor(latest))
        }
      })

      return controls.stop
    }
  }, [isInView, number, delay])

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: delay }}
      className="text-center"
    >
      <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-gray-600 font-medium">{label}</div>
    </motion.div>
  )
}

export default ServicesClient