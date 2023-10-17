-- CreateTable
CREATE TABLE "purchases" (
    "id" TEXT NOT NULL,
    "payment_method" INTEGER NOT NULL,
    "totalValue" DOUBLE PRECISION NOT NULL,
    "address_id" TEXT NOT NULL,
    "purchase_status" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "purchases_pkey" PRIMARY KEY ("id")
);
