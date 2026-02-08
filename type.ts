export interface QuoteRequest{
    id:string;
    fullName:string;
    email:string;
    body:string;
    phone?:string | null;
    status:string;
    serviceType:string;
    company:string;
    createdAt:Date;
}

export interface Contact{
    id:string;
    firstName:string;
    surname:string;
    email:string;
    phone?:string | null;
    status:string;
    message:string;
    createdAt:Date;
}

export type Message = {
  id: string;
  conversationId: string;
  subject: string | null;
  body: string;
  direction: 'inbound' | 'outbound';
  from: string;
  to: string;
  messageId: string | null;
  inReplyTo: string | null;
  isRead: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export interface Conversation {
  id: string;
  name: string;
  email: string;
  lastMessage: string;
  lastMessageAt: Date;
  type: string;
  unreadCount: number;
  conversationId: string;
}

export type ContactWithConversation = Contact & {
  conversation: Conversation & {
    messages: Message[]
  } | null
}

export type QuoteRequestWithConversation = QuoteRequest & {
  conversation: (Conversation & {
    messages: Message[]
  }) | null
}
