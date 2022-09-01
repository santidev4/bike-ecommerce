/*
  Warnings:

  - The primary key for the `Client` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `addressId` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `orderId` on the `Client` table. All the data in the column will be lost.
  - You are about to drop the column `order_product_id` on the `Order` table. All the data in the column will be lost.
  - You are about to alter the column `weight` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `height` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `width` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to alter the column `length` on the `Product` table. The data in that column could be lost. The data in that column will be cast from `DoublePrecision` to `Integer`.
  - You are about to drop the `Order_Products` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[client_id]` on the table `Order` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `client_id` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `province_id` to the `Address` table without a default value. This is not possible if the table is not empty.
  - Added the required column `client_id` to the `Order` table without a default value. This is not possible if the table is not empty.
  - Added the required column `brand_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_addressId_fkey";

-- DropForeignKey
ALTER TABLE "Client" DROP CONSTRAINT "Client_orderId_fkey";

-- DropForeignKey
ALTER TABLE "Order" DROP CONSTRAINT "Order_order_product_id_fkey";

-- DropForeignKey
ALTER TABLE "Order_Products" DROP CONSTRAINT "Order_Products_productId_fkey";

-- DropIndex
DROP INDEX "Client_orderId_key";

-- DropIndex
DROP INDEX "Order_order_product_id_key";

-- AlterTable
ALTER TABLE "Address" ADD COLUMN     "client_id" TEXT NOT NULL,
ADD COLUMN     "province_id" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "Client" DROP CONSTRAINT "Client_pkey",
DROP COLUMN "addressId",
DROP COLUMN "orderId",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Client_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Client_id_seq";

-- AlterTable
ALTER TABLE "Order" DROP COLUMN "order_product_id",
ADD COLUMN     "client_id" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "brand_id" INTEGER NOT NULL,
ALTER COLUMN "weight" SET DATA TYPE INTEGER,
ALTER COLUMN "height" SET DATA TYPE INTEGER,
ALTER COLUMN "width" SET DATA TYPE INTEGER,
ALTER COLUMN "length" SET DATA TYPE INTEGER;

-- DropTable
DROP TABLE "Order_Products";

-- CreateTable
CREATE TABLE "Brand" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,

    CONSTRAINT "Brand_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "order_detail" (
    "id" SERIAL NOT NULL,
    "quantity" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "productId" INTEGER NOT NULL,
    "order_id" INTEGER NOT NULL,

    CONSTRAINT "order_detail_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "order_detail_productId_key" ON "order_detail"("productId");

-- CreateIndex
CREATE UNIQUE INDEX "order_detail_order_id_key" ON "order_detail"("order_id");

-- CreateIndex
CREATE UNIQUE INDEX "Order_client_id_key" ON "Order"("client_id");

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_brand_id_fkey" FOREIGN KEY ("brand_id") REFERENCES "Brand"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Address" ADD CONSTRAINT "Address_province_id_fkey" FOREIGN KEY ("province_id") REFERENCES "Province"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Order" ADD CONSTRAINT "Order_client_id_fkey" FOREIGN KEY ("client_id") REFERENCES "Client"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_productId_fkey" FOREIGN KEY ("productId") REFERENCES "Product"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "order_detail" ADD CONSTRAINT "order_detail_order_id_fkey" FOREIGN KEY ("order_id") REFERENCES "Order"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
