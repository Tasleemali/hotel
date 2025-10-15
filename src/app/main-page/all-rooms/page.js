
import AllRoomUi from "@/components/compo-ui/allroom-ui"


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
          {rooms.map((room ,i) => (
           <AllRoomUi key={i} name={room.name} image={room.image} totalRooms={room.totalRooms}  description={room.description} price={room.price} 
             to={`/main-page/all-rooms/${room._id}`}
             />
          ))}
        </div>
      
      </div>
    </div>
  );
}


export default AllRooms