"use client";

import AllMessages from "@/components/all-quotes";
import DisplayMessages from "@/components/display-quotes";
import PersonalInfo from "@/components/personal-info";
import { Input } from "@/components/ui/input";
import { Message } from "@/type";
import { MessageSquare } from "lucide-react";
import { useState } from "react";



// import { truncateText } from "@/lib/truncate";
// import { Message } from "@/type";
// import { format } from "date-fns";


// interface AllMessagesProps {
//   messages: Message[];
//   onSelect: (message: Message) => void;
// }
// const AllMessages: React.FC<AllMessagesProps> = ({ messages, onSelect }) => {
//   console.log("message client", messages);
//   return (
//     <div className="border bg-white w-full">
//   <div className="p-2">
//     <div className="space-y-1 ">   
//       {messages.map((message) => (
//         <div 
//           className="border rounded-md p-2 hover:bg-yellow-300 cursor-pointer pointer" 
//           key={message.id}
//           onClick={()=> onSelect(message)}
//         >
//           <div className="flex justify-between items-center ">
//             <span className="text-sm font-medium">{message.name}</span>
//             <span className="text-xs text-gray-400">
//               {format(message.createdAt, "PPP")}
//             </span>
//           </div>

//           <span className="text-xs text-gray-500">{truncateText(message?.body ?? "", 40)}</span>
//         </div>
//       ))}
//     </div>
//   </div>
// </div>
//   );
// };

// export default AllMessages;




interface MessageClientProps {
  data: Message | null;
  messages: Message[];
}
export const MessageClient: React.FC<MessageClientProps> = ({
  data,
  messages,
}) => {
  const [search, setSearch] = useState("");
  const [selected, setSelected] = useState<Message | null>(data);
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
      <section className="grid grid-cols-1 md:grid-cols-12 gap-4">
        {/* Message List */}
        <div className="md:col-span-3">
          <AllMessages
            messages={messages}
            onSelect={(msg: Message) => setSelected(msg)}
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
  );
};
