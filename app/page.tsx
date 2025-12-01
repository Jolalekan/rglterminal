"use client";

import { Settings } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center from-gray-100 to-gray-300 p-2">
      
    <Link href="/">
    <Image
      src="/logo.jpg"
      alt="logo"
      width={100}
      height={100}
    />
    </Link>

      <h2  className="text-3xl md:text-6xl font-extrabold text-gray-800 text-center mb-8">Welcome To <br/> Rolling Grazing Bonded Terminal Limited</h2>
      {/* Icon Animation */}
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
      >
        <Settings className="w-28 h-28 text-gray-700" />
      </motion.div>

      {/* Text */}
      <motion.h1 
        className="text-2xl md:text-5xl font-extrabold mt-8 text-gray-800 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        Site Under Construction
      </motion.h1>

      <motion.p 
        className="text-lg md:text-xl text-gray-600 mt-4 text-center max-w-md"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        We&apos;re working hard to bring this website to life. Please check back soon!
      </motion.p>

      {/* Optional Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
      >
        <Link
          href="/"
          className="mt-8 inline-block bg-gray-800 text-white px-6 py-3 rounded-xl shadow-lg hover:bg-gray-700 transition font-medium"
        >
          Refresh Page
        </Link>
      </motion.div>
    </div>
  );
}
