-- AlterTable
ALTER TABLE "Application" ALTER COLUMN "posting" DROP NOT NULL,
ALTER COLUMN "salary" DROP NOT NULL,
ALTER COLUMN "location" DROP NOT NULL,
ALTER COLUMN "notes" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Contact" ALTER COLUMN "email" DROP NOT NULL,
ALTER COLUMN "linkedIn" DROP NOT NULL,
ALTER COLUMN "notes" DROP NOT NULL;
