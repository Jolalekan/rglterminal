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
  
  return (
    <div className="max-w-4xl mx-auto">
      <div className="bg-white rounded-lg shadow">
        {/* Header */}
        <div className="border-b p-6">
          <h2 className="text-xl font-semibold">{conversation.name}</h2>
          <p className="text-gray-600">{conversation.email}</p>
        </div>
        
        {/* Messages Thread */}
        <div className="p-6 space-y-4 max-h-[60vh] overflow-y-auto">
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
      </div>
    </div>
  );
}