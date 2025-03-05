import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

interface RouteParams {
  params: {
    id: string;
  };
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function GET(
    request: NextRequest,
    context: RouteParams
) {
    try {
        const category = await prisma.category.findUnique({
            where: { id: context.params.id },
            include: {
                services: true,
                images: {
                    select: {
                        url: true,
                    },
                },
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
