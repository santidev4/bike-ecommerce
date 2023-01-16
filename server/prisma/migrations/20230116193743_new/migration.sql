-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_sessionId_fkey";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "sessionId" DROP NOT NULL;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_sessionId_fkey" FOREIGN KEY ("sessionId") REFERENCES "Session"("sid") ON DELETE SET NULL ON UPDATE CASCADE;
