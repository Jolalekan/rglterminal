import Image from 'next/image'
import { motion } from 'framer-motion'
import { Package, Shield, Clock, Lock, FileText, CirclePlus } from 'lucide-react'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Bonded Warehousing - Secure Storage with Customs Compliance',
  description: 'Professional bonded warehousing services in Lagos. Secure storage, customs compliance, duty deferment, and 24/7 monitoring for your imported goods.',
  keywords: [
    'bonded warehouse Lagos',
    'customs bonded storage',
    'duty deferment Nigeria',
    'secure warehousing',
    'import storage solutions'
  ],
  openGraph: {
    title: 'Bonded Warehousing Services - RGL Terminal',
    description: 'Secure bonded warehousing with full customs compliance',
    url: 'https://rglterminal.com/warehousing',
    images: ['/og-warehousing.jpg'],
  },
  alternates: {
    canonical: 'https://rglterminal.com/warehousing',
  },
}

const WarehousingClient = () => {
  const features = [
    {
      icon: Shield,
      title: "Customs Compliance",
      description: "Full compliance with all customs regulations and requirements"
    },
    {
      icon: Lock,
      title: "Secure Storage",
      description: "24/7 security monitoring and access control systems"
    },
    {
      icon: Clock,
      title: "Flexible Terms",
      description: "Short or long-term storage options to suit your needs"
    },
    {
      icon: FileText,
      title: "Inventory Management",
      description: "Real-time tracking and detailed reporting systems"
    }
  ]

  const benefits = [
    "Duty deferment until goods are released",
    "Temperature-controlled storage facilities",
    "Easy access to your inventory 24/7",
    "Professional handling and documentation",
    "Competitive storage rates",
    "Strategic location near ports"
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
      <section className="h-screen relative h-[60vh] min-h-[500px] overflow-hidden">
        <Image
          src="/img1.jpg"
          alt="Bonded Warehousing"
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
                Our Services
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Bonded <span className="text-yellow-400">Warehousing</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed">
                Our bonded warehousing services provide secure and efficient storage solutions 
                for imported goods, ensuring compliance with customs regulations and offering 
                flexible storage options tailored to your business needs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="text-yellow-600">Warehousing</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experience world-class bonded warehousing with cutting-edge facilities and expert management.
            </p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all group"
              >
                <div className="w-16 h-16 bg-yellow-100 rounded-xl flex items-center justify-center mb-4 group-hover:bg-yellow-600 transition-colors">
                  <feature.icon className="w-8 h-8 text-yellow-600 group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">
            {/* Image */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl"
            >
              <Image
                src="/img3.jpg"
                alt="Warehouse facility"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Benefits List */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div>
                <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
                  Key Benefits
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mt-2 mb-6">
                  What You Get With Our Service
                </h2>
              </div>

              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="flex justify-between items-start space-x-4 bg-gray-50 rounded-lg p-4 hover:bg-yellow-50 transition-colors"
                  >
                    <p className="text-gray-700 leading-relaxed">{benefit}</p>
                    <CirclePlus className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-0.5" />
                  </motion.div>
                ))}
              </div>

              <motion.button
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition shadow-lg hover:shadow-xl mt-8"
              >
                Request a Quote
              </motion.button>
            </motion.div>
          </div>
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
            <Package className="w-16 h-16 mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Store Your Goods?
            </h2>
            <p className="text-xl text-yellow-50 mb-8">
              Get in touch with our team to discuss your warehousing needs and receive a customized solution.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-white text-yellow-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition shadow-lg"
              >
                Contact Us
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-transparent border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-yellow-600 transition"
              >
                View All Services
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default WarehousingClient