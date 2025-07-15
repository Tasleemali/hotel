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
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false),1000)
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className='bg-[#fefae0] text-[#6b0f1a] py-8 animate-pulse'>
        <div className='max-w-screen-2xl mx-auto px-4 md:px-6'>
          <div className='text-center mb-6'>
            <div className='h-8 w-32 mx-auto bg-gray-300 rounded'></div>
          </div>
          <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4'>
            {Array(8).fill(null).map((_, idx) => (
              <div key={idx} className='aspect-[3/4] bg-gray-300 rounded-md h-60'></div>
            ))}
          </div>

          <div className="mt-20 space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded-md mx-auto"></div>
            <div className="h-40 bg-gray-200 w-full rounded-lg"></div>
          </div>
        </div>
      </div>
    )
  }

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
