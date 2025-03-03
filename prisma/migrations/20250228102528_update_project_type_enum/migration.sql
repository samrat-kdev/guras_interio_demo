/*
  Warnings:

  - The values [OTHER] on the enum `ProjectType` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ProjectType_new" AS ENUM ('RESIDENTIAL', 'COMMERCIAL', 'OFFICE', 'OTHERS');
ALTER TABLE "Contact" ALTER COLUMN "projectType" TYPE "ProjectType_new" USING ("projectType"::text::"ProjectType_new");
ALTER TYPE "ProjectType" RENAME TO "ProjectType_old";
ALTER TYPE "ProjectType_new" RENAME TO "ProjectType";
DROP TYPE "ProjectType_old";
COMMIT;
