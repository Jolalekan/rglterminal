'use client'

import Image from "next/image";
import Link from "next/link";
import Container from "./ui/container";
import { Button } from "./ui/button";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SocialMedia {
  facebook?: string;
  instagram?: string;
  twitter: string;
  youtube: string;
  tiktok: string;
  pinterest: string;
}

const Footer = () => {
  const [email, setEmail] = useState("");

  const socialMedia: SocialMedia = {
    facebook: "rglterminal",
    instagram: "rglterminal",
    twitter: "rglterminal",
    youtube: "rglterminal",
    tiktok: "rglterminal",
    pinterest: "rglterminal",
  };

  const { facebook, instagram, tiktok, twitter } = socialMedia;
  const year = new Date().getFullYear();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle subscription logic
    console.log("Subscribing:", email);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gray-900 text-gray-300 border-t border-gray-800">
      <Container >
        <section className="px-4 lg:px-0">
        {/* Main Footer Content */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="py-16"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            
            {/* Company Info */}
            <motion.div variants={itemVariants} className="space-y-4">
              <Link href="/" className='flex items-center gap-2'>
                          <Image
                            src="/logo1.png"
                            alt='logo'
                            height={60}
                            width={60}
                          />
                        <span className="font-bold text-yellow-600 text-lg leading-tight tracking-tight"> 
                          ROLLING GRAZING <br/>
                          BONDED <br/> 
                          TERMINAL
                        </span>
                      
                        </Link>
              
              <div className="space-y-3 text-sm">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-1" />
                  <span>
                    klm 26, Opp. Foreign Affair Academy,<br />
                    Lagos/ Badagry Expressway,<br />
                    Ayetoro/ Ijanikin,<br />
                    Lagos State, Nigeria
                  </span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <a href="mailto:info@rglterminal.com" className="hover:text-yellow-500 transition">
                    info@rglterminal.com
                  </a>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                  <a href="tel:+2349060005911" className="hover:text-yellow-500 transition">
                    +234 906 600 5911
                  </a>
                  <a href="tel:+2348020992018" className="hover:text-yellow-500 transition">
                    +234 802 099 2018
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Company Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-bold text-white text-lg">Company</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/" className="hover:text-yellow-500 transition hover:translate-x-1 inline-block">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-yellow-500 transition hover:translate-x-1 inline-block">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/services" className="hover:text-yellow-500 transition hover:translate-x-1 inline-block">
                    Our Services
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-yellow-500 transition hover:translate-x-1 inline-block">
                    Contact Us
                  </Link>
                </li>
               
                <li>
                  <Link href="/careers" className="hover:text-yellow-500 transition hover:translate-x-1 inline-block">
                    Careers
                  </Link>
                </li>
              </ul>
            </motion.div>

            {/* Services Links */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-bold text-white text-lg">Our Services</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link href="/warehousing" className="hover:text-yellow-500 transition hover:translate-x-1 inline-block">
                    Bonded Warehousing
                  </Link>
                </li>
                <li>
                  <Link href="/storage" className="hover:text-yellow-500 transition hover:translate-x-1 inline-block">
                    Container Storage
                  </Link>
                </li>
                <li>
                  <Link href="/bonded-terminal" className="hover:text-yellow-500 transition hover:translate-x-1 inline-block">
                    Bonded Terminal
                  </Link>
                </li>
                <li>
                  <Link href="/maritime-shipping" className="hover:text-yellow-500 transition hover:translate-x-1 inline-block">
                    Maritime Shipping
                  </Link> 
                </li>
              
              </ul>
            </motion.div>

            {/* Newsletter */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="font-bold text-white text-lg">Stay Updated</h3>
              <p className="text-sm">
                Subscribe to our newsletter for the latest updates and industry insights.
              </p>
              
              <form onSubmit={handleSubscribe} className="space-y-3">
                <div className="relative">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    required
                    className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 border border-gray-700"
                  />
                </div>
                <Button 
                  type="submit"
                  className="cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-3 rounded-lg transition flex items-center justify-center space-x-2"
                >
                  <span>Subscribe</span>
                  <Send className="w-4 h-4" />
                </Button>
              </form>

              {/* Social Media */}
              <div className="pt-4">
                <p className="text-sm font-semibold text-white mb-3">Follow Us</p>
                <div className="flex gap-3">
                  {facebook && (
                    <Link
                      href={`https://facebook.com/${facebook}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition"
                    >
                      <Image
                        src="/facebook.png"
                        alt="facebook"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                    </Link>
                  )}

                  {instagram && (
                    <Link
                      href={`https://instagram.com/${instagram}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition"
                    >
                      <Image
                        src="/instagram.png"
                        alt="instagram"
                        width={20}
                        height={20}
                        className=""
                      />
                    </Link>
                  )}

                  {tiktok && (
                    <Link
                      href={`https://tiktok.com/${tiktok}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition"
                    >
                      <Image
                        src="/tiktok.png"
                        alt="tiktok"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                    </Link>
                  )}

                  {twitter && (
                    <Link
                      href={`https://twitter.com/${twitter}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-yellow-600 transition"
                    >
                      <Image
                        src="/x.png"
                        alt="twitter"
                        width={20}
                        height={20}
                        className="brightness-0 invert"
                      />
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
            <div className="text-gray-400">
              &copy; {year} Rolling Grazing Bonded Terminal. All rights reserved.
            </div>
            
            <div className="flex items-center gap-6">
              <Link href="/privacy" className="hover:text-yellow-500 transition">
                Privacy Policy
              </Link>
              <Link href="/terms" className="hover:text-yellow-500 transition">
                Terms of Service
              </Link>
              <div className="flex items-center gap-2">
                <span className="text-gray-400">Nigeria | English | ₦ NGN</span>
              </div>
            </div>
          </div>
        </div>
        </section>
      </Container>
    </footer>
  );
};

export default Footer;