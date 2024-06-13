import NextAuth, { NextAuthOptions } from "next-auth"
import { PrismaAdapter } from "@next-auth/prisma-adapter"
import prisma from "@/src/lib/prisma"
import GithubProvider from "next-auth/providers/github"

const githubId = process.env.GITHUB_ID;
const githubSecret = process.env.GITHUB_SECRET;

if (!githubId || !githubSecret) {
    throw new Error('Missig GITHUB_ID or GITHUB_SECRET env')
}

export const authConfig = {
    providers: [
        GithubProvider({
            clientId: githubId,
            clientSecret: githubSecret,

        })
    ],
    adapter: PrismaAdapter(prisma),
} satisfies NextAuthOptions;

export default NextAuth(authConfig)