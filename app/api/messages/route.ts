import prismadb from "@/lib/prismadb";

export async function POST(req: Request) {
  const data = await req.json();

  const message = await prismadb.message.create({
    data: {
      name: data.name,
      email: data.email,
      phone: data.phone,
      message: data.message,
      type: data.type
    }
  });

  return Response.json({ success: true, message });
}

export async function GET() {
  const messages = await prismadb.message.findMany({
    orderBy: { createdAt: "desc" }
  });

  return Response.json(messages);
}
