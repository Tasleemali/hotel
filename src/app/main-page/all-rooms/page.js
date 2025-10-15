'use client'
import React, { useEffect, useState } from 'react'
import AllRoomUi from '@/components/compo-ui/allroom-ui'

const AllRooms = () => {
  const [rooms, setRooms] = useState([])

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms`)
        if (res.ok) {
          const data = await res.json()
          setRooms(data)
        }
      } catch (err) {
        console.error(err)
      }
    }

    fetchRooms()
  }, [])

  return (
    <div className="bg-[#fefae0] text-[#6b0f1a] min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-4 py-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">
          Our Rooms
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
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
      </div>
    </div>
  )
}

export default AllRooms
