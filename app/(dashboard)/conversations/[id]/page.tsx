import { notFound } from "next/navigation";
import prismadb from "@/lib/prismadb";
import { ConversationThread } from "../component/thread";

export default async function ConversationPage({
  params,
}: {
  params: { id: string };
}) {
  const conversation = await prismadb.conversation.findUnique({
    where: { id: params.id },
    include: {
      messages: {
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!conversation) {
    notFound();
  }

  return (
    <div className="p-8">
      <ConversationThread conversation={conversation} />
    </div>
  );
}