// // import { PrismaClient } from "@prisma/client";

// // const prisma = new PrismaClient();

// // async function main() {
// //   console.log("Seeding database...");

// //   try {
// //     // Users
// //     const [user1, user2] = await Promise.all([
// //       prisma.user.upsert({
// //         where: { email: "admin@example.com" },
// //         update: {},
// //         create: {
// //           email: "admin@example.com",
// //           password: "hashedpassword123", // Ensure you hash passwords in production
// //           name: "Admin User",
// //           role: "ADMIN",
// //         },
// //       }),
// //       prisma.user.upsert({
// //         where: { email: "superadmin@example.com" },
// //         update: {},
// //         create: {
// //           email: "superadmin@example.com",
// //           password: "hashedpassword456",
// //           name: "Super Admin User",
// //           role: "SUPER_ADMIN",
// //         },
// //       }),
// //     ]);
// //     console.log("Users created:", user1, user2);

// //     // Categories
// //     const category = await prisma.category.create({
// //       data: {
// //         name: "Interior Design",
// //         description: "Modern and stylish interior designs.",
// //       },
// //     });

// //     console.log("Category created:", category);

// //     // Services (Depends on Category)
// //     const service = await prisma.service.create({
// //       data: {
// //         title: "Home Renovation",
// //         description: "Complete home renovation services.",
// //         features: JSON.stringify(["3D Design", "Custom Furniture", "Lighting Setup"]),
// //         pricing: JSON.stringify({ basic: 5000, premium: 10000 }),
// //         imageUrl: "https://example.com/service.jpg",
// //         categoryId: category.id,
// //       },
// //     });

// //     console.log("Service created:", service);

// //     // Projects (Depends on Category)
// //     const project = await prisma.project.create({
// //       data: {
// //         title: "Luxury Apartment",
// //         description: "A modern and luxurious apartment design.",
// //         location: "Kathmandu, Nepal",
// //         client: "John Doe",
// //         completionDate: new Date("2023-08-15"),
// //         categoryId: category.id,
// //         featured: true,
// //       },
// //     });

// //     console.log("Project created:", project);

// //     // Project Images (Depends on Project)
// //     await prisma.projectImage.createMany({
// //       data: [
// //         {
// //           url: "https://example.com/image1.jpg",
// //           alt: "Living Room",
// //           projectId: project.id,
// //           order: 1,
// //         },
// //         {
// //           url: "https://example.com/image2.jpg",
// //           alt: "Bedroom",
// //           projectId: project.id,
// //           order: 2,
// //         },
// //       ],
// //     });

// //     console.log("Project images added.");

// //     // Contact (Independent)
// //     await prisma.contact.create({
// //       data: {
// //         name: "Jane Doe",
// //         email: "jane@example.com",
// //         phone: "9876543210",
// //         message: "I am interested in home renovation services.",
// //         preferredService: "Home Renovation",
// //         budget: 7500,
// //         projectType: "RESIDENTIAL",
// //         status: "NEW",
// //       },
// //     });

// //     console.log("Contact created.");

// //     // Additional Category
// //     const category2 = await prisma.category.create({
// //       data: {
// //         name: "Home Makeover",
// //         description: "Modern and stylish Home Makeover",
// //       },
// //     });

// //     console.log("Additional category created:", category2);

// //     console.log("Seeding completed.");
// //   } catch (error) {
// //     console.error("Seeding failed:", error);
// //     process.exit(1);
// //   } finally {
// //     await prisma.$disconnect();
// //   }
// // }

// // main();


// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   console.log("Seeding database...");

//   try {
//     // Users
//     const users = await prisma.user.createMany({
//       data: [
//         {
//           email: "admin@example.com",
//           password: "hashedpassword123",
//           name: "Admin User",
//           role: "ADMIN",
//         },
//         {
//           email: "superadmin@example.com",
//           password: "hashedpassword456",
//           name: "Super Admin User",
//           role: "SUPER_ADMIN",
//         },
//         {
//           email: "designer@example.com",
//           password: "hashedpassword789",
//           name: "Designer User",
//           role: "DESIGNER",
//         },
//       ],
//       skipDuplicates: true,
//     });
//     console.log("Users created.");

//     // Categories
//     const categories = await prisma.category.createMany({
//       data: [
//         { name: "Interior Design", description: "Modern and stylish interior designs." },
//         { name: "Home Makeover", description: "Stylish home makeovers with modern aesthetics." },
//         { name: "Office Design", description: "Professional office space designs." },
//       ],
//       skipDuplicates: true,
//     });
//     console.log("Categories created.");

//     // Fetch categories
//     const interiorDesign = await prisma.category.findFirst({ where: { name: "Interior Design" } });
//     const homeMakeover = await prisma.category.findFirst({ where: { name: "Home Makeover" } });

//     // Services
//     const services = await prisma.service.createMany({
//       data: [
//         {
//           title: "Home Renovation",
//           description: "Complete home renovation services.",
//           features: JSON.stringify(["3D Design", "Custom Furniture", "Lighting Setup"]),
//           pricing: JSON.stringify({ basic: 5000, premium: 10000 }),
//           imageUrl: "https://example.com/service.jpg",
//           categoryId: interiorDesign?.id,
//         },
//         {
//           title: "Office Space Planning",
//           description: "Optimized office space planning services.",
//           features: JSON.stringify(["Workspace Optimization", "Ergonomic Design", "Lighting Setup"]),
//           pricing: JSON.stringify({ basic: 7000, premium: 15000 }),
//           imageUrl: "https://example.com/office.jpg",
//           categoryId: homeMakeover?.id,
//         },
//       ],
//       skipDuplicates: true,
//     });
//     console.log("Services created.");

//     // Projects
//     const projects = await prisma.project.createMany({
//       data: [
//         {
//           title: "Luxury Apartment",
//           description: "A modern and luxurious apartment design.",
//           location: "Kathmandu, Nepal",
//           client: "John Doe",
//           completionDate: new Date("2023-08-15"),
//           categoryId: interiorDesign?.id,
//           featured: true,
//         },
//         {
//           title: "Corporate Office Redesign",
//           description: "A sleek and modern corporate office redesign.",
//           location: "Lalitpur, Nepal",
//           client: "XYZ Corporation",
//           completionDate: new Date("2024-01-10"),
//           categoryId: homeMakeover?.id,
//           featured: false,
//         },
//       ],
//       skipDuplicates: true,
//     });
//     console.log("Projects created.");

//     // Contacts
//     await prisma.contact.createMany({
//       data: [
//         {
//           name: "Jane Doe",
//           email: "jane@example.com",
//           phone: "9876543210",
//           message: "I am interested in home renovation services.",
//           preferredService: "Home Renovation",
//           budget: 7500,
//           projectType: "RESIDENTIAL",
//           status: "NEW",
//         },
//         {
//           name: "Michael Smith",
//           email: "michael@example.com",
//           phone: "9801234567",
//           message: "Looking for office space design consultation.",
//           preferredService: "Office Space Planning",
//           budget: 12000,
//           projectType: "COMMERCIAL",
//           status: "PENDING",
//         },
//       ],
//       skipDuplicates: true,
//     });
//     console.log("Contacts created.");

//     console.log("Seeding completed successfully.");
//   } catch (error) {
//     console.error("Seeding failed:", error);
//     process.exit(1);
//   } finally {
//     await prisma.$disconnect();
//   }
// }

// main();


// import { PrismaClient, Role, ProjectType, ContactStatus } from "@prisma/client";

// const prisma = new PrismaClient();

// async function main() {
//   // Create Users
//   const adminUser = await prisma.user.upsert({
//     where: { email: "admin@gurasinterio.com" },
//     update: {},
//     create: {
//       email: "admin@gurasinterio.com",
//       password: "securepassword",
//       name: "Admin User",
//       role: Role.ADMIN,
//     },
//   });

//   console.log("Admin user created:", adminUser);

//   const superAdminUser = await prisma.user.upsert({
//     where: { email: "superadmin@gurasinterio.com" },
//     update: {},
//     create: {
//       email: "superadmin@gurasinterio.com",
//       password: "securepassword",
//       name: "Super Admin User",
//       role: Role.SUPER_ADMIN,
//     },
//   });

//   console.log("Super Admin user created:", superAdminUser);

//   // Create Categories
//   const residentialCategory = await prisma.category.upsert({
//     where: { name: "Residential" },
//     update: {},
//     create: {
//       name: "Residential",
//       description: "Projects related to home and living spaces."
//     },
//   });

//   const commercialCategory = await prisma.category.upsert({
//     where: { name: "Commercial" },
//     update: {},
//     create: {
//       name: "Commercial",
//       description: "Projects for commercial buildings, shops, and malls."
//     },
//   });

//   const officeCategory = await prisma.category.upsert({
//     where: { name: "Office" },
//     update: {},
//     create: {
//       name: "Office",
//       description: "Office design and workspace solutions."
//     },
//   });

//   // Create Services
//   await prisma.service.createMany({
//     data: [
//       {
//         title: "Interior Design",
//         description: "Professional interior design services for residential and commercial spaces.",
//         features: ["Custom furniture", "Space planning", "3D visualization"],
//         pricing: { basic: 500, premium: 2000 },
//         categoryId: residentialCategory.id,
//       },
//       {
//         title: "Renovation Services",
//         description: "Full home and office renovation services with expert consultation.",
//         features: ["Wall painting", "Flooring solutions", "Electrical works"],
//         pricing: { standard: 1000, deluxe: 5000 },
//         categoryId: commercialCategory.id,
//       },
//     ],
//     skipDuplicates: true,
//   });

//   // Create Projects
//   await prisma.project.createMany({
//     data: [
//       {
//         title: "Modern Living Space",
//         description: "A complete redesign of a modern residential apartment.",
//         location: "Kathmandu, Nepal",
//         client: "Mr. Sharma",
//         completionDate: new Date("2024-05-10"),
//         categoryId: residentialCategory.id,
//         featured: true,
//         isActive: true,
//       },
//       {
//         title: "Corporate Office Redesign",
//         description: "A complete overhaul of a modern office workspace.",
//         location: "Lalitpur, Nepal",
//         client: "Tech Solutions Pvt. Ltd.",
//         completionDate: new Date("2023-12-15"),
//         categoryId: officeCategory.id,
//         featured: false,
//         isActive: true,
//       },
//     ],
//     skipDuplicates: true,
//   });

//   // Create Contact Entries
//   await prisma.contact.createMany({
//     data: [
//       {
//         name: "John Doe",
//         email: "johndoe@example.com",
//         phone: "9841234567",
//         message: "Looking for home renovation services.",
//         preferredService: "Renovation Services",
//         budget: 3000.00,
//         projectType: ProjectType.RESIDENTIAL,
//         timeline: "3 months",
//         status: ContactStatus.NEW,
//       },
//       {
//         name: "Jane Smith",
//         email: "janesmith@example.com",
//         phone: "9807654321",
//         message: "Need interior design for my new office.",
//         preferredService: "Interior Design",
//         budget: 5000.00,
//         projectType: ProjectType.OFFICE,
//         timeline: "2 months",
//         status: ContactStatus.IN_PROGRESS,
//       },
//     ],
//     skipDuplicates: true,
//   });

//   console.log("Seed data inserted successfully!");
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });


// import { PrismaClient, Role, ProjectType, ContactStatus } from "@prisma/client";
// import bcrypt from "bcryptjs";

// const prisma = new PrismaClient();

// async function main() {
//   // Hash passwords
//   const hashedPassword = await bcrypt.hash("securepassword", 10);
//    console.log("Hashed password:", hashedPassword);
//   // Create Users
//   const adminUser = await prisma.user.upsert({
//     where: { email: "admin@gurasinterio.com" },
//     update: {},
//     create: {
//       email: "admin@gurasinterio.com",
//       password: hashedPassword,
//       name: "Admin User",
//       role: Role.ADMIN,
//     },
//   });

//   console.log("Admin user created:", adminUser);

//   const superAdminUser = await prisma.user.upsert({
//     where: { email: "superadmin@gurasinterio.com" },
//     update: {},
//     create: {
//       email: "superadmin@gurasinterio.com",
//       password: hashedPassword,
//       name: "Super Admin User",
//       role: Role.SUPER_ADMIN,
//     },
//   });

//   console.log("Super Admin user created:", superAdminUser);

//   // Create Categories
//   const residentialCategory = await prisma.category.upsert({
//     where: { name: "Residential" },
//     update: {},
//     create: {
//       name: "Residential",
//       description: "Projects related to home and living spaces."
//     },
//   });

//   const commercialCategory = await prisma.category.upsert({
//     where: { name: "Commercial" },
//     update: {},
//     create: {
//       name: "Commercial",
//       description: "Projects for commercial buildings, shops, and malls."
//     },
//   });

//   const officeCategory = await prisma.category.upsert({
//     where: { name: "Office" },
//     update: {},
//     create: {
//       name: "Office",
//       description: "Office design and workspace solutions."
//     },
//   });

//   // Create Services
//   await prisma.service.createMany({
//     data: [
//       {
//         title: "Interior Design",
//         description: "Professional interior design services for residential and commercial spaces.",
//         features: ["Custom furniture", "Space planning", "3D visualization"],
//         pricing: { basic: 500, premium: 2000 },
//         categoryId: residentialCategory.id,
//       },
//       {
//         title: "Renovation Services",
//         description: "Full home and office renovation services with expert consultation.",
//         features: ["Wall painting", "Flooring solutions", "Electrical works"],
//         pricing: { standard: 1000, deluxe: 5000 },
//         categoryId: commercialCategory.id,
//       },
//     ],
//     skipDuplicates: true,
//   });

//   // Create Projects
//   await prisma.project.createMany({
//     data: [
//       {
//         title: "Modern Living Space",
//         description: "A complete redesign of a modern residential apartment.",
//         location: "Kathmandu, Nepal",
//         client: "Mr. Sharma",
//         completionDate: new Date("2024-05-10"),
//         categoryId: residentialCategory.id,
//         featured: true,
//         isActive: true,
//       },
//       {
//         title: "Corporate Office Redesign",
//         description: "A complete overhaul of a modern office workspace.",
//         location: "Lalitpur, Nepal",
//         client: "Tech Solutions Pvt. Ltd.",
//         completionDate: new Date("2023-12-15"),
//         categoryId: officeCategory.id,
//         featured: false,
//         isActive: true,
//       },
//     ],
//     skipDuplicates: true,
//   });

//   // Create Contact Entries
//   await prisma.contact.createMany({
//     data: [
//       {
//         name: "John Doe",
//         email: "johndoe@example.com",
//         phone: "9841234567",
//         message: "Looking for home renovation services.",
//         preferredService: "Renovation Services",
//         budget: 3000.00,
//         projectType: ProjectType.RESIDENTIAL,
//         timeline: "3 months",
//         status: ContactStatus.NEW,
//       },
//       {
//         name: "Jane Smith",
//         email: "janesmith@example.com",
//         phone: "9807654321",
//         message: "Need interior design for my new office.",
//         preferredService: "Interior Design",
//         budget: 5000.00,
//         projectType: ProjectType.OFFICE,
//         timeline: "2 months",
//         status: ContactStatus.IN_PROGRESS,
//       },
//     ],
//     skipDuplicates: true,
//   });

//   console.log("Seed data inserted successfully!");
// }

// main()
//   .catch((e) => {
//     console.error(e);
//     process.exit(1);
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });


import { PrismaClient, Role, ProjectType, ContactStatus } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function hashPassword(password:string) {
  return await bcrypt.hash(password, 10);
}

async function main() {
  // Hash passwords
  const adminHashedPassword = await hashPassword("securepassword");
  const superAdminHashedPassword = await hashPassword("securepassword");

  console.log("Hashed admin password:", adminHashedPassword);
  console.log("Hashed super admin password:", superAdminHashedPassword);

  // Create Users
  const adminUser = await prisma.user.upsert({
    where: { email: "admin@gurasinterio.com" },
    update: {},
    create: {
      email: "admin@gurasinterio.com",
      password: adminHashedPassword,
      name: "Admin User",
      role: Role.ADMIN,
    },
  });

  console.log("Admin user created:", adminUser);

  const superAdminUser = await prisma.user.upsert({
    where: { email: "superadmin@gurasinterio.com" },
    update: {},
    create: {
      email: "superadmin@gurasinterio.com",
      password: superAdminHashedPassword,
      name: "Super Admin User",
      role: Role.SUPER_ADMIN,
    },
  });

  console.log("Super Admin user created:", superAdminUser);

  // Create Categories
  const residentialCategory = await prisma.category.upsert({
    where: { name: "Residential" },
    update: {},
    create: {
      name: "Residential",
      description: "Projects related to home and living spaces."
    },
  });

  const commercialCategory = await prisma.category.upsert({
    where: { name: "Commercial" },
    update: {},
    create: {
      name: "Commercial",
      description: "Projects for commercial buildings, shops, and malls."
    },
  });

  const officeCategory = await prisma.category.upsert({
    where: { name: "Office" },
    update: {},
    create: {
      name: "Office",
      description: "Office design and workspace solutions."
    },
  });

  // Create Services
  await prisma.service.createMany({
    data: [
      {
        title: "Interior Design",
        description: "Professional interior design services for residential and commercial spaces.",
        features: ["Custom furniture", "Space planning", "3D visualization"],
        pricing: { basic: 500, premium: 2000 },
        categoryId: residentialCategory.id,
      },
      {
        title: "Renovation Services",
        description: "Full home and office renovation services with expert consultation.",
        features: ["Wall painting", "Flooring solutions", "Electrical works"],
        pricing: { standard: 1000, deluxe: 5000 },
        categoryId: commercialCategory.id,
      },
    ],
    skipDuplicates: true,
  });

  // Create Projects
  await prisma.project.createMany({
    data: [
      {
        title: "Modern Living Space",
        description: "A complete redesign of a modern residential apartment.",
        location: "Kathmandu, Nepal",
        client: "Mr. Sharma",
        completionDate: new Date("2024-05-10"),
        categoryId: residentialCategory.id,
        featured: true,
        isActive: true,
      },
      {
        title: "Corporate Office Redesign",
        description: "A complete overhaul of a modern office workspace.",
        location: "Lalitpur, Nepal",
        client: "Tech Solutions Pvt. Ltd.",
        completionDate: new Date("2023-12-15"),
        categoryId: officeCategory.id,
        featured: false,
        isActive: true,
      },
    ],
    skipDuplicates: true,
  });

  // Create Contact Entries
  await prisma.contact.createMany({
    data: [
      {
        name: "John Doe",
        email: "johndoe@example.com",
        phone: "9841234567",
        message: "Looking for home renovation services.",
        preferredService: "Renovation Services",
        budget: 3000.00,
        projectType: ProjectType.RESIDENTIAL,
        timeline: "3 months",
        status: ContactStatus.NEW,
      },
      {
        name: "Jane Smith",
        email: "janesmith@example.com",
        phone: "9807654321",
        message: "Need interior design for my new office.",
        preferredService: "Interior Design",
        budget: 5000.00,
        projectType: ProjectType.OFFICE,
        timeline: "2 months",
        status: ContactStatus.IN_PROGRESS,
      },
    ],
    skipDuplicates: true,
  });

  console.log("Seed data inserted successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
