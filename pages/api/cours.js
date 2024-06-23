import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    const cours = await prisma.cours.findMany();
    res.status(200).json(cours);
  } catch (error) {
    console.error('Erreur lors de la récupération des cours:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des cours', details: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
