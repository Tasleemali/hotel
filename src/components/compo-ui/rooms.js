import Link from 'next/link';

const Rooms = async () => {
  let rooms = [];

  try {
    const res = await fetch('http://localhost:3000/api/rooms', { cache: 'no-store' });
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
          {rooms.slice(0, 4).map((rom) => (
            <Link
              key={rom._id}
              href={`/main-page/all-rooms/${rom._id}`}
              className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition duration-200"
            >
              <img
                src={rom.image}
                alt={rom.name}
                className="w-full h-52 object-cover"
              />
              <div className="p-4">
                <h2 className="text-lg font-bold">{rom.name}</h2>
                <p className="text-sm text-gray-600 line-clamp-3 mt-1">{rom.description}</p>
                <p className="text-[#6b0f1a] font-semibold mt-2">₹{rom.price}</p>
              </div>
            </Link>
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
