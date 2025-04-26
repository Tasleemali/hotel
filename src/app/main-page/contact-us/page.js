
import React from 'react'

const Contact = () => {
  return (
    <div className='bg-[#fefae0]  text-[#6b0f1a]'>
        <div className='max-w-4xl mx-auto px-4 md:px-6 py-5'>
            <h1 className='text-center text-2xl md:text-3xl mb-5 font-semibold'>Contact-Us</h1>
            <div className='grid md:grid-cols-2 gap-10'>
             {/* contact info */}
             <div>
                <div className=''>
                <h1 className='text-xl font-semibold mb-2'>Address</h1>
                <p>Lbs Road Near sion RailWay Station , Sion Mumbai</p>
               </div>
               <div>
                <h1 className='text-xl font-semibold mb-2'>Phone</h1>
                <p>9867142960</p>
               </div>
               <div>
                <h1 className='text-xl font-semibold mb-2'>Email</h1>
                <p>tasleem@gmail.com</p>
               </div>

             </div>
              

           
            {/* contect form */}
            <form className="space-y-6">
          <div>
            <label className="block mb-2">Name</label>
            <input type="text" className=" w-full bg-white p-2  border focus:outline-amber-950" placeholder="Your Name" />
          </div>

          <div>
            <label className="block mb-2">Email</label>
            <input type="email" className=" w-full bg-white p-2  border focus:outline-amber-950" placeholder="you@example.com" />
          </div>

          <div>
            <label className="block mb-2">Message</label>
            <textarea rows="4" className=" w-full bg-white p-2  border focus:outline-amber-950" placeholder="Your Message..."></textarea>
          </div>

          <button type="submit" className="bg-[#fefae0] text-[#4a0c14] border-2 border-[#6b0f1a] rounded-md hover:text-[#fefae0]
                            hover:bg-[#6b0f1a] px-6 py-3 font-semibold transition">
            Send Message
          </button>
        </form>

        </div>
        </div>
    </div>
  )
}

export default Contact
