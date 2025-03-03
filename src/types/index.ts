export enum Role {
  ADMIN = "ADMIN",
  SUPER_ADMIN = "SUPER_ADMIN",
}

export interface User {
  id: string;
  email: string;
  password: string;
  name: string;
  role: Role;
  createdAt: Date;
  updatedAt: Date;
}

export interface Category {
  id: string;
  name: string;
  description?: string;
  images: CategoryImage[];
  services: Service[];
  createdAt: Date;
  updatedAt: Date;
}

export interface CategoryImage {
  id: string;
  url: string;
  alt?: string;
  categoryId: string;
  category: Category;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  servicecode: string;
  title: string;
  description: string;
  features?: any; // JSON type
  pricing?: any; // JSON type
  serviceImages: ServiceImage[];
  categoryId: string;
  category: Category;
  projects: Project[];
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ServiceImage {
  id: string;
  url: string;
  alt?: string;
  serviceId: string;
  service: Service;
  createdAt: Date;
  updatedAt: Date;
}

export interface Project {
  id: string;
  projectcode: string;
  title: string;
  description: string;
  location?: string;
  client?: string;
  completionDate?: Date;
  serviceId: string;
  service: Service;
  images: ProjectImage[];
  featured: boolean;
  isActive: boolean;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProjectImage {
  id: string;
  url: string;
  alt?: string;
  projectId: string;
  project: Project;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}

export enum InquiryType {
  GENERAL = "GENERAL",
  SUPPORT = "SUPPORT",
  OTHERS = "OTHERS",
}

export enum ProjectType {
  RESIDENTIAL = "RESIDENTIAL",
  COMMERCIAL = "COMMERCIAL",
  OFFICE = "OFFICE",
  OTHERS = "OTHERS",
}

export enum ContactStatus {
  NEW = "NEW",
  IN_PROGRESS = "IN_PROGRESS",
  CONTACTED = "CONTACTED",
  CONVERTED = "CONVERTED",
  CLOSED = "CLOSED",
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
  message: string;
  preferredService?: string;
  inquiryType: InquiryType;
  budget?: number;
  projectType?: ProjectType;
  timeline?: string;
  status: ContactStatus;
  createdAt: Date;
  updatedAt: Date;
}

export interface SiteSetting {
  id: string;
  key: string;
  value: any; // JSON type
  createdAt: Date;
  updatedAt: Date;
}
