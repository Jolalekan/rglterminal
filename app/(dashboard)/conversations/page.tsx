import prismadb from "@/lib/prismadb";
import { ConversationsClient } from "./component/client";

export default async function ConversationsPage() {
const conversations = await prismadb.conversation.findMany({
  include: {
    messages: {
      orderBy: { createdAt: 'desc' },
      take: 1,
    },
    quoteRequests: {
      take: 1,
      orderBy: { createdAt: 'desc' }
    },
    contacts: {
      take: 1,
      orderBy: { createdAt: 'desc' }
    },
    _count: {
      select: {
        messages: {
          where: {
            direction: 'inbound',
            isRead: false // Only count unread inbound messages
          }
        }
      }
    }
  },
  orderBy: { lastMessageAt: 'desc' },
});

const formattedConversations = conversations.map((conv) => {
  const lastMessage = conv.messages[0];
  const hasQuoteRequest = conv.quoteRequests.length > 0;
  const hasContact = conv.contacts.length > 0;
  
  let type = "Email";
  if (hasQuoteRequest) type = "Quote Request";
  else if (hasContact) type = "Contact";
  
  return {
    id: conv.id,
    name: conv.name,
    email: conv.email,
    lastMessage: lastMessage?.body || "No messages yet",
    lastMessageAt: conv.lastMessageAt,
    type: type,
    unreadCount: conv._count.messages, // Now accurately counts ONLY unread inbound messages
  };
});
  
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">All Conversations</h1>
      <ConversationsClient conversations={formattedConversations} />
    </div>
  );
}
