/*
  Warnings:

  - A unique constraint covering the columns `[backgroundColorId]` on the table `User` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "User" ADD COLUMN     "backgroundColorId" STRING;

-- CreateTable
CREATE TABLE "BackgroundColors" (
    "id" STRING NOT NULL,
    "name" STRING NOT NULL,
    "colorCode" STRING NOT NULL,

    CONSTRAINT "BackgroundColors_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_backgroundColorId_key" ON "User"("backgroundColorId");

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_backgroundColorId_fkey" FOREIGN KEY ("backgroundColorId") REFERENCES "BackgroundColors"("id") ON DELETE SET NULL ON UPDATE CASCADE;
