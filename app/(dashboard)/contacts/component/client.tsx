"use client";

import AllContacts from "@/components/all-contacts";
import DisplayContactMessages from "@/components/display-contact";

import { Input } from "@/components/ui/input";
import { ContactWithConversation} from "@/type";
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
interface ContactClientProps {
    contactRequest: ContactWithConversation[];
    stats: Status;
}



export const ContactClient:React.FC<ContactClientProps> =({
    contactRequest,
    stats
  }
  )=>{
  
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");

  const selectedId = searchParams.get("id");
  const selected = useMemo(() => 
    contactRequest.find((contact) => contact.id === selectedId) || null,
    [selectedId, contactRequest]
  );

   

  return (
    <div className="h-screen flex flex-col p-6">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6 flex-shrink-0">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <MessageSquare className="w-6 h-6 text-green-600" />
          Messages
        </h2>
        {/* Search */}
        <Input
          placeholder="Search by name or email..."
          className="w-full md:w-1/3"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

 <div className="grid grid-cols-4 gap-4">
                    <Card>
                      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                        <CardTitle className="text-sm font-medium">
                          Total Contacts
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
                          {/* {formatter.format(totalRevenue)} */}
                        </div>
                      </CardContent>
                    </Card>
                  </div>
      {/* Main Layout */}
      <section className="flex gap-4 flex-1 overflow-hidden">
        {/* Message List */}
        <div className="w-[30%] flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <AllContacts
              data={contactRequest}        
            />
          </div>
        </div>

        {/* Message Body */}
        <div className="flex-1 flex flex-col overflow-hidden">
          <DisplayContactMessages 
            data={selected}  
          />
        </div>
      </section>
    </div>
  );
}
