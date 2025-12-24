'use client'

import { useState } from "react";
import Container from "./ui/container";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const ChooseUs = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const features = [
    {
      title: "Reliable",
      description: "You can count on us to always provide unequalled service delivery in fulfilling the needs of our customers.",
      icon: "/checkmark.png",
      bgImage: "/img1.jpg"
    },
    {
      title: "Experienced",
      description: "With over 20 years in the industry, we bring expertise and professionalism to every shipment.",
      icon: "/technology.png",
      bgImage: "/img2.jpg"
    },
    {
      title: "Secure",
      description: "Your goods are fully insured and handled with the highest security standards throughout the journey.",
      icon: "/settings.png",
      bgImage: "/img3.jpg"
    },
    {
      title: "Efficient",
      description: "Fast processing times and optimized routes ensure your cargo arrives on schedule, every time.",
      icon: "/quality.png",
      bgImage: "/img4.jpg"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section className="bg-gradient-to-b from-white via-yellow-50 to-gray-50 py-20 scroll-mt-24">
      <Container>
        <div className="max-w-7xl mx-auto px-4 lg:px-0">
          {/* Section Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="inline-block text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4"
            >
              Why Choose Us
            </motion.span>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-yellow-600">Rolling Grazing</span> Bonded Terminal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence in every aspect of our service, making us the trusted choice for businesses worldwide.
            </p>
          </motion.div>

          {/* Features Grid - 4 Columns with increased height */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="min-h-[450px] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer min-h-[400px] flex flex-col" // Added min-h-[400px]
              >
                {/* Background Image with circle expand effect */}
                <motion.div
                  className="absolute inset-0 z-0 flex items-start justify-center pt-6"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ 
                    scale: hoveredIndex === index ? 3 : 0,
                    opacity: hoveredIndex === index ? 1 : 0
                  }}
                  transition={{ 
                    duration: 0.6, 
                    ease: 'easeOut',
                    scale: { type: 'spring', stiffness: 100, damping: 15 }
                  }}
                >
                  <div className="relative w-96 h-96 rounded-full overflow-hidden">
                    <Image
                      src={feature.bgImage}
                      alt={feature.title}
                      fill
                      className="object-cover"
                    />
                    {/* Lighter overlay for faded effect */}
                    <div className="absolute inset-0 bg-white/70" />
                  </div>
                </motion.div>

                {/* Content */}
                <div className="relative z-10 p-8 flex flex-col flex-1">
                  {/* Icon */}
                  <motion.div
                    className="mb-8 flex justify-center"
                    animate={{
                      scale: hoveredIndex === index ? 1.15 : 1,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className={`relative w-28 h-28 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg ${
                      hoveredIndex === index ? 'bg-yellow-600 shadow-yellow-300' : 'bg-yellow-50'
                    }`}>
                      <Image
                        src={feature.icon}
                        alt={feature.title}
                        width={56}
                        height={56}
                        className="object-contain"
                      />
                    </div>
                  </motion.div>

                  {/* Title */}
                  <motion.h3
                    className={`text-2xl font-bold mb-4 text-center transition-colors duration-300 ${
                      hoveredIndex === index ? 'text-yellow-600' : 'text-gray-900'
                    }`}
                    animate={{
                      scale: hoveredIndex === index ? 1.05 : 1,
                    }}
                  >
                    {feature.title}
                  </motion.h3>

                  {/* Description */}
                  <motion.p
                    className={`text-center leading-relaxed transition-colors duration-300 flex-1 ${
                      hoveredIndex === index ? 'text-gray-700 font-medium' : 'text-gray-600'
                    }`}
                  >
                    {feature.description}
                  </motion.p>
                </div>

                {/* Decorative border on hover */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-600"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  style={{ originX: 0 }}
                />

                {/* Corner accent */}
                <motion.div
                  className="absolute top-0 right-0 w-20 h-20"
                  initial={{ scale: 0, rotate: 0 }}
                  animate={{ 
                    scale: hoveredIndex === index ? 1 : 0,
                    rotate: hoveredIndex === index ? 45 : 0
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-full h-full bg-yellow-600 opacity-20" />
                </motion.div>
              </motion.div>
            ))}
          </motion.div>

          {/* Optional Bottom CTA */}
          <Link href="/services" className="flex justify-center mt-16">
                          <motion.div
                            className="relative bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold shadow-lg cursor-pointer overflow-hidden inline-flex items-center gap-2"
                            whileHover="hover"
                            initial="initial"
                          >
                            {/* Background color transition from left to right */}
                            <motion.span 
                              className="absolute inset-0 bg-yellow-700"
                              variants={{
                                initial: { x: '-100%' },
                                hover: { x: 0 }
                              }}
                              transition={{ duration: 0.3, ease: 'easeOut' }}
                            />
                            
                            {/* Text content */}
                            <span className="relative z-10">Discover more</span>
                            
                            {/* Arrow that appears on hover */}
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
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-center mt-16"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition shadow-lg hover:shadow-xl"
            >
              Discover All Our Services
            </motion.button>
          </motion.div> */}
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;

// 'use client'

// import { useState } from "react";
// import Container from "./ui/container";
// import Image from "next/image";
// import { motion } from "framer-motion";

// const ChooseUs = () => {
//   const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

//   const features = [
//     {
//       title: "Reliable",
//       description: "You can count on us to always provide unequalled service delivery in fulfilling the needs of our customers.",
//       icon: "/checkmark.png",
//       bgImage: "/img1.jpg" // Add background images for each feature
//     },
//     {
//       title: "Experienced",
//       description: "With over 20 years in the industry, we bring expertise and professionalism to every shipment.",
//       icon: "/technology.png",
//       bgImage: "/img2.jpg"
//     },
//     {
//       title: "Secure",
//       description: "Your goods are fully insured and handled with the highest security standards throughout the journey.",
//       icon: "/settings.png",
//       bgImage: "/img3.jpg"
//     },
//     {
//       title: "Efficient",
//       description: "Fast processing times and optimized routes ensure your cargo arrives on schedule, every time.",
//       icon: "/quality.png",
//       bgImage: "/img4.jpg"
//     }
//   ];

//   const containerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.2
//       }
//     }
//   };

//   const itemVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { duration: 0.6 }
//     }
//   };

//   return (
//     <section className="bg-gradient-to-b from-white via-yellow-50 to-gray-50 py-20 scroll-mt-24">
//       <Container>
//         <div className="max-w-7xl mx-auto">
//           {/* Section Header */}
//           <motion.div
//             initial={{ opacity: 0, y: -30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ duration: 0.8 }}
//             className="text-center mb-16"
//           >
//             <motion.span 
//               initial={{ opacity: 0, scale: 0.8 }}
//               whileInView={{ opacity: 1, scale: 1 }}
//               viewport={{ once: true }}
//               className="inline-block text-yellow-600 font-semibold text-sm uppercase tracking-wider mb-4"
//             >
//               Why Choose Us
//             </motion.span>
//             <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
//               Why Choose <span className="text-yellow-600">Rolling Grazing</span> Bonded Terminal?
//             </h2>
//             <p className="text-lg text-gray-600 max-w-2xl mx-auto">
//               We deliver excellence in every aspect of our service, making us the trusted choice for businesses worldwide.
//             </p>
//           </motion.div>

//           {/* Features Grid - 4 Columns */}
//           <motion.div
//             variants={containerVariants}
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true }}
//             className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
//           >
//             {features.map((feature, index) => (
//               <motion.div
//                 key={index}
//                 variants={itemVariants}
//                 onHoverStart={() => setHoveredIndex(index)}
//                 onHoverEnd={() => setHoveredIndex(null)}
//                 whileHover={{ y: -10 }}
//                 className="h-96 relative bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 group cursor-pointer"
//               >
//                 {/* Background Image that slides in on hover */}
//                 <motion.div
//                   className="absolute inset-0 z-0"
//                   initial={{ x: '-100%' }}
//                   animate={{ x: hoveredIndex === index ? 0 : '-100%' }}
//                   transition={{ duration: 0.5, ease: 'easeInOut' }}
//                 >
//                   <Image
//                     src={feature.bgImage}
//                     alt={feature.title}
//                     fill
//                     className="object-cover"
//                   />
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-black/10 to-black/10" />
//                 </motion.div>

//                 {/* Content */}
//                 <div className="relative z-10 p-6">
//                   {/* Icon */}
//                   <motion.div
//                     className="mb-6 flex justify-center"
//                     animate={{
//                       scale: hoveredIndex === index ? 1.1 : 1,
//                     }}
//                     transition={{ duration: 0.3 }}
//                   >
//                     <div className={`relative w-24 h-24 rounded-full flex items-center justify-center transition-all duration-300 ${
//                       hoveredIndex === index ? 'bg-white' : 'bg-yellow-50'
//                     }`}>
//                       <Image
//                         src={feature.icon}
//                         alt={feature.title}
//                         width={50}
//                         height={50}
//                         className="object-contain"
//                       />
//                     </div>
//                   </motion.div>

//                   {/* Title */}
//                   <motion.h3
//                     className={`text-xl font-bold mb-3 text-center transition-colors duration-300 ${
//                       hoveredIndex === index ? 'text-white' : 'text-gray-900'
//                     }`}
//                     animate={{
//                       scale: hoveredIndex === index ? 1.05 : 1,
//                     }}
//                   >
//                     {feature.title}
//                   </motion.h3>

//                   {/* Description */}
//                   <motion.p
//                     className={`text-center leading-relaxed transition-colors duration-300 ${
//                       hoveredIndex === index ? 'text-gray-200' : 'text-gray-600'
//                     }`}
//                   >
//                     {feature.description}
//                   </motion.p>
//                 </div>

//                 {/* Decorative border on hover */}
//                 <motion.div
//                   className="absolute bottom-0 left-0 right-0 h-1 bg-yellow-600"
//                   initial={{ scaleX: 0 }}
//                   animate={{ scaleX: hoveredIndex === index ? 1 : 0 }}
//                   transition={{ duration: 0.3 }}
//                   style={{ originX: 0 }}
//                 />
//               </motion.div>
//             ))}
//           </motion.div>

//           {/* Optional Bottom CTA */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             viewport={{ once: true }}
//             transition={{ delay: 0.6, duration: 0.8 }}
//             className="text-center mt-16"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="bg-yellow-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-yellow-700 transition shadow-lg hover:shadow-xl"
//             >
//               Discover All Our Services
//             </motion.button>
//           </motion.div>
//         </div>
//       </Container>
//     </section>
//   );
// };

// export default ChooseUs;