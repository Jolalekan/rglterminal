import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request,
     { params }: { params: Promise<{ id: string }> } 
) {
  try {
    const { id } = await params;
    const body = await req.json();
    const { status, location, description, notes, handledBy } = body;

    // Validation
    if (!status || !location || !description) {
      return NextResponse.json(
        { message: "Status, location, and description are required" },
        { status: 400 }
      );
    }

    // Check if shipment exists
    const shipment = await prismadb.shipment.findUnique({
      where: { id },
    });

    if (!shipment) {
      return NextResponse.json(
        { message: "Shipment not found" },
        { status: 404 }
      );
    }

    // Create tracking event and update shipment in a transaction
    const result = await prismadb.$transaction([
      // Create the tracking event
      prismadb.trackingEvent.create({
        data: {
          shipmentId: id,
          status,
          location,
          description,
          notes: notes || null,
          handledBy: handledBy || null,
          timestamp: new Date(),
        },
      }),
      // Update the shipment status and current location
      prismadb.shipment.update({
        where: { id },
        data: {
          status,
          currentLocation: location,
        },
      }),
    ]);

    return NextResponse.json(
      {
        message: "Tracking event added successfully",
        data: result[0],
      },
      { status: 201 }
    );
  } catch (error: any) {
    console.error("Error adding tracking event:", error);
    return NextResponse.json(
      {
        message: "Error adding tracking event",
        error: process.env.NODE_ENV === "development" ? error.message : undefined,
      },
      { status: 500 }
    );
  }
}