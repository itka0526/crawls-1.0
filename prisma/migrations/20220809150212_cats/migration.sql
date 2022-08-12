-- AlterTable
ALTER TABLE "Category" ADD COLUMN     "include_in_menu" INTEGER DEFAULT 1,
ADD COLUMN     "position" INTEGER,
ADD COLUMN     "url_key" TEXT,
ADD COLUMN     "url_path" TEXT;
