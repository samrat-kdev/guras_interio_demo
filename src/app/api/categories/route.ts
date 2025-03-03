// src/app/api/categories/route.ts
import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";

export async function GET() {
    try {
        const categories = await prisma.category.findMany({
            include: {
                services: true,
            },
        });

    return NextResponse.json({ categories, message: "Categories fetched successfully" }, { status: 200 }); 
    } catch (error) {
        console.error("Error fetching categories:", error);
        return NextResponse.json({ error: "Failed to fetch categories" }, { status: 500 });
    }
}

