"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { CheckCircle } from "lucide-react";

const ThanksPage = () => {
  return (
    <div className="bg-white min-h-screen flex items-center justify-center px-6">
      <div className="text-center max-w-lg">

        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="w-20 h-20 text-green-500" strokeWidth={1.5} />
        </motion.div>

  
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-4xl font-bold text-gray-800 mb-4"
        >
          Thank You!
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-gray-500 text-lg mb-8"
        >
          Your message has been received. We&apos;ll get back to you as soon as possible.
        </motion.p>

     
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <Link
            href="/"
            className="inline-block bg-yellow-700 text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-gray-700 transition-colors duration-200"
          >
            Back to Home
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ThanksPage;