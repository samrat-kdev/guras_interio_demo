-- CreateEnum
CREATE TYPE "InquiryType" AS ENUM ('GENERAL', 'SUPPORT', 'OTHERS');

-- AlterTable
ALTER TABLE "Contact" ADD COLUMN     "inquryType" "InquiryType" NOT NULL DEFAULT 'GENERAL';
