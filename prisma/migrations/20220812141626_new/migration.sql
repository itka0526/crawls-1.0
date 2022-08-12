-- AlterTable
ALTER TABLE "Category" ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "category_id_seq";

-- CreateTable
CREATE TABLE "GoogleSearchCache" (
    "id" SERIAL NOT NULL,
    "sku" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "results" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GoogleSearchCache_pkey" PRIMARY KEY ("id")
);
