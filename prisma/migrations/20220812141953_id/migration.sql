/*
  Warnings:

  - The primary key for the `GoogleSearchCache` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `GoogleSearchCache` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "GoogleSearchCache" DROP CONSTRAINT "GoogleSearchCache_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "GoogleSearchCache_pkey" PRIMARY KEY ("sku");
