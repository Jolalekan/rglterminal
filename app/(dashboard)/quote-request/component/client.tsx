"use client";

import AllQuotesRequest from "@/components/all-quotes";
import DisplayQuote from "@/components/display-quotes";
import { Input } from "@/components/ui/input";
import { QuoteRequestWithConversation } from "@/type";
import { MessageSquare } from "lucide-react";
import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";


interface Status{ 
  total: number; 
  new: number; 
  read: number; 
  responded: number; 
}


interface QuoteRequestClientProps {
    quotesRequest: QuoteRequestWithConversation[]
    stats:Status
}

export const QuoteRequestClient:React.FC<QuoteRequestClientProps> =({
    quotesRequest,
    stats
  }
  )=>{

  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

    const selectedId = searchParams.get("id");
  const selected = useMemo(() => quotesRequest.find((quote) => quote.id === selectedId) || null,
    [selectedId, quotesRequest]
  );

  
    return (
      <div className="h-screen flex flex-col p-6">
         <div className="grid grid-cols-3 gap-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Quotes Request
                        </CardTitle>
                       
                      </CardHeader>
        
                      <CardContent>
                        <div className="text-2xl font-bold">
                            {stats.total}
                          {/* {formatter.format(totalRevenue)} */}
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Unread 
                        </CardTitle>
                       
                      </CardHeader>
        
                      <CardContent>
                        <div className="text-2xl font-bold text-red-600">
                             {stats.new}
                          {/* {formatter.format(totalRevenue)} */}
                        </div>
                      </CardContent>
                    </Card>
                 
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Read
                        </CardTitle>
                       
                      </CardHeader>
        
                      <CardContent>
                        <div className="text-2xl font-bold">
                            {stats.read}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
      {/* Top Section */}
      <div className="flex items-center justify-between mb-2 mt-2 flex-shrink-0">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-green-600" />
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
      <section className="flex gap-4 flex-1 overflow-hidden">
        {/* Message List */}
        <div className="w-[30%] flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <AllQuotesRequest
              quotesRequest={quotesRequest}
          
            />
          </div>
        </div>

        {/* Message Body */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <DisplayQuote 
            data={selected} 
            />
        </div>
      </section>

    </div>
    )
}

