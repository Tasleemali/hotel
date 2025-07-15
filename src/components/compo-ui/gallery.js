"use client"
import React from 'react'
import Link from 'next/link'
 const gallery = [
    "/g1.png",
    "/g2.png",
    "/g3.png",
    "/g4.png",
    "/g5.png",
    "/g6.png",
 ]
const Gallery = () => {
  return (
    <div className='bg-white  text-[#6b0f1a] '>
      <div className='max-w-screen-2xl mx-auto px-4 md:px-6 py-5'>
        <h1 className='text-2xl md:text-3xl font-semibold  text-center mb-5'>Gallery</h1>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
         {gallery.map((glry ,idx )=> 
            <div key={idx} className=' aspect-ratio-[3/4] '>
            <img src={glry} className='w-full h-60  object-cover rounded-xs rounded-bl-4xl rounded-tr-4xl '/>
          </div>
        )}

      </div>

      </div>
      <div className='text-center mt-10 '> <Link href="/main-page/all-gallery" className='border-2 border-[#6b0f1a] rounded-md px-3 py-2  hover:bg-[#6b0f1a] hover:text-[#fefae0]  font-medium hover:scale-105'>View All Images </Link></div>  

    </div>
  )
}

export default Gallery


