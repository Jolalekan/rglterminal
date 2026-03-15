"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Loader2, Send } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function TrackPage() {
  const [trackingNumber, setTrackingNumber] = useState("");
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleTrack = (e: React.FormEvent) => {
    e.preventDefault();
    if (trackingNumber.trim()) {
      setLoading(true);
      router.push(`/tracking/${trackingNumber.trim()}`);
    }
  };

  return (
    <div className=" bg-white">
      <section className="relative h-[60vh] min-h-[50px] overflow-hidden">
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
                Track your <br />
                <span className="text-yellow-400">Consignment</span>
              </h1>
              <p className="text-xl text-gray-200 leading-relaxed mb-8">
                We provide real-time tracking for your shipments. Enter your
                tracking number to see the current status and location of your
                consignment.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="min-h-screen mx-auto max-w-7xl">
        <div className="px-4 py-8 flex justify-between gap-12 h-full">
          <div className="w-full">
          <div className="flex flex-col gap-4 w-full">
            <h1 className="text-3xl font-bold text-center mb-2">
              Track Your Package
            </h1>
            <p className="text-gray-600 text-center mb-8">
              Enter your tracking number to see your shipment status
            </p>

            <form onSubmit={handleTrack} className="space-y-4">
              <Input
                type="text"
                placeholder="Enter tracking number (e.g. RGL-12345678-A3F2)"
                value={trackingNumber}
                onChange={(e) => setTrackingNumber(e.target.value)}
                className="text-center text-lg"
              />
              <Button
                type="submit"
                className="cursor-pointer w-full bg-yellow-600 hover:bg-yellow-700"
                size="lg"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Loading...
                  </>
                ) : (
                  <>
                    Track Package
                    <Send className="w-4 h-4 mr-2" />
                  </>
                )}
              </Button>
            </form>

            <h2 className="text-xl font-semibold text-gray-800 mt-8">
              How it works
            </h2>
            <ol className="list-disc pl-5 space-y-2 text-gray-600">
              <li>Enter your tracking number in the input field above</li>
              <li>
                Click &apos;Track Package&apos; to view real-time shipment
                status
              </li>
              <li>See the current location and estimated delivery time</li>
              <li>
                For Overseas&apos;s container tracking {""}
                <Link
                  href="https://www.track-trace.com/container"
                  target="_blank"
                  className="text-yellow-600 hover:underline cursor-pointer"
                >
                  click here
                </Link>
              </li>
            </ol>
          </div>
          </div>
              
          <div className="w-full relative overflow-hidden hidden md:block">
            <Image
              src="/truck.jpeg"
              alt="Package delivery"
              fill
              className="object-cover w-full h-full"
            />
            <div className="absolute inset-0 bg-yellow-900/20" />
          </div>
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
