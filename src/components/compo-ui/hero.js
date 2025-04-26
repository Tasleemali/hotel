"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Hero = () => {
  const router = useRouter()
  return (
    <section className="relative bg-[url('/hero.png')] bg-cover bg-center text-[#fefae0] py-10 md:py-32 px-4">
    <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
    <div className="relative z-10 p-8 rounded-xl max-w-3xl mx-auto text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-4">
        Where Tradition Meets Luxury in the Heart of Ayodhya
      </h1>
      <p className="text-lg md:text-xl mb-6">
        Stay in the most comfortable, serene, and spiritually enriching experience in Ayodhya.
      </p>
      <div className="flex justify-center gap-4">
        <button onClick={()=> router.push("/main-page/all-gallery")} className="bg-[#6b0f1a] text-[#fefae0] font-semibold px-3 py-1 rounded-md transition">
          View Rooms
        </button>
        <button onClick={()=> router.push("/main-page/all-rooms")} className="border border-black text-[#fefae0] px-3 py-1 rounded-md  transition">
          Book Now
        </button>
      </div>
    </div>
  </section>
  )
}

export default Hero
