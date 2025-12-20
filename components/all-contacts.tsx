import { truncateText } from "@/lib/truncate";
import { Contact } from "@/type";
import { format } from "date-fns";

interface AllContactProps {
  data: Contact[];
  onSelect: (data: Contact) => void;
}

const AllContacts: React.FC<AllContactProps> = ({ data, onSelect }) => {

  return (
    <div className=" bg-white w-full">
      <div >
        <div className="space-y-2">   
          {data.map((item) => (
            <div 
              key={item.id}
              className="border rounded-md p-3 hover:bg-yellow-200 cursor-pointer transition"
              onClick={() => onSelect(item)}
            >
              {/* Top Row */}
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">
                  {item.firstName}
                </span>

                <span className="text-xs text-gray-400">
                  {format(item.createdAt, "PPP")}
                </span>
              </div>

              {/* Preview */}
              <span className="text-xs text-gray-600 block mt-1">
                {truncateText(item.message, 40)}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllContacts;
