import prismadb from "@/lib/prismadb"

export const getTotalContacts =async()=>{
    try {
        const totalContacts = await prismadb.contact.count()
        return totalContacts
    } catch (error) {
        console.error("Error fetching contacts", error)
        return 0
    }
}