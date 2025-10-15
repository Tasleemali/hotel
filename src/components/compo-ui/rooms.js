import Link from 'next/link';
 import AllRoomUi from './allroom-ui';
const Rooms = async () => {
  let rooms = [];

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/rooms`, { cache: 'no-store' });
    if (res.ok) {
      rooms = await res.json();
    } else {
      console.error('Failed to fetch rooms:', res.status, res.statusText);
    }
  } catch (error) {
    console.error('Error fetching rooms:', error);
  }

  // If API returns nothing, you can render a placeholder
  if (!rooms.length) {
    return (
      <div className="bg-white text-[#6b0f1a] min-h-screen py-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">Our Rooms</h1>
        <p className="text-center text-gray-500">No rooms available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="bg-white text-[#6b0f1a]">
      <div className="max-w-screen-2xl mx-auto px-2 md:px-4 py-5">
        <h1 className="text-2xl md:text-3xl font-semibold text-center mb-5">Our Rooms</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-10">
          {rooms.slice(0, 4).map((room ,i) => (
             <AllRoomUi key={i} name={room.name}
             image={room.image}
             totalRooms={room.totalRooms} 
             description={room.description} 
             price={room.price}
               to={`/main-page/all-rooms/${room._id}`}
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
  );
};

export default Rooms;
