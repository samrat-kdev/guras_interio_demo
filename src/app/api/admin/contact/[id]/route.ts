import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET(req: NextResponse, { params }: { params: { id: string } }) {
    try {
        const { id } = params;
        const contact = await prisma.contact.findUnique({
            where: { id },
        });
        if (!contact) {
            return NextResponse.json({ error: "Contact not found" }, { status: 404 });
        }
        return NextResponse.json(contact, { status: 200 });
    } catch (error) {
        console.error("Error fetching contact:", error);
        return NextResponse.json({ error: "Internal Sever Error" }, { status: 500 });
    }
}

export async function PUT(req: NextRequest, { params }: { params: { id: string}}) {
    try {
        const { id } = params;
        const { name, email, message } = await req.json();
        const updatedContact = await prisma.contact.update({
            where: { id },
            data: { name, email, message },
        });
        return NextResponse.json(updatedContact, { status: 200 });
    } catch (error) {
        console.error('Error updating contact:', error);
        return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
    }
}

export async function DELETE(req: NextRequest, { params }: { params: { id: string }}) {
    try {
        const { id } = params;
        await prisma.contact.delete({
            where: { id },
        });
        return NextResponse.json({ message: 'Contact deleted successfully' }, { status: 200 });
    } catch (error) {
        console.error('Error deleting contact:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}