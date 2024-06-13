
"use client"
import { useState } from 'react';
import axios from 'axios'; // Utilisez axios ou fetch pour envoyer des requêtes HTTP
import { useRouter } from 'next/navigation';



export default function register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const router = useRouter();

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        try {
            await axios.post('/api/register', { email, password });
            router.push('/login')
        } catch (error: any) {
            console.error("Registration failed:", error.response.data);

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
            <button type="submit"> s'inscrire</button>

        </form>
    );
}
