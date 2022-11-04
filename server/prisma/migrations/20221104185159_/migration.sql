/*
  Warnings:

  - A unique constraint covering the columns `[userID]` on the table `Session` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userID` to the `Session` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Session" ADD COLUMN     "userID" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Session_userID_key" ON "Session"("userID");

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userID_fkey" FOREIGN KEY ("userID") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
