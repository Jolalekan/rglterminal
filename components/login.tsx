"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {Button} from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { AlertCircle, Eye, EyeOff } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import z from "zod";
import axios from "axios";

const formSchema = z.object({
  email: z.email({
    message: "Email is required.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters."
  })
})


export const Login = () => {
  const router = useRouter();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [showPassword, setShowPassword] = useState(false);



  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

 async function onSubmit(values: z.infer<typeof formSchema>) {
  setLoading(true);
  setError(null);
  console.log("value", values)

  try {
    console.log("loging value", values)   
 
    const res =  await axios.post("api/auth/login", values);

    console.log("res", res)
    if(res.status === 200){
      console.log("login sucessful", res.data);
      router.push("/")
    }
 
  } catch (err: any) {
    setError(err.message);
  } finally {
    setLoading(false);
  }
}


  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-6 max-w-md mx-auto"
      >
        {/* Email Field */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter your email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    {...field}
                  />
                  <button
                    type="button"
                    className="absolute right-4 top-1/2 -translate-y-1/2"
                    onClick={() => setShowPassword((prev) => !prev)}
                  >
                    {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {error && (
          <>
            <AlertCircle className="h-4 w-4" />
            <div className="text-red-500 text-center">{error}</div>
          </>
        )}

        {/* Submit Button */}
        <Button type="submit" className="w-full" disabled={loading}>
          {loading ? <Spinner title="Signing....." /> : "Sign In"}
        </Button>
      </form>
      
    </Form>
  );
};
