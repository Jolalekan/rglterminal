import prismadb from "@/lib/prismadb";
import { QuoteRequestClient } from "./component/client";


export default async function QuoteRequest() {
  // const messages = await prismadb.message.findMany();


    const quotes = await prismadb.quoteRequest.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })
  console.log("messages")
  return (
    <div>
    <QuoteRequestClient 
        quotesRequest={quotes}
       />
    </div>
  );
}
