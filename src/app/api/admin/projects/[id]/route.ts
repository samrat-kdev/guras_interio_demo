import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Get a specific project by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
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
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    const projectExist = await prisma.project.findUnique({
      where: { id },
    });
    if (!projectExist) {
      return NextResponse.json({ error: "Project not found" }, { status: 404 });
    }
    const data = await req.json();
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
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
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
