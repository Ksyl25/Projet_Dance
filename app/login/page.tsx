
"use client"
import { useState } from 'react';
import axios from 'axios'; // Utilisez axios ou fetch pour envoyer des requêtes HTTP
import { useRouter } from 'next/navigation';
;


export default function register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            const response = await axios.post("../api/login", { email, password });
            localStorage.setItem('token', response.data.token)
            router.push('/dashboard')
        } catch (error: any) {
            console.error("login failed:", error.response.data);

        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
            />
            <input
                type="password"
                placeholder="mot de passe"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
            />
            <button type="submit"> se connecter</button>

        </form>
    );
}
