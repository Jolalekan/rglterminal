"use client";

import AllMessages from "@/components/all-messages";
import DisplayMessages from "@/components/display-messages";
import PersonalInfo from "@/components/personal-info";
import { Input } from "@/components/ui/input";
import { Message } from "@/type";
import { MessageSquare } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

interface MessageClientProps {
    messages: Message[]
}
export const MessageClient:React.FC<MessageClientProps> =({
    messages
  }
  )=>{
  const router = useRouter();
  const searchParams = useSearchParams();
  const [search, setSearch] = useState("");
  // const [selected, setSelected] = useState<Message | null>(null);

    const selectedId = searchParams.get("id");
  const selected = useMemo(
    () => messages.find((msg) => msg.id === selectedId) || null,
    [selectedId, messages]
  );

  const handleSelect = (msg: Message) => {
    router.push(`?id=${msg.id}`, { scroll: false });
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
          <AllMessages
            messages={messages}
            onSelect={handleSelect}
          />
        </div>

        {/* Message Body */}
        <div className="md:col-span-6">
          <DisplayMessages 
            data={selected} 
            />
        </div>

        {/* User Info */}
        <div className="md:col-span-3">
          <PersonalInfo data={selected} />
        </div>
      </section>
      {/* <section className="flex justify-between gap-4">
            <div className="w-1/3">
                <AllMessages/>
            </div>
            <div className="w-2/3">
                <DisplayMessages/>
            </div>
            <div className="w-1/3">
                <PersonalInfo/>
            </div>
        </section> */}
    </div>
    )
}