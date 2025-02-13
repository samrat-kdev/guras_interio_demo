// src/app/api/projects/route.ts
import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Create a new project
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Validate the input
    if (!data.title || !data.description || !data.categoryId) {
      return NextResponse.json(
        { error: 'Title, description, and categoryId are required' },
        { status: 400 }
      );
    }

    // Create a new project
    const project = await prisma.project.create({
      data,
    });

    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error('Error creating project:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        category: true,
        images: true,
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Error fetching projects:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
