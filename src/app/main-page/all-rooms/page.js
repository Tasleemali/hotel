"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AllRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true)
    const fetchRoom = async () => {
      try {
        const res = await fetch("/api/rooms");
        const data = await res.json();
        setRooms(data);
        localStorage.setItem("rooms", JSON.stringify(data)); // cache it
      } catch (err) {
        console.error("Failed to fetch rooms", err);
      } finally {
        setLoading(false);
      }
    }
    fetchRoom();

  }, []);


  // if(loading)return <h1 className="h-screen bg-[#fefae0] text-black grid place-items-center">Loading</h1>
  if (loading) {
    return (
      <div className="bg-[#fefae0] text-[#6b0f1a] min-h-screen px-4 md:px-6 py-5">
        <div className="animate-pulse space-y-3">
          <div className="text-center mb-6">
            <div className="h-8 w-32 mx-auto bg-gray-300 rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="animate-pulse space-y-3">
                <div className="bg-gray-300 h-52 w-full rounded-sm"></div>
                <div className="h-5 bg-gray-300 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-8 bg-gray-300 rounded w-1/2"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#fefae0] text-[#6b0f1a] min-h-screen">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-4 py-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">
          Our Rooms
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {rooms.map((room, idx) => (
            <div key={idx}>
              <img
                src={room.image}
                alt={`Image of room: ${room.name}`}
                className="w-full h-52 object-cover rounded-sm"
              />
              <div>
                <h1 className="font-semibold text-lg">{room.name}</h1>
                <p>{room.description}</p>
                <p>₹{room.price}</p>
                <p>{room.totalRooms} Rooms </p>
                <button
                  onClick={() => router.push(`/main-page/all-rooms/${room._id}`)}
                  className="mt-2 px-3 py-1 border-2 border-[#6b0f1a] rounded-md 
             hover:text-[#fefae0] hover:bg-[#6b0f1a]
             focus:bg-[#6b0f1a] focus:text-[#fefae0]
             active:bg-[#6b0f1a] active:text-[#fefae0] transition"
                >
                  Book now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}