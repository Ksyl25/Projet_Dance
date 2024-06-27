// pages/api/create-professor.js

import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed', message: 'Only POST requests are allowed' });
  }

  const { nom, prenom, email, motDePasse } = req.body;

  try {
    // Vérifiez si l'utilisateur avec cet email existe déjà
    const existingUser = await prisma.utilisateur.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ error: 'User already exists', message: 'An account with this email already exists' });
    }

    // Hash du mot de passe avant de l'enregistrer
    const hashedPassword = await bcrypt.hash(motDePasse, 10);

    // Création du professeur dans la base de données
    const newProfessor = await prisma.utilisateur.create({
      data: {
        role: 'professeur',
        nom,
        prenom,
        email,
        mot_de_passe: hashedPassword,
      },
    });

    return res.status(201).json(newProfessor);
  } catch (error) {
    console.error('Error creating professor:', error);
    return res.status(500).json({ error: 'Internal Server Error', message: 'Failed to create professor' });
  }
}
