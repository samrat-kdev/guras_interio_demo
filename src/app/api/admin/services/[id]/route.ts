import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Fetch a specific service by ID
export async function GET(
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params;
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
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params;
    const data = await request.json();
    const service = await prisma.service.update({
      where: { id },
      data,
    });
    return NextResponse.json({message: 'Service updated successfully', service}, { status: 201 });
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
  request: NextRequest,
  context: RouteParams
) {
  try {
    const { id } = await context.params;
    await prisma.service.delete({
      where: { id },
    });
    return NextResponse.json({ message: 'Service deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting service:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}