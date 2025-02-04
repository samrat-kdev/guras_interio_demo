import { Prisma } from "@prisma/client";

// User model
type Role = "ADMIN" | "SUPER_ADMIN";
export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

// Category model
export interface Category {
  id: string;
  name: string;
  description?: string | null;
  projects?: Project[];
  services?: Service[];
  createdAt: Date;
  updatedAt: Date;
}

// Service model
export interface Service {
  id: string;
  title: string;
  description: string;
  features?: Prisma.JsonValue;
  pricing?: Prisma.JsonValue;
  imageUrl?: string | null;
  categoryId: string;
  category?: Category;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// Project model
export interface Project {
  id: string;
  title: string;
  description: string;
  location?: string | null;
  client?: string | null;
  completionDate?: Date | null;
  categoryId: string;
  category?: Category;
  images?: ProjectImage[];
  featured: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

// ProjectImage model
export interface ProjectImage {
  id: string;
  url: string;
  alt?: string | null;
  projectId: string;
  project?: Project;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

// Contact model
type ProjectType = "RESIDENTIAL" | "COMMERCIAL" | "OFFICE" | "OTHER";
type ContactStatus = "NEW" | "IN_PROGRESS" | "CONTACTED" | "CONVERTED" | "CLOSED";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredService?: string | null;
  budget?: Prisma.Decimal | null;
  projectType?: ProjectType | null;
  timeline?: string | null;
  status: ContactStatus;
  createdAt: Date;
  updatedAt: Date;
}

// SiteSetting model
export interface SiteSetting {
  id: string;
  key: string;
  value: Prisma.JsonValue;
  createdAt: Date;
  updatedAt: Date;
}
