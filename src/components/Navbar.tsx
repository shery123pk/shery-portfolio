'use client'
import React from 'react'
import { lora } from '@/font'
import Link from 'next/link'
import { IoMenu } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);

  function ShowOption() {
    setIsOpen(!isOpen)
  }

  return (
    <div className='sticky top-0'>
      <header className='relative w-full h-auto p-[1.5rem_1rem_1.5rem_2rem] bg-[#faa249] shadow-sm shadow-[#0b0b0b]'>
        <nav className='h-[5.25rem] mx-[1.6875rem] flex justify-between'>
          <div>
            <Link href='/'><p className={`${lora.className} text-[4.875rem] font-semibold text-`} ><span className='text-[white]'>S</span>harmeen<span className='text-[white]'>A</span >sif</p></Link>
          </div>

          {isOpen == true ? (
            <div>
              <ul className='absolute p-[40px] top-0 left-0 w-full h-screen bg-[#a9927d] flex flex-col items-center justify-center gap-[1.875rem]'>
                <IoClose className='absolute top-0 right-0 mr-[40px] mt-[30px] cursor-pointer' size={35} onClick={ShowOption} />
                <Link href='/'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>Home</li></Link>
                <Link href='#about'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>About</li></Link>
                <Link href='#portfolio'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>Portfolio</li></Link>
                <Link href='#services'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>Services</li></Link>
                <Link href='#testimonials'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>Testimonials</li></Link>
                <Link href='#contact'><li className='text-[1.125rem] text-[black] font-semibold tracking-[.0563rem] hover:text-[#7d674c]'>Contact</li></Link>
              </ul>
            </div>

          ) : (
            <ul className='hidden lg:h-full lg:flex lg:items-center lg:gap-[1.875rem] '>
              <Link href='/'><li className='text-[30px] text-[black] font-bold tracking-[.0563rem] hover:text-[#A9927D]'>Home</li></Link>
              <Link href='/#about'><li className='text-[30px] text-[black] font-bold tracking-[.0563rem] hover:text-[#A9927D]'>About</li></Link>
              <Link href='#portfolio'><li className='text-[30px] text-[black] font-bold tracking-[.0563rem] hover:text-[#A9927D]'>Portfolio</li></Link>
              <Link href='#services'><li className='text-[30px] text-[black] font-bold tracking-[.0563rem] hover:text-[#A9927D]'>Services</li></Link>
              <Link href='#testimonials'><li className='text-[30px] text-[black] font-bold tracking-[.0563rem] hover:text-[#A9927D]'>Testimonials</li></Link>
              <Link href='#contact'><li className='text-[30px] text-[black] font-bold tracking-[.0563rem] hover:text-[#A9927D]'>Contact</li></Link>
            </ul>
          )}

          <IoMenu size={35} color='white' className='lg:hidden cursor-pointer' onClick={ShowOption} />

        </nav>
      </header>
    </div>
  )
}

export default Navbar