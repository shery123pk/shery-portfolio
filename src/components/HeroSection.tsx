import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io5";
import { FaTelegramPlane } from "react-icons/fa";
import Image from 'next/image';
import Button from './Button';

function HeroSection() {
  return (
    <>
      <section className='bg-[#f8f8f7] w-full text-center pt-[7.5rem]'>
        <p className='text-[2rem]'>Hello! I'm <span className='text-[black] font-bold'>Sharmeen Asif</span></p>

        <div className="flex justify-center">
  <p className="text-[20px] max-w-[600px] text-center">
    <span className="text-[#A9927D]"></span>Hello! I'm Sharmeen Asif, a web developer specializing in Next.js, HTML, CSS, and TypeScript. With a keen eye for detail and a passion for clean, efficient code, I craft responsive, user-friendly websites and applications. My expertise lies in building seamless, performant front-end experiences, bridging design and functionality to deliver impactful digital solutions. Explore my portfolio to see my latest projects and how I can bring your ideas to life!
  </p>
</div>

  



        <Button textName={"Hire Me"}/>

        <div className='mt-[3.125rem] m-auto sm:w-[60%] lg:w-[30%] lg:px-[1.5rem] py-1 flex gap-[3.125rem] justify-center items-center lg:h-[52px] bg-[#FAA249] rounded-full'>
          <FaFacebookF  size={30} color='black' className='cursor-pointer'/>
          <FaXTwitter size={30} color='black' className='cursor-pointer'/>
          <FaInstagram size={30} color='black' className='cursor-pointer'/>
          <IoLogoWhatsapp size={30} color='black' className='cursor-pointer'/>
          <FaTelegramPlane size={30} color='black' className='cursor-pointer'/>
          </div>

          <div className='mt-[70px] w-full bg-[#1a1a1a] h-[78px] flex justify-evenly items-center'>
            <h1 className='text-white text-[50px] font-bold'>Fiverr</h1>
            <h1 className='text-white text-[50px] font-bold'>UPwork</h1>
            <h1 className='text-white text-[50px] font-bold'>Guru</h1>
            <h1 className='text-white text-[50px] font-bold'>99designs</h1>
          </div>
      </section>
    </>
  )
}

export default HeroSection