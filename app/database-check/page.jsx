// app/database-check/page.js
"use client";

import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DatabaseCheck = () => {
    const [dbStatus, setDbStatus] = useState('Checking database connection...');
    const [error, setError] = useState(null);

    useEffect(() => {
        const checkDatabaseConnection = async () => {
            try {
                const response = await axios.get('./api/check-db');
                setDbStatus(response.data.message);
            } catch (err) {
                setError(err.message || 'An unknown error occurred');
            }
        };

        checkDatabaseConnection();
    }, []);

    return (
        <div>
            <h1>Database Check</h1>
            {error ? <p>Error: {error}</p> : <p>{dbStatus}</p>}
        </div>
    );
};

export default DatabaseCheck;
