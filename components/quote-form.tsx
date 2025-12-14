"use client";

import React, { useState } from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import {X, Send } from "lucide-react";
import * as DialogPrimitive from "@radix-ui/react-dialog";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import toast from "react-hot-toast";

// Form validation schema
const quoteSchema = z.object({
  fullName: z.string().min(2, {
    message: "Full name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  phone: z.string().min(10, {
    message: "Please enter a valid phone number.",
  }),
  company: z.string().optional(),
  serviceType: z.string({
    message: "Please select a service type.",
  }),

  requestQoute: z.string().optional(),
});

interface QuoteFormProps {
  trigger?: React.ReactNode;
}

const QuoteForm = ({ trigger }: QuoteFormProps) => {
  const [open, setOpen] = useState(false);

  const form = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "",
      requestQoute: "",
    },
  });

  async function onSubmit(values: z.infer<typeof quoteSchema>) {
    try {
      console.log(values);

      toast.success(
        "Quote request submitted! We'll send you a detailed quote within 24 hours."
      );

      form.reset();
      setOpen(false);
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={setOpen}>
      <DialogPrimitive.Trigger asChild>
        {trigger || (
          <Button className="cursor-pointer bg-yellow-600 hover:bg-yellow-700 text-white px-8 py-3 rounded-lg font-semibold">
            Request a Quote
          </Button>
        )}
      </DialogPrimitive.Trigger>

      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            {/* Overlay */}
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 z-50 bg-black/80"
              />
            </DialogPrimitive.Overlay>

            {/* Content */}
            <DialogPrimitive.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, y: -100, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -100, scale: 0.95 }}
                transition={{
                  type: "spring",
                  damping: 25,
                  stiffness: 300,
                  duration: 0.3,
                }}
                className="fixed left-[50%] top-[50%] z-50 grid w-[95vw] translate-x-[-50%] translate-y-[-50%] bg-background shadow-lg sm:rounded-lg overflow-hidden"
                style={{ maxWidth: "800px", maxHeight: "90vh" }}
              >
                {/* Close button - moved outside header with higher z-index */}
                <DialogPrimitive.Close className="cursor-pointer absolute right-4 top-4 z-10 rounded-sm opacity-70 ring-offset-background transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-white hover:text-white">
                  <X className="h-6 w-6" />
                  <span className="sr-only">Close</span>
                </DialogPrimitive.Close>

                {/* Header with gradient */}
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 px-6 py-8 relative">
                  <DialogPrimitive.Title className="text-3xl font-bold text-white">
                    Request a Quote
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="text-yellow-50 text-lg mt-2">
                    Fill out the form below and we&apos;ll get back to you with a
                    competitive quote within 24 hours.
                  </DialogPrimitive.Description>

                  {/* Decorative elements */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12" />
                </div>

                {/* Form Content - Scrollable */}
                <div className="px-6 py-8 overflow-y-auto max-h-[calc(90vh-180px)]">
                  <Form {...form}>
                    <form
                      onSubmit={form.handleSubmit(onSubmit)}
                      className="space-y-6"
                    >
                      {/* Personal Information Section */}
                      <div>
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                            <span className="text-yellow-600 font-bold">1</span>
                          </div>
                          Personal Information
                        </h3>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {/* Full Name */}
                          <FormField
                            control={form.control}
                            name="fullName"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Full Name{" "}
                                  <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input placeholder="John Doe" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Email */}
                          <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Email Address{" "}
                                  <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="email"
                                    placeholder="john@example.com"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Phone */}
                          <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>
                                  Phone Number{" "}
                                  <span className="text-red-500">*</span>
                                </FormLabel>
                                <FormControl>
                                  <Input
                                    type="tel"
                                    placeholder="+234 800 000 0000"
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          {/* Company */}
                          <FormField
                            control={form.control}
                            name="company"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Company Name (Optional)</FormLabel>
                                <FormControl>
                                  <Input
                                    placeholder="Your Company Ltd."
                                    {...field}
                                  />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                      </div>

                      {/* Service Details Section */}
                      <div className="pt-4 border-t">
                        <h3 className="text-lg font-bold text-gray-900 mb-4 flex items-center">
                          <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-2">
                            <span className="text-yellow-600 font-bold">2</span>
                          </div>
                          Service Details
                        </h3>

                        <div className="w-full">
  {/* Service Type */}
  <FormField
    control={form.control}
    name="serviceType"
    render={({ field }) => (
      <FormItem>
        <FormLabel>
          Service Type <span className="text-red-500">*</span>
        </FormLabel>
        <Select
          onValueChange={field.onChange}
          defaultValue={field.value}
        >
          <FormControl>
            <SelectTrigger className="cursor-pointer">
              <SelectValue placeholder="Select a service" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectItem value="bonded-warehousing">
              Bonded Warehousing
            </SelectItem>
            <SelectItem value="container-storage">
              Container Storage
            </SelectItem>
            <SelectItem value="barging">
              Barging Services
            </SelectItem>
            <SelectItem value="in-stuffing">
              In-Stuffing for Export
            </SelectItem>
            <SelectItem value="customs-clearance">
              Customs Clearance
            </SelectItem>
            <SelectItem value="freight-forwarding">
              Freight Forwarding
            </SelectItem>
          </SelectContent>
        </Select>
        <FormMessage />
      </FormItem>
    )}
  />
</div>
                     
                     
                     
                      </div>

                      {/* Additional Information Section */}
                      <div className="pt-4 border-t">
                  

                        <FormField
                          control={form.control}
                          name="requestQoute"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>
                               Request Details
                              </FormLabel>
                              <FormControl>
                                <Textarea
                                  placeholder="Any special requirements, handling instructions, or additional information..."
                                  className="min-h-[120px] resize-none"
                                  {...field}
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                      </div>

                      {/* Submit Button */}
                      <div className="flex gap-4 pt-6">
                        <Button
                          type="button"
                          variant="outline"
                          className="flex-1 cursor-pointer"
                          onClick={() => setOpen(false)}
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="cursor-pointer flex-1 bg-yellow-600 hover:bg-yellow-700 text-white font-semibold"
                          disabled={form.formState.isSubmitting}
                        >
                          {form.formState.isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                              Submitting...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" />
                              Submit Quote Request
                            </>
                          )}
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </motion.div>
            </DialogPrimitive.Content>
          </DialogPrimitive.Portal>
        )}
      </AnimatePresence>
    </DialogPrimitive.Root>
  );
};

export default QuoteForm;
