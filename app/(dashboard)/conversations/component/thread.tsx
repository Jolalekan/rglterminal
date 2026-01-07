"use client";

import { useState } from "react";
import { Conversation, Message } from "@prisma/client";
import { Send } from "lucide-react";

type ConversationWithMessages = Conversation & {
  messages: Message[]; 
};

export function ConversationThread({ 
  conversation 
}: { 
  conversation: ConversationWithMessages 
}) {
  const [reply, setReply] = useState("");
  const [sending, setSending] = useState(false);
  
  async function handleSend() {
    setSending(true);
    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          to: conversation.email,
          subject: `Re: ${conversation.messages[0]?.subject || 'Your message'}`,
          body: reply,
          conversationId: conversation.id,
        }),
      });
      
      if (!response.ok) throw new Error('Failed to send');
      
      setReply("");
      // Refresh page to show new message
      window.location.reload();
    } catch (error) {
      alert("Failed to send reply");
    } finally {
      setSending(false);
    }
  }
  console.log("conversation details", conversation)
  return (
     <>
   
<div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
  {/* ALWAYS Show Quote Request if it exists */}
  {conversation.quoteRequests?.[0] && (
    <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="bg-amber-100 rounded-full p-2">
          <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-amber-900 mb-2">
            Quote Request - {conversation.quoteRequests[0].serviceType}
          </p>
          <div className="space-y-1 text-sm text-gray-700">
            <p><span className="font-medium">Company:</span> {conversation.quoteRequests[0].company}</p>
            <p><span className="font-medium">Phone:</span> {conversation.quoteRequests[0].phone}</p>
            <p className="mt-3"><span className="font-medium">Message:</span></p>
            <p className="whitespace-pre-wrap bg-white rounded p-3 border">
              {conversation.quoteRequests[0].body}
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {new Date(conversation.quoteRequests[0].createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )}

  {/* ALWAYS Show Contact Form if it exists (and no quote request) */}
  {!conversation.quoteRequests?.[0] && conversation.contacts?.[0] && (
    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
      <div className="flex items-start gap-3">
        <div className="bg-blue-100 rounded-full p-2">
          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        </div>
        <div className="flex-1">
          <p className="text-sm font-semibold text-blue-900 mb-2">Contact Form</p>
          <div className="space-y-1 text-sm text-gray-700">
            {conversation.contacts[0].phone && (
              <p><span className="font-medium">Phone:</span> {conversation.contacts[0].phone}</p>
            )}
            {conversation.contacts[0].company && (
              <p><span className="font-medium">Company:</span> {conversation.contacts[0].company}</p>
            )}
            <p className="mt-3"><span className="font-medium">Message:</span></p>
            <p className="whitespace-pre-wrap bg-white rounded p-3 border">
              {conversation.contacts[0].message}
            </p>
          </div>
          <p className="text-xs text-gray-500 mt-2">
            {new Date(conversation.contacts[0].createdAt).toLocaleString()}
          </p>
        </div>
      </div>
    </div>
  )}

  {/* Regular Messages - these appear AFTER the quote/contact */}
  {conversation.messages.map((message) => (
    <div
      key={message.id}
      className={`flex ${
        message.direction === 'outbound' ? 'justify-end' : 'justify-start'
      }`}
    >
      <div
        className={`max-w-[70%] rounded-lg p-4 ${
          message.direction === 'outbound'
            ? 'bg-blue-600 text-white'
            : 'bg-gray-100 text-gray-900'
        }`}
      >
        <p className="text-sm font-medium mb-1">
          {message.direction === 'outbound' ? 'You' : conversation.name}
        </p>
        <p className="whitespace-pre-wrap">{message.body}</p>
        <p className="text-xs mt-2 opacity-70">
          {new Date(message.createdAt).toLocaleString()}
        </p>
      </div>
    </div>
  ))}

  {/* Empty state - only if truly nothing exists */}
  {conversation.messages.length === 0 && 
   !conversation.quoteRequests?.[0] && 
   !conversation.contacts?.[0] && (
    <div className="text-center py-12 text-gray-500">
      <p>No messages yet</p>
    </div>
  )}
</div>
     {/* Reply Box */}
     <div className="border-t p-6">
       <textarea
         value={reply}
         onChange={(e) => setReply(e.target.value)}
         placeholder="Type your reply..."
         rows={4}
         className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
       />
       <div className="mt-4 flex justify-end">
         <button
           onClick={handleSend}
           disabled={sending || !reply.trim()}
           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
         >
           <Send className="w-4 h-4" />
           {sending ? "Sending..." : "Send Reply"}
         </button>
       </div>
     </div>
     </>
  );

}
// <div className="max-w-4xl mx-auto">
//   <div className="bg-white rounded-lg shadow">
//     {/* Header */}
//     <div className="border-b p-6">
//       <h2 className="text-xl font-semibold">{conversation.name}</h2>
//       <p className="text-gray-600">{conversation.email}</p>
//     </div>
    
//     {/* Messages Thread */}
//     <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
//       {/* Show Quote Request if no messages yet */}
//       {conversation.messages.length === 0 && conversation.quoteRequests?.[0] && (
//         <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
//           <div className="flex items-start gap-3">
//             <div className="bg-amber-100 rounded-full p-2">
//               <svg className="w-5 h-5 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
//               </svg>
//             </div>
//             <div className="flex-1">
//               <p className="text-sm font-semibold text-amber-900 mb-2">
//                 Quote Request - {conversation.quoteRequests[0].serviceType}
//               </p>
//               <div className="space-y-1 text-sm text-gray-700">
//                 <p><span className="font-medium">Company:</span> {conversation.quoteRequests[0].company}</p>
//                 <p><span className="font-medium">Phone:</span> {conversation.quoteRequests[0].phone}</p>
//                 <p className="mt-3"><span className="font-medium">Message:</span></p>
//                 <p className="whitespace-pre-wrap bg-white rounded p-3 border">
//                   {conversation.quoteRequests[0].body}
//                 </p>
//               </div>
//               <p className="text-xs text-gray-500 mt-2">
//                 {new Date(conversation.quoteRequests[0].createdAt).toLocaleString()}
//               </p>
//             </div>
//           </div>
//         </div>
//       )}

//       {/* Regular Messages */}
//       {conversation.messages.map((message) => (
//         <div
//           key={message.id}
//           className={`flex ${
//             message.direction === 'outbound' ? 'justify-end' : 'justify-start'
//           }`}
//         >
//           <div
//             className={`max-w-[70%] rounded-lg p-4 ${
//               message.direction === 'outbound'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-100 text-gray-900'
//             }`}
//           >
//             <p className="text-sm font-medium mb-1">
//               {message.direction === 'outbound' ? 'You' : conversation.name}
//             </p>
//             <p className="whitespace-pre-wrap">{message.body}</p>
//             <p className="text-xs mt-2 opacity-70">
//               {new Date(message.createdAt).toLocaleString()}
//             </p>
//           </div>
//         </div>
//       ))}

//       {/* Empty state - truly nothing */}
//       {conversation.messages.length === 0 && !conversation.quoteRequests?.[0] && (
//         <div className="text-center py-12 text-gray-500">
//           <p>No messages yet</p>
//         </div>
//       )}
//     </div>
    
//     {/* Reply Box */}
//     <div className="border-t p-6">
//       <textarea
//         value={reply}
//         onChange={(e) => setReply(e.target.value)}
//         placeholder="Type your reply..."
//         rows={4}
//         className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//       />
//       <div className="mt-4 flex justify-end">
//         <button
//           onClick={handleSend}
//           disabled={sending || !reply.trim()}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//         >
//           <Send className="w-4 h-4" />
//           {sending ? "Sending..." : "Send Reply"}
//         </button>
//       </div>
//     </div>
//   </div>
// </div>

// <div className="max-w-4xl mx-auto">
//   <div className="bg-white rounded-lg shadow">
//     {/* Header */}
//     <div className="border-b p-6">
//       <h2 className="text-xl font-semibold">{conversation.name}</h2>
//       <p className="text-gray-600">{conversation.email}</p>
//     </div>
    
//     {/* Messages Thread */}
//     <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
//       {conversation.messages.map((message) => (
//         <div
//           key={message.id}
//           className={`flex ${
//             message.direction === 'outbound' ? 'justify-end' : 'justify-start'
//           }`}
//         >
//           <div
//             className={`max-w-[70%] rounded-lg p-4 ${
//               message.direction === 'outbound'
//                 ? 'bg-blue-600 text-white'
//                 : 'bg-gray-100 text-gray-900'
//             }`}
//           >
//             <p className="text-sm font-medium mb-1">
//               {message.direction === 'outbound' ? 'You' : conversation.name}
//             </p>
//             <p className="whitespace-pre-wrap">{message.body}</p>
//             <p className="text-xs mt-2 opacity-70">
//               {new Date(message.createdAt).toLocaleString()}
//             </p>
//           </div>
//         </div>
//       ))}
//     </div>
    
//     {/* Reply Box */}
//     <div className="border-t p-6">
//       <textarea
//         value={reply}
//         onChange={(e) => setReply(e.target.value)}
//         placeholder="Type your reply..."
//         rows={4}
//         className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
//       />
//       <div className="mt-4 flex justify-end">
//         <button
//           onClick={handleSend}
//           disabled={sending || !reply.trim()}
//           className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
//         >
//           <Send className="w-4 h-4" />
//           {sending ? "Sending..." : "Send Reply"}
//         </button>
//       </div>
//     </div>
//   </div>
// </div>
