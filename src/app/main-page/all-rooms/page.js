import Link from "next/link"

const AllRooms = async ()=> {
 
  let rooms = []
 try {
   const res = await fetch("http://localhost:3000/api/rooms" , {cache:"no-store"})
    if(!res.ok){
      console.log("error occur")
    }else{
      rooms = await res.json()
    }
 } catch (error) {
   console.log("something went wrong" ,error)
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
             
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition"
            >
              <Link href={`/main-page/all-rooms/${room._id}`}>
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
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}


export default AllRooms