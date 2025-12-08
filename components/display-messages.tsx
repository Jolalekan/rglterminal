import { Message } from "@/type";
import { format } from "date-fns";
import { Mail, Phone, Calendar, MessageSquare, Reply } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmailReplyModal from "./email-reply";

interface DisplayMessagesProps {
  data: Message | null;
}

const DisplayMessages: React.FC<DisplayMessagesProps> = ({ data }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  if (!data) {
    return (
      <div className="border bg-white rounded-lg p-8 h-full flex flex-col items-center justify-center text-gray-400">
        <MessageSquare className="w-16 h-16 mb-4" />
        <p className="text-lg font-medium">No message selected</p>
        <p className="text-sm">Select a message from the list to view details</p>
      </div>
    );
  }

  return (
    <>
      <div className="border bg-white rounded-lg h-full flex flex-col">
        {/* Header */}
        <div className="border-b p-4 bg-gray-50">
          <div className="flex items-start justify-between">
            <div>
              <h3 className="text-xl font-semibold text-gray-900">{data.name}</h3>
              <p className="text-sm text-gray-500 mt-1">
                {format(new Date(data.createdAt), "PPP 'at' p")}
              </p>
            </div>
            
            {/* Reply Button */}
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="sm"
              className="flex items-center gap-2 cursor-pointer"
            >
              <Reply className="w-4 h-4" />
              Reply
            </Button>
          </div>
        </div>

        {/* Contact Info */}
        <div className="p-4 border-b bg-gray-50">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div className="flex items-center gap-2 text-sm">
              <Mail className="w-4 h-4 text-gray-500" />
              <span className="text-gray-700">{data.email}</span>
            </div>

            {data.phone && (
              <div className="flex items-center gap-2 text-sm">
                <Phone className="w-4 h-4 text-gray-500" />
                <span className="text-gray-700">{data.phone}</span>
              </div>
            )}
          </div>
        </div>

        {/* Message Body */}
        <div className="p-6 flex-1 overflow-y-auto">
          <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
            <MessageSquare className="w-4 h-4" />
            Message
          </h4>
          <div className="prose prose-sm max-w-none">
            <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
              {data.body}
            </p>
          </div>
        </div>

        {/* Footer */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>Received {format(new Date(data.createdAt), "PPP")}</span>
          </div>
        </div>
      </div>

      {/* Email Reply Modal */}
      <EmailReplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        recipientEmail={data.email}
        recipientName={data.name}
        originalMessage={data.body}
      />
    </>
  );
};

export default DisplayMessages;

// import { Message } from "@/type";
// import { format } from "date-fns";
// import { Mail, Phone, User, Calendar, MessageSquare, Reply } from "lucide-react";
// import { Button } from "@/components/ui/button";

// interface DisplayMessagesProps {
//   data: Message | null;
// }

// const DisplayMessages: React.FC<DisplayMessagesProps> = ({ data }) => {
//   if (!data) {
//     return (
//       <div className="border bg-white rounded-lg p-8 h-full flex flex-col items-center justify-center text-gray-400">
//         <MessageSquare className="w-16 h-16 mb-4" />
//         <p className="text-lg font-medium">No message selected</p>
//         <p className="text-sm">Select a message from the list to view details</p>
//       </div>
//     );
//   }

//   const handleReply = () => {
//     const subject = `Re: Your message`;
//     const body = `Hi ${data.name},\n\nThank you for reaching out.\n\n---\nOriginal message:\n${data.body}`;
    
//     window.location.href = `mailto:${data.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
//   };

//   return (
//     <div className="border bg-white rounded-lg h-full flex flex-col">
//       {/* Header */}
//       <div className="border-b p-4 bg-gray-50">
//         <div className="flex items-start justify-between">
//           <div>
//             <h3 className="text-xl font-semibold text-gray-900">{data.name}</h3>
//             <p className="text-sm text-gray-500 mt-1">
//               {format(new Date(data.createdAt), "PPP 'at' p")}
//             </p>
//           </div>
          
//           {/* Reply Button */}
//           <Button 
//             onClick={handleReply}
//             size="sm"
//             className="flex items-center gap-2"
//           >
//             <Reply className="w-4 h-4" />
//             Reply
//           </Button>
//         </div>
//       </div>

//       {/* Contact Info */}
//       <div className="p-4 border-b bg-gray-50">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//           <div className="flex items-center gap-2 text-sm">
//             <Mail className="w-4 h-4 text-gray-500" />
//             <a 
//               href={`mailto:${data.email}`}
//               className="text-blue-600 hover:underline"
//             >
//               {data.email}
//             </a>
//           </div>

//           {data.phone && (
//             <div className="flex items-center gap-2 text-sm">
//               <Phone className="w-4 h-4 text-gray-500" />
//               <a 
//                 href={`tel:${data.phone}`}
//                 className="text-gray-700 hover:underline"
//               >
//                 {data.phone}
//               </a>
//             </div>
//           )}
//         </div>
//       </div>

//       {/* Message Body */}
//       <div className="p-6 flex-1 overflow-y-auto">
//         <h4 className="text-sm font-semibold text-gray-700 mb-3 flex items-center gap-2">
//           <MessageSquare className="w-4 h-4" />
//           Message
//         </h4>
//         <div className="prose prose-sm max-w-none">
//           <p className="text-gray-800 whitespace-pre-wrap leading-relaxed">
//             {data.body}
//           </p>
//         </div>
//       </div>

//       {/* Footer */}
//       <div className="border-t p-4 bg-gray-50">
//         <div className="flex items-center gap-2 text-xs text-gray-500">
//           <Calendar className="w-3 h-3" />
//           <span>Received {format(new Date(data.createdAt), "PPP")}</span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DisplayMessages;
