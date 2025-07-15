import React from 'react'
import Link from 'next/link'
const Contact = () => {
  return (
<section className="bg-white text-[#6b0f1a] py-12 px-4 text-center">
  <h2 className="text-3xl md:text-4xl font-bold mb-4">Have Questions or Ready to Book?</h2>
  <p className="text-lg md:text-xl mb-6">Reach out to us anytime. We're here to help you plan your perfect stay in Ayodhya.</p>
  <Link href="/main-page/contact-us">
    <button className="bg-[#fefae0] text-[#4a0c14] px-6 py-3 rounded-full font-semibold border-2 border-[#4a0c14] hover:bg-[#4a0c14] hover:text-[#fefae0] transition">
      Contact Us
    </button>
  </Link>
</section>
  )
}

export default Contact
