import prismadb from "@/lib/prismadb"

export default async function CreateTracking() {
  
  const shipment = await prismadb.shipment.findMany({
    where: {
      status: "Pending"
    }
  })
  return (
    <div>Welcome to Create Tracking page</div>
  )
}
