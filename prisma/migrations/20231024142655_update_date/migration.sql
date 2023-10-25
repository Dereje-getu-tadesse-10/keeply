/*
  Warnings:

  - Made the column `description` on table `Collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `created_at` on table `Collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `updated_at` on table `Collection` required. This step will fail if there are existing NULL values in that column.
  - Made the column `description` on table `Item` required. This step will fail if there are existing NULL values in that column.
  - Made the column `image` on table `Item` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Collection" ALTER COLUMN "description" SET NOT NULL;
ALTER TABLE "Collection" ALTER COLUMN "created_at" SET NOT NULL;
ALTER TABLE "Collection" ALTER COLUMN "updated_at" SET NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "description" SET NOT NULL;
ALTER TABLE "Item" ALTER COLUMN "image" SET NOT NULL;
