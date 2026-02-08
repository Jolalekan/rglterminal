import prismadb from "@/lib/prismadb";
import { QuoteRequestClient } from "./component/client";
import { QuoteRequestWithConversation } from "@/type";


export default async function QuoteRequest() {

 const quotes = await prismadb.quoteRequest.findMany({
    include: {
      conversation: {
        include: {
          messages: {
            orderBy: { createdAt: "asc" }
          }
        }
      }
    },
    orderBy: {
      createdAt: "desc"
    }
  }) as QuoteRequestWithConversation[];

  if(!quotes){
    return null;
  }
  // Calculate stats from the fetched quotes
  const stats = {
    total: quotes.length,
    new: quotes.filter(q => q.status === "New").length,
    read: quotes.filter(q => q.status === "Read").length,
    responded: quotes.filter(q => q.status === "Responded").length
  };

  return (
    <div>
      <QuoteRequestClient 
        quotesRequest={quotes}
        stats={stats}
      />
    </div>
  );
}
