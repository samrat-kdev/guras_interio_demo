// src/app/api/services/route.ts
import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import { generateUniqueCode } from "@/utils/uuid";


// Utility function to check if a service exists based on title, description, and categoryId
async function isServiceExist(title: string, description: string, categoryId: string) {
  const existingService = await prisma.service.findFirst({
    where: {
      title,
      description,
      categoryId,
    },
  });

  return existingService;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    console.log("formData:",formData);
    const image = formData.get("serviceImages") as File;
    console.log("image:",image);
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const features = formData.get("features") ? JSON.parse(formData.get("features") as string) : null;
    const pricing = formData.get("pricing") ? JSON.parse(formData.get("pricing") as string) : null;
    const categoryId = formData.get("categoryId") as string;
    const isActive = formData.get("isActive") === "true";

    // Validate required fields
    if (!title || !description || !categoryId) {
      return NextResponse.json(
        { error: "Title, description, and categoryId are required" },
        { status: 400 }
      );
    }

    // Generate unique service code
    const serviceCode = generateUniqueCode('Service');
    console.log("Generated Service code:", serviceCode);

    // Check if the service already exists based on title, description, and categoryId
    const existingService = await isServiceExist(title, description, categoryId);

    if (existingService) {
      return NextResponse.json(
        { error: "A service with the same title, description, and category already exists" },
        { status: 400 }
      );    
    }

    // Upload image to Cloudinary
    const uploadResult = await uploadImageToCloudinary(image);

    if (!uploadResult || !uploadResult.secure_url) {
      return NextResponse.json(
        { error: "Failed to upload image to Cloudinary" },
        { status: 500 }
      );
    }
    // Create a new service
    const newService = await prisma.service.create({
      data: {
        servicecode: serviceCode,
        title,
        description,
        features,
        pricing,
        categoryId,
        isActive,
        serviceImages: {
          create: {
            url: uploadResult.secure_url,
            alt: title, // Use the title as the alt text for the image
          },
        },
      },
    });

    return NextResponse.json(newService, { status: 201 });
  } catch (error) {
    console.error("Error creating service:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

// // Create a new service
// export async function POST(req: NextRequest) {
//   try {
//     const data = await req.json();
//     const newService = await prisma.service.create({
//       data,
//     });
//     return NextResponse.json(newService, { status: 201 });
//   } catch (error) {
//     console.error('Error creating service:', error);
//     return NextResponse.json(
//       { error: 'Internal Server Error' },
//       { status: 500 }
//     );
//   }
// }

// Fetch all services
export async function GET() {
  try {
    const services = await prisma.service.findMany({
      include: {
        category: true,
      },
    });
    return NextResponse.json(services);
  } catch (error) {
    console.error('Error fetching services:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}