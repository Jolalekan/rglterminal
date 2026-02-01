import { notFound } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { Package, MapPin, Calendar, Phone } from "lucide-react";
import { getStatusColor } from "@/lib/get-status-color";
import TrackingTimeline from "@/components/tracking-timeline";

export default async function TrackingDetailsPage({
  params,
}: {
  params: { trackingNumber: string };
}) {
  const { trackingNumber } = await params;

  const shipment = await prismadb.shipment.findUnique({
    where: {
      trackingNumber: trackingNumber.toUpperCase(),
    },
    include: {
      receiverAddress: true,
      trackingEvents: {
        orderBy: {
          timestamp: "desc",
        },
      },
    },
  });

  if (!shipment) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-lg shadow-lg p-8 mb-6">
          <div className="flex justify-between items-start mb-6">
            <div>
              <h1 className="text-3xl font-bold mb-2">Tracking Details</h1>
              <p className="text-gray-600">Tracking Number: {shipment.trackingNumber}</p>
            </div>
            <div className={`px-4 py-2 rounded-full text-sm font-semibold ${getStatusColor(shipment.status)}`}>
              {shipment.status}
            </div>
          </div>

          {/* Shipment Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-600">Current Location</p>
                <p className="font-semibold">{shipment.currentLocation || "In Transit"}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Package className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-600">Package Type</p>
                <p className="font-semibold">{shipment.packageType}</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <MapPin className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-600">Destination</p>
                <p className="font-semibold">{shipment.destination}</p>
                <p className="text-sm text-gray-500">
                  {shipment.receiverAddress?.street}, {shipment.receiverAddress?.city}
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Calendar className="w-5 h-5 text-gray-400 mt-1" />
              <div>
                <p className="text-sm text-gray-600">Estimated Delivery</p>
                <p className="font-semibold">
                  {shipment.estimatedDelivery
                    ? new Date(shipment.estimatedDelivery).toLocaleDateString()
                    : "Not available"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-xl font-bold mb-6">Tracking History</h2>
          <TrackingTimeline events={shipment.trackingEvents} />
        </div>
      </div>
    </div>
  );
}