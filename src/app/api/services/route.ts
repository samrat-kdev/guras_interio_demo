// src/app/api/services/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface RouteParams {
  params?: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function GET(
) {
    try {
        const services = await prisma.service.findMany();
        return NextResponse.json(services);
    } catch (error) {
        console.error("Error fetching services:", error);
        return NextResponse.json({ error: "Failed to fetch services" }, { status: 500 });
    }
}
