'use client'
import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
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
          {[...Array(4)].map((_, idx) => (
            <div key={idx} className="animate-pulse space-y-3">
              <div className="bg-gray-300 h-52 w-full rounded-md"></div>
              <div className="h-5 bg-gray-300 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#6b0f1a]">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-4 py-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">Our Rooms</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {rooms.slice(0, 4).map((rom) => (
            <div
              key={rom._id}
              onClick={() => router.push(`/main-page/all-rooms/${rom._id}`)}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-200"
            >
              <img
                src={rom.image}
                alt={rom.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{rom.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-3 mt-1">
                  {rom.description}
                </p>
                <p className="text-[#6b0f1a] font-semibold mt-2">₹{rom.price}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href="/main-page/all-rooms"
            className="inline-block px-5 py-2 rounded-md border-2 border-[#6b0f1a] text-[#6b0f1a] hover:bg-[#6b0f1a] hover:text-white font-medium transition duration-200"
          >
            View All Rooms
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Rooms;
