-- CreateTable
CREATE TABLE "RankedClass" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "winningPercentage" DOUBLE PRECISION NOT NULL,
    "winningVotes" INTEGER NOT NULL,
    "losingVotes" INTEGER NOT NULL,

    CONSTRAINT "RankedClass_pkey" PRIMARY KEY ("id")
);
