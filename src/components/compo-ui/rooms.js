'use client'

import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import AllRoomUi from './allroom-ui'

const Rooms = () => {
  const [rooms, setRooms] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms`)
        if (res.ok) {
          const data = await res.json()
          setRooms(data)
        } else {
          console.error('Failed to fetch rooms:', res.status, res.statusText)
        }
      } catch (error) {
        console.error('Error fetching rooms:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchRooms()
  }, [])

  if (loading) {
    return (
      <div className="bg-white text-[#6b0f1a] min-h-screen py-10 flex justify-center items-center">
        <p>Loading rooms...</p>
      </div>
    )
  }

  if (!rooms.length) {
    return (
      <div className="bg-white text-[#6b0f1a] min-h-screen py-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">Our Rooms</h1>
        <p className="text-center text-gray-500">No rooms available at the moment.</p>
      </div>
    )
  }

  return (
    <div className="bg-white text-[#6b0f1a] py-5">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-4">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">Our Rooms</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {rooms.slice(0, 4).map(room => (
            <AllRoomUi
              key={room._id || room.name}
              name={room.name}
              image={room.image}
              totalRooms={room.totalRooms}
              description={room.description}
              price={room.price}
              to={room._id ? `/main-page/all-rooms/${room._id}` : '#'}
            />
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
  )
}

export default Rooms
