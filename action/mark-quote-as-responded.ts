import prismadb from "@/lib/prismadb"


export const markQuoteAsResponded= async(
    quoteId:string,
    adminId:string,
    adminNotes?: string
)=>{
    try {
        await prismadb.quoteRequest.update({
            where:{id:quoteId},
            data:{
                status: "Responded",
                senderId: adminId,
                respondedAt: new Date(),
                adminNotes: adminNotes,
                updatedAt: new Date()
            }
        });

        return {success:true};
    } catch (error) {
        console.error("Error marking quote as responded", error);
        return {success: false, error:"Failed to update status"}
    }
}