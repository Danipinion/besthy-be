-- CreateTable
CREATE TABLE "Profile" (
    "id" TEXT NOT NULL,
    "telp" TEXT,
    "jenisKelamin" "JenisKelamin",
    "birthdate" TEXT,
    "jenisKhodam" TEXT,
    "kepribadian" TEXT DEFAULT '-',
    "userId" TEXT,

    CONSTRAINT "Profile_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Profile_userId_key" ON "Profile"("userId");

-- AddForeignKey
ALTER TABLE "Profile" ADD CONSTRAINT "Profile_userId_fkey" FOREIGN KEY ("userId") REFERENCES "Users"("id") ON DELETE SET NULL ON UPDATE CASCADE;
