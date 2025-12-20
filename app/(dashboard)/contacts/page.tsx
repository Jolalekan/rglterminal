import prismadb from "@/lib/prismadb";
import { ContactClient } from "./component/client";


export default async function Contact() {
  // const messages = await prismadb.message.findMany();


    const contacts = await prismadb.contact.findMany({
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
