import prismadb from "@/lib/prismadb";
import { ContactClient } from "./component/client";
import { ContactWithConversation } from "@/type";


export default async function Contacts() {
 
    const contacts = await prismadb.contact.findMany({
      include:{
        conversation:{
          include:{
            messages:{
               orderBy:{ createdAt:"asc"},
            }
          }
        },
      },
    orderBy:{
      createdAt:"desc"
    }
  }) as ContactWithConversation[];

 const stats = {
    total: contacts.length,
    new: contacts.filter(q => q.status === "New").length,
    read: contacts.filter(q => q.status === "Read").length,
    responded: contacts.filter(q => q.status === "Responded").length
  };

  return (
    <div>
    <ContactClient 
        contactRequest={contacts}
        stats={stats}
       />
    </div>
  );
}
