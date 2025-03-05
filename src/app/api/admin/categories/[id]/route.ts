import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Fetch a specific category by ID
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const category = await prisma.category.findUnique({
            where: { id: params.id },
            include: {
                services: true,
                images: {
                    select: {
                        url: true,
                    },
                }
            },
        });
        if (!category) {
            return NextResponse.json({ error: 'Category not found' }, { status: 404 });
        }
        return NextResponse.json(category);
    } catch (error) {
        console.error('Error fetching category:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

// Update a specific category by ID
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const categoryExist = await prisma.category.findUnique({
            where: { id: params.id },
        });
        if (!categoryExist) {
            return NextResponse.json({ error: 'Category not found' }, { status: 404 });
        }
        const data = await request.json();
        const category = await prisma.category.update({
            where: { id: params.id },
            data,
        });
        return NextResponse.json({ message: 'Category updated successfully', category }, { status: 201 });
    } catch (error) {
        console.error('Error updating category:', error);
        return NextResponse.json(
            { error: 'Internal Server Error' },
            { status: 500 }
        );
    }
}

// Delete a specific category by ID
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    if (!params.id) {
        return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
    }

    try {
        const category = await prisma.category.delete({
            where: { id: params.id },
        });
        return NextResponse.json({ message: 'Category deleted successfully', deletedCategory: category });
    } catch (error) {
        const errorMessage = error instanceof Error ? error.message : 'Unknown error occurred';
        console.error('Error deleting category:', errorMessage);
        return NextResponse.json(
            { error: 'Internal Server Error', details: errorMessage },
            { status: 500 }
        );
    }
}
