import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Mot de passe", type: "password" }
      },
      async authorize(credentials) {
        const user = await prisma.utilisateur.findUnique({
          where: { email: credentials.email }
        });

        if (user && bcrypt.compareSync(credentials.password, user.mot_de_passe)) {
          return {
            id: user.utilisateur_id,
            nom: user.nom,
            prenom: user.prenom,
            email: user.email,
            role: user.role,
            date_fin_abonnement: user.date_fin_abonnement,
            credits: user.credits
          };
        }

        return null;
      }
    })
  ],
  session: {
    jwt: true
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.nom = user.nom;
        token.prenom = user.prenom;
        token.email = user.email;
        token.role = user.role;
        token.date_fin_abonnement = user.date_fin_abonnement;
        token.credits = user.credits;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.nom = token.nom;
        session.user.prenom = token.prenom;
        session.user.email = token.email;
        session.user.role = token.role;
        session.user.date_fin_abonnement = token.date_fin_abonnement;
        session.user.credits = token.credits;
      }
      return session;
    }
  }
});
