import { PrismaClient, Role, ProjectType, ContactStatus } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

async function hashPassword(password: string) {
  return await bcrypt.hash(password, 10);
}

async function main() {
  // Hash passwords
  const adminHashedPassword = await hashPassword('securepassword');
  const superAdminHashedPassword = await hashPassword('securepassword');

  // Create Users
  const adminUser = await prisma.user.upsert({
    where: { email: 'admin@gurasinterio.com' },
    update: {},
    create: {
      email: 'admin@gurasinterio.com',
      password: adminHashedPassword,
      name: 'Admin User',
      role: Role.ADMIN,
    },
  });
  console.log("Admin user created:", adminUser);

  const superAdminUser = await prisma.user.upsert({
    where: { email: 'superadmin@gurasinterio.com' },
    update: {},
    create: {
      email: 'superadmin@gurasinterio.com',
      password: superAdminHashedPassword,
      name: 'Super Admin User',
      role: Role.SUPER_ADMIN,
    },
  });
  console.log("Super Admin user created:", superAdminUser);

  // Create Categories
  const residentialCategory = await prisma.category.upsert({
    where: { name: 'Residential' },
    update: {},
    create: {
      name: 'Residential',
      description: 'Projects related to home and living spaces.',
    },
  });

  const commercialCategory = await prisma.category.upsert({
    where: { name: 'Commercial' },
    update: {},
    create: {
      name: 'Commercial',
      description: 'Projects for commercial buildings, shops, and malls.',
    },
  });

  const officeCategory = await prisma.category.upsert({
    where: { name: 'Office' },
    update: {},
    create: {
      name: 'Office',
      description: 'Office design and workspace solutions.',
    },
  });

  // Create Category Images
  await prisma.categoryImage.createMany({
    data: [
      {
        url: 'https://example.com/residential.jpg',
        alt: 'Residential Category',
        categoryId: residentialCategory.id,
      },
      {
        url: 'https://example.com/commercial.jpg',
        alt: 'Commercial Category',
        categoryId: commercialCategory.id,
      },
      {
        url: 'https://example.com/office.jpg',
        alt: 'Office Category',
        categoryId: officeCategory.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create Services
  const interiorDesignService = await prisma.service.upsert({
    where: { servicecode: 'INTD001' },
    update: {},
    create: {
      servicecode: 'INTD001',
      title: 'Interior Design',
      description: 'Professional interior design services for residential spaces.',
      features: JSON.stringify(['Custom furniture', 'Space planning', '3D visualization']),
      pricing: JSON.stringify({ basic: 500, premium: 2000 }),
      categoryId: residentialCategory.id,
    },
  });

  const renovationService = await prisma.service.upsert({
    where: { servicecode: 'RENOV001' },
    update: {},
    create: {
      servicecode: 'RENOV001',
      title: 'Renovation Services',
      description: 'Full home and office renovation services with expert consultation.',
      features: JSON.stringify(['Wall painting', 'Flooring solutions', 'Electrical works']),
      pricing: JSON.stringify({ standard: 1000, deluxe: 5000 }),
      categoryId: commercialCategory.id,
    },
  });

  const officeDesignService = await prisma.service.upsert({
    where: { servicecode: 'OFFD001' },
    update: {},
    create: {
      servicecode: 'OFFD001',
      title: 'Office Design',
      description: 'Professional office design services to create productive workspaces.',
      features: JSON.stringify(['Space planning', 'Ergonomic design', 'Custom furniture']),
      pricing: JSON.stringify({ standard: 800, premium: 2500 }),
      categoryId: officeCategory.id,
    },
  });

  // Create Projects
  const modernLivingSpace = await prisma.project.upsert({
    where: { projectcode: 'PRJ001' },
    update: {},
    create: {
      projectcode: 'PRJ001',
      title: 'Modern Living Space',
      description: 'A complete redesign of a modern residential apartment.',
      location: 'Kathmandu, Nepal',
      client: 'Mr. Sharma',
      completionDate: new Date('2024-05-10'),
      serviceId: interiorDesignService.id,
      featured: true,
      isActive: true,
    },
  });

  const corporateOfficeRedesign = await prisma.project.upsert({
    where: { projectcode: 'PRJ002' },
    update: {},
    create: {
      projectcode: 'PRJ002',
      title: 'Corporate Office Redesign',
      description: 'A complete overhaul of a modern office workspace.',
      location: 'Lalitpur, Nepal',
      client: 'Tech Solutions Pvt. Ltd.',
      completionDate: new Date('2023-12-15'),
      serviceId: officeDesignService.id,
      featured: false,
      isActive: true,
    },
  });

  // Create Project Images
  await prisma.projectImage.createMany({
    data: [
      {
        url: 'https://example.com/project1.jpg',
        alt: 'Modern Living Space',
        projectId: modernLivingSpace.id,
        order: 1,
      },
      {
        url: 'https://example.com/project2.jpg',
        alt: 'Corporate Office Redesign',
        projectId: corporateOfficeRedesign.id,
        order: 1,
      },
    ],
    skipDuplicates: true,
  });

  // Create Service Images
  await prisma.serviceImage.createMany({
    data: [
      {
        url: 'https://example.com/service1.jpg',
        alt: 'Interior Design Service',
        serviceId: interiorDesignService.id,
      },
      {
        url: 'https://example.com/service2.jpg',
        alt: 'Renovation Service',
        serviceId: renovationService.id,
      },
      {
        url: 'https://example.com/service3.jpg',
        alt: 'Office Design Service',
        serviceId: officeDesignService.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create Contact Entries
  await prisma.contact.createMany({
    data: [
      {
        name: 'John Doe',
        email: 'johndoe@example.com',
        phone: '9841234567',
        message: 'Looking for home renovation services.',
        preferredService: 'Renovation Services',
        budget: 3000.00,
        projectType: ProjectType.RESIDENTIAL,
        timeline: '3 months',
        status: ContactStatus.NEW,
      },
      {
        name: 'Jane Smith',
        email: 'janesmith@example.com',
        phone: '9807654321',
        message: 'Need interior design for my new office.',
        preferredService: 'Office Design',
        budget: 5000.00,
        projectType: ProjectType.OFFICE,
        timeline: '2 months',
        status: ContactStatus.IN_PROGRESS,
      },
    ],
    skipDuplicates: true,
  });

  // Create Site Settings
  const siteSetting = await prisma.siteSetting.upsert({
    where: { key: 'siteTitle' },
    update: {},
    create: {
      key: 'siteTitle',
      value: { title: 'GurasInterio' },
    },
  });

  console.log('Settings:', siteSetting);

  console.log('Seed data inserted successfully!');
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
