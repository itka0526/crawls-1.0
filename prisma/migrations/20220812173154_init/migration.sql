-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL,
    "name" TEXT NOT NULL,
    "include_in_menu" INTEGER DEFAULT 1,
    "position" INTEGER,
    "url_path" TEXT,
    "url_key" TEXT,
    "categoryId" INTEGER,
    "products" JSONB NOT NULL DEFAULT '[]',
    "product_count" INTEGER NOT NULL DEFAULT 0,

    CONSTRAINT "Category_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "GoogleSearchCache" (
    "sku" TEXT NOT NULL,
    "model" TEXT NOT NULL,
    "results" JSONB,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "GoogleSearchCache_pkey" PRIMARY KEY ("sku")
);

-- AddForeignKey
ALTER TABLE "Category" ADD CONSTRAINT "Category_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category"("id") ON DELETE SET NULL ON UPDATE CASCADE;
