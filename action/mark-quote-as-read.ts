import prismadb from "@/lib/prismadb"

export const markQuoteAsRead= async(quoteId:string)=>{
    try {
        await prismadb.quoteRequest.update({
            where:{id:quoteId},
            data:{
                status: "Read",
                updatedAt: new Date()
            }
        });

        return {success:true};
    } catch (error) {
        console.error("Error marking quote as read", error);
        return {success: false, error:"Failed to update status"}
    }
}