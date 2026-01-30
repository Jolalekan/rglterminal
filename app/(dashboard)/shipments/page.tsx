import prismadb from "@/lib/prismadb"
import { ShipmentColumn } from "./component/colum"
import ShipmentClient from "./component/client"

export default async function ShipmentPage() {
  
  const shipments = await prismadb.shipment.findMany({
  
  })

  const formattedShipments:ShipmentColumn[] = shipments.map((shipment)=>({
    id:shipment.id,
    status: shipment.status,
    trackingNumber: shipment.trackingNumber,
    currentLocation: shipment.currentLocation || "Not Available",
    destination: shipment.destination,
    createdAt: shipment.createdAt.toISOString(),
  }))
  return (
    <div className="p-8 pt-6">
      <ShipmentClient
        data={formattedShipments}
      />
    </div>
  )
}
