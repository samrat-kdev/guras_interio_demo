import { NextResponse } from "next/server";
import prisma from "@/lib/prisma";


 async function getProject () {
    try{
        const projects = await prisma.project.findMany({
            include: {
                category: true,
                images: true,
            },
        });
        console.log("projects",projects);
        // return NextResponse.json(projects, { status: 200 });
        return projects;
    } catch (error) {
        console.error('Error fetching projects:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

 async function getServices () {
    try
    {
         const services = await prisma.service.findMany({
            include: {
                category: true,   
            },
        });
        // return NextResponse.json(services, { status: 200 });
        const totalServiceCount= services.length
        const servicesInfo = {
            services,
            totalServiceCount
        }
        return servicesInfo
    } catch (error) {
        console.error('Error fetching services:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

 async function getCategories () {
    try
    {
        const categories = await prisma.category.findMany({
            include: {
                projects: false,
                services: false,
            },
        });
        // return NextResponse.json(categories, { status: 200 });
        return categories;
    } catch (error) {
        console.error('Error fetching categories:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

async function getContacts () {
    try
    {
        const contacts = await prisma.contact.findMany();
        // return NextResponse.json(contacts, { status: 200 });
        return contacts;
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

async function getRecentContacts () {
    try
    {
        const recentContacts = await prisma.contact.findMany(
            {
                take: 5,
                orderBy: {
                    createdAt: 'desc',
                },
            }
        );
        // return NextResponse.json(contacts, { status: 200 });
        return recentContacts;
    } catch (error) {
        console.error('Error fetching contacts:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

 async function getAnalytics () {
    try{
        const projects = await getProject();
        const services = await getServices();
        const categories = await getCategories();
        const contacts = await getContacts();
        const recentContacts = await getRecentContacts();
        return NextResponse.json({ projects, services, categories, contacts, recentContacts }, { status: 200 });
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}

export async function GET() {
    try {
        return getAnalytics();
    } catch (error) {
        console.error('Error fetching analytics:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}