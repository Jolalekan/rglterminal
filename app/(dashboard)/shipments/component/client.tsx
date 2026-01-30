"use client";

import { Button } from "@/components/ui/button";
import { column, ShipmentColumn } from "./colum";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { EmptyState } from "@/components/ui/empty-state";
import { DataTable } from "@/components/ui/data-table";

interface ShipmentClientProps {
  data: ShipmentColumn[];
}

const ShipmentClient: React.FC<ShipmentClientProps>=({
    data
}) => {
     const router = useRouter();
      const [loading, setLoading] = useState(false);
        const handleAddNew = () => {
    setLoading(true);
    router.push(`/shipments/new`);
  };

    return (
        <>
         <div className="flex items-center justify-between">
                <h2 className="text-3xl font-bold tracking-tight">Shipments</h2>
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
                      title="No shipment"
                      description="You don't have any shipment yet."
                    />
                  ) : (
                    <DataTable
                      columns={column}
                      data={data}
                      searchkey="name"
                     onRowClick={(row) => router.push(`/quote-request?id=${row.id}`)}
                    />
                  )}
        </>
    )
}

export default ShipmentClient;