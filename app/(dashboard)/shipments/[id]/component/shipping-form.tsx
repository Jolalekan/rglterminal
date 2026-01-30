"use client";

import { Button } from "@/components/ui/button";
import { Heading } from "@/components/ui/heading";
import { zodResolver } from "@hookform/resolvers/zod";
import { Shipment } from "@prisma/client";
import axios from "axios";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

const formSchema = z.object({
  trackingNumber: z.string().min(1, "Tracking Number is required"),
  origin: z.string().min(1, "Origin is required"),
  destination: z.string().min(1, "Destination is required"),
  destinationPhone: z.string().min(1, "Destination Phone is required"),
  packageType: z.enum(["Document", "Parcel", "Box", "Envelope", "Pallet"]),
  receiverAddressId: z.string().min(1, "Receiver Address is required"),
  estimatedDelivery: z.date().nullable(),
  status: z.enum(["Pending", "Pickedup", "Transit", "Shipped", "Delivered", "Failed", "Returned", "Cancelled"]),
  currentLocation: z.string().nullable(),
});
 
interface ShippingFormProps {
  initialData: Shipment | null;
}

type ShipmentFormValue = z.infer<typeof formSchema>;

const ShippingForm: React.FC<ShippingFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const title = initialData ? "Edit Shipment" : "Create Shipment";
  const description = initialData ? "Edit a Shipment" : "Create a new Shipment";
  const toastMessage = initialData ? "Shipment updated" : "Shipment created";
  const action = initialData ? "Save Changes" : "Create";

  const form = useForm<ShipmentFormValue>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData || {
      trackingNumber: "",
      origin: "",
      destination: "",
      destinationPhone: "",
      packageType: "Parcel",
      receiverAddressId: "",
      estimatedDelivery: null,
      status: "Pending",
      currentLocation: null,
    },
  });

  const onSubmit = async (data: ShipmentFormValue)=>{
    try {
        setLoading(true);
        if(initialData){
            await axios.patch(`/api/shipments/${params.id}`,data);
        }else{
            await axios.post(`/api/shipments`, data)
        }
           router.refresh();
      router.push(`/shipments`);
      toast.success(toastMessage);
    } catch (error) {
        
    }finally{
        setLoading(false)
    }
  }


  const onDelete = async () => {
    try {
      setLoading(true);
      await axios.delete(`/api/shipments/${params.id}`);
      router.refresh();
      router.push("/shipments");
      toast.success("Shipment deleted");
    } catch (error) {

    } finally {
      setLoading(false);
    }
  };

  return (
    <>
       <AlertModel
        isOpen={open}
        onClose={() => setOpen(false)}
        onConfirm={onDelete}
        loading={loading}
      />

       <div className="flex justify-between items-center">
        <Heading title={title} description={description} />
        {initialData && (
          <Button
            disabled={loading}
            variant="destructive"
            size="icon"
            onClick={() => setOpen(true)}
          >
            <Trash className=" w-4 h-4" />
          </Button>
        )}
      </div>
      <Separator />
    </>
)
};

export default ShippingForm;
