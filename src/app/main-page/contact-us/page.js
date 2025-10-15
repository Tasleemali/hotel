'use client'
import React, { useEffect, useState } from 'react'

// Skeleton Loader Component
const SkeletonBox = ({ className }) => (
  <div className={`bg-[#e0dccc] animate-pulse rounded ${className}`}></div>
)

const Contact = () => {
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })

  useEffect(() => {
    const fetchData = async () => {
      await new Promise(res => setTimeout(res, 500)) // simulate loading
      setLoading(false)
    }
    fetchData()
  }, [])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form Submitted:", formData)
    // TODO: send formData to backend / email service
  }

  if (loading) {
    return (
      <div className='bg-[#fefae0] text-[#6b0f1a] py-16'>
        <div className='max-w-4xl mx-auto px-4 md:px-6'>
          <SkeletonBox className="h-8 w-48 mx-auto mb-10" />
          <div className="grid md:grid-cols-2 gap-10">
            <div className="space-y-6">
              {Array(3).fill().map((_, i) => (
                <React.Fragment key={i}>
                  <SkeletonBox className="h-6 w-32" />
                  <SkeletonBox className="h-4 w-64" />
                </React.Fragment>
              ))}
            </div>
            <div className="space-y-6">
              {Array(3).fill().map((_, i) => (
                <div key={i}>
                  <SkeletonBox className="h-5 w-20 mb-2" />
                  <SkeletonBox className={`h-${i === 2 ? '24' : '10'} w-full`} />
                </div>
              ))}
              <SkeletonBox className="h-12 w-full" />
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className='bg-[#fefae0] text-[#6b0f1a]'>
      <div className='max-w-4xl mx-auto px-4 md:px-6 py-5'>
        <h1 className='text-center text-2xl md:text-3xl mb-5 font-semibold'>Contact Us</h1>
        <div className='grid md:grid-cols-2 gap-10'>
          <div className='space-y-4'>
            <div>
              <h1 className='text-xl font-semibold mb-2'>Address</h1>
              <p>LBS Road, Near Sion Railway Station, Sion Mumbai</p>
            </div>
            <div>
              <h1 className='text-xl font-semibold mb-2'>Phone</h1>
              <a href="tel:9867142960" className='hover:underline'>9867142960</a>
            </div>
            <div>
              <h1 className='text-xl font-semibold mb-2'>Email</h1>
              <a href="mailto:tasleem@gmail.com" className='hover:underline'>tasleem@gmail.com</a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block mb-2">Name</label>
              <input name="name" value={formData.name} onChange={handleChange} type="text"
                className="w-full bg-white p-2 border focus:ring-2 focus:ring-[#6b0f1a] outline-none" placeholder="Your Name" />
            </div>
            <div>
              <label className="block mb-2">Email</label>
              <input name="email" value={formData.email} onChange={handleChange} type="email"
                className="w-full bg-white p-2 border focus:ring-2 focus:ring-[#6b0f1a] outline-none" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block mb-2">Message</label>
              <textarea name="message" value={formData.message} onChange={handleChange} rows="4"
                className="w-full bg-white p-2 border focus:ring-2 focus:ring-[#6b0f1a] outline-none" placeholder="Your Message..."></textarea>
            </div>
            <button type="submit"
              className="bg-[#fefae0] text-[#4a0c14] border-2 border-[#6b0f1a] rounded-md hover:text-[#fefae0] hover:bg-[#6b0f1a] px-6 py-3 font-semibold transition-all duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
