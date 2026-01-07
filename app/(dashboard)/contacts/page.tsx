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
  console.log("messages")
  return (
    <div>
    <ContactClient 
        contactRequest={contacts}
       />
    </div>
  );
}
