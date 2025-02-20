/*
  Warnings:

  - You are about to drop the column `imageUrl` on the `Service` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[projectcode]` on the table `Project` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[servicecode]` on the table `Service` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `projectcode` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `servicecode` to the `Service` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "projectcode" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Service" DROP COLUMN "imageUrl",
ADD COLUMN     "servicecode" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "ServiceImage" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "alt" TEXT,
    "serviceId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "ServiceImage_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_projectcode_key" ON "Project"("projectcode");

-- CreateIndex
CREATE UNIQUE INDEX "Service_servicecode_key" ON "Service"("servicecode");

-- AddForeignKey
ALTER TABLE "ServiceImage" ADD CONSTRAINT "ServiceImage_serviceId_fkey" FOREIGN KEY ("serviceId") REFERENCES "Service"("id") ON DELETE CASCADE ON UPDATE CASCADE;
