import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='bg-[#6b0f1a]  text-[#fefae0]'>
         <div className=' max-w-screen-2xl mx-auto px-4 md:px-6 py-5'>
            <div className='grid grid-cols-1 sm:grid-cols-2 place-items-start gap-4  md:grid-cols-4  md:place-items-center'>
                 <section>
                    <h2 className='font-bold text-2xl md:text-3xl'>HotelBoom</h2>
                    <p className='text-[#fefae0]'>Experiance Divinity & comfort in Ayodhya</p>
                 </section>
                 <section>
                   <h3 className='font-semibold mb-2'>Quick Links</h3>
                    <ul>
                       <Link href={"/"}><li>Home</li></Link> 
                       <Link href={"/main-page/all-rooms"}><li>Room</li></Link> 
                       <Link href={"/main-page/about"}><li>About us</li></Link> 
                    </ul>
                 </section>
                 <section>
                   <h3 className='font-semibold mb-2'>Contact</h3>
                    <ul>
                        <li>0976545689</li>
                        <li>hotel@gmail.com</li>
                        <li>Sion ,mumbai</li>
                    </ul>
                 </section>
                 <section>
                   <h3 className='font-semibold mb-2'>Social Media</h3>
                    <ul>
                        <li>Instagram</li>
                        <li>Facebook</li>
                        <li>X</li>
                    </ul>
                 </section>

            </div>

         </div>
         <p className="text-center mt-6 text-xs text-[#d1cfc7]">
    © 2025 RaghavJiSarkar. All rights reserved.
  </p>
    </footer>
  )
}

export default Footer
