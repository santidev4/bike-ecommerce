/*
  Warnings:

  - Added the required column `wheel_size_id` to the `Product` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Product" ADD COLUMN     "wheel_size_id" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Wheel_Size" (
    "id" SERIAL NOT NULL,
    "size" INTEGER NOT NULL,

    CONSTRAINT "Wheel_Size_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Product" ADD CONSTRAINT "Product_wheel_size_id_fkey" FOREIGN KEY ("wheel_size_id") REFERENCES "Wheel_Size"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
