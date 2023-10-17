/*
  Warnings:

  - You are about to drop the `categories` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `photographers` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `reporters` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `subtitles` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "categories";

-- DropTable
DROP TABLE "photographers";

-- DropTable
DROP TABLE "reporters";

-- DropTable
DROP TABLE "subtitles";

-- CreateTable
CREATE TABLE "costumers" (
    "id" TEXT NOT NULL,
    "externalId" TEXT NOT NULL,
    "email" TEXT NOT NULL,

    CONSTRAINT "costumers_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "costumers_email_key" ON "costumers"("email");
