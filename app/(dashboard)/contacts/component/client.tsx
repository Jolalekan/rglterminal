"use client";

import AllContacts from "@/components/all-contacts";
import DisplayContactMessages from "@/components/display-contact";
import PersonalInfo from "@/components/personal-info";
import { Input } from "@/components/ui/input";
import { Contact} from "@/type";
import { MessageSquare } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

interface ContactClientProps {
    contactRequest: Contact[]
}
export const ContactClient:React.FC<ContactClientProps> =({
    contactRequest
  }
  )=>{
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  // const [selected, setSelected] = useState<Message | null>(null);

    const selectedId = searchParams.get("id");
  const selected = useMemo(() => contactRequest.find((contact) => contact.id === selectedId) || null,
    [selectedId, contactRequest]
  );

  const handleSelect = (contact: Contact) => {
    router.push(`?id=${contact.id}`, { scroll: false });
  };
    return (
      <div className="p-6">
      {/* Top Section */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-semibold flex items-center gap-2">
          <MessageSquare className="w- h-4 text-green-600" />
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

      {/* Main Layout */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-2">
        {/* Message List */}
        <div className="md:col-span-3">
          <AllContacts
            data={contactRequest}
            onSelect={handleSelect}
          />
        </div>

        {/* Message Body */}
        <div className="md:col-span-6">
          <DisplayContactMessages 
            data={selected} 
            />
        </div>

      </section>

    </div>
    )
}