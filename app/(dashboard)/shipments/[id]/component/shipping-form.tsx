"use client";

import { AlertModal } from "@/components/alert-modal";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Heading } from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { zodResolver } from "@hookform/resolvers/zod";
import { Address, Shipment } from "@prisma/client";
import axios from "axios";
import { Trash } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import z from "zod";

const formSchema = z.object({
  destination: z.string().min(1, "Destination is required"),
  destinationPhone: z.string().min(1, "Destination Phone is required"),
  packageType: z.enum(["Document", "Parcel", "Box", "Envelope", "Pallet"]),
estimatedDelivery: z.string().optional(), 
//   status: z.enum(["Pending", "Pickedup", "Transit", "Shipped", "Delivered", "Failed", "Returned", "Cancelled"]),

street: z.string().min(1, "Street address is required"),
  city: z.string().min(1, "City is required"),
  state: z.string().min(1, "State is required"),
  country: z.string().min(1, "Country is required"),
  postalCode: z.string().optional(),
  addressLabel: z.string().optional(),
});
 
interface ShippingFormProps {
  initialData: (Shipment & {receiverAddress? :Address})| null;
}

type ShipmentFormValues = z.infer<typeof formSchema>;

const ShippingForm: React.FC<ShippingFormProps> = ({ initialData }) => {
  const params = useParams();
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const title = initialData ? "Edit Shipment" : "Create Shipment";
  const description = initialData ? "Edit a Shipment" : "Create a new Shipment";
  const toastMessage = initialData ? "Shipment updated" : "Shipment created";
  const action = initialData ? "Save Changes" : "Create";

   const form = useForm<ShipmentFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: initialData
      ? {
          destination: initialData.destination,
          destinationPhone: initialData.destinationPhone,
          packageType: initialData.packageType,
           estimatedDelivery: initialData.estimatedDelivery 
            ? new Date(initialData.estimatedDelivery).toISOString().split('T')[0] 
            : "",
          street: initialData.receiverAddress?.street || "",
          city: initialData.receiverAddress?.city || "",
          state: initialData.receiverAddress?.state || "",
          country: initialData.receiverAddress?.country || "",
          postalCode: initialData.receiverAddress?.postalCode || "",
        }
      : {
          destination: "",
          destinationPhone: "",
          packageType: "Parcel",
          street: "",
          city: "",
          state: "",
          country: "",
          postalCode: "",
        },
  });

  const onSubmit = async (data: ShipmentFormValues)=>{
    console.log("Form submitted with data:", data);
  console.log("Form errors:", form.formState.errors);
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
       <AlertModal
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


         <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 w-full"
        >

               {initialData && (
          <div className="p-4 bg-gray-100 rounded-md">
            <p className="text-sm text-gray-600">Tracking Number</p>
            <p className="text-lg font-semibold">{initialData.trackingNumber}</p>
          </div>
        )}

          <div className="grid grid-cols-3 gap-8">
            <FormField
              control={form.control}
              name="destination"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination</FormLabel>
                  <FormControl>
                    <Input
                      disabled={loading}
                      placeholder="Destination"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            
            <FormField
              control={form.control}
              name="destinationPhone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Destination Phone</FormLabel>
                  <FormControl>
                      <Input
                        disabled={loading}
                        placeholder="Destination Phone"
                        {...field}
                      />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

<FormField
  control={form.control}
  name="estimatedDelivery"
  render={({ field }) => (
    <FormItem>
      <FormLabel>Estimated Delivery (Optional)</FormLabel>
      <FormControl>
        <Input 
          type="date" 
          disabled={loading}
          {...field}
        />
      </FormControl>
      <FormMessage />
    </FormItem>
  )}
/>

                 <FormField
            control={form.control}
            name="packageType"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Package Type</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select package type" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Document">Document</SelectItem>
                    <SelectItem value="Parcel">Parcel</SelectItem>
                    <SelectItem value="Box">Box</SelectItem>
                    <SelectItem value="Envelope">Envelope</SelectItem>
                    <SelectItem value="Pallet">Pallet</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

      
          </div>

             <div className="space-y-4">
          <h3 className="text-lg font-semibold">Receiver Address</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Street */}
            <FormField
              control={form.control}
              name="street"
              render={({ field }) => (
                <FormItem className="md:col-span-2">
                  <FormLabel>Street Address</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="123 Main St" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* City */}
            <FormField
              control={form.control}
              name="city"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>City</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Badagry" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* State */}
            <FormField
              control={form.control}
              name="state"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>State</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Lagos" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Country */}
            <FormField
              control={form.control}
              name="country"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Country</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="Nigeria" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            {/* Zip Code */}
            <FormField
              control={form.control}
              name="postalCode"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Postal Code(Optional)</FormLabel>
                  <FormControl>
                    <Input disabled={loading} placeholder="90001" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
        </div>

          <Button disabled={loading} className="ml-auto" type="submit">
            {loading ? <Spinner title={action} /> : action}
          </Button>
        </form>
      </Form>
    </>
)
};

export default ShippingForm;
