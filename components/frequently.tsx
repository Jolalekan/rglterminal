"use client";

import { motion, AnimatePresence, animate } from "framer-motion";
import {
  Mail,
  ChevronDown,
  ArrowRight,
} from "lucide-react";
import { useState, useEffect } from "react";
import { useQuote } from "@/app/provider/quote-provider";



const Frequently = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);


  const [clientCount, setClientCount] = useState(0);
  const { openQuote } = useQuote();
  // Animate counter from 19950 to 20000
  useEffect(() => {
    const controls = animate(19950, 20000, {
      duration: 2,
      ease: "easeOut",
      onUpdate: (latest) => {
        setClientCount(Math.floor(latest));
      },
    });

    return controls.stop;
  }, []);

  const features = [
    {
      title: "What services does Rolling Grazing Limited offer?",
      description:
        "Rolling Grazing Limited Terminal provides a comprehensive range of logistics and goods management services, including bonded warehousing, container storage, barging, and in-stuffing for export. Our goal is to facilitate efficient and secure logistics solutions tailored to your business needs.",
    },
    {
      title: "How can I get a quote for your services?",
      description:
        "You can request a quote by filling out the 'Request a Quote' form on our website. Provide details about your logistics needs, and our team will promptly get back to you with a customized quote.",
    },
    {
      title: "What types of goods can be stored in your facilities?",
      description:
        "Our facilities can accommodate a wide variety of goods, including general cargo, hazardous materials, and oversized items. Please contact us for specific storage requirements and regulations.",
    },
    {
      title: "How secure is my cargo at Rolling Grazing Terminal?",
      description:
        "Security is our top priority at Rolling Grazing Terminal. We utilize state-of-the-art security systems, 24/7 surveillance, and strict access controls to ensure the safety of your cargo at all times.",
    },
    {
      title: "Do you offer transportation services for my goods?",
      description:
        "Yes, we offer comprehensive transportation services, including barging and road transport. Our team can help you coordinate the safe and timely delivery of your goods.",
    },
  ];

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section
      className="bg-gradient-to-b from-white via-yellow-50 to-gray-50 py-20 scroll-mt-24"
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ type: "spring", stiffness: 80, damping: 15 }}
            className="lg:sticky lg:top-32 space-y-6"
          >
            <div>
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
                FAQ
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Frequently Asked{" "}
              <span className="text-yellow-600">Questions</span>
            </h2>

            <p className="text-lg text-gray-600 leading-relaxed">
              Quick answers to questions you may have. Can&apos;t find what
              you&apos;re looking for? Our support team is here to help.
            </p>
<motion.button
  type="button"
  onClick={openQuote}
  initial="initial"
  whileHover="hover"
  whileTap={{ scale: 0.95 }}
  className="
    relative px-8 py-4 rounded-lg font-semibold
    overflow-hidden inline-flex items-center gap-3
    bg-yellow-600 text-white
    shadow-lg hover:shadow-xl
    cursor-pointer
  "
>
  {/* Sliding background overlay */}
  <motion.span
    aria-hidden
    className="absolute inset-0 bg-yellow-700"
    variants={{
      initial: { x: "-100%" },
      hover: { x: 0 },
    }}
    transition={{ duration: 0.3, ease: "easeOut" }}
  />

  {/* Icon */}
  <Mail size={20} className="relative z-10" />

  {/* Text */}
  <span className="relative z-10 whitespace-nowrap">
    Request a Quote
  </span>

  {/* Arrow appears on hover */}
  <motion.span
    className="relative z-10 flex items-center"
    variants={{
      initial: { opacity: 0, x: -8 },
      hover: { opacity: 1, x: 0 },
    }}
    transition={{ duration: 0.25, ease: "easeOut" }}
  >
    <ArrowRight className="w-5 h-5" />
  </motion.span>
</motion.button>




            {/* Stats or Trust Badges */}
            <div className="grid grid-cols-2 gap-4 pt-6">
              <div className="bg-white rounded-xl p-4 shadow-md">
                <p className="text-3xl font-bold text-yellow-600">24/7</p>
                <p className="text-sm text-gray-600">Support Available</p>
              </div>
              <div className="bg-white rounded-xl p-4 shadow-md">
                <motion.p
                  initial={{ scale: 0.5, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-3xl font-bold text-yellow-600"
                >
                  {clientCount}+
                </motion.p>
                <p className="text-sm text-gray-600">Happy Clients</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Accordion */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition-shadow"
              >
                {/* Question Button */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors cursor-pointer "
                >
                  <span className="text-lg font-semibold text-gray-900 pr-4">
                    {item.title}
                  </span>

                  <motion.div
                    animate={{
                      rotate: openIndex === index ? 180 : 0,
                      color: openIndex === index ? "#ca8a04" : "#9ca3af",
                    }}
                  >
                    <ChevronDown className="w-6 h-6 text-yellow-600" />
                  </motion.div>
                </button>

                {/* Answer Content */}
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pt-0">
                        <div className="border-t border-gray-200 pt-4">
                          <p className="text-gray-600 leading-relaxed">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </motion.div>
        </div>

     
      </div>
    </section>
  );
};

export default Frequently;
