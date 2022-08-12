/*
  Warnings:

  - You are about to drop the column `include_in_menu` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
CREATE SEQUENCE "category_id_seq";
ALTER TABLE "Category" DROP COLUMN "include_in_menu",
ALTER COLUMN "id" SET DEFAULT nextval('category_id_seq');
ALTER SEQUENCE "category_id_seq" OWNED BY "Category"."id";
