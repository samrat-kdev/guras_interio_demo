import { NextRequest, NextResponse } from "next/server";
import prisma from "@/lib/prisma";
import {Contact} from "@/types/index";

export async function GET() {
    try {
        const contacts = await prisma.contact.findMany();
        return NextResponse.json(contacts);
    } catch (error) {
      console.log(error)
        return NextResponse.json ({ error: 'Failed to fetch contacts'}, {status: 500});
    }
}


export async function POST(req: NextRequest){
    try {
        const body: Contact = await req.json();
        const { name, email, phone, message, preferredService, budget, projectType, timeline, status } = body;

        if(!name || !email || !phone || !message){
            return NextResponse.json({ error: 'Please fill in all fields'}, {status: 400});
        }

        const newContact = await prisma.contact.create({
            data: {
              name,
              email,
              phone,
              message,
              preferredService,
              budget,
              projectType,
              timeline,
              status,
            },
          });
          return NextResponse.json(
            { message: 'Your inquiry has been submitted successfully!', contact: newContact },
            { status: 201 }
          );
    } catch (error) {
        console.error('Error contact form:', error);
        return NextResponse.json(
            {error: 'Failed to submit the contact form.'},
            {status: 500}
        );
    }
}

export async function PUT(req: NextRequest){
  try{
    const body: Contact = await req.json();
    const { id, name, email, phone, message, preferredService, budget, projectType, timeline, status } = body;

    if(!id){
      return NextResponse.json({ error: 'Please provide the contact id'}, {status: 400});
    }
    const updatedContact = await prisma.contact.update({
      where: { id },
      data: {
        name,
        email,
        phone,
        message,
        preferredService,
        budget,
        projectType,
        timeline,
        status,
        },
    });
    return NextResponse.json({ message: 'Contact updated successfully!', contact: updatedContact }, { status: 200});
  } catch (error){
    console.error('Error updating contact:', error);
    return NextResponse.json({ error: 'Failed to update the contact.' }, { status: 500});
  }
}

export async function DELETE(req: NextRequest) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ error: 'Contact ID is required' }, { status: 400 });
    }

    await prisma.contact.delete({
      where: { id },
    });

    return NextResponse.json({ message: 'Contact deleted successfully' }, { status: 200 });
  } catch (error) {
    console.error('Error deleting contact:', error);
    return NextResponse.json({ error: 'Failed to delete contact' }, { status: 500 });
  }
}