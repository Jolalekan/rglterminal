import { truncateText } from "@/lib/truncate";
import { Message } from "@/type";
import { format } from "date-fns";

interface AllMessagesProps {
  messages: Message[];
  onSelect: (message: Message) => void;
}

const AllMessages: React.FC<AllMessagesProps> = ({ messages, onSelect }) => {

  return (
    <div className=" bg-white w-full">
      <div >
        <div className="space-y-2">   
          {messages.map((message) => (
            <div 
              key={message.id}
              className="border rounded-md p-3 hover:bg-yellow-200 cursor-pointer transition"
              onClick={() => onSelect(message)}
            >
              {/* Top Row */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {message.name}
                </span>

                <span className="text-xs text-gray-400">
                  {format(message.createdAt, "PPP")}
                </span>
              </div>

              {/* Preview */}
              <span className="text-xs text-gray-600 block mt-1">
                {truncateText(message.body, 40)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllMessages;
