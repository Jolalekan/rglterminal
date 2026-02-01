"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  status: z.enum([
    "Pending",
    "Pickedup",
    "Transit",
    "Shipped",
    "Delivered",
    "Failed",
    "Returned",
    "Cancelled",
  ]),
  location: z.string().min(1, "Location is required"),
  description: z.string().min(1, "Description is required"),
  notes: z.string().optional(),
  handledBy: z.string().optional(),
});

type UpdateTrackingFormValues = z.infer<typeof formSchema>;

interface UpdateTrackingFormProps {
  shipment: {
    id: string;
    trackingNumber: string;
    status: string;
    currentLocation: string | null;
  };
}

export default function UpdateTrackingForm({ shipment }: UpdateTrackingFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const form = useForm<UpdateTrackingFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      status: shipment.status as any,
      location: shipment.currentLocation || "",
      description: "",
      notes: "",
      handledBy: "",
    },
  });

  const onSubmit = async (data: UpdateTrackingFormValues) => {
    try {
      setLoading(true);
      await axios.post(`/api/shipments/${shipment.id}/tracking-events`, data);
      toast.success("Tracking event added successfully");
      router.push(`/shipments/${shipment.id}`);
      router.refresh();
    } catch (error: any) {
      console.error("Error adding tracking event:", error);
      toast.error(error?.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Status */}
          <FormField
            control={form.control}
            name="status"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Status *</FormLabel>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select status" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent>
                    <SelectItem value="Pending">Pending</SelectItem>
                    <SelectItem value="Pickedup">Picked Up</SelectItem>
                    <SelectItem value="Transit">In Transit</SelectItem>
                    <SelectItem value="Shipped">Shipped</SelectItem>
                    <SelectItem value="Delivered">Delivered</SelectItem>
                    <SelectItem value="Failed">Failed</SelectItem>
                    <SelectItem value="Returned">Returned</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                  </SelectContent>
                </Select>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Location */}
          <FormField
            control={form.control}
            name="location"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Location *</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="e.g., Distribution Center - Los Angeles"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Handled By */}
          <FormField
            control={form.control}
            name="handledBy"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Handled By (Optional)</FormLabel>
                <FormControl>
                  <Input
                    disabled={loading}
                    placeholder="e.g., John Doe"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Description */}
        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description *</FormLabel>
              <FormControl>
                <Textarea
                  disabled={loading}
                  placeholder="e.g., Package arrived at distribution center"
                  rows={3}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Notes */}
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Additional Notes (Optional)</FormLabel>
              <FormControl>
                <Textarea
                  disabled={loading}
                  placeholder="Any additional information..."
                  rows={2}
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
</div>
        <div className="flex gap-4">
          <Button
            type="button"
            variant="outline"
            onClick={() => router.push(`/shipments/${shipment.id}`)}
            disabled={loading}
            className="cursor-pointer"
          >
            Cancel
          </Button>
          <Button type="submit" disabled={loading} className="cursor-pointer">
            {loading ? "Adding..." : "Add Tracking Event"}
          </Button>
        </div>
      </form>
    </Form>
  );
}