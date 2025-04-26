'use client';
import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import { Player } from "@lottiefiles/react-lottie-player";

export default function AllRooms() {
  const [rooms, setRooms] = useState([]);
  const [loading ,setLoading] = useState(false)
const router = useRouter()
useEffect(() => {
  setLoading(true);
  async function fetchProducts() {
    try {
      const res = await fetch("/api/get");
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

if(loading){
  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
       loading...
  </div>
  )
}
  return (
    <div className='bg-[#fefae0] text-[#6b0f1a] '>
    <div className='max-w-screen-2xl mxx-auto px-4 md:px-6 py-5'>
        <h1 className='text-2xl md:text-3xl font-semibold  text-center mb-5'>Our Rooms</h1>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4  gap-10'>

            {rooms.map((rom , idx )=>
            <div key={idx}>
                <img src={rom.image} className='w-full h-52 object-cover rounded-sm'/>
                <div>
                    <h1 className='font-semibold text-lg'>{rom.name}</h1>
                    <p>{rom.desc}</p>
                    <p className=''>₹{rom.price}</p>
                    {/* {rom.quantity <= 0 ? (
            <p className="text-red-600">Not Available</p>
          ) : (
            <p>Available: {rom.quantity}</p>
          )} */}
                    
                    {rom.quantity > 0 && (
           
           
           <button className=' mt-2 px-3 py-1 border-2 border-[#6b0f1a] rounded-md hover:text-[#fefae0]
           hover:bg-[#6b0f1a]'>Book now</button>
                         
                      
                     )}
                    
                </div>
                        </div>
            )

            }
             
        </div>
       
    </div>

</div>


//     <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
//       {rooms.map((room, i) => (
//         <div key={i} className="border p-4 rounded-lg shadow">
//           <img src={room.image} className="w-full h-40 object-cover" />
//           <h2 className="text-xl font-semibold mt-2">{room.name}</h2>
//           <p>{room.description}</p>
//           <p className="text-green-600 font-bold">₹{room.price}</p>

//           {/* Display availability */}
//           {room.quantity <= 0 ? (
//             <p className="text-red-600">Not Available</p>
//           ) : (
//             <p>Available: {room.quantity}</p>
//           )}

//           {/* Show 'Book Now' button only if room is available */}
//           {room.quantity > 0 && (
           
           
//             <button    className="mt-2 bg-blue-600 text-white px-4 py-2 rounded" onClick={()=> router.push(`/main-page/book-room/${room._id}`)}>
//               Book Now

//             </button>
              
           
//           )}
//         </div>
//       ))}
//     </div>
  );
}