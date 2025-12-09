import Image from "next/image";
import React from "react";

const Welcome = () => {
  return (
    <section className="min-h-screen bg-gray-50 pb-20 pt-32"> {/* Added pt-32 */}
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

            {/* Features List */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-6">
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Fast Delivery</h4>
                  <p className="text-sm text-gray-600">On-time shipping guaranteed</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Global Network</h4>
                  <p className="text-sm text-gray-600">Worldwide shipping coverage</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Secure Handling</h4>
                  <p className="text-sm text-gray-600">Safe & insured transport</p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0 w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <svg className="w-4 h-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">24/7 Support</h4>
                  <p className="text-sm text-gray-600">Always here to help</p>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-8">
              <button className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition shadow-lg hover:shadow-xl">
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