import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";

// Get a specific project by ID
export async function GET( req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const { id } = params;
      const project = await prisma.project.findUnique({
        where: { id },
        include: {
          category: true,
          images: true,
        },
      });
      if (!project) {
        return NextResponse.json({ error: 'Project not found' }, { status: 404 });
      }
      return NextResponse.json(project);
    } catch (error) {
      console.error('Error fetching project:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }

  // Update a specific project by ID
export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
  ) {
    try {
      const { id } = params;
      const data = await req.json();
      const project = await prisma.project.update({
        where: { id },
        data,
      });
      return NextResponse.json(project);
    } catch (error) {
      console.error('Error updating project:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }

  // Delete a specific project by ID
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
  ) {
    try {
      const { id } = params;
      await prisma.project.delete({
        where: { id },
      });
      return NextResponse.json({ message: 'Project deleted successfully' });
    } catch (error) {
      console.error('Error deleting project:', error);
      return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
  }
  