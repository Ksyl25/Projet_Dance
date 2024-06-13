import bcrypt from 'bcryptjs'
import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next'
import { error } from 'console'
import jwt from 'jsonwebtoken'
import { Secret } from 'jsonwebtoken'


const prisma = new PrismaClient();

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { email, password } = req.body
        const user = await prisma.user.findUnique({
            where: { email },
        });
        if (user && bcrypt.compareSync(password, user.password)) {
            const JWT_SECRET = process.env.JWT_SECRET as Secret;

            const token = jwt.sign({ id: user.id, email: user.email }, JWT_SECRET, { expiresIn: '1h' })
            res.status(200).json({ token })

        }
        else {
            res.status(401).json({ message: "invalid email or password" })
        }

    }
    else {
        res.status(405).json({ message: "Method not allowed" });
    }

}
