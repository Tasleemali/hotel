// context/GlobalState.js
'use client';

import { createContext, useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';

export const GlobaleContext = createContext(null);

export default function GlobalState({ children }) {
  const [rooms, setRooms] = useState([]);
  const { data: session, status } = useSession();  // Using NextAuth's useSession hook to track session state
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    if (status === 'authenticated') {
      setIsAuth(true);  // If the user is authenticated, set isAuth to true
    } else {
      setIsAuth(false); // If the user is not authenticated, set isAuth to false
    }
  }, [status]);  // This will re-run whenever session status changes

  return (
    <GlobaleContext.Provider value={{ isAuth, setIsAuth ,rooms, setRooms }}>
      {children}
    </GlobaleContext.Provider>
  );
}
