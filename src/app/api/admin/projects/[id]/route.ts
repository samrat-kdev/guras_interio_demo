import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Get a specific project by ID
export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params;
    const project = await prisma.project.findUnique({
      where: { id },
      include: {
        service: true,
        images: true,
      },
    });
    if (!project) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    return NextResponse.json(project);
  } catch (error) {
    console.error("Error fetching project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Update a specific project by ID
export async function PUT(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params;
    const projectExist = await prisma.project.findUnique({
      where: { id },
    });
    if (!projectExist) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    const data = await request.json();
    const project = await prisma.project.update({
      where: { id },
      data,
    });
    return NextResponse.json(
      { message: "Project updated successfully", project },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error updating project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// Delete a specific project by ID
export async function DELETE(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params;
    await prisma.project.delete({
      where: { id },
    });
    return NextResponse.json({ message: "Project deleted successfully" });
  } catch (error) {
    console.error("Error deleting project:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
