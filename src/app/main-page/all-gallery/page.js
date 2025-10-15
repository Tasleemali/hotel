'use client'
import React, { useEffect, useState } from 'react'
import Contact from '@/components/compo-ui/contact'

const gallery = [
  "/g1.png",
  "/g2.png",
  "/g3.png",
  "/g4.png",
  "/g5.png",
  "/g6.png",
]

const Gallery = () => {
  const [loading, setLoading] = useState(false)



  return (
    <div className='bg-[#fefae0] text-[#6b0f1a]'>
      <div className='max-w-screen-2xl mx-auto px-4 md:px-6 py-8'>
        <h1 className='text-2xl md:text-3xl font-semibold text-center mb-6'>Gallery</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
         {gallery.map((glry ,idx )=> 
            <div key={idx} className=' aspect-ratio-[3/4] '>
            <img src={glry} className='w-full h-60  object-cover rounded-xs rounded-bl-4xl rounded-tr-4xl '/>
          </div>
        )}

      </div>
        <div className="mt-20">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default Gallery
