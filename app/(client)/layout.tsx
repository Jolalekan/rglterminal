import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Image from "next/image";
import Link from "next/link";


export default async function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {


  return (
    <>
        <Navbar/>
        {children}
        <Footer/>
    </>
  );
}
