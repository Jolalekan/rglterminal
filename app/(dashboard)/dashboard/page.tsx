import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { DashboardClient } from "../component/client";
import { MessageColumn } from "../component/colum";

export default async function DashboardPage() {
    const message = await prismadb.message.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })

    const formattedMessage:MessageColumn[] = message.map((item=>({
        id: item.id,
        name: item.name,
        email:item.email,
        type:item.type,
        status:item.status,
        phone:item.phone,
        createdAt:format(item.createdAt, "MMMM, do, yyyy")
    })))
  return (
    <div className="p-8 pt-6">
        <DashboardClient data={formattedMessage}
        />
    </div>
  )
}


