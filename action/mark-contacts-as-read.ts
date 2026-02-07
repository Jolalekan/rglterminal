import prismadb from "@/lib/prismadb";

export const markContactAsRead= async(contactId:string)=>{
    try {
        await prismadb.contact.update({
            where:{id:contactId},
            data:{
                status: "Read",
                updatedAt: new Date()
            }
        }); 

        return {success:true};
    } catch (error) {
        console.error("Error marking contact as read", error);
        return {success: false, error:"Failed to update status"}
    }
}