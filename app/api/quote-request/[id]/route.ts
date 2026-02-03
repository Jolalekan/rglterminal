import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
){
    try {
        const { id } = await params;

        // Get the quote request first to find its conversation
        const quoteRequest = await prismadb.quoteRequest.findUnique({
            where: { id },
            select: { conversationId: true }
        });

        if (!quoteRequest) {
            return new NextResponse("Quote Request not found", { status: 404 });
        }

        // Delete the quote request
        await prismadb.quoteRequest.delete({
            where: { id }
        });

        // Optional: Delete conversation if it has no more quote requests
        const remainingRequests = await prismadb.quoteRequest.count({
            where: { conversationId: quoteRequest.conversationId }
        });

        if (remainingRequests === 0 && quoteRequest.conversationId) {
            await prismadb.conversation.delete({
                where: { id: quoteRequest.conversationId }
            });
        }

        return new NextResponse("Quote Request deleted successfully", { status: 200 });
    } catch (error) {
        console.log("[QUOTE_REQUEST_DELETE]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}