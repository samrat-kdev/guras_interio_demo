import { NextResponse, NextRequest } from "next/server";
import prisma from "@/lib/prisma";
import { z } from "zod";

interface RouteParams {
  params?: Promise<{ [key: string]: string | string[] | undefined }>;
  searchParams?: { [key: string]: string | string[] | undefined };
}

export async function GET(
) {
    try {
        const contact = await prisma.project.findMany();
        return NextResponse.json(contact);
    } catch (error) {
        console.error("Error fetching contact:", error);
        return NextResponse.json({ error: "Failed to fetch contact" }, { status: 500 });
    }
}

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

export async function POST(
    request: NextRequest,
) {
    try {
      const body = await request.json();
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