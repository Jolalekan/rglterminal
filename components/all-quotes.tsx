"use client"

import { markQuoteAsRead } from "@/action/mark-quote-as-read";
import { truncateText } from "@/lib/truncate";
import { QuoteRequest } from "@/type";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

interface AllQuotesRequestProps {
  quotesRequest: QuoteRequest[];
  
}

const AllQuotesRequest: React.FC<AllQuotesRequestProps> = ({ quotesRequest }) => {
    const router = useRouter();


  const handleSelect = async(quote: QuoteRequest) => {

    if(quote.status === "New"){
      await markQuoteAsRead(quote.id)
      router.refresh()
    }
    router.push(`?id=${quote.id}`, { scroll: false });
  };

  return (
    <div className=" bg-white w-full">
      <div >
        <div className="space-y-2">   
          {quotesRequest.map((quoteRequest) => (
            <div 
              key={quoteRequest.id}
                className={`border rounded-md p-3 hover:bg-yellow-200 cursor-pointer transition ${
                quoteRequest.status === "New" 
                  ? "bg-blue-50 border-blue-200" 
                  : "bg-white"
              }`}
              onClick={() => handleSelect(quoteRequest)}
            >
              {/* Top Row */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {quoteRequest.fullName}
                  {quoteRequest.status === "New" && (
              <span className="w-2 h-2 bg-blue-600 rounded-full" />
            )}
                </span>

                <span className="text-xs text-gray-400">
                  {format(quoteRequest.createdAt, "PPP")}
                </span>
              </div>

              {/* Preview */}
              <span className="text-xs text-gray-600 block mt-1">
                {truncateText(quoteRequest.body, 40)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllQuotesRequest;
