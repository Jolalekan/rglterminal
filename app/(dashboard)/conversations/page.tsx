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
console.log(JSON.stringify(conversations, null, 2));
const formattedConversations = conversations.map((conv) => {
  const lastMessage = conv.messages[0];
   const hasQuoteRequest = conv.quoteRequests.length > 0;
  const hasContact = conv.contacts.length > 0;

  const lastQuoteRequest = conv.quoteRequests[0];
  const lastContact = conv.contacts[0];
  
  let type = "Email";
  let displayMessage = "No messages yet";

  if (hasQuoteRequest) type = "Quote Request";
  else if (hasContact) type = "Contact";
  
 if (lastQuoteRequest) {
    type = "Quote Request";
    displayMessage = lastQuoteRequest.body || "New quote request";
  } else if (lastContact) {
    type = "Contact";
    displayMessage = lastContact.message || "New contact form";
  } else if (lastMessage) {
    displayMessage = lastMessage.body;
  }


  return {
    id: conv.id,
    name: conv.name,
    email: conv.email,
    lastMessage: displayMessage,
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
