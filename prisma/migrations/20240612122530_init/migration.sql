/*
  Warnings:

  - Added the required column `prix` to the `Cours` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `cours` ADD COLUMN `prix` DOUBLE NOT NULL;
