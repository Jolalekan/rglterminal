import prismadb from "@/lib/prismadb";
import { MessageClient } from "./component/client";

export default async function Message({
  params,
}: {
  params: { messageId: string };
}) {
  const message = await prismadb.message.findUnique({
    where: {
      id: params.messageId,
    },include:{
      sender:true,
    }
  });
  console.log("message")

  const messages = await prismadb.message.findMany({
    orderBy:{
      createdAt:"desc"
    }
  })
  return (
    <div>
      <MessageClient 
        data={message}
        messages={messages}
        />
    </div>
  );
}
