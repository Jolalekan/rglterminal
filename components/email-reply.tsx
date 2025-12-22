// import React, { useState } from 'react';
// import { X, Send, Paperclip, Trash2 } from 'lucide-react';

// interface EmailReplyModalProps {
//   isOpen: boolean;
//   onClose: () => void;
//   recipientEmail: string;
//   recipientName: string;
//   originalMessage: string;
// }

// interface AttachedFile {
//   file: File;
//   id: string;
// }

// const EmailReplyModal: React.FC<EmailReplyModalProps> = ({
//   isOpen,
//   onClose,
//   recipientEmail,
//   recipientName,
//   originalMessage,
// }) => {
//   const [subject, setSubject] = useState(`Re: Your message`);
//   const [body, setBody] = useState('');
//   const [attachments, setAttachments] = useState<AttachedFile[]>([]);
//   const [isSending, setIsSending] = useState(false);
//   const [error, setError] = useState('');
//   const [success, setSuccess] = useState(false);

//   if (!isOpen) return null;

//   const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const files = e.target.files;
//     if (!files) return;

//     const newFiles: AttachedFile[] = Array.from(files).map((file) => ({
//       file,
//       id: Math.random().toString(36).substring(7),
//     }));

//     setAttachments((prev) => [...prev, ...newFiles]);
//     e.target.value = ''; // Reset input
//   };

//   const handleDeleteFile = (id: string) => {
//     setAttachments((prev) => prev.filter((att) => att.id !== id));
//   };

//   const formatFileSize = (bytes: number) => {
//     if (bytes === 0) return '0 Bytes';
//     const k = 1024;
//     const sizes = ['Bytes', 'KB', 'MB', 'GB'];
//     const i = Math.floor(Math.log(bytes) / Math.log(k));
//     return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
//   };

//   const handleSend = async () => {
//     setIsSending(true);
//     setError('');

//     try {
//       const formData = new FormData();
//       formData.append('to', recipientEmail);
//       formData.append('subject', subject);
//       formData.append('body', body);
//       formData.append('originalMessage', originalMessage);

//       // Add attachments
//       attachments.forEach((att) => {
//         formData.append('attachments', att.file);
//       });

//       const response = await fetch('/api/send-email', {
//         method: 'POST',
//         body: formData,
//       });

//       const data = await response.json();

//       if (!response.ok) {
//         throw new Error(data.error || 'Failed to send email');
//       }

//       setSuccess(true);
//       setTimeout(() => {
//         onClose();
//         setSubject(`Re: Your message`);
//         setBody('');
//         setAttachments([]);
//         setSuccess(false);
//       }, 2000);
//     } catch (err) {
//       setError(err instanceof Error ? err.message : 'Failed to send email');
//     } finally {
//       setIsSending(false);
//     }
//   };

//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
//       <div className="bg-white rounded-lg shadow-xl w-full max-w-2xl max-h-[90vh] overflow-hidden flex flex-col">
//         {/* Header */}
//         <div className="flex items-center justify-between p-4 border-b">
//           <h2 className="text-xl font-semibold">Reply to {recipientName}</h2>
//           <button
//             onClick={onClose}
//             className="p-1 hover:bg-gray-100 rounded cursor-pointer"
//             disabled={isSending}
//           >
//             <X className="w-5 h-5" />
//           </button>
//         </div>

//         {/* Form */}
//         <div className="flex-1 overflow-y-auto p-4 space-y-4">
//           {/* To Field */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               To
//             </label>
//             <input
//               type="email"
//               value={recipientEmail}
//               disabled
//               className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-50 text-gray-600"
//             />
//           </div>

//           {/* Subject Field */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Subject
//             </label>
//             <input
//               type="text"
//               value={subject}
//               onChange={(e) => setSubject(e.target.value)}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               placeholder="Email subject"
//             />
//           </div>

//           {/* Body Field */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-1">
//               Message
//             </label>
//             <textarea
//               value={body}
//               onChange={(e) => setBody(e.target.value)}
//               rows={8}
//               className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
//               placeholder="Type your message here..."
//             />
//           </div>

//           {/* File Upload */}
//           <div>
//             <label className="block text-sm font-medium text-gray-700 mb-2">
//               Attachments
//             </label>
//             <div className="flex items-center gap-2">
//               <label className="flex items-center gap-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-md cursor-pointer transition">
//                 <Paperclip className="w-4 h-4" />
//                 <span className="text-sm">Attach Files</span>
//                 <input
//                   type="file"
//                   multiple
//                   onChange={handleFileSelect}
//                   className="hidden"
//                   disabled={isSending}
//                 />
//               </label>
//               <span className="text-xs text-gray-500">
//                 {attachments.length} file(s) attached
//               </span>
//             </div>

//             {/* Attached Files List */}
//             {attachments.length > 0 && (
//               <div className="mt-3 space-y-2">
//                 {attachments.map((att) => (
//                   <div
//                     key={att.id}
//                     className="flex items-center justify-between p-2 bg-gray-50 rounded border"
//                   >
//                     <div className="flex items-center gap-2 flex-1 min-w-0">
//                       <Paperclip className="w-4 h-4 text-gray-500 flex-shrink-0" />
//                       <div className="flex-1 min-w-0">
//                         <p className="text-sm font-medium text-gray-700 truncate">
//                           {att.file.name}
//                         </p>
//                         <p className="text-xs text-gray-500">
//                           {formatFileSize(att.file.size)}
//                         </p>
//                       </div>
//                     </div>
//                     <button
//                       onClick={() => handleDeleteFile(att.id)}
//                       className="p-1 hover:bg-red-100 rounded text-red-600 cursor-pointer"
//                       disabled={isSending}
//                     >
//                       <Trash2 className="w-4 h-4" />
//                     </button>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>

//           {/* Original Message */}
//           <div className="border-t pt-4">
//             <p className="text-xs text-gray-500 mb-2">Original message:</p>
//             <div className="bg-gray-50 p-3 rounded text-sm text-gray-700 max-h-32 overflow-y-auto">
//               <p className="whitespace-pre-wrap">{originalMessage}</p>
//             </div>
//           </div>

//           {/* Error Message */}
//           {error && (
//             <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
//               {error}
//             </div>
//           )}

//           {/* Success Message */}
//           {success && (
//             <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded">
//               Email sent successfully!
//             </div>
//           )}
//         </div>

//         {/* Footer */}
//         <div className="border-t p-4 flex justify-end gap-3">
//           <button
//             onClick={onClose}
//             disabled={isSending}
//             className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-md disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
//           >
//             Cancel
//           </button>
//           <button
//             onClick={handleSend}
//             disabled={isSending || !body.trim()}
//             className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 cursor-pointer"
//           >
//             {isSending ? (
//               <>
//                 <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                 Sending...
//               </>
//             ) : (
//               <>
//                 <Send className="w-4 h-4" />
//                 Send Email
//               </>
//             )}
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default EmailReplyModal;

import React, { useState } from 'react';
import { X, Send } from 'lucide-react';
import axios from 'axios';

interface EmailReplyModalProps {
  isOpen: boolean;
  onClose: () => void;
  recipientEmail: string ;
  recipientName: string;
  originalMessage: string;
}

const EmailReplyModal: React.FC<EmailReplyModalProps> = ({
  isOpen,
  onClose,
  recipientEmail,
  recipientName,
  originalMessage,
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