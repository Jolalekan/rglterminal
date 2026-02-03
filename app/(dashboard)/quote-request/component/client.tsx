"use client";

import { markQuoteAsRead } from "@/action/mark-quote-as-read";
import AllQuotesRequest from "@/components/all-quotes";
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
      <div className="h-screen flex flex-col p-6">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6 flex-shrink-0">
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
              onSelect={handleSelect}
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

// "use client";

// import { markQuoteAsRead } from "@/action/mark-quote-as-read";
// import AllQuotesRequest from "@/components/all-quotes";
// import DisplayQuote from "@/components/display-quotes";
// import { Input } from "@/components/ui/input";
// import { QuoteRequest } from "@/type";
// import { MessageSquare } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useMemo, useState } from "react";

// interface QuoteRequestClientProps {
//     quotesRequest: QuoteRequest[]
// }
// export const QuoteRequestClient:React.FC<QuoteRequestClientProps> =({
//     quotesRequest
//   }
//   )=>{
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [search, setSearch] = useState("");

//     const selectedId = searchParams.get("id");
//   const selected = useMemo(() => quotesRequest.find((quote) => quote.id === selectedId) || null,
//     [selectedId, quotesRequest]
//   );

//   const handleSelect = async(quote: QuoteRequest) => {

//     if(quote.status === "New"){
//       await markQuoteAsRead(quote.id)
//     }
//     router.push(`?id=${quote.id}`, { scroll: false });
//   };
//     return (
//       <div className="h-full p-6 overflow-hidden">
//       {/* Top Section */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-semibold flex items-center gap-2">
//           <MessageSquare className="w- h-4 text-green-600" />
//           Quotes Request
//         </h2>
//       {/* Search */}
      
//         <Input
//           placeholder="Search by name or email..."
//           className="w-full md:w-1/3"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Main Layout */}
//    <section className="flex gap-2 ">
//         {/* Message List */}
//     <div className="w-[30%] h-full overflow-hidden">
//   <div className="h-full overflow-y-auto overscroll-contain">
//     <AllQuotesRequest
//       quotesRequest={quotesRequest}
//       onSelect={handleSelect}
//     />
//   </div>
// </div>

//         {/* Message Body */}
//         <div className="flex-1  overflow-y-auto overscroll-contain">
//           <DisplayQuote 
//             data={selected} 
//             />
//         </div>
//       </section>

//     </div>
//     )
// }