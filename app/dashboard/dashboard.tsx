import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation';
import jwt from 'jsonwebtoken'
import React from 'react'
import { error } from 'console'
import { Secret, JwtPayload } from 'jsonwebtoken';
import axios from 'axios'



export default function dashboard() {
    const [user, setUser] = useState<JwtPayload | null>(null);;
    const router = useRouter();

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            const response = axios.post('../../api/verify-token', { token })
                .then(response => {
                    setUser(response.data.user);

                })
                .catch(error => {
                    console.error('invalid token', error);
                    router.push('/login')
                })
        } else {
            router.push('/login')
        }

    }, [])
    if (!user) return <div>chargement...</div>
    return (
        <div>welcome babiere c'est nom {user.email} </div>
    )
}

