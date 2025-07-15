'use client'
import Link from 'next/link'
import React, { useState, useEffect, useContext } from 'react'
import { useRouter } from 'next/navigation'


const Rooms = () => {
 const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    async function fetchProducts() {
      try {
        const res = await fetch("/api/rooms");
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

  if (loading) {
    return (
      <div className="bg-white text-[#6b0f1a] min-h-screen py-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">Our Rooms</h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {[...Array(8)].map((_, idx) => (
            <div key={idx} className="animate-pulse space-y-3">
              <div className="bg-gray-300 h-52 w-full rounded-sm"></div>
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
              <div className="h-8 bg-gray-300 rounded w-1/3 mt-2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className='bg-white text-[#6b0f1a] '>
      <div className='max-w-screen-2xl mxx-auto px-2 md:px-2 py-5'>
        <h1 className='text-2xl md:text-3xl font-semibold text-center mb-5'>Our Rooms</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10'>
          {rooms.slice(0,4).map((rom, idx) => (
            <div key={idx}>
              <img src={rom.image} className='w-full h-52 object-cover rounded-sm' />
              <div>
                <h1 className='font-semibold'>{rom.name}</h1>
                <p>₹{rom.price}</p>
              </div>
              <button className='mt-2 px-3 py-1 border-2 border-[#6b0f1a] rounded-md hover:text-[#fefae0] hover:bg-[#6b0f1a]'>
                View Rooms
              </button>
            </div>
          ))}
        </div>
        <div className='text-center mt-10'>
          <Link href="/main-page/all-rooms" className='border-2 border-[#6b0f1a] rounded-md px-3 py-2 hover:bg-[#6b0f1a] hover:text-[#fefae0] font-medium hover:scale-105'>
            View All Rooms
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
