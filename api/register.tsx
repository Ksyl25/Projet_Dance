import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { error } from 'console'

const prisma = new PrismaClient()

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body
        const salt = bcrypt.genSaltSync(10)
        const hashedPassword = bcrypt.hashSync(password, salt);
        try {
            const newUser = await prisma.user.create({
                data: {
                    email,
                    password: hashedPassword,
                },

            })
            res.status(201).json({ user: newUser });

        } catch (error: any) {
            res.status(500).json({ message: "User creation failed", error: error.message })
        }
    } else {
        res.status(405).json({ message: "Method not allowed" });
    }
}


