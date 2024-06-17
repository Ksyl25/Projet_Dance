-- CreateTable
CREATE TABLE `Utilisateur` (
    `utilisateur_id` INTEGER NOT NULL AUTO_INCREMENT,
    `role` ENUM('eleve', 'professeur', 'admin') NOT NULL,
    `prenom` VARCHAR(191) NOT NULL,
    `nom` VARCHAR(191) NOT NULL,
    `email` VARCHAR(191) NOT NULL,
    `mot_de_passe` VARCHAR(191) NOT NULL,
    `photo` VARCHAR(191) NULL,
    `description` VARCHAR(191) NULL,
    `credits` INTEGER NOT NULL DEFAULT 0,
    `date_debut_abonnement` DATETIME(3) NULL,
    `date_fin_abonnement` DATETIME(3) NULL,
    `cree_a` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mis_a_jour_a` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Utilisateur_email_key`(`email`),
    PRIMARY KEY (`utilisateur_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Cours` (
    `cours_id` INTEGER NOT NULL AUTO_INCREMENT,
    `titre` VARCHAR(191) NOT NULL,
    `type` VARCHAR(191) NULL,
    `date_heure_debut` DATETIME(3) NOT NULL,
    `duree` INTEGER NOT NULL,
    `recurrence` VARCHAR(191) NULL,
    `image` VARCHAR(191) NULL,
    `cree_a` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mis_a_jour_a` DATETIME(3) NOT NULL,

    PRIMARY KEY (`cours_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `CoursProfesseur` (
    `cours_id` INTEGER NOT NULL,
    `professeur_id` INTEGER NOT NULL,

    PRIMARY KEY (`cours_id`, `professeur_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Participation` (
    `participation_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cours_id` INTEGER NOT NULL,
    `utilisateur_id` INTEGER NOT NULL,
    `methode_paiement` ENUM('especes', 'carte_de_credit', 'virement_bancaire') NOT NULL,
    `statut_paiement` ENUM('en_attente', 'complete', 'echoue') NOT NULL,
    `cree_a` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`participation_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Abonnement` (
    `abonnement_id` INTEGER NOT NULL AUTO_INCREMENT,
    `utilisateur_id` INTEGER NOT NULL,
    `type` ENUM('illimite', 'carte') NOT NULL,
    `date_debut` DATETIME(3) NOT NULL,
    `date_fin` DATETIME(3) NOT NULL,
    `cours_restants` INTEGER NULL,
    `cree_a` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `mis_a_jour_a` DATETIME(3) NOT NULL,

    PRIMARY KEY (`abonnement_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Paiement` (
    `paiement_id` INTEGER NOT NULL AUTO_INCREMENT,
    `utilisateur_id` INTEGER NOT NULL,
    `cours_id` INTEGER NOT NULL,
    `montant` DOUBLE NOT NULL,
    `methode_paiement` ENUM('especes', 'carte_de_credit', 'virement_bancaire') NOT NULL,
    `date_paiement` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`paiement_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Lien` (
    `lien_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cours_id` INTEGER NOT NULL,
    `url` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,

    PRIMARY KEY (`lien_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TagCours` (
    `tag_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`tag_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MappingTagCours` (
    `mapping_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cours_id` INTEGER NOT NULL,
    `tag_id` INTEGER NOT NULL,

    PRIMARY KEY (`mapping_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MediaCours` (
    `media_id` INTEGER NOT NULL AUTO_INCREMENT,
    `cours_id` INTEGER NOT NULL,
    `type_media` ENUM('photo', 'video') NOT NULL,
    `url` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`media_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TypeCarte` (
    `type_carte_id` INTEGER NOT NULL AUTO_INCREMENT,
    `nom` VARCHAR(191) NOT NULL,
    `description` VARCHAR(191) NULL,
    `nb_places` INTEGER NOT NULL,

    PRIMARY KEY (`type_carte_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Caisse` (
    `caisse_id` INTEGER NOT NULL AUTO_INCREMENT,
    `montant` DOUBLE NOT NULL,
    `description` VARCHAR(191) NOT NULL,
    `date_transaction` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`caisse_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `CoursProfesseur` ADD CONSTRAINT `CoursProfesseur_cours_id_fkey` FOREIGN KEY (`cours_id`) REFERENCES `Cours`(`cours_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `CoursProfesseur` ADD CONSTRAINT `CoursProfesseur_professeur_id_fkey` FOREIGN KEY (`professeur_id`) REFERENCES `Utilisateur`(`utilisateur_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participation` ADD CONSTRAINT `Participation_cours_id_fkey` FOREIGN KEY (`cours_id`) REFERENCES `Cours`(`cours_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Participation` ADD CONSTRAINT `Participation_utilisateur_id_fkey` FOREIGN KEY (`utilisateur_id`) REFERENCES `Utilisateur`(`utilisateur_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Abonnement` ADD CONSTRAINT `Abonnement_utilisateur_id_fkey` FOREIGN KEY (`utilisateur_id`) REFERENCES `Utilisateur`(`utilisateur_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_utilisateur_id_fkey` FOREIGN KEY (`utilisateur_id`) REFERENCES `Utilisateur`(`utilisateur_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Paiement` ADD CONSTRAINT `Paiement_cours_id_fkey` FOREIGN KEY (`cours_id`) REFERENCES `Cours`(`cours_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Lien` ADD CONSTRAINT `Lien_cours_id_fkey` FOREIGN KEY (`cours_id`) REFERENCES `Cours`(`cours_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MappingTagCours` ADD CONSTRAINT `MappingTagCours_cours_id_fkey` FOREIGN KEY (`cours_id`) REFERENCES `Cours`(`cours_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MappingTagCours` ADD CONSTRAINT `MappingTagCours_tag_id_fkey` FOREIGN KEY (`tag_id`) REFERENCES `TagCours`(`tag_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MediaCours` ADD CONSTRAINT `MediaCours_cours_id_fkey` FOREIGN KEY (`cours_id`) REFERENCES `Cours`(`cours_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
