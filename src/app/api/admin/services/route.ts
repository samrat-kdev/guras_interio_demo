// src/app/api/services/route.ts
import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Fetch all services
export async function GET() {
  try {
    const services = await prisma.service.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Create a new service
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();
    const newService = await prisma.service.create({
      data,
    });
    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    console.error('Error creating service:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}