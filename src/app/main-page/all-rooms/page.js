"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function AllRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setLoading(true);
    const fetchRoom = async () => {
      try {
        const res = await fetch("/api/rooms");
        const data = await res.json();
        setRooms(data);
        localStorage.setItem("rooms", JSON.stringify(data));
      } catch (err) {
        console.error("Failed to fetch rooms", err);
      } finally {
        setLoading(false);
      }
    };
    fetchRoom();
  }, []);

  if (loading) {
    return (
      <div className="bg-[#fefae0] text-[#6b0f1a] min-h-screen px-4 py-5">
        <div className="animate-pulse space-y-3">
          <div className="text-center mb-6">
            <div className="h-8 w-32 mx-auto bg-gray-300 rounded"></div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
            {[...Array(8)].map((_, idx) => (
              <div key={idx} className="space-y-3">
                <div className="bg-gray-300 h-52 w-full rounded-md"></div>
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

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {rooms.map((room) => (
            <div
              key={room._id}
              onClick={() => router.push(`/main-page/all-rooms/${room._id}`)}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <img
                src={room.image || "/placeholder.jpg"}
                alt={room.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold mb-1">{room.name}</h2>
                <p className="text-sm text-gray-700 line-clamp-2">{room.description}</p>
                <p className="mt-2 text-[#6b0f1a] font-semibold">₹{room.price} / night</p>
                <p className="text-xs text-gray-500">{room.totalRooms} Rooms Available</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
