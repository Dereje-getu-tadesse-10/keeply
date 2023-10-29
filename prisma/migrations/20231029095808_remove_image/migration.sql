/*
  Warnings:

  - You are about to drop the column `image` on the `Collectible` table. All the data in the column will be lost.
  - You are about to drop the column `image` on the `Collection` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Collectible" DROP COLUMN "image";

-- AlterTable
ALTER TABLE "Collection" DROP COLUMN "image";
