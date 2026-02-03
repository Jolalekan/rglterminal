import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
){
    try {
        const { id } = await params;

        // Get the contact first to find its conversation
        const contact = await prismadb.contact.findUnique({
            where: { id },
            select: { conversationId: true }
        });

        if (!contact) {
            return new NextResponse("Contact not found", { status: 404 });
        }

        // Delete the Contact
        await prismadb.contact.delete({
            where: { id }
        });

        // Optional: Delete conversation if it has no more Contacts
        const contacts = await prismadb.contact.count({
            where: { conversationId: contact.conversationId }
        });

        if (contacts === 0 && contact.conversationId) {
            await prismadb.conversation.delete({
                where: { id: contact.conversationId }
            });
        }

        return new NextResponse("Contact deleted successfully", { status: 200 });
    } catch (error) {
        console.log("[CONTACT_DELETE]", error);
        return new NextResponse("Internal error", { status: 500 });
    }
}