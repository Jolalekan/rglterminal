import prismadb from "@/lib/prismadb";
import { QuoteRequestClient } from "./component/client";


export default async function QuoteRequest() {
  // const messages = await prismadb.message.findMany();


    const quotes = await prismadb.quoteRequest.findMany({
      include:{
        conversation:{
          include:{
            messages:{
              orderBy:{ createdAt:"asc"}
            }
          }
        }
      },
    orderBy:{
      createdAt:"desc"
    }
  })
  console.log("quotes-request", quotes)
  return (
    <div>
    <QuoteRequestClient 
        quotesRequest={quotes}
       />
    </div>
  );
}
