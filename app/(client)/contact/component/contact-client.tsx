"use client"
import FormData from '@/components/form'
import { motion } from 'framer-motion'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'
import { Metadata } from 'next'
import dynamic from 'next/dynamic'

export const metadata: Metadata = {
  title: 'Contact Us - Get in Touch for Logistics Solutions',
  description: 'Contact Rolling Grazing Bonded Terminal in Badagry terminal, Lagos. Call +234 906 600 5911, +234 802 099 2018 or email info@rglterminal.com. Available 24/7 for your logistics needs.',
  keywords: [
    'contact RGL Terminal',
    'logistics company contact Lagos',
    'bonded terminal Badagry Island',
    'shipping inquiry Nigeria'
  ],
  openGraph: {
    title: 'Contact Rolling Grazing Bonded Terminal',
    description: 'Get in touch for logistics and shipping solutions',
    url: 'https://rglterminal.com/contact',
    images: ['/og-contact.jpg'],
  },
  alternates: {
    canonical: 'https://rglterminal.com/contact',
  },
}

// Dynamically import map to avoid SSR issues
const LocationMap = dynamic(() => import('@/components/location-map'), {
  ssr: false,
  loading: () => (
    <div className="h-full w-full bg-gray-200 rounded-xl flex items-center justify-center">
      <p className="text-gray-500">Loading map...</p>
    </div>
  )
})

const ContactClient = () => {

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white py-32">
        <div className="absolute inset-0 bg-[url('/pattern.png')] opacity-5" />
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="inline-block bg-yellow-600/20 text-yellow-400 px-4 py-2 rounded-full text-sm font-semibold backdrop-blur-sm border border-yellow-400/30 mb-6">
              Get In Touch
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Contact <span className="text-yellow-400">Us</span>
            </h1>
            <p className="text-xl text-gray-300 leading-relaxed">
              We&apos;d love to hear from you. Our team is always here to help with your logistics needs.
            </p>
          </motion.div>
        </div>
      </section>

         {/* Contact Form */}
      <FormData />

      {/* Map & Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[500px] rounded-xl overflow-hidden shadow-2xl"
            >
              <LocationMap />
            </motion.div>

            {/* Quick Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us Here</h2>
                <p className="text-gray-600 mb-6">
                  Visit our office or reach out through any of the channels below. We&apos;re here to help!
                </p>
              </div>

              <div className="bg-gradient-to-br from-yellow-50 to-yellow-100/50 rounded-xl p-6 space-y-4">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Address</h4>
                    <span>
                    klm 26, Opp. Foreign Affair Academy,<br />
                    Lagos/ Badagry Expressway,<br />
                    Ayetoro/ Ijanikin,<br />
                    Lagos State, Nigeria
                  </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Phone className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Phone</h4>
                    <p className="text-gray-700">+234 802 323 2444</p>
                    <p className="text-gray-700">+234 906 000 5911</p>
                  </div>
                </div>

                <div className="flex items-start space-x-3">
                  <Mail className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Email</h4>
                    <p className="text-gray-700">info@rglterminal.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Clock className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-1">Working Hours</h4>
                    <p className="text-gray-700">Mon - Fri: 8AM - 6PM</p>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <motion.a
                  href="https://www.google.com/maps/search/?api=1&query=KLM+26,+Opp.+Foreign+Affair+Academy,+Lagos+Badagry+Expressway,+Ayetoro,+Ijanikin,+Lagos+State,+Nigeria"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 bg-yellow-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition text-center"
                >
                  Get Directions
                </motion.a>
                <motion.a
                  href="tel:+2348023232444"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex-1 border-2 border-yellow-600 text-yellow-600 px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 hover:text-white transition text-center"
                >
                  Call Now
                </motion.a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

   
    </div>
  )
}

export default ContactClient
