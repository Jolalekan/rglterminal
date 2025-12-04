"use client";

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/ui/data-table";
import { EmptyState } from "@/components/ui/empty-state";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react"
import { useRouter } from "next/navigation";
import { useState } from "react";
import { MessageColumn, column } from "./colum";

interface HomeClientProps{
    data: MessageColumn[]
}
export const HomeClient:React.FC<HomeClientProps>=({data})=>{
        const router = useRouter()
     const [loading, setLoading] = useState(false);

       const handleAddNew = () => {
    setLoading(true);

    router.push(`/message/new`);
  };
    return(
        <>
        <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold tracking-tight">
                Dashboard
             </h2>
        <Button onClick={handleAddNew} disabled={loading}>

        
          {loading ? (
            <Spinner title="Redirecting..." />
          ) : (
            <>
              <Plus className="w-4 h-4 mr-2 bg-gray-600 rounded-full" />
              Add New
            </>
          )}
        </Button>
        </div>

           {data.length === 0 ? (
        <EmptyState
          title="No message"
          description="You don't have any message yet."
        />
      ) : (
        <DataTable 
          columns={column} 
          data={data} 
          searchkey="bankName"
          //   onRowClick={(row)=>router.push(`/${params.storeSlug}/bankAccount/${row.bankName}`)} 
        />
      )}

        </>
    )
}