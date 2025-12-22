"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { format } from "date-fns";
import { MessageSquare, Search, Clock } from "lucide-react";
import { Input } from "@/components/ui/input";

interface Conversation {
  id: string;
  name: string;
  email: string;
  lastMessage: string;
  lastMessageAt: Date;
  type: string;
  unreadCount: number;
}

interface ConversationsClientProps {
  conversations: Conversation[];
}

export function ConversationsClient({ conversations }: ConversationsClientProps) {
  const router = useRouter();
  const [search, setSearch] = useState("");

  // Filter conversations by search
  const filteredConversations = conversations.filter(
    (conv) =>
      conv.name.toLowerCase().includes(search.toLowerCase()) ||
      conv.email.toLowerCase().includes(search.toLowerCase()) ||
      conv.lastMessage.toLowerCase().includes(search.toLowerCase())
  );

  const handleConversationClick = (id: string) => {
    router.push(`/dashboard/conversations/${id}`);
  };

  return (
    <div className="space-y-4">
      {/* Search Bar */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <Input
            placeholder="Search conversations..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="pl-10"
          />
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white p-4 rounded-lg border">
          <p className="text-sm text-gray-600">Total Conversations</p>
          <p className="text-2xl font-bold">{conversations.length}</p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <p className="text-sm text-gray-600">Quote Requests</p>
          <p className="text-2xl font-bold">
            {conversations.filter((c) => c.type === "Quote Request").length}
          </p>
        </div>
        <div className="bg-white p-4 rounded-lg border">
          <p className="text-sm text-gray-600">Contact Forms</p>
          <p className="text-2xl font-bold">
            {conversations.filter((c) => c.type === "Contact").length}
          </p>
        </div>
      </div>

      {/* Conversations List */}
      <div className="bg-white rounded-lg border divide-y">
        {filteredConversations.length === 0 ? (
          <div className="p-8 text-center text-gray-500">
            <MessageSquare className="w-12 h-12 mx-auto mb-4 text-gray-300" />
            <p>No conversations found</p>
          </div>
        ) : (
          filteredConversations.map((conversation) => (
            <div
              key={conversation.id}
              onClick={() => handleConversationClick(conversation.id)}
              className="p-4 hover:bg-gray-50 cursor-pointer transition"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 min-w-0">
                  {/* Header */}
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold text-gray-900 truncate">
                      {conversation.name}
                    </h3>
                    <span className="px-2 py-0.5 text-xs rounded-full bg-blue-100 text-blue-700 whitespace-nowrap">
                      {conversation.type}
                    </span>
                    {conversation.unreadCount > 0 && (
                      <span className="px-2 py-0.5 text-xs rounded-full bg-red-100 text-red-700">
                        {conversation.unreadCount} new
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <p className="text-sm text-gray-600 mb-2">{conversation.email}</p>

                  {/* Last Message */}
                  <p className="text-sm text-gray-500 truncate">
                    {conversation.lastMessage}
                  </p>
                </div>

                {/* Timestamp */}
                <div className="flex items-center gap-1 text-xs text-gray-400 whitespace-nowrap">
                  <Clock className="w-3 h-3" />
                  {format(new Date(conversation.lastMessageAt), "MMM d, h:mm a")}
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}