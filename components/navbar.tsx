'use client'

import React, { useState } from 'react'
import Container from './ui/container'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    
    setIsScrolled(latest > 50)
    
    if (latest > previous && latest > 100) {
      setIsVisible(false)
    } else {
      setIsVisible(true)
    }
  })

  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : -100 }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`fixed top-0 left-0 right-0 z-50 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <Container>
        <div className="flex justify-between items-center ">
          <Link href="/">
            <Image
              src="/logo1.png"
              alt='logo'
              height={100}
              width={100}
            />
          </Link>
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link href="/" className={`font-medium transition ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className={`font-medium transition ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className={`font-medium transition ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}>
                  Contact 
                </Link>
              </li>
              <li>
                <Link href="/careers" className={`font-medium transition ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}>
                  Careers 
                </Link>
              </li>
              <li>
                <Link href="/request-quote" className={`px-4 py-2 rounded-md transition ${
                  isScrolled 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-white text-gray-900 hover:bg-gray-100'
                }`}>
                  Request a Quote
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </Container>
    </motion.div>
  )
}

export default Navbar

// import Container from './ui/container'
// import Image from 'next/image'
// import Link from 'next/link'

// const Navbar = () => {
//   return (
//     <div className="fixed top-0 left-0 right-0 z-50 bg-white/10 backdrop-blur-md">
//       <Container>
//         <div className="flex justify-between items-center py-4">
//           <Link href="/">
//             <Image
//               src="/logo1.png"
//               alt='logo'
//               height={100}
//               width={100}
//             />
//           </Link>
//           <nav>
//             <ul className="flex space-x-6">
//               <li>
//                 <Link href="/" className="text-yellow-600 hover:text-gray-200 font-medium">
//                   Home
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/about" className="text-yellow-600 hover:text-gray-200 font-medium">
//                   About Us
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/contact" className="text-yellow-600 hover:text-gray-200 font-medium">
//                   Contact 
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/careers" className="text-yellow-600 hover:text-gray-200 font-medium">
//                   Careers 
//                 </Link>
//               </li>
//               <li>
//                 <Link href="/request-quote" className="bg-yellow-600 text-gray-900 px-4 py-2 rounded-md hover:bg-gray-100 transition">
//                   Request a Quote
//                 </Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </Container>
//     </div>
//   )
// }

// export default Navbar
