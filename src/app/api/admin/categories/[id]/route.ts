import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

// Fetch a specific category by ID
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
  ) {
    try {
      const { id } = params;
      const category = await prisma.category.findUnique({
        where: { id },
        include: {
          projects: true,
          services: true,
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
    req: NextRequest,
    { params }: { params: { id: string } }
  ) {
    try {
      const { id } = params;
      const data = await req.json();
      const category = await prisma.category.update({
        where: { id },
        data,
      });
      return NextResponse.json(category);
    } catch (error) {
      console.error('Error updating category:', error);
      return NextResponse.json(
        { error: 'Internal Server Error' },
        { status: 500 }
      );
    }
  }
  
  // // app/api/admin/categories/[id]/route.ts
  // // Delete a specific category by ID
  // export async function DELETE(
  //   req: NextRequest,
  //   { params }: { params: { id: string } }
  // ) {

  //   console.log(params);

  //   try {
  //     const { id } = params;
  //     console.log(id);
  //     await prisma.category.delete({
  //       where: { id },
  //     });
  //     return NextResponse.json({ message: 'Category deleted successfully' });
  //   } catch (error) {
  //     console.error('Error deleting category:', error);
  //     return NextResponse.json(
  //       { error: 'Internal Server Error' },
  //       { status: 500 }
  //     );
  //   }
  // }

  // app/api/admin/categories/[id]/route.ts

// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   // Log the entire request for better understanding
//   console.log('Request received for DELETE method');
  
//   // Log the params to ensure the correct id is being passed
//   console.log('Received category ID:', params.id);

//   try {
//     const { id } = params;
    
//     // Log just before deleting the category
//     console.log(`Attempting to delete category with ID: ${id}`);
    
//     // Perform the delete operation
//     const category = await prisma.category.delete({
//       where: { id },
//     });

//     // Log successful deletion
//     console.log('Category deleted:', category);

//     // Return the success response
//     return NextResponse.json({ message: 'Category deleted successfully' });
//   } catch (error) {
//     // Log the error in detail for debugging
//     console.error('Error deleting category:', error);
    
//     // Return error response
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }

// // app/api/admin/categories/[id]/route.ts

// export async function DELETE(
//   req: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   console.log('Request received for DELETE method');
  
//   // Ensure params are available before using them
//   const { id } = params;
//   if (!id) {
//     console.error('No category ID provided');
//     return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
//   }

//   console.log('Received category ID:', id);

//   try {
//     // Log just before attempting deletion
//     console.log(`Attempting to delete category with ID: ${id}`);
    
//     // Attempting to delete the category
//     const category = await prisma.category.delete({
//       where: { id },
//     });

//     console.log('Category deleted:', category);

//     return NextResponse.json({ message: 'Category deleted successfully' });
//   } catch (error) {
//     // Log error with full details
//     console.error('Error deleting category:', error);

//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }

// app/api/admin/categories/[id]/route.ts

export async function DELETE(
  req: NextRequest,
  { params }: { params: { id: string } }
) {
  console.log('Request received for DELETE method');
  
  // Await params to ensure it's properly resolved (for Next.js 13 app directory)
  const { id } = await params;
  if (!id) {
    console.error('No category ID provided');
    return NextResponse.json({ error: 'Category ID is required' }, { status: 400 });
  }

  console.log('Received category ID:', id);

  try {
    // Log just before attempting deletion
    console.log(`Attempting to delete category with ID: ${id}`);
    
    // Attempting to delete the category
    const category = await prisma.category.delete({
      where: { id },
    });

    console.log('Category deleted:', category);

    // Ensure proper object is returned
    return NextResponse.json({ message: 'Category deleted successfully', deletedCategory: category });
  } catch (error) {
    // Check the type of the error before logging it
    let errorMessage = 'Unknown error occurred';
    if (error && error instanceof Error) {
      errorMessage = error.message; // Extract message if it's a proper Error object
    } else if (error && typeof error === 'object') {
      errorMessage = JSON.stringify(error); // In case the error is an object but not an instance of Error
    }

    // Log the error message
    console.error('Error deleting category:', errorMessage);

    // Return error response with the message safely extracted
    return NextResponse.json({ error: 'Internal Server Error', details: errorMessage }, { status: 500 });
  }
}
