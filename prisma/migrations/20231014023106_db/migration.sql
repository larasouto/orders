/*
  Warnings:

  - You are about to drop the column `purchaseId` on the `editions` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "editions" DROP CONSTRAINT "editions_purchaseId_fkey";

-- AlterTable
ALTER TABLE "editions" DROP COLUMN "purchaseId",
ADD COLUMN     "purchase_id" TEXT;

-- AddForeignKey
ALTER TABLE "editions" ADD CONSTRAINT "editions_purchase_id_fkey" FOREIGN KEY ("purchase_id") REFERENCES "purchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;
