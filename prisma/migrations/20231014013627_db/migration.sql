-- AlterTable
ALTER TABLE "editions" ADD COLUMN     "purchaseId" TEXT;

-- AddForeignKey
ALTER TABLE "editions" ADD CONSTRAINT "editions_purchaseId_fkey" FOREIGN KEY ("purchaseId") REFERENCES "purchases"("id") ON DELETE SET NULL ON UPDATE CASCADE;
