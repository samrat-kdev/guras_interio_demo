import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { uploadImageToCloudinary } from "@/lib/cloudinary";
import { generateUniqueCode } from "@/utils/uuid";
// Utility function to check if a project exists based on title, description, and categoryId
async function isProjectExist(title: string, description: string, categoryId: string) {
  const existingProject = await prisma.project.findFirst({
    where: {
      title: title,
      description: description,
      categoryId: categoryId,
      
    },
  });

  return existingProject;
}

export async function POST(req: NextRequest) {
  try {
    const formData = await req.formData();
    const image = formData.get("image") as File;
    const title = formData.get("title") as string;
    const description = formData.get("description") as string;
    const location = formData.get("location") as string | null;
    const client = formData.get("client") as string | null;
    const completionDate = formData.get("completionDate") as Date | null;
    const categoryId = formData.get("categoryId") as string;
    const featured = formData.get("featured") === "true";
    const isActive = formData.get("isActive") === "true";

    // Validate required fields
    if (!title || !description || !categoryId) {
      return NextResponse.json(
        { error: "Title, description, and categoryId are required" },
        { status: 400 }
      );
    }

    // Generate unique project code
    const projectCode = generateUniqueCode('Project');
    console.log("Generated Project code:", projectCode);

    // Check if the project already exists based on title, description, and categoryId
    const existingProject = await isProjectExist(title, description, categoryId);

    if (existingProject) {
      return NextResponse.json(
        { error: "A project with the same title, description, and category already exists" },
        { status: 400 }
      );
    }

    // Upload image to Cloudinary
    const uploadResult = await uploadImageToCloudinary(image);
    if (!uploadResult) {
      return NextResponse.json(
        { error: "Failed to upload image to Cloudinary" },
        { status: 500 }
      );
    }

    // Create the new project in the database
    const project = await prisma.project.create({
      data: {
        projectcode: projectCode,
        title,
        description,
        location: location || undefined,
        client: client || undefined,
        completionDate: completionDate ? new Date(completionDate) : undefined,
        categoryId,
        featured,
        isActive,
        images: {
          create: {
            url: uploadResult.secure_url,
            alt: title, // Use the title as the alt text for the image
          },
        },
      },
    });

    // Return the newly created project
    return NextResponse.json(project, { status: 201 });
  } catch (error) {
    console.error("Error creating project:", error instanceof Error ? error.message : error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}


// // Create a new project
// export async function POST(req: NextRequest) {
//   try {
//     // const data = await req.json();
//     // Parse the incoming form data

//     const formData = await req.formData();
//     const image = formData.get("image") as File;
//     const title = formData.get("title") as string;
//     // const projectcode = formData.get("projectcode") as string;
//     const description = formData.get("description") as string;
//     const location = formData.get("location") as string | null;
//     const client = formData.get("client") as string | null;
//     const completionDate = formData.get("completionDate") as Date | null;
//     const categoryId = formData.get("categoryId") as string;
//     const featured = formData.get("featured") === "true";
//     const isActive = formData.get("isActive") === "true";

//     // Validate the input
//     if (!title || !description || !categoryId) {
//       return NextResponse.json(
//         { error: "Title, description, and categoryId are required" },
//         { status: 400 }
//       );
//     }

//     // Generate a unique project code
//     let projectCode = generateUniqueCode('Project');
//     console.log("Project code:",projectCode);

//      // Check if a project with the same title, description, and categoryId already exists
//      const existingProject = await prisma.project.findFirst({
//       where: {
//         title: title,
//         description: description,
//         categoryId: categoryId,
//       },
//     });

//     if (existingProject) {
//       return NextResponse.json(
//         { error: "A project with the same title, description, and category already exists" },
//         { status: 400 }
//       );
//     }

//     const uploadResult = await uploadImageToCloudinary(image);
//     if (!uploadResult) {
//       return NextResponse.json(
//         { error: "Failed to upload image to Cloudinary" },
//         { status: 500 }
//       );
//     }
//     const project = await prisma.project.create({
//       data: {
//         projectcode: projectCode,
//         title,
//         description,
//         location: location || undefined,
//         client: client || undefined,
//         completionDate: completionDate ? new Date(completionDate) : undefined,
//         categoryId,
//         featured,
//         isActive,
//         images: {
//           create: {
//             url: uploadResult.secure_url,
//             alt: title, // Optionally use the title as the alt text
//           },
//         },
//       },
//     });

//     return NextResponse.json(project, { status: 201 });
//   } catch (error) {
//     console.error(
//       "Error creating project:",
//       error instanceof Error ? error.message : error
//     );
//     return NextResponse.json(
//       { error: "Internal Server Error" },
//       { status: 500 }
//     );
//   }
// }

export async function GET() {
  try {
    const projects = await prisma.project.findMany({
      include: {
        category: true,
        images: true,
      },
    });
    return NextResponse.json(projects);
  } catch (error) {
    console.error("Error fetching projects:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
