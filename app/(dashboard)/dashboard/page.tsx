import { format } from "date-fns";
import prismadb from "@/lib/prismadb";
import { DashboardClient } from "./component/client";
import {  DashboardColumn } from "./component/colum";
import { getQuoteStatusCounts } from "@/action/quote-action";

export default async function DashboardPage() {
    const stats = await getQuoteStatusCounts();
    const quoteRequest = await prismadb.quoteRequest.findMany({
        orderBy:{
            createdAt:"desc"
        }
    })

    const formattedRequest:DashboardColumn[] = quoteRequest.map((item=>({
        id: item.id,
        fullName: item.fullName,
        email:item.email,
        type:item.serviceType,
        status:item.status,
        phone:item.phone,
        createdAt:format(item.createdAt, "MMMM, do, yyyy")
    })))
  return (
    <div className="p-8 pt-6">
        <DashboardClient 
            data={formattedRequest}
            stats={stats}
        />
    </div>
  )
}


