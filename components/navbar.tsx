
'use client'

import  { useState, useEffect } from 'react'
import Container from './ui/container'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useMotionValueEvent } from 'framer-motion'
import { Menu, X, ArrowRight } from 'lucide-react' 
import OutsideClickHandler from 'react-outside-click-handler';
import { useQuote } from '@/app/provider/quote-provider'


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { scrollY } = useScroll()
    const { openQuote } = useQuote();
    
  useMotionValueEvent(scrollY, "change", (latest) => {
    const previous = scrollY.getPrevious()
    
    setIsScrolled(latest > 50)
    
    if (previous !== undefined && latest > previous && latest > 100) {
      setIsVisible(false)
      setIsMobileMenuOpen(false)
    } else {
      setIsVisible(true)
    }
  })

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
  }, [isMobileMenuOpen])

  return (
    <>
    <motion.nav
      initial={{ y: 0 }}
      animate={{ y: isVisible ? 0 : '-100%' }}
      transition={{ duration: 0.3, ease: 'easeInOut' }}
      className={`px-4 lg:px-0 fixed top-0 left-0 right-0 z-90 ${
        isScrolled 
          ? 'bg-white shadow-md' 
          : 'bg-white/10 backdrop-blur-md'
      }`}
    >
      <Container>
        <header className="flex justify-between items-center py-4">
          <Link href="/" className='flex items-center gap-2'>
            <Image
              src="/logo1.png"
              alt='logo'
              height={60}
              width={60}
            />
          <span className="font-bold text-yellow-600 text-sm md:text-lg leading-tight tracking-tight"> 
            ROLLING GRAZING <br/>
            BONDED <br/> 
            TERMINAL
          </span>
        
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-6 items-center">
              <li>
                <Link href="/" className={`font-medium transition ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}>
                  Home
                </Link>
              </li>
              <li>
                <Link href="/services" className={`font-medium transition ${
                  isScrolled ? 'text-gray-700 hover:text-gray-900' : 'text-white hover:text-gray-200'
                }`}>
                  Services
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
                  <motion.button
                    onClick={openQuote}
                    className={`cursor-pointer relative px-4 py-2 rounded-md font-medium overflow-hidden inline-flex items-center gap-2 ${
                      isScrolled 
                        ? 'bg-yellow-600 text-white' 
                        : 'bg-white text-gray-900'
                    }`}
                    whileHover="hover"
                    initial="initial"
                  >
                    {/* Background color transition */}
                    <motion.span 
                      className={`absolute inset-0 ${
                        isScrolled ? 'bg-yellow-700' : 'bg-gray-100'
                      }`}
                      variants={{
                        initial: { x: '-100%' },
                        hover: { x: 0 }
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                    
                    {/* Text content */}
                    <span className="relative z-10">Request a Quote</span>
                    
                    {/* Arrow that appears on hover */}
                    <motion.div
                      className="relative z-10 flex items-center"
                      variants={{
                        initial: { opacity: 0, x: -8 },
                        hover: { opacity: 1, x: 0 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </li>

            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden p-2 rounded-md ${
              isScrolled ? 'text-gray-900' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </header>

        {/* Mobile Menu */}
        <OutsideClickHandler onOutsideClick={() => setIsMobileMenuOpen(false)}>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden pb-4 px-4"
          >
            <ul className="flex flex-col space-y-4">
              <li>
                <Link 
                  href="/" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-center block font-medium transition ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-600' : 'text-white hover:text-gray-200'
                  }`}
                >
                  Home
                </Link>
              </li>
              <li>
                <Link 
                  href="/about" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-center  block font-medium transition ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-600' : 'text-white hover:text-gray-200'
                  }`}
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-center block font-medium transition ${
                    isScrolled ? 'text-gray-700 hover:text-gray-900 hover:bg-gray-600' : 'text-white hover:text-gray-200'
                  }`}
                >
                  Contact 
                </Link>
              </li>
              <li>
                <Link 
                  href="/careers" 
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-center block font-medium transition ${
                    isScrolled ? 'text-gray-700 hover:text-gray-90 hover:bg-gray-6000' : 'text-white hover:text-gray-200'
                  }`}
                >
                  Careers 
                </Link>
              </li>
                 <li>
                  <motion.button
                  
                    onClick={() => {
                      openQuote();
                      setIsMobileMenuOpen(false)
                    }}
                    className={`w-full relative px-4 py-2 rounded-md font-medium overflow-hidden inline-flex items-center justify-center gap-2 ${
                      isScrolled 
                        ? 'bg-yellow-600 text-white' 
                        : 'bg-white text-gray-900'
                    }`}
                    whileHover="hover"
                    initial="initial"
                  >
                    {/* Background color transition */}
                    <motion.span 
                      className={`absolute inset-0 ${
                        isScrolled ? 'bg-yellow-700' : 'bg-gray-100'
                      }`}
                      variants={{
                        initial: { x: '-100%' },
                        hover: { x: 0 }
                      }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                    />
                    
                    {/* Text content */}
                    <span className="relative z-10 text-center">Request a Quote</span>
                    
                    {/* Arrow that appears on hover */}
                    <motion.div
                      className="absolute right z-10 flex items-center"
                      variants={{
                        initial: { opacity: 0, x: -8 },
                        hover: { opacity: 1, x: 0 }
                      }}
                      transition={{ duration: 0.3 }}
                    >
                      <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </motion.button>
                </li>
            </ul>
          </motion.div>
        )}
        </OutsideClickHandler>
      </Container>
    </motion.nav>
    
    
    </>
  )
}

export default Navbar
