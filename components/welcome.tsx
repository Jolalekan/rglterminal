import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <section className="min-h-screen bg-gray-50 py-20"> {/* Added pt-32 */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image Side */}
          <div className="relative h-[400px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
            <Image 
              src="/img6.jpg" 
              alt="welcome" 
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          {/* Content Side */}
          <div className="space-y-6 lg:pl-12">
            <div className="inline-block">
              <span className="text-yellow-600 font-semibold text-sm uppercase tracking-wider">
                About Us
              </span>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Welcome to Our <span className="text-yellow-600">Shipping Solutions</span>
            </h2>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              We are glad to have you here. With over 20 years of experience in logistics 
              and goods management, we provide seamless shipping solutions that connect 
              businesses across the globe.
            </p>
            
            <p className="text-lg text-gray-600 leading-relaxed">
              Our commitment to excellence and customer satisfaction has made us a trusted 
              partner for companies of all sizes. Explore our services and discover how we 
              can streamline your supply chain.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <button className="bg-yellow-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-yellow-700 transition shadow-lg hover:shadow-xl cursor-pointer">
                Learn More
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 transition">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Welcome;