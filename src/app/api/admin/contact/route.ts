// // src/app/api/admin/contact/route.ts
// import { NextRequest, NextResponse } from "next/server";
// import prisma from "@/lib/prisma";
// import {Contact} from "@/types/index";

// export async function GET() {
//     try {
//         const contacts = await prisma.contact.findMany();
//         return NextResponse.json(contacts, { status: 200 });
//     } catch (error) {
//         console.log(error)
//         return NextResponse.json ({ error: 'Failed to fetch contacts'}, {status: 500});
//     }
// }


// export async function POST(req: NextRequest){
//     try {
//         const body = await req.json();
//         console.log(req);
//         console.log(body);
//         const { name, email, phone, message, preferredService, budget, projectType, timeline, inquiryType} = body;

//         if(!name || !email || !phone || !message){
//             return NextResponse.json({ error: 'Please fill in all fields'}, {status: 400});
//         }

//         const newContact = await prisma.contact.create({
//             data: {
//               name,
//               email,
//               phone,
//               message,
//               preferredService,
//               budget,
//               projectType: projectType.toUpperCase(),
//               timeline,
//               inquiryType: inquiryType.toUpperCase(),
//             },
//           });
//           return NextResponse.json(
//             { message: 'Your inquiry has been submitted successfully!', contact: newContact },
//             { status: 201 }
//           );
//     } catch (error) {
//         console.error('Error contact form:', error instanceof Error ? error.message : error);
//         return NextResponse.json(
//             {error: 'Failed to submit the contact form.'},
//             {status: 500}
//         );
//     }
// }

// export async function PUT(req: NextRequest){
//   try{
//     const body: Contact = await req.json();
//     const { id, name, email, phone, message, preferredService, budget, projectType, timeline, status, inquiryType } = body;

//     if(!id){
//       return NextResponse.json({ error: 'Please provide the contact id'}, {status: 400});
//     }
//     const updatedContact = await prisma.contact.update({
//       where: { id },
//       data: {
//         name,
//               email,
//               phone,
//               message,
//               preferredService,
//               budget,
//               projectType: projectType.toUpperCase(),
//               timeline,
//               inquiryType: inquiryType.toUpperCase(),
//         status,
//         },
//     });
//     return NextResponse.json({ message: 'Contact updated successfully!', contact: updatedContact }, { status: 200});
//   } catch (error){
//     console.error('Error updating contact:', error);
//     return NextResponse.json({ error: 'Failed to update the contact.' }, { status: 500});
//   }
// }

// export async function DELETE(req: NextRequest) {
//   try {
//     const { searchParams } = new URL(req.url);
//     const id = searchParams.get('id');

//     if (!id) {
//       return NextResponse.json({ error: 'Contact ID is required' }, { status: 400 });
//     }

//     await prisma.contact.delete({
//       where: { id },
//     });

//     return NextResponse.json({ message: 'Contact deleted successfully' }, { status: 200 });
//   } catch (error) {
//     console.error('Error deleting contact:', error);
//     return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 });
//   }
// }


// src/app/api/admin/contact/route.ts
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

// Zod schema for creating a contact
const createContactSchema = z.object({
  name: z.string().min(5, "Name is required"),
  email: z.string().email("Invalid email"),
  phone: z.string().min(10, "Phone is required"),
  message: z.string().min(10, "Message is required"),
  preferredService: z.string().optional(),
  budget: z.coerce.number().optional(),
  projectType: z.preprocess(
    (a) => typeof a === "string" ? a.toUpperCase() : a,
    z.enum(["RESIDENTIAL", "COMMERCIAL", "OFFICE", "OTHERS"]).optional()
  ),
  timeline: z.string().optional(),
  inquiryType: z.preprocess(
    (a) => typeof a === "string" ? a.toUpperCase() : a,
    z.enum(["GENERAL", "SUPPORT", "OTHERS"]).optional()
  ),
});

// Zod schema for updating a contact
const updateContactSchema = z.object({
  id: z.string().min(1, "Contact id is required"),
  name: z.string().min(5, "Name is required"),
  email: z.string().email("Invalid email").optional(),
  phone: z.string().min(10, "Phone is required"),
  message: z.string().min(10, "Message is required"),
  preferredService: z.string().optional(),
  budget: z.coerce.number().optional(),
  projectType: z.preprocess(
    (a) => typeof a === "string" ? a.toUpperCase() : a,
    z.enum(["RESIDENTIAL", "COMMERCIAL", "OFFICE", "OTHERS"]).optional()
  ),
  timeline: z.string().optional(),
  inquiryType: z.preprocess(
    (a) => typeof a === "string" ? a.toUpperCase() : a,
    z.enum(["GENERAL", "SUPPORT", "OTHERS"]).optional()
  ),
  status: z.enum(["NEW", "IN_PROGRESS", "CONTACTED", "CONVERTED", "CLOSED"]).optional(),
});

export async function GET() {
  try {
    const contacts = await prisma.contact.findMany();
    return NextResponse.json(contacts, { status: 200 });
  } catch (error) {
    console.error("Error fetching contacts:", error);
    return NextResponse.json(
      { error: "Failed to fetch contacts" },
      { status: 500 }
    );
  }
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    // Validate the incoming payload using Zod
    const parsed = createContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }
    const data = parsed.data;

    const newContact = await prisma.contact.create({
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        preferredService: data.preferredService,
        budget: data.budget,
        projectType: data.projectType,
        timeline: data.timeline,
        inquiryType: data.inquiryType,
      },
    });

    return NextResponse.json(
      {
        message: "Your inquiry has been submitted successfully!",
        contact: newContact,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return NextResponse.json(
      { error: "Failed to submit the contact form." },
      { status: 500 }
    );
  }
}

export async function PUT(req: NextRequest) {
  try {
    const body = await req.json();
    // Validate the update payload with Zod
    const parsed = updateContactSchema.safeParse(body);
    if (!parsed.success) {
      return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
    }
    const data = parsed.data;

    const updatedContact = await prisma.contact.update({
      where: { id: data.id },
      data: {
        name: data.name,
        email: data.email,
        phone: data.phone,
        message: data.message,
        preferredService: data.preferredService,
        budget: data.budget,
        projectType: data.projectType,
        timeline: data.timeline,
        inquiryType: data.inquiryType,
        status: data.status,
      },
    });
    return NextResponse.json(
      { message: "Contact updated successfully!", contact: updatedContact },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error updating contact:", error);
    return NextResponse.json(
      { error: "Failed to update the contact." },
      { status: 500 }
    );
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    if (!id) {
      return NextResponse.json(
        { error: "Contact ID is required" },
        { status: 400 }
      );
    }

    await prisma.contact.delete({
      where: { id },
    });

    return NextResponse.json(
      { message: "Contact deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error deleting contact:", error);
    return NextResponse.json(
      { error: "Failed to delete contact" },
      { status: 500 }
    );
  }
}
