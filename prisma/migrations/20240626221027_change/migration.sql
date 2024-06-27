/*
  Warnings:

  - You are about to drop the column `date_heure_debut` on the `cours` table. All the data in the column will be lost.
  - You are about to drop the column `date_mois` on the `cours` table. All the data in the column will be lost.
  - You are about to drop the column `numero_semaine` on the `cours` table. All the data in the column will be lost.
  - You are about to drop the `joursemaine` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `mois` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `date` to the `Cours` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `joursemaine` DROP FOREIGN KEY `JourSemaine_coursId_fkey`;

-- DropForeignKey
ALTER TABLE `mois` DROP FOREIGN KEY `Mois_coursId_fkey`;

-- AlterTable
ALTER TABLE `cours` DROP COLUMN `date_heure_debut`,
    DROP COLUMN `date_mois`,
    DROP COLUMN `numero_semaine`,
    ADD COLUMN `date` DATETIME(3) NOT NULL,
    ADD COLUMN `dates_evenements` JSON NULL,
    ADD COLUMN `heure` VARCHAR(191) NULL;

-- DropTable
DROP TABLE `joursemaine`;

-- DropTable
DROP TABLE `mois`;
