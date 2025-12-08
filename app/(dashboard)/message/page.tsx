import prismadb from "@/lib/prismadb";
import { MessageClient } from "./component/client";

export default async function Message() {
  // const messages = await prismadb.message.findMany();


    const messages = await prismadb.message.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })
  console.log("messages")
  return (
    <div>
    <MessageClient 
        messages={messages}
       />
    </div>
  );
}
