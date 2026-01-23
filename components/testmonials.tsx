"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { testimonials } from "@/lib/testimonials";


const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1); // 1 for next, -1 for prev
 const handleNextClick = () => {
    setDirection(1);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };
  // Setup auto rotation
  useEffect(() => {
    const intervalId = setInterval(() => {
      handleNextClick();
    }, 5000);
    
    return () => clearInterval(intervalId);
  }, [currentIndex]);

 

  const handlePrevClick = () => {
    setDirection(-1);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  // Animation variants
  const variants = {
    enter: (direction:number) => ({
      x: direction > 0 ? 100 : -100,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction:number) => ({
      x: direction > 0 ? -100 : 100,
      opacity: 0
    })
  };

  return (
    <div className="bg-gradient-to-br from-purple-600 to-blue-500 py-8 w-full">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-xl font-bold text-white leading-tight mb-6">Our Reviews</h2>
        
        <div className="flex items-center justify-center relative max-w-7xl mx-auto">
          <button
            className="hidden md:block absolute left-4 lg:left-0 bg-gray-200 hover:bg-gray-300 text-black leading-tight font-bold py-2 px-4 rounded z-10 transition-colors"
            onClick={handlePrevClick}
          >
            Prev
          </button>
          
          <div className="relative h-64 w-full max-w-md overflow-hidden">
            <AnimatePresence initial={false} custom={direction} mode="wait">
              <motion.div
                key={currentIndex}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{
                  x: { type: "spring", stiffness: 300, damping: 30 },
                  opacity: { duration: 0.3 }
                }}
                className="absolute w-full top-0 left-0 p-4"
              >
                <div className="w-full mx-auto text-center">
                  <div className="flex justify-center mb-2">
                    <Image
                      src={testimonials[currentIndex].image} 
                      alt={testimonials[currentIndex].name} 
                      width={100}
                      height={100}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                  </div>
                  <p className="text-lg font-bold mb-2 text-white leading-tight">
                    {testimonials[currentIndex].name}
                  </p>
                  <p className="text-white leading-tight text-sm mb-2 max-w-xs mx-auto">
                    {testimonials[currentIndex].Description}
                  </p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          <button
            className="hidden md:block absolute right-4 lg:right-0 bg-gray-200 hover:bg-gray-300 text-gray-900 leading-tight font-bold py-2 px-4 rounded z-10 transition-colors"
            onClick={handleNextClick}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;