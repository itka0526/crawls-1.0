/*
  Warnings:

  - You are about to drop the column `name` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `parentId` on the `Category` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Category" DROP CONSTRAINT "Category_parentId_fkey";

-- AlterTable
CREATE SEQUENCE "category_id_seq";
ALTER TABLE "Category" DROP COLUMN "name",
DROP COLUMN "parentId",
ADD COLUMN     "categoryId" INTEGER,
ALTER COLUMN "id" SET DEFAULT nextval('category_id_seq');
ALTER SEQUENCE "category_id_seq" OWNED BY "Category"."id";

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
