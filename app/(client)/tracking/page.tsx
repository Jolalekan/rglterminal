"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

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
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full p-8 bg-white rounded-lg shadow-lg">
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
      </div>
    </div>
  );
}