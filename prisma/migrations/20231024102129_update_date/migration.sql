-- AlterTable
ALTER TABLE "Collection" ALTER COLUMN "created_at" DROP NOT NULL;
ALTER TABLE "Collection" ALTER COLUMN "updated_at" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "created_at" DROP NOT NULL;
ALTER TABLE "Item" ALTER COLUMN "updated_at" DROP NOT NULL;
