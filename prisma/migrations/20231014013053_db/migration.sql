/*
  Warnings:

  - You are about to drop the column `totalValue` on the `purchases` table. All the data in the column will be lost.
  - Added the required column `total_value` to the `purchases` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "purchases" DROP COLUMN "totalValue",
ADD COLUMN     "total_value" DOUBLE PRECISION NOT NULL;
