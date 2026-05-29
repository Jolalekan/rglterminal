import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> } 
) {
  try {
    const body = await req.json();
    const { id } = await params;
    
    const {
      destination,
      destinationPhone,
      packageType,
      estimatedDelivery,
      street,
      city,
      state,
      country,
      postalCode,
      label
    } = body;

    const existingShipment = await prismadb.shipment.findUnique({
      where: { id },
    });

    if (!existingShipment) {
      return new NextResponse("Not found", { status: 404 });
    }

    await prismadb.address.update({
      where: { id: existingShipment.receiverAddressId },
      data: {
        street,
        city,
        state,
        country,
        postalCode,
        label
      },
    });

    const shipment = await prismadb.shipment.update({
      where: { id },
      data: {
        destination,
        destinationPhone,
        packageType,
        estimatedDelivery: estimatedDelivery 
      ? new Date(estimatedDelivery).toISOString()  
      : null,
      },
    });

    return NextResponse.json(shipment);
  } catch (error) {
    console.log("[SHIPMENT_PATCH]", error);
    return new NextResponse("Internal error", { status: 500 });
  }
}


export async function DELETE(
    req:Request,
    { params }: { params: Promise<{ id: string }> } 
){
    try {
        const { id } = await params;

        // Delete the shipment
        await prismadb.shipment.deleteMany({
            where:{id}
        })
        return new NextResponse("Shipment deleted successfully");
    } catch (error) {
        console.log("[SHIPMENT_DELETE]", error);
    return new NextResponse("Internal error", { status: 500 });
    }
}