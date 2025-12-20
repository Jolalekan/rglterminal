import prismadb from "@/lib/prismadb";
import { generateSlug } from "@/lib/slug";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { fullName, email, phone, company, body, serviceType } = data;

    if (!email || !body) {
      return NextResponse.json(
        { error: "Email and message body are required" },
        { status: 400 }
      );
    }

    // Step 1 — Check for existing conversation by email
    let conversation = await prismadb.conversation.findFirst({
      where: {
        quoteRequests: {
          some: { email: email },
        },
      },
    });

    // Step 2 — Create conversation if none exists
    if (!conversation) {
      const slug = generateSlug(fullName, email, serviceType);
      conversation = await prismadb.conversation.create({
        data: { slug },
      });
    }

    // Step 3 — Save the message into conversation
    const quoteRequest = await prismadb.quoteRequest.create({
      data: {
        fullName,
        email,
        phone,
        body,
        company,
        serviceType,
        conversationId: conversation.id,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Quote sent successfully",
        conversation,
        data: quoteRequest,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("QUOTE_REQUEST_ERROR", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const conversations = await prismadb.conversation.findMany({
      include: {
        quoteRequests: true,
      },
      orderBy: { updatedAt: "desc" },
    });

    return NextResponse.json(conversations);
  } catch (error) {
    console.error("FETCH_QUOTES_ERROR", error);
    return NextResponse.json(
      { error: "Failed to fetch conversations" },
      { status: 500 }
    );
  }
}
