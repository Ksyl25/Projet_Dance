// app/api/cours/route.js

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function GET() {
    try {
        const cours = await prisma.cours.findMany();
        return new Response(JSON.stringify(cours), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    } catch (error) {
        console.error('Erreur lors de la récupération des cours:', error);
        return new Response(JSON.stringify({ message: 'Erreur lors de la récupération des cours' }), {
            status: 500,
            headers: {
                'Content-Type': 'application/json',
            },
        });
    }
}
