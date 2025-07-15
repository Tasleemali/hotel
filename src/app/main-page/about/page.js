'use client'
import React, { useEffect, useState } from 'react'
import Contact from '@/components/compo-ui/contact'

const About = () => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000) // Simulated delay
    return () => clearTimeout(timer)
  }, [])

  if (loading) {
    return (
      <div className="bg-[#fefae0] text-[#6b0f1a] py-16 animate-pulse">
        <div className="max-w-7xl mx-auto px-4 md:px-8 space-y-12">
          {/* Heading */}
          <div className="text-center space-y-4">
            <div className="h-10 bg-gray-300 w-1/2 mx-auto rounded-md"></div>
            <div className="h-5 bg-gray-200 w-1/3 mx-auto rounded-md"></div>
          </div>

          {/* Image + About Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14">
            <div className="h-80 md:h-[500px] bg-gray-300 w-full rounded-2xl"></div>
            <div className="space-y-6">
              <div className="h-7 bg-gray-300 w-1/3 rounded-md"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 w-full rounded-md"></div>
                <div className="h-4 bg-gray-200 w-3/4 rounded-md"></div>
              </div>
              <div className="h-6 bg-gray-300 w-1/4 rounded-md mt-4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 w-full rounded-md"></div>
                <div className="h-4 bg-gray-200 w-2/3 rounded-md"></div>
              </div>
            </div>
          </div>

          {/* Other Sections */}
          {[...Array(5)].map((_, i) => (
            <div key={i} className="space-y-4">
              <div className="h-6 bg-gray-300 w-1/3 rounded-md"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 w-full rounded-md"></div>
                <div className="h-4 bg-gray-200 w-5/6 rounded-md"></div>
                <div className="h-4 bg-gray-200 w-3/4 rounded-md"></div>
              </div>
            </div>
          ))}

          {/* Contact Section Placeholder */}
          <div className="mt-24 space-y-4">
            <div className="h-6 bg-gray-300 w-1/3 rounded-md mx-auto"></div>
            <div className="h-40 bg-gray-200 w-full rounded-lg"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-[#fefae0] text-[#6b0f1a] py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">Welcome to Hotel RaghjiSarkar</h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            Experience luxury and tradition in the heart of Ayodhya.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-14 mb-24">
          <div className="overflow-hidden rounded-2xl shadow-xl">
            <img
              src="https://cdn-ijnhp.nitrocdn.com/pywIAllcUPgoWDXtkiXtBgvTOSromKIg/assets/images/optimized/rev-5794eaa/www.jaypeehotels.com/blog/wp-content/uploads/2024/09/Blog-6-scaled.jpg"
              alt="Hotel RaghjiSarkar"
              className="w-full h-80 md:h-[500px] object-cover hover:scale-105 transition-transform duration-500"
            />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-2xl nd:text-3xl font-semibold mb-3">About Us</h2>
              <p className="text-lg leading-relaxed">
                Nestled in the spiritual city of Ayodhya, <strong>Hotel RaghjiSarkar</strong> offers a perfect fusion of tradition and modernity. Whether you're visiting for devotion, leisure, or business, we ensure your stay is unforgettable.
              </p>
            </div>

            <div>
              <h3 className="text-2xl nd:text-3xl font-semibold mb-2">Our Vision</h3>
              <p className="text-lg leading-relaxed">
                To be Ayodhya’s most loved hotel — blending spiritual warmth with contemporary luxury.
              </p>
            </div>
          </div>
        </div>

        <div className="space-y-16">
          <div className="space-y-6">
            <h3 className="text-2xl nd:text-3xl font-semibold">A Rich Heritage</h3>
            <p className="text-lg leading-relaxed">
              Every corner of Hotel RaghjiSarkar echoes the timeless glory of Ayodhya’s cultural and spiritual roots. Designed to offer serenity, our spaces connect you with the divine heritage while ensuring utmost comfort.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl nd:text-3xl font-semibold">Comfort and Luxury</h3>
            <p className="text-lg leading-relaxed">
              With plush bedding, fast Wi-Fi, ambient lighting, and elegant décor, our rooms promise you a restful retreat. From cozy deluxe rooms to lavish suites, we have the perfect setting for every guest.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl nd:text-3xl font-semibold">Dining Experience</h3>
            <p className="text-lg leading-relaxed">
              Savor the finest Indian and international cuisines crafted by our master chefs. Our restaurant promises to delight your taste buds with every bite.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl nd:text-3xl font-semibold">Our Services</h3>
            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>24/7 Room Service</li>
              <li>Conference & Banquet Facilities</li>
              <li>Complimentary Wi-Fi</li>
              <li>Guided Tours and Travel Assistance</li>
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-2xl nd:text-3xl font-semibold">The RaghjiSarkar Experience</h3>
            <p className="text-lg leading-relaxed">
              We offer more than just a stay — we offer an emotion, a memory, an experience. Be it the warmth of our welcome or the peace in our surroundings, everything is crafted to leave a lasting impression.
            </p>
          </div>

          <div className="space-y-6">
            <h3 className=" text-2xl nd:text-3xl font-semibold">Why Choose Us?</h3>
            <ul className="list-disc pl-6 text-lg space-y-2">
              <li>Prime Location near major temples and landmarks</li>
              <li>Exceptional personalized service</li>
              <li>Spacious and elegant rooms</li>
              <li>Modern amenities blended with traditional hospitality</li>
              <li>Affordable luxury with premium offerings</li>
            </ul>
          </div>
        </div>

        <div className="mt-24">
          <Contact />
        </div>
      </div>
    </div>
  )
}

export default About
