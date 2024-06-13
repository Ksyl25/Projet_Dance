import jwt from 'jsonwebtoken'
import React from 'react'
import type { NextApiRequest, NextApiResponse } from 'next'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === 'POST') {
        const { token } = req.body
        const secret = process.env.JWT_SECRET
        if (!secret) {
            res.status(500).json({ message: 'jwt secret non definie' })
            return;
        }
        try {
            const decoded = jwt.verify(token, secret)
            res.status(200).json({ user: decoded })

        } catch (error) {
            res.status(401).json({ message: "ivalid token", })
        }
    }
    else {
        res.status(405).json({ message: 'methode not allowed' })
    }
}
