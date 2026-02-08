"use server";

import prismadb from "@/lib/prismadb";

export const markContactAsRead= async(contactId:string)=>{
    try {
     const contact=   await prismadb.contact.update({
            where:{id:contactId},
            data:{
                status: "Read",
                updatedAt: new Date()
            }
        }); 
        console.log("contact update", contact.status)

        return {success:true};
    } catch (error) {
        console.error("Error marking contact as read", error);
        return {success: false, error:"Failed to update status"}
    }
}