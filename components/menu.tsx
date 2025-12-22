"use client";

import Image from "next/image"
import Link from "next/link"
import { usePathname } from "next/navigation";

const menu =[
    {
        icon: "/dashboard.png",
        label: "Dashboard",
        href: "/dashboard",  
    },
    {
        icon: "/message.png",
        label: "Quote Request",
        href: "/quote-request",  
    },
    {
        icon: "/contacts.png",
        label: "Contacts",
        href: "/contacts",  
    },
    {
        icon: "/settings.png",
        label: "Settings",
        href: "/settings",  
    },
]

const Menu =()=>{
    const pathname = usePathname();
    return (
        <div className="mt-4 text-sm">
            {menu.map((item)=>{
               const isActive = pathname === item.href;
               return(
                <div  className="flex flex-col py-0.5" key={item.label}>
                    <Link 
                        href={item.href}
                    className={`flex items-center justify-center lg:justify-start gap-x-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-blue-100
                        ${isActive ? "bg-blue-100 text-blue-600 font-medium" : "text-gray-500 hover:bg-blue-100"}`}
                    >

                    <Image 
                    src={`${item.icon}`} 
                    alt={item.label} 
                    width={24} 
                    height={24} 
                    className="hidden md:block"
                    />
                    <span>
                        {item.label}
                    </span>
                    </Link>
                </div>
            )})}
        </div>
    )
}
export default Menu