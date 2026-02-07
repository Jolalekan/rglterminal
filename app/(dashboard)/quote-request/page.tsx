import prismadb from "@/lib/prismadb";
import { QuoteRequestClient } from "./component/client";
import { getQuoteStatusCounts } from "@/action/quote-action";


export default async function QuoteRequest() {
  // const stats = await getQuoteStatusCounts();

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
  });

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
