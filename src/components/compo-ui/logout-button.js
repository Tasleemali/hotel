'use client';

import { GlobaleContext } from '@/context';
import { signOut } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useContext } from 'react';

export default function LogoutButton() { 
  const router= useRouter()
    const {setIsAuth} = useContext(GlobaleContext)
  return (
    <button
      onClick={() =>{setIsAuth(false)  ,signOut() , router.push("/service/login")}}
      className="bg-red-500 text-white px-4 py-2 rounded"
    >
      Logout
    </button>
  );
}
