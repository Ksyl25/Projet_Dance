import { authConfig } from '@/pages/api/auth/[...nextauth]'
import { LoginButton } from '@/src/auth/LoginButton'
import React from 'react'
import { getServerSession } from 'next-auth';

export default async function mylogin() {
    const session = await getServerSession(authConfig);
    if (session) {
        return <p>{JSON.stringify(session, null, 2)}</p>
    }

    return (
        <div>
            <LoginButton />
        </div>
    )
}
