const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');

const prisma = new PrismaClient();

async function main() {
  const hashedPassword = await bcrypt.hash('password_admin', 10);

  const admin = await prisma.utilisateur.create({
    data: {
      prenom: 'Admin',
      nom: 'User',
      email: 'admin@example.com',
      mot_de_passe: hashedPassword,
      role: 'admin',
    },
  });

  console.log('Admin created:', admin);
}

main()
  .catch((e) => { 
    throw e;
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
