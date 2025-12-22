"use client";

import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { EmptyState } from "@/components/ui/empty-state";
import { Spinner } from "@/components/ui/spinner";
import { Plus } from "lucide-react";
import {  useRouter } from "next/navigation";
import { useState } from "react";
import { DashboardColumn, column } from "./colum";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {  getTotalQuotes } from "@/action/get-quote";
import { getTotalContacts } from "@/action/get-total-contact";


interface Status{ 
  total: number; 
  new: number; 
  read: number; 
  responded: number; 
}

interface DashboardClientProps {
  data: DashboardColumn[];
  stats:Status
}
export const DashboardClient: React.FC<DashboardClientProps> = ({ 
  data,
  stats 
}) => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const totalQuote = getTotalQuotes()
  const totalContacts = getTotalContacts()
  const handleAddNew = () => {
    setLoading(true);

    router.push(`/quote-request/new`);
  };
  return (
    <>
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
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

   <div className="grid grid-cols-4 gap-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Total Messages
                </CardTitle>
               
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold">
                   16
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
                  Contact
                </CardTitle>
               
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold">
                    {totalContacts}
                  {/* {formatter.format(totalRevenue)} */}
                </div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">
                  Quotes
                </CardTitle>
               
              </CardHeader>

              <CardContent>
                <div className="text-2xl font-bold">
                    {totalQuote}
                  {/* {formatter.format(totalRevenue)} */}
                </div>
              </CardContent>
            </Card>
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
          searchkey="name"
         onRowClick={(row) => router.push(`/quote-request?id=${row.id}`)}
        />
      )}
    </>
  );
};
