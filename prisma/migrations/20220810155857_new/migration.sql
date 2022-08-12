-- CreateTable
CREATE TABLE "Product" (
    "id" INTEGER NOT NULL,
    "categoryId" INTEGER NOT NULL,
    "sku" TEXT NOT NULL,
    "media_gallery" JSONB NOT NULL,
    "url_path" TEXT NOT NULL,
    "url_suffix" TEXT NOT NULL,
    "url_key" TEXT NOT NULL,

    CONSTRAINT "Product_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
