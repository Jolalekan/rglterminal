import React from "react";
import Container from "./ui/container";
import Image from "next/image";

const ChooseUs = () => {
  const features = [
    {
      title: "Reliable",
      description: "You can count on us to always provide unequalled service delivery in fulfilling the needs of our customers.",
      icon: "/checkmark.png"
    },
    {
      title: "Experienced",
      description: "With over 20 years in the industry, we bring expertise and professionalism to every shipment.",
      icon: "/technology.png"
    },
    {
      title: "Secure",
      description: "Your goods are fully insured and handled with the highest security standards throughout the journey.",
      icon: "/settings.png"
    },
    {
      title: "Efficient",
      description: "Fast processing times and optimized routes ensure your cargo arrives on schedule, every time.",
      icon: "/quality.png"
    }
  ];

  return (
    <section className="bg-gray-50 py-20 scroll-mt-24">
      <Container>
        <div className="max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Why Choose <span className="text-yellow-600">Rolling Grazing</span> Bonded Terminal?
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We deliver excellence in every aspect of our service, making us the trusted choice for businesses worldwide.
            </p>
          </div>

          {/* Features Grid - 4 Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                {/* Icon */}
                <div className="mb-6 flex justify-center">
                  <div className="relative w-40 h-40 bg-yellow-50 rounded-full flex items-center justify-center group-hover:bg-blue-100 transition-colors">
                    <Image
                      src={feature.icon}
                      alt={feature.title}
                      width={100}
                      height={100}
                      className="object-contain"
                    />
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 text-center">
                  {feature.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 text-center leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

         
        </div>
      </Container>
    </section>
  );
};

export default ChooseUs;