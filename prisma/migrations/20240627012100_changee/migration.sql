/*
  Warnings:

  - You are about to drop the column `date` on the `cours` table. All the data in the column will be lost.
  - You are about to drop the column `dates_evenements` on the `cours` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE `cours` DROP COLUMN `date`,
    DROP COLUMN `dates_evenements`,
    ADD COLUMN `dates` JSON NULL;
