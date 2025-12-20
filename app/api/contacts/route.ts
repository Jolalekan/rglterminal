import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const data = await req.json();
    const { firstName, surname, email, phone, message } = data;

    if (!email || !message) {
      return NextResponse.json(
        { error: "Email and message body are required" },
        { status: 400 }
      );
    }


    // Step 3 — Save the message into conversation
    const contact = await prismadb.contact.create({
      data: {
        firstName,
        surname,
        email,
        phone,
        message,
      },
    });

    return NextResponse.json(
      {
        success: true,
        message: "Message sent successfully",
        data: contact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("CONTACT_ERROR", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}

// export async function GET() {
//   try {
//     const conversations = await prismadb.contact.findMany({
//       include: {
//         quoteRequests: true,
//       },
//       orderBy: { updatedAt: "desc" },
//     });

//     return NextResponse.json(conversations);
//   } catch (error) {
//     console.error("FETCH_QUOTES_ERROR", error);
//     return NextResponse.json(
//       { error: "Failed to fetch conversations" },
//       { status: 500 }
//     );
//   }
// }
