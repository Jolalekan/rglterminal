"use client";

import AllContacts from "@/components/all-contacts";
import DisplayContactMessages from "@/components/display-contact";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Contact} from "@/type";
import { MessageSquare, ArrowLeft } from "lucide-react";
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

  const selectedId = searchParams.get("id");
  const selected = useMemo(() => 
    contactRequest.find((contact) => contact.id === selectedId) || null,
    [selectedId, contactRequest]
  );

  const handleSelect = (contact: Contact) => {
    router.push(`?id=${contact.id}`, { scroll: false });
  };

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

      {/* Main Layout */}
      <section className="flex gap-4 flex-1 overflow-hidden">
        {/* Message List */}
        <div className="w-[30%] flex flex-col overflow-hidden">
          <div className="flex-1 overflow-y-auto">
            <AllContacts
              data={contactRequest}
              onSelect={handleSelect}
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

// "use client";

// import AllContacts from "@/components/all-contacts";
// import DisplayContactMessages from "@/components/display-contact";

// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";
// import { Contact} from "@/type";
// import { MessageSquare, ArrowLeft } from "lucide-react";
// import { useRouter, useSearchParams } from "next/navigation";
// import { useMemo, useState } from "react";

// interface ContactClientProps {
//     contactRequest: Contact[]
// }

// export const ContactClient:React.FC<ContactClientProps> =({
//     contactRequest
//   }
//   )=>{
//   const router = useRouter();
//   const searchParams = useSearchParams();
//   const [search, setSearch] = useState("");

//   const selectedId = searchParams.get("id");
//   const selected = useMemo(() => 
//     contactRequest.find((contact) => contact.id === selectedId) || null,
//     [selectedId, contactRequest]
//   );

//   const handleSelect = (contact: Contact) => {
//     router.push(`?id=${contact.id}`, { scroll: false });
//   };

//   const handleBack = () => {
//     router.push(window.location.pathname, { scroll: false });
//   };

//   return (
//     <div className="p-6">
//       {/* Top Section */}
//       <div className="flex items-center justify-between mb-6">
//         <h2 className="text-2xl font-semibold flex items-center gap-2">
//           <MessageSquare className="w-4 h-4 text-green-600" />
//           Messages
//         </h2>
//         {/* Search */}
//         <Input
//           placeholder="Search by name or email..."
//           className="w-full md:w-1/3"
//           value={search}
//           onChange={(e) => setSearch(e.target.value)}
//         />
//       </div>

//       {/* Main Layout */}
//       <section className="grid grid-cols-1 md:grid-cols-12 gap-2">
//         {/* Message List - Hide on mobile when message is selected */}
//         <div className={`overflow-y-auto md:col-span-3 ${selected ? 'hidden md:block' : 'block'}`}>
//           <AllContacts
//             data={contactRequest}
//             onSelect={handleSelect}
//           />
//         </div>

//         {/* Message Body - Show on mobile only when message is selected */}
//         <div className={`md:col-span-6 ${selected ? 'block' : 'hidden md:block'}`}>
//           {/* Back button for mobile */}
//           {selected && (
//             <Button
//               variant="ghost"
//               onClick={handleBack}
//               className="mb-4 md:hidden"
//             >
//               <ArrowLeft className="w-4 h-4 mr-2" />
//               Back to messages
//             </Button>
//           )}
          
//           <DisplayContactMessages 
//             data={selected} 
//           />
//         </div>
//       </section>
//     </div>
//   );
// }

