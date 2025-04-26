"use client"
import React from 'react'
import Navbar from './navbar'
import Footer from './footer'
import { SessionProvider } from 'next-auth/react'
import GlobalState from '@/context'

const CommonLayOut = ({children}) => {
  return (
    <div>
       <SessionProvider>
        <GlobalState>
       <Navbar/>
      {children}
      <Footer/>
      </GlobalState>
       </SessionProvider>
        
    </div>
  )
}

export default CommonLayOut
