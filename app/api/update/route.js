// app/api/update/route.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req) {
    const body = await req.json();
    console.log('Données reçues :', body);

    try {
        // Vérifiez que toutes les données requises sont présentes
        if (!body.email || !body.nom || !body.prenom) {
            return new Response(JSON.stringify({ message: 'Données incomplètes' }), {
                status: 400,
                headers: {
                    'Content-Type': 'application/json',
                },
            });
        }

        // Mise à jour des données de l'utilisateur dans la base de données
        const updatedUser = await prisma.utilisateur.update({
            where: { utilisateur_id: body.utilisateur_id },
            data: {
                nom: body.nom,
                prenom: body.prenom,
                email: body.email,

            },
        });

        console.log('Utilisateur mis à jour :', updatedUser);

        return new Response(JSON.stringify({ message: 'Profil mis à jour avec succès' }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Erreur lors de la mise à jour du profil :', error);
        return new Response(JSON.stringify({ message: 'Erreur lors de la mise à jour du profil' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
