"use client"

import React, { useContext, useState } from 'react'
import { Menu, User ,X } from 'lucide-react'
import Link from 'next/link'
import { GlobaleContext } from '@/context'
import { useRouter } from 'next/navigation'


const Navbar = () => {
  const router = useRouter()
  const {isAuth} = useContext(GlobaleContext)
    const [toggaleMenu ,setToggaleMenu] = useState(false)
    const [activebar , setActivebar] = useState('home')
  return (
    <div className='bg-[#6b0f1a] sticky top-0 z-20 text-[#fefae0] '>
         <div className='max-w-screen-2xl mx-auto  '>
            <div className='flex justify-between items-center px-4 md:px-6 py-5'>

               <div>
              <Link href={"/"}> <h1 className='font-bold text-2xl md:text-3xl'>RaghavJiSarkar</h1></Link> 
               </div>
               
               
               {/* desktop navbar */}
               <div className='hidden md:block '>
               <ul className='  flex justify-center items-center space-x-12 font-semibold'>
               <Link href={"/"}><li value={"home"} onClick={()=>setActivebar('home')} className={`${activebar === "home"? "border-b-2 border-[#fefae0] ": ""}`}>Home</li></Link> 
              <Link href={"/main-page/all-rooms"}><li value={"room"} onClick={()=>setActivebar('room')} className={`${activebar === "room"? "border-b-2 border-[#fefae0] ": ""}`}>Room</li></Link> 
              <Link href={"/main-page/all-gallery"}><li value={"gallery"} onClick={()=>setActivebar('gallery')} className={`${activebar === "gallery"? "border-b-2 border-[#fefae0] ": ""}`}>Gallery</li></Link>       
              <Link href={"/main-page/about"}><li value={"about"} onClick={()=>setActivebar('about')} className={`${activebar === "about"? "border-b-2 border-[#fefae0] ": ""}`}>About Us</li></Link>     
                    <Link href={"/main-page/contact-us"}><li value={"contact"} onClick={()=>setActivebar('contact')} className={`${activebar === "contact"? "border-b-2 border-[#fefae0] ": ""}`}>Contact Us</li></Link>      
                </ul>
               </div>
                {/* mobile navbar */}
               <div className={ ` px-5 pt-5 md:hidden z-10   bg-[#6b0f1a] w-full h-full fixed top-0 right-0 transform ${toggaleMenu ?"translate-x-0" : "translate-x-full" } transition transform duration-3s ease-in-out`}>
                <span onClick={()=> setToggaleMenu(false)} className=''><X/></span>
               <ul className=' pt-5 grid grid-cols-1 place-items-center space-y-10 '>
               <Link href={"/"}><li onClick={()=> {setActivebar('home') ,setToggaleMenu(false)}} value={"home"}  className={`${activebar === "home"? "border-b-2 border-[#fefae0] ": ""}`}>Home</li></Link> 
                <Link href={"/main-page/all-rooms"}><li  onClick={()=> {setActivebar('room') ,setToggaleMenu(false)}} value={"room"}  className={`${activebar === "room"? "border-b-2 border-[#fefae0] ": ""}`}>Room</li></Link>    
                <Link href={"/main-page/all-gallery"}><li  onClick={()=> {setActivebar('gallery') ,setToggaleMenu(false)}} value={"gallery"}  className={`${activebar === "gallery"? "border-b-2 border-[#fefae0] ": ""}`}>Gallery</li></Link> 
                <Link href={"/main-page/about"}><li  onClick={()=> {setActivebar('about') ,setToggaleMenu(false)}} value={"about"}  className={`${activebar === "about"? "border-b-2 border-[#fefae0] ": ""}`}>About Us</li></Link>   
                    <Link href={"/main-page/contact-us"}><li onClick={()=> {setActivebar('contact') ,setToggaleMenu(false)}} value={"conatct"}  className={`${activebar === "conatct"? "border-b-2 border-[#fefae0] ": ""}`}>Contact Us</li></Link> 
                   
                </ul>
               </div>
              
              
               
               <div className='flex gap-5 items-center'>
               {isAuth ?  <User onClick={()=>{ router.push("/service/account")}} className=' w-8 h-8'/> :  <button onClick={()=>{ router.push("/service/login") }} className='text-[#fefae0] font-semibold px-4 py-1 border-2 border-[#fefae0] rounded-lg '>Login</button>}
              <Menu onClick={()=>{ setToggaleMenu(true)}} className='md:hidden w-8 h-8'/>
              
               </div>
               
            
             
            
            </div>

         </div>
    </div>
  )
}

export default Navbar
