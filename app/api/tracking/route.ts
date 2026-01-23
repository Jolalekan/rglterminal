import { generateTrackingNumber } from "@/components/generate-tracking";
import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req:Request){
    try {
        const body = await req.json();

        const { 
                origin, 
                destination, 
                status, 
                destinationPhone, 
                packageType, 
                state, 
                postalCode, 
                street, 
                city, 
                country,  
                estimatedDelivery,
                existingAddressId,
                addressLabel, 
            } = body;

          if (!destination || !destinationPhone) {
      return NextResponse.json(
        { message: "Destination and phone number are required" },
        { status: 400 }
      );
    }

     const trackingNumber = generateTrackingNumber();


      if (!existingAddressId && (!street || !city || !state)) {
      return NextResponse.json(
        { message: "Complete address is required" },
        { status: 400 }
      );
    }


    const shipment = await prismadb.shipment.create({
      data: {
        trackingNumber,
        
        // Receiver Info
        origin,
        destination,
        destinationPhone,
        
         receiverAddress: existingAddressId
          ? {
              connect: { id: existingAddressId }
            }
          : {
              create: {
                street,
                city,
                state,
                postalCode,
                country,       
                label: addressLabel,       
              }
            },
     
      packageType,
      status: "Pending",
    estimatedDelivery,

       trackingEvents: {
          create: {
            status: "Pending",
            location: process.env.COMPANY_CITY || "Main Hub",
            description: "Shipment created and awaiting pickup",
            timestamp: new Date(),
          }
        }
    
    },
    include: {
        receiverAddress: true,
        trackingEvents: true,
      }
    })

      return NextResponse.json(
      {
        message: "Shipment created successfully",
        data: {
          trackingNumber: shipment.trackingNumber,
          id: shipment.id,
          status: shipment.status,
          estimatedDelivery: shipment.estimatedDelivery,
        }
      },
      { status: 201 }
    );
    } catch (error:any) {
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
        error: process.env.NODE_ENV === "development" ? error.message : undefined
      },
      { status: 500 }
    );
    }
}