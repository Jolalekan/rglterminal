import { QuoteRequest, Message, Conversation } from "@/type";
import { format } from "date-fns";
import { Mail, Phone, Calendar, MessageSquare, Reply } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import EmailReplyModal from "./email-reply";

interface DisplaQuoteProps {
  data: QuoteRequest &{
    conversation:Conversation & {
      messages: Message[]
    }
  } | null;
} 

const DisplayQuote: React.FC<DisplaQuoteProps> = ({ data }) => {
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
              <h3 className="text-xl font-semibold text-gray-900">{data.fullName}</h3>
            </div>
              <p className="text-sm text-gray-500 mt-1">
                {format(new Date(data.createdAt), "PPP 'at' p")}
              </p>
            
      
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

        {/* Conversation Thread */}
        <div className="p-6 flex-1 overflow-y-auto space-y-4">
          {/* Original Quote Request */}
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4">
            <div className="flex items-start gap-3">
              <div className="bg-amber-100 rounded-full p-2">
                <MessageSquare className="w-5 h-5 text-amber-600" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-amber-900 mb-2">
                  Quote Request - {data.serviceType}
                </p>
                <div className="space-y-1 text-sm text-gray-700">
                  {data.company && (
                    <p><span className="font-medium">Company:</span> {data.company}</p>
                  )}
                  <p><span className="font-medium">Phone:</span> {data.phone}</p>
                  <p className="mt-3"><span className="font-medium">Message:</span></p>
                  <p className="whitespace-pre-wrap bg-white rounded p-3 border">
                    {data.body}
                  </p>
                </div>
                <p className="text-xs text-gray-500 mt-2">
                  {format(new Date(data.createdAt), "PPP 'at' p")}
                </p>
              </div>
            </div>
          </div>

          {/* Conversation Messages */}
          {data.conversation.messages.length > 0 && (
            <>
                       
              {data.conversation.messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${
                    message.direction === 'outbound' ? 'justify-end' : 'justify-start'
                  }`}
                >
                  <div
                    className={`max-w-[80%] rounded-lg p-4 ${
                      message.direction === 'outbound'
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-900'
                    }`}
                  >
                    <p className="text-sm font-medium mb-1">
                      {message.direction === 'outbound' ? 'You' : data.fullName}
                    </p>
                    <p className="whitespace-pre-wrap">{message.body}</p>
                    <p className={`text-xs mt-2 ${
                      message.direction === 'outbound' ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {format(new Date(message.createdAt), "PPP 'at' p")}
                    </p>
                  </div>
                </div>
              ))}
            </>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 bg-gray-50">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <Calendar className="w-3 h-3" />
            <span>Received {format(new Date(data.createdAt), "PPP")}</span>
            {data.conversation.messages.length > 0 && (
              <>
                <span className="mx-2">•</span>
                <span>{data.conversation.messages.length} {data.conversation.messages.length === 1 ? 'reply' : 'replies'}</span>
              </>
            )}
          </div>
        </div>
      </div>

            {/* Reply Button */}
          <div className="">
            <Button 
              onClick={() => setIsModalOpen(true)}
              size="sm"
              className="w-full flex items-center gap-2 cursor-pointer"
              >
              <Reply className="w-4 h-4" />
              Click to Reply
            </Button>
             
                </div>

      {/* Email Reply Modal */}
      <EmailReplyModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        recipientEmail={data.email}
        recipientName={data.fullName}
        originalMessage={data.body}
        conversationId={data.conversationId}
      />
    </>
  );
};

export default DisplayQuote;
