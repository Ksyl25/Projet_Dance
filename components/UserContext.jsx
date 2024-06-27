// components/UserContext.js
"use client";
import { createContext, useContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const { data: session, status } = useSession();
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    if (status === 'authenticated') {
      setUserRole(session.user.role);
    }
  }, [status, session]);

  return (
    <UserContext.Provider value={{ userRole }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => useContext(UserContext);
