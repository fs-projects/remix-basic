-- CreateTable
CREATE TABLE "Comment" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "message" TEXT NOT NULL,
    "movieId" TEXT NOT NULL,
    "createdAt" TEXT NOT NULL
);
