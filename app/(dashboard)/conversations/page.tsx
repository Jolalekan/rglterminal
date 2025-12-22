import prismadb from "@/lib/prismadb";
import { ConversationsClient } from "./component/client";

export default async function ConversationsPage() {
  const conversations = await prismadb.conversation.findMany({
    include: {
      messages: {
        orderBy: { createdAt: 'desc' },
        take: 1, // Last message
      },
      quoteRequests: true,  
      contacts: true,   
    },
    orderBy: { lastMessageAt: 'desc' },
  });
  
  // Format for display
  const formattedConversations = conversations.map((conv) => ({
    id: conv.id,
    name: conv.name,
    email: conv.email,
    lastMessage: conv.messages[0]?.body || "",
    lastMessageAt: conv.lastMessageAt,
    type: conv.quoteRequests.length > 0 ? "Quote Request" : "Contact",
    unreadCount: conv.messages.filter(m => m.direction === 'inbound').length,
  }));
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Conversations</h1>
      <ConversationsClient conversations={formattedConversations} />
    </div>
  );
}
