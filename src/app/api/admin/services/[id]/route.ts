import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Fetch a specific service by ID
export async function GET(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const service = await prisma.service.findUnique({
      where: { id },
      include: {
        category: true,
      },
    });
    if (!service) {
      return NextResponse.json({ error: 'Service not found' }, { status: 404 });
    }
    return NextResponse.json(service);
  } catch (error) {
    console.error('Error fetching service:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Update a specific service by ID
export async function PUT(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;
    const data = await req.json();
    const service = await prisma.service.update({
      where: { id },
      data,
    });
    return NextResponse.json(service);
  } catch (error) {
    console.error('Error updating service:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Delete a specific service by ID
export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = await params;
    await prisma.service.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Service deleted successfully' });
  } catch (error) {
    console.error('Error deleting service:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}