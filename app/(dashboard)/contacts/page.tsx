import prismadb from "@/lib/prismadb";
import { ContactClient } from "./component/client";


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
  })

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
