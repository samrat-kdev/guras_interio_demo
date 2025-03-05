import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

interface RouteParams {
  params: Promise<{
    id: string;
  }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

// Zod schema for updating a contact
const updateContactSchema = z.object({
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

export async function GET(
    request: NextRequest,
    context: RouteParams
) {
    try {
        const { id } = await context.params;
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

export async function PUT(
    request: NextRequest,
    context: RouteParams
) {
    try {
      const { id } = await context.params;
      const body = await request.json();
      const parsed = updateContactSchema.safeParse(body);
      if (!parsed.success) {
        return NextResponse.json({ error: parsed.error.errors }, { status: 400 });
      }
      const data = parsed.data;
  
      const updatedContact = await prisma.contact.update({
        where: { id },
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

export async function DELETE(
    request: NextRequest,
    context: RouteParams
) {
    try {
      const { id } = await context.params;
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