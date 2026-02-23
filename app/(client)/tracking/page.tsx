"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion"

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const router = useRouter();

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      router.push(`/tracking/${trackingNumber.trim()}`);
    }
  };

  return (
 <div className=" bg-white">
    <section className="relative h-[60vh] min-h-[300px] overflow-hidden">
          <Image
            src="/trucks1.jpeg"
            alt="career page image"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          
          <div className="relative z-10 h-full flex items-center">
            <div className="container mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-3xl"
              >
                
                <h1 className="mt-16 text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                  Track your <br /><span className="text-yellow-400">Consignment</span> 
                </h1>
                <p className="text-xl text-gray-200 leading-relaxed mb-8">
                  We provide real-time tracking for your shipments. Enter your tracking number to see the current status and location of your consignment.
                </p>
                
              </motion.div>
            </div>
          </div>
        </section> 
  
  <div className="flex">

    {/* Form panel - left half */}
    <div className="w-1/2 flex items-center justify-center bg-white">
      <div className="w-full max-w-md p-8">
        <h1 className="text-3xl font-bold text-center mb-2">Track Your Package</h1>
        <p className="text-gray-600 text-center mb-8">
          Enter your tracking number to see your shipment status
        </p>

        <form onSubmit={handleTrack} className="space-y-4">
          <Input
            type="text"
            placeholder="Enter tracking number (e.g., RGL-12345678-A3F2)"
            value={trackingNumber}
            onChange={(e) => setTrackingNumber(e.target.value)}
            className="text-center text-lg"
          />
          <Button type="submit" className="cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700" size="lg">
            <Search className="w-4 h-4 mr-2" />
            Track Package
          </Button>
        </form>

        <h2 className="text-xl font-semibold text-gray-800 mt-8">How it works</h2>
        <ol className="list-disc pl-5 space-y-2 text-gray-600">
          <li>Enter your tracking number in the input field above</li>
          <li>Click &apos;Track Package&apos; to view real-time shipment status</li>
          <li>See the current location and estimated delivery time</li>
        </ol>
      </div>
    </div>

    {/* Image panel - right half */}
   <div className="w-1/2 relative overflow-hidden">
  <Image
    src="/truck.jpeg"
    alt="Package delivery"
    fill
    className="object-cover"
  />
  <div className="absolute inset-0 bg-yellow-900/20" />
</div>

  </div>
</div>
    // <div className="min-h-screen bg-gray-50">
    //   <div className="flex ">
    //   <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
    //     <h1 className="text-3xl font-bold text-center mb-2">Track Your Package</h1>
    //     <p className="text-gray-600 text-center mb-8">
    //       Enter your tracking number to see your shipment status
    //     </p>

    //     <form onSubmit={handleTrack} className="space-y-4">
    //       <Input
    //         type="text"
    //         placeholder="Enter tracking number (e.g., RGL-12345678-A3F2)"
    //         value={trackingNumber}
    //         onChange={(e) => setTrackingNumber(e.target.value)}
    //         className="text-center text-lg"
    //       />
    //       <Button type="submit" className="cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700" size="lg">
    //         <Search className="w-4 h-4 mr-2" />
    //         Track Package
    //       </Button>
    //     </form>
    //   </div>
    //   <div className="">

    //   </div>
    // </div>
    // </div>
  );
}

//  <div className="min-h-screen flex items-center justify-center bg-gray-50">
//       <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
//         <h1 className="text-3xl font-bold text-center mb-2">Track Your Package</h1>
//         <p className="text-gray-600 text-center mb-8">
//           Enter your tracking number to see your shipment status
//         </p>

//         <form onSubmit={handleTrack} className="space-y-4">
//           <Input
//             type="text"
//             placeholder="Enter tracking number (e.g., RGL-12345678-A3F2)"
//             value={trackingNumber}
//             onChange={(e) => setTrackingNumber(e.target.value)}
//             className="text-center text-lg"
//           />
//           <Button type="submit" className="cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700" size="lg">
//             <Search className="w-4 h-4 mr-2" />
//             Track Package
//           </Button>
//         </form>
//       </div>
//     </div>