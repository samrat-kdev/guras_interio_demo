import { NextRequest,NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

// Zod schema for creating a contact
// const createContactSchema = z.object({
//   name: z.string().min(5, "Name is required"),
//   email: z.string().email("Invalid email"),
//   phone: z.string().min(10, "Phone is required"),
//   message: z.string().min(10, "Message is required"),
//   preferredService: z.string().optional(),
//   budget: z.coerce.number().optional(),
//   projectType: z.preprocess(
//     (a) => typeof a === "string" ? a.toUpperCase() : a,
//     z.enum(["RESIDENTIAL", "COMMERCIAL", "OFFICE", "OTHERS"]).optional()
//   ),
//   timeline: z.string().optional(),
//   inquiryType: z.preprocess(
//     (a) => typeof a === "string" ? a.toUpperCase() : a,
//     z.enum(["GENERAL", "SUPPORT", "OTHERS"]).optional()
//   ),
// });

// Zod schema for updating a contact
const updateContactSchema = z.object({
//   id: z.string().optional(),
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

export async function GET(req: NextResponse, { params }: { params: { id: string } }) {
    try {
        const { id } = await params;
        const contact = await prisma.contact.findUnique({
            where: { id },
        });
        if (!contact) {
            return NextResponse.json({ error: "Contact not found" }, { status: 404 });
        }
        return NextResponse.json(contact, { status: 200 });
    } catch (error) {
        console.error("Error fetching contact:", error);
        return NextResponse.json({ error: "Internal Sever Error" }, { status: 500 });
    }
}

// export async function PUT(req: NextRequest, { params }: { params: { id: string}}) {
//     try {
//         const { id } = await params;
//         const contact = await prisma.contact.findUnique({
//             where: { id },
//         });
//         if (!contact) {
//             return NextResponse.json({ error: "Contact not found" }, { status: 404 });
//         }
        
//         const { name, email, message } = await req.json();
//         const updatedContact = await prisma.contact.update({
//             where: { id },
//             data: { name, email, message },
//         });
//         return NextResponse.json(updatedContact, { status: 200 });
//     } catch (error) {
//         console.error('Error updating contact:', error);
//         return NextResponse.json({ error: 'Internal Server Error'}, { status: 500 });
//     }
// }
export async function PUT(req: NextRequest, { params }: { params: { id: string } }) {
    try {
      const body = await req.json();
      const { id } = await params;
      // Validate the update payload with Zod
      const parsed = updateContactSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
      }
      const data = parsed.data;
  
      const updatedContact = await prisma.contact.update({
        where: { id: id },
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

// export async function DELETE(req: NextRequest, { params }: { params: { id: string }}) {
//     try {
//         const { id } = await params;
//         await prisma.contact.delete({
//             where: { id },
//         });
//         return NextResponse.json({ message: 'Contact deleted successfully' }, { status: 200 });
//     } catch (error) {
//         console.error('Error deleting contact:', error instanceof Error ? error.message : error);
//         return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
//     }
// }
export async function DELETE(req: NextRequest,  { params }: { params: { id: string } }) {
    try {
      
      const id = await params.id;
  
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