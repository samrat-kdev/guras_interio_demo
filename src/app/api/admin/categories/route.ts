import { NextRequest, NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';

// Fetch all categories
// export async function GET() {
//   try {
//     const categories = await prisma.category.findMany({
//       include: {
//         projects: true,
//         services: true,
//       },
//     });
//     return NextResponse.json(categories);
//   } catch (error) {
//     console.error('Error fetching categories:', error);
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }

// // Create a new category
// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.json();
//     const newCategory = await prisma.category.create({
//       data,
//     });
//     return NextResponse.json(newCategory, { status: 201 });
//   } catch (error) {
//     console.error('Error creating category:', error);
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }

// Fetch all categories
export async function GET() {
  try {
    const categories = await prisma.category.findMany({
      include: {
        projects: true,
        services: true,
      },
    });
    return NextResponse.json(categories);
  } catch (error) {
    console.error('Error fetching categories:', error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

// Create a new category
export async function POST(req: NextRequest) {
  try {
    const data = await req.json();

    // Basic validation to ensure data contains required fields
    if (!data.name) {
      return NextResponse.json(
        { error: 'Category name is required' },
        { status: 400 }
      );
    }

    // Create a new category
    const newCategory = await prisma.category.create({
      data,
    });

    return NextResponse.json(newCategory, { status: 201 });
  } catch (error) {
    // Ensure error logging works even if the error is not an instance of Error
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error('Error creating category:', errorMessage);

    return NextResponse.json(
      { error: 'Internal Server Error', details: errorMessage },
      { status: 500 }
    );
  }
}