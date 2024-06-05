-- CreateTable
CREATE TABLE "Class" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "categories" TEXT[],
    "officalTags" TEXT[],
    "levels" TEXT[],

    CONSTRAINT "Class_pkey" PRIMARY KEY ("id")
);
