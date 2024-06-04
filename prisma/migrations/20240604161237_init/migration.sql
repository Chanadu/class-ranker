-- CreateTable
CREATE TABLE "Vote" (
    "id" SERIAL NOT NULL,
    "winningClass" TEXT NOT NULL,
    "losingClass" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Vote_pkey" PRIMARY KEY ("id")
);
