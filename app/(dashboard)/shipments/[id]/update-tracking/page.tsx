import prismadb from "@/lib/prismadb";
import { notFound } from "next/navigation";
import UpdateTrackingForm from "./component/update-tracking-form";

export default async function UpdateTrackingPage({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;

  const shipment = await prismadb.shipment.findUnique({
    where: { id },
    select: {
      id: true,
      trackingNumber: true,
      status: true,
      currentLocation: true,
    },
  });

  if (!shipment) {
    return notFound();
  }

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Update Tracking</h2>
          <p className="text-sm text-muted-foreground">
            Add new tracking event for {shipment.trackingNumber}
          </p>
        </div>
        <UpdateTrackingForm shipment={shipment} />
      </div>
    </div>
  );
}