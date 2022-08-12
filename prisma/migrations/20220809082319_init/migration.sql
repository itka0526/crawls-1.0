/*
  Warnings:

  - You are about to drop the column `url_key` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `url_path` on the `Category` table. All the data in the column will be lost.
  - You are about to drop the column `url_suffix` on the `Category` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Category" DROP COLUMN "url_key",
DROP COLUMN "url_path",
DROP COLUMN "url_suffix",
ADD COLUMN     "include_in_menu" INTEGER NOT NULL DEFAULT 0,
ALTER COLUMN "id" DROP DEFAULT;
DROP SEQUENCE "Category_id_seq";
