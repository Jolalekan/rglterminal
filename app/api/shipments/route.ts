import { generateTrackingNumber } from "@/components/generate-tracking";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try {
        const body = await req.json();
      console.log("Received shipment data", body)
        const { 
                destination, 
                destinationPhone, 
                packageType, 
                state, 
                postalCode, 
                street, 
                city, 
                country,  
                addressLabel, 
                estimatedDelivery
            } = body;

          if (!destination || !destinationPhone) {
      return NextResponse.json(
        { message: "Destination and phone number are required" },
        { status: 400 }
      );
    }

     let trackingNumber = generateTrackingNumber();


        let existing = await prismadb.shipment.findUnique({
      where: { trackingNumber }
    });
    
    while (existing) {
      trackingNumber = generateTrackingNumber();
      existing = await prismadb.shipment.findUnique({
        where: { trackingNumber }
      });
    }

        const COMPANY_ORIGIN = process.env.COMPANY_NAME || "Warehouse";
      const COMPANY_CITY = process.env.COMPANY_CITY || "Main Hub";

        const address = await prismadb.address.create({
      data: {
        street,
        city,
        state,
        country,
        postalCode,
        label: addressLabel || "Receiver Address",
      },
    });


    const shipment = await prismadb.shipment.create({
      data: {
        trackingNumber,
        origin: COMPANY_ORIGIN,
        destination,
        destinationPhone,
        receiverAddressId: address.id,
        packageType,
        status: "Pending",
        currentLocation: COMPANY_CITY,
        estimatedDelivery: estimatedDelivery ? new Date(estimatedDelivery) : null,

        // Create initial tracking event
        trackingEvents: {
          create: {
            status: "Pending",
            location: COMPANY_CITY,
            description: "Shipment created and awaiting pickup",
            timestamp: new Date(),
          },
        },
      },
      include: {
        receiverAddress: true,
        trackingEvents: true,
      },
    });

    return NextResponse.json(
      {
        message: "Shipment created successfully",
        data: {
          trackingNumber: shipment.trackingNumber,
          id: shipment.id,
          status: shipment.status,
          estimatedDelivery: shipment.estimatedDelivery,
        },
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error creating shipment:", error);

    // Handle Prisma specific errors
    if (error.code === "P2002") {
      return NextResponse.json(
        { message: "Tracking number already exists. Please try again." },
        { status: 409 }
      );
    }

    return NextResponse.json(
      {
        message: "Error creating shipment",
        error: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}