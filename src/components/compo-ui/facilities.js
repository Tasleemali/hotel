import { Building, ConciergeBell, Landmark, ParkingCircle, ShieldCheck, Snowflake, Wifi } from 'lucide-react'
import React from 'react'
const facilites = [
    {title: "AC Rooms" ,icon :<Snowflake className='w-8 h-8 text-blue-500'/>},
    {title: "Fre Wi-Fi" ,icon :<Wifi className='w-8 h-8 text-green-500'/>},
    {title: "24x7 Security" ,icon :<ShieldCheck className='w-8 h-8 text-red-500'/>},
    {title: "Parking" ,icon :<ParkingCircle className='w-8 h-8 text-purple-500'/>},
    {title: "Rooms Service" ,icon :<ConciergeBell className='w-8 h-8 text-orange-500'/>},
      {title: "Wedding Venue" ,icon :<Landmark className='w-8 h-8 text-orange-500'/>},
    { title: "Banquet Hall" ,icon :<Building className='w-8 h-8 text-orange-500'/>}
    
]
const Facilities= () => {
  return (
    <div className='bg-white  text-[#6b0f1a]'>
      <div className='max-w-5xl mx-auto py-5 '>
        <h1 className='text-2xl md:text-3xl font-semibold  text-center mb-5'>Our Facilities</h1>
        <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 text-center gap-8'>
         {facilites.map((fas ,idx)=> 
         <div key={idx} className='flex flex-col items-center'>
            {fas.icon}
            <span>{fas.title}</span>
         </div>
         )

         }
       </div>
      </div>
    </div>
  )
}

export default Facilities
