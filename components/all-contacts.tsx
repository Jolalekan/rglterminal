"use client";

import { markContactAsRead } from "@/action/mark-contacts-as-read";
import { truncateText } from "@/lib/truncate";
import { Contact } from "@/type";
import { format } from "date-fns";
import { useRouter } from "next/navigation";

interface AllContactProps {
  data: Contact[];
}

const AllContacts: React.FC<AllContactProps> = ({ data }) => {

const router = useRouter();

 const handleSelect = async(contact:Contact) => {
    router.push(`?id=${contact.id}`, { scroll: false });

    if(contact.status === "New"){
      await markContactAsRead(contact.id);
      router.refresh();
    }
  };

  return (

    <div className="bg-white w-full h-full overflow-hidden">
  <div className="h-full overflow-y-auto">
    <div className="space-y-2 p-2">
      {data.map((item) => (
        <div
          key={item.id}
           className={`border rounded-md p-3 hover:bg-yellow-200 cursor-pointer transition ${
                item.status === "New" 
                  ? "bg-blue-50 border-blue-200" 
                  : "bg-white"
              }`}
          onClick={() => handleSelect(item)}
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
