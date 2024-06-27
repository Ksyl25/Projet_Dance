-- AlterTable
ALTER TABLE `cours` ADD COLUMN `date_mois` INTEGER NULL,
    ADD COLUMN `format_paiement` VARCHAR(191) NULL,
    ADD COLUMN `numero_semaine` INTEGER NULL;

-- CreateTable
CREATE TABLE `Mois` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `mois` VARCHAR(191) NOT NULL,
    `coursId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `JourSemaine` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `jour` VARCHAR(191) NOT NULL,
    `coursId` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Mois` ADD CONSTRAINT `Mois_coursId_fkey` FOREIGN KEY (`coursId`) REFERENCES `Cours`(`cours_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `JourSemaine` ADD CONSTRAINT `JourSemaine_coursId_fkey` FOREIGN KEY (`coursId`) REFERENCES `Cours`(`cours_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
