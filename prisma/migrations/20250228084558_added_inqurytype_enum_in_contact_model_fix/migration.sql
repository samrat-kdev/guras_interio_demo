/*
  Warnings:

  - You are about to drop the column `inquryType` on the `Contact` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Contact" DROP COLUMN "inquryType",
ADD COLUMN     "inquiryType" "InquiryType" NOT NULL DEFAULT 'GENERAL';
