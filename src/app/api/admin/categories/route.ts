// src/app/api/admin/categories/route.ts
import { NextRequest, NextResponse } from 'next/server';
import  prisma  from '@/lib/prisma';
import { uploadImageToCloudinary } from '@/lib/cloudinary';



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
    const formData = await req.formData();
    const name = formData.get('name') as string;
    const description = formData.get('description') as string;
    const images = formData.get('images') as File;

    // Basic validation to ensure data contains required fields
    if (!name ) {
      return NextResponse.json(
        { error: 'Category name is required' },
        { status: 400 }
      );
    }

    // Check if a category with the same name already exists
    const existingCategory = await prisma.category.findUnique({
      where: { name: name },
    });
    if (existingCategory) {
      return NextResponse.json(
        { error: 'Category with the same name already exists' },
        { status: 400 }
      );
    }

    // // Array to hold image data for nested creation
    // let imagesToCreate = [];

    // if (images && Array.isArray(images)) {
    //   const uploadPromises = images.map(async (image: File) => {
    //     const uploadResult = await uploadImageToCloudinary(image);
    //     if (!uploadResult || !uploadResult.secure_url) {
    //       throw new Error('Image upload failed');
    //     }
    //     return { url: uploadResult.secure_url };
    //   });

    //   imagesToCreate = await Promise.all(uploadPromises);
    // }
     // Ensure the image is provided
     if (!images) {
      return NextResponse.json({ error: "No image file selected" }, { status: 400 });
    }

    // Upload image to Cloudinary
    const uploadResult = await uploadImageToCloudinary(images);
    if (!uploadResult) {
      return NextResponse.json(
        { error: "Failed to upload image to Cloudinary" },
        { status: 500 }
      );
    }

    

    // Create a new category
    const newCategory = await prisma.category.create({
      data: {
        name: name,
        description: description,
        images: {
          create: {
            url: uploadResult.secure_url,
          },
        },
      },
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