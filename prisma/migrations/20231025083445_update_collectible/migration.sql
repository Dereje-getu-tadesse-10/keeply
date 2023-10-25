/*
  Warnings:

  - You are about to drop the `Item` table. If the table is not empty, all the data it contains will be lost.

*/
-- CreateEnum
CREATE TYPE "CollectibleStatus" AS ENUM ('ACQUIRED', 'PLANNED');

-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_collectionId_fkey";

-- DropTable
DROP TABLE "Item";

-- DropEnum
DROP TYPE "ItemStatus";

-- CreateTable
CREATE TABLE "Collectible" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "description" STRING NOT NULL,
    "image" STRING NOT NULL,
    "collectionId" STRING NOT NULL,
    "status" "CollectibleStatus" NOT NULL,
    "dragPosition" INT4 NOT NULL,
    "created_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Collectible_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Collectible_dragPosition_key" ON "Collectible"("dragPosition");

-- AddForeignKey
ALTER TABLE "Collectible" ADD CONSTRAINT "Collectible_collectionId_fkey" FOREIGN KEY ("collectionId") REFERENCES "Collection"("id") ON DELETE CASCADE ON UPDATE CASCADE;
