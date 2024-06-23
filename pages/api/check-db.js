// pages/api/data.js
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  try {
    await prisma.$queryRaw`SELECT 1`;  // Vérifie simplement la connexion
    res.status(200).json({ message: 'Database connected successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Failed to connect to the database', error: error.message });
  } finally {
    await prisma.$disconnect();
  }
}
