"use client";

import { markQuoteAsRead } from "@/action/mark-quote-as-read";
import AllQuotesResquest from "@/components/all-quotes";
import DisplayQuote from "@/components/display-quotes";
import { Input } from "@/components/ui/input";
import { QuoteRequest } from "@/type";
import { MessageSquare } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

interface QuoteRequestClientProps {
    quotesRequest: QuoteRequest[]
}
export const QuoteRequestClient:React.FC<QuoteRequestClientProps> =({
    quotesRequest
  }
  )=>{
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

    const selectedId = searchParams.get("id");
  const selected = useMemo(() => quotesRequest.find((quote) => quote.id === selectedId) || null,
    [selectedId, quotesRequest]
  );

  const handleSelect = async(quote: QuoteRequest) => {

    if(quote.status === "New"){
      await markQuoteAsRead(quote.id)
    }
    router.push(`?id=${quote.id}`, { scroll: false });
  };
    return (
      <div className="p-6">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <MessageSquare className="w- h-4 text-green-600" />
          Quotes Request
        </h2>
      {/* Search */}
      
        <Input
          placeholder="Search by name or email..."
          className="w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Main Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Message List */}
        <div className="md:col-span-3">
          <AllQuotesResquest
            quotesRequest={quotesRequest}
            onSelect={handleSelect}
          />
        </div>

        {/* Message Body */}
        <div className="md:col-span-6">
          <DisplayQuote 
            data={selected} 
            />
        </div>
      </section>

    </div>
    )
}