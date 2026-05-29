import prismadb from "@/lib/prismadb"
import { ShipmentColumn } from "./component/colum"
import ShipmentClient from "./component/client"
import { format } from "date-fns";

export default async function ShipmentPage() {
  
  const shipments = await prismadb.shipment.findMany({
     orderBy: {
      createdAt: 'desc' 
    }
  
  })

  const formattedShipments:ShipmentColumn[] = shipments.map((shipment)=>({
    id:shipment.id,
    status: shipment.status,
    trackingNumber: shipment.trackingNumber,
    currentLocation: shipment.currentLocation || "Not Available",
    destination: shipment.destination,
    createdAt: format(new Date(shipment.createdAt), "MMM dd, yyyy"),        
  estimatedDelivery: shipment.estimatedDelivery 
    ? format(new Date(shipment.estimatedDelivery), "MMM dd, yyyy")        
    : "Not Set",
}));

  return (
    <div className="p-8 pt-6">
      <ShipmentClient
        data={formattedShipments}
      />
    </div>
  )
}
