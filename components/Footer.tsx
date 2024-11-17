import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="flexCenter  bg-stone-950 text-white">
      <div className="padding-container max-container flex w-full flex-col gap-14 py-6">
        <div className="flex flex-col items-start justify-center gap-[10%] md:flex-row">


          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {/* Additional content here */}
          </div>
        </div>

        {/* All Rights Reserved Section */}
        <div className="text-center w-full mt-10">
          <p className="text-sm">&copy; {new Date().getFullYear()} MADE by Hasta All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
