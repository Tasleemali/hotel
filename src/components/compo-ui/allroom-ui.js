"use client"

import { useRouter } from 'next/navigation'
import React from 'react'
     
const AllRoomUi = ({name , image ,description,price,totalRooms ,to }) => {
   const router = useRouter()
  return (
    <div
      onClick={()=> router.push(to)}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
            
             
              <img
                src={image || "/placeholder.jpg"}
                alt={name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-1">{name}</h2>
                <p className="text-sm text-gray-700 line-clamp-2">{description}</p>
                <p className="mt-2 text-[#6b0f1a] font-semibold">₹{price} / night</p>
                <p className="text-xs text-gray-500">{totalRooms} Rooms Available</p>
              </div>
            
            </div>
  )
}

export default AllRoomUi
