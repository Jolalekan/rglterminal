import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import axios from 'axios';

interface EmailReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientEmail: string ;
  recipientName: string;
  originalMessage: string;
  conversationId:string;
}

const EmailReplyModal: React.FC<EmailReplyModalProps> = ({
  isOpen,
  onClose,
  recipientEmail,
  recipientName,
  originalMessage,
  conversationId
}) => {
  const [subject, setSubject] = useState(`Re: Your message`);
  const [body, setBody] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  if (!isOpen) return null;

  const handleSend = async () => {
    setIsSending(true);
    setError('');

      try {
    // Use axios properly OR use fetch - don't mix them
    const response = await axios.post('/api/send-email', {
      to: recipientEmail,
      subject,
      body,
      originalMessage,
      conversationId
    });

    if (response.status !== 200) {
      throw new Error(response.data.error || 'Failed to send email');
    }

    setSuccess(true);
    setTimeout(() => {
      onClose();
      setSubject(`Re: Your message`);
      setBody('');
      setSuccess(false);
    }, 2000);
  } catch (err) {
    console.error('Send error:', err);
    setError(err instanceof Error ? err.message : 'Failed to send email');
  } finally {
    setIsSending(false);
  }
};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b">
          <h2 className="text-xl font-semibold">Reply to {recipientName}</h2>
          <button
            onClick={onClose}
            className="p-1 hover:bg-gray-100 rounded cursor-pointer"
            disabled={isSending}
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Form */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {/* To Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              To
            </label>
            <input
              type="email"
              value={recipientEmail}
              disabled
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
            />
          </div>

          {/* Subject Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Subject
            </label>
            <input
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Email subject"
            />
          </div>

          {/* Body Field */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Message
            </label>
            <textarea
              value={body}
              onChange={(e) => setBody(e.target.value)}
              rows={8}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
              placeholder="Type your message here..."
            />
          </div>

          {/* Original Message */}
          <div className="border-t pt-4">
            <p className="text-xs text-gray-500 mb-2">Original message:</p>
            <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 max-h-32 overflow-y-auto">
              <p className="whitespace-pre-wrap">{originalMessage}</p>
            </div>
          </div>

          {/* Error Message */}
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
              Email sent successfully!
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="border-t p-4 flex justify-end gap-3">
          <button
            onClick={onClose}
            disabled={isSending}
            className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md disabled:opacity-50 cursor-pointer"
          >
            Cancel
          </button>
          <button
            onClick={handleSend}
            disabled={isSending || !body.trim()}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
          >
            {isSending ? (
              <>
                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                Sending...
              </>
            ) : (
              <>
                <Send className="w-4 h-4" />
                Send Email
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default EmailReplyModal; 