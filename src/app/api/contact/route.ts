import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const contact = await prisma.project.findMany();
        return NextResponse.json(contact);
    } catch (error) {
        console.error("Error fetching contact:", error);
        return NextResponse.json({ error: "Failed to fetch contact" }, { status: 500 });
    }
}
