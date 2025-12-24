"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send } from "lucide-react";
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
import axios from "axios";

/* ---------------- schema ---------------- */

const quoteSchema = z.object({
  fullName: z.string().min(2, { message: "Full name must be at least 2 characters." }),
  email: z.email({ message: "Please enter a valid email address." }),
  phone: z.string().min(10, { message: "Please enter a valid phone number." }),
  company: z.string().optional(),
  serviceType: z.string({ message: "Please select a service type." }),
  body: z.string().min(2, { message: "Message must be more than 2 characters." }),
});

interface QuoteFormProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

/* ---------------- component ---------------- */

const QuoteForm = ({ open, onOpenChange }: QuoteFormProps) => {
  const form = useForm<z.infer<typeof quoteSchema>>({
    resolver: zodResolver(quoteSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      company: "",
      serviceType: "",
      body: "",
    },
  });

  async function onSubmit(values: z.infer<typeof quoteSchema>) {
    try {
      await axios.post("/api/quote-request", values);
      toast.success("Quote request submitted! We'll get back to you shortly.");
      form.reset();
      onOpenChange(false);
    } catch {
      toast.error("Something went wrong. Please try again.");
    }
  }

  return (
    <DialogPrimitive.Root open={open} onOpenChange={onOpenChange}>
      <AnimatePresence>
        {open && (
          <DialogPrimitive.Portal forceMount>
            {/* Overlay */}
            <DialogPrimitive.Overlay asChild forceMount>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 z-95 bg-black/80"
              />
            </DialogPrimitive.Overlay>

            {/* Content */}
            <DialogPrimitive.Content asChild forceMount>
              <motion.div
                initial={{ opacity: 0, y: -80, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -80, scale: 0.95 }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
                className="fixed left-1/2 top-1/2 z-100 w-[95vw] max-w-[800px] -translate-x-1/2 -translate-y-1/2 bg-background rounded-lg shadow-lg overflow-hidden"
              >
                {/* Close */}
                <DialogPrimitive.Close
                  className="cursor-pointer absolute right-4 top-4 z-10"
                  onClick={() => onOpenChange(false)}
                >
                  <X className="h-6 w-6 text-white" />
                </DialogPrimitive.Close>

                {/* Header */}
                <div className="bg-gradient-to-r from-yellow-600 to-yellow-500 px-6 py-8">
                  <DialogPrimitive.Title className="text-3xl font-bold text-white">
                    Request a Quote
                  </DialogPrimitive.Title>
                  <DialogPrimitive.Description className="text-yellow-50 mt-2">
                    Fill out the form and we&apos;ll respond within 24 hours.
                  </DialogPrimitive.Description>
                </div>

                {/* Form */}
                <div className="px-6 py-8 max-h-[70vh] overflow-y-auto">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

                      
                      <FormField
                        control={form.control}
                        name="fullName"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email</FormLabel>
                            <FormControl>
                              <Input type="email" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="phone"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Phone</FormLabel>
                            <FormControl>
                              <Input type="tel" {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="company"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Company (Optional)</FormLabel>
                            <FormControl>
                              <Input {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
</div>
                      <FormField
                        control={form.control}
                        name="serviceType"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Service Type</FormLabel>
                            <Select onValueChange={field.onChange} value={field.value} >
                              <FormControl>
                                <SelectTrigger className="w-full cursor-pointer">
                                  <SelectValue placeholder="Select service" />
                                </SelectTrigger>
                              </FormControl>
                                <SelectContent className=" z-100 hover:cursor-pointer">
                                     <SelectItem value="Export">
                                       Export
                                     </SelectItem>
                                     <SelectItem value="ShipItems">
                                       Ship Items
                                     </SelectItem>
                                     <SelectItem value="Groupage">
                                       Groupage
                                     </SelectItem>
                                     <SelectItem value="BondedWarehousing">
                                       Bonded Warehousing
                                     </SelectItem>
                                     <SelectItem value="ContainerStorage">
                                       Container Storage
                                     </SelectItem>
                                     <SelectItem value="MaritimeShipping">
                                       Maritime Shipping
                                     </SelectItem>
                                     <SelectItem value="Haulage">
                                       Haulage
                                     </SelectItem>
                                     <SelectItem value="GeneralEnquiry">
                                       General Enquiry
                                     </SelectItem>
                                   </SelectContent>
                            </Select>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <FormField
                        control={form.control}
                        name="body"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl>
                              <Textarea {...field} />
                            </FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />

                      <div className="flex gap-4">
                        <Button
                          type="button"
                          variant="outline"
                          onClick={() => onOpenChange(false)}
                          className="flex-1 cursor-pointer"
                        >
                          Cancel
                        </Button>
                        <Button
                          type="submit"
                          className="cursor-pointer flex-1 bg-yellow-600 hover:bg-yellow-700 text-white"
                        >
                          <Send className="mr-2 h-4 w-4" />
                          Submit
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

