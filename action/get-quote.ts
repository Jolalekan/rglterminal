import prismadb from "@/lib/prismadb"

export const getTotalQuotes =async()=>{
    try {
        const totalQuotes = await prismadb.quoteRequest.count()
        return totalQuotes
    } catch (error) {
        console.error("Error fetching quotes", error)
        return 0
    }
}