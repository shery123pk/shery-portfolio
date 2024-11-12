import React from 'react'
import {lora} from '@/font'
import Button from './Button'
import Image from 'next/image'

function AboutSection() {
  return (
    <>
      <section id='about' className='w-full py-[160px] px-10 bg-[white] flex flex-col md:flex-row justify-center'>
        
        <div className='mx-auto w-[50%] px-[16px] flex flex-col items-start text-left'>
          <p className={`${lora.className} text-[48px] font-bold`}>Sharmeen Asif</p>
          
          <p className={`${lora.className} text-[30px] mt-2 mb-6 text-light-beige text-center lg:text-start text-3xl text-[#FAA249] font-bold`}>Web Developer</p>
          
          <p className='text-[20px] mb-8'>I’m a passionate web developer skilled in Next.js, Tailwind CSS, and TypeScript. With a focus on building fast, responsive, and scalable web applications, I combine clean code with intuitive design.</p>
        
          <Button textName={"Contact Me"}/> 
        </div>

        <div className='w-[50%] sm:w-[55%] lg:w-[60%] mx-auto md:-mt-[100px] md:-mr-[40px] rounded-full flex justify-center items-center'>
  <Image
    src="/myImage/profile.jpg"
    alt="picture"
    width={350}
    height={350}
    className="rounded-full border-[10px] border-solid border-[black]"
  />
</div>
      </section>
      
      <section className="w-full py-5 px-5 mx-auto flex justify-center items-center gap-16 bg-[#1a1a1a] overflow-hidden">
        <Image src={"/myImage/html.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/css.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/typescript.png"} alt='picture' width={70} height={70}></Image>
        <Image src={"/myImage/git.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/figma.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/react.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/node.png"} alt='picture' width={96} height={96}></Image>
        <Image src={"/myImage/next.png"} alt='picture' width={96} height={96}></Image>
      </section>
    </>
  )
}

export default AboutSection