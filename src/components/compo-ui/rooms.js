'use client'
import Link from 'next/link'
import React from 'react'
import { useState ,useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Rooms = () => {

      const [rooms, setRooms] = useState([]);
      const [loading ,setLoading] = useState(false)
    const router = useRouter()
    useEffect(() => {
      setLoading(true);
      async function fetchProducts() {
        try {
          const res = await fetch("/api/get");
          const data = await res.json();
          setRooms(data);
        } catch (error) {
          console.error("Error fetching products:", error);
        } finally {
          setLoading(false);
        }
      }
      fetchProducts();
    }, []);
    
    if(loading){
      return (
        <div className="flex items-center justify-center min-h-screen bg-white">
           loading...
      </div>
      )
    }
    return (
        <div className='bg-[#fefae0] text-[#6b0f1a] '>
            <div className='max-w-screen-2xl mxx-auto px-4 md:px-6 py-5'>
                <h1 className='text-2xl md:text-3xl font-semibold  text-center mb-5'>Our Rooms</h1>
                <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-10'>

                    {rooms.map((rom , idx )=>
                    <div key={idx}>
                        <img src={rom.image} className='w-full h-52 object-cover rounded-sm'/>
                        <div>
                            <h1 className='font-semibold'>{rom.name}</h1>
                            <p className=''>₹{rom.price}</p>
                            
                        </div>
                           <button className=' mt-2 px-3 py-1 border-2 border-[#6b0f1a] rounded-md hover:text-[#fefae0]
                            hover:bg-[#6b0f1a]'>View Rooms</button>
                    </div>
                    )

                    }
                     
                </div>
                <div className='text-center mt-10 '> <Link href="/main-page/all-rooms" className='border-2 border-[#6b0f1a] rounded-md px-3 py-2 hover:bg-[#6b0f1a] hover:text-[#fefae0]   font-medium hover:scale-105'>View All Rooms </Link></div>  

            </div>

        </div>
    )
}

export default Rooms
