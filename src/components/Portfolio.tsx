import React from "react";
import { lora } from "@/font";
import Image from "next/image";

function Portfolio() {
  return (
    <>
      <section id="portfolio" className="pt-20 pb-10px w-full py-30
      
      
      px-8 text-center bg-[#0a0908]">
        <h4 className={` text-white text-4xl lg:text-5xl`}>
        <span className="text-[white] text-4xl lg:text-5xl font-bold">PROJECTS</span>
         
        </h4>

        <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-sm lg:text-lg leading-6">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt
          deserunt laudantium officia fuga ipsam quasi corrupti in numquam dolor
          libero explicabo, inventore aperiam, commodi et! Quia iste tempora
          aut, illum culpa ipsum possimus saepe eligendi.
        </p>

        <div className="w-full mt-24 grid items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 md:gap-28">
  {[...Array(3)].map((_, index) => (
    <div className="flex flex-col" key={index}>
      <div className="w-full rounded-3xl overflow-hidden transition-all duration-[0.9s]">
        <Image
          src="/myImage/1.png"
          alt="Laptop, Phone, and Camera"
          width={500}
          height={300}  // Adjusted height for better aspect ratio
          className="w-full h-auto rounded-3xl transition-all duration-[0.9s] hover:scale-80 hover:-rotate-[5deg]"
        />
        
      </div>

      <p className="mt-5 mb-5 text-xl text-center text-white font-bold text-[20px]">Software Development.</p>
    </div>
  ))}
</div>

           
      </section> 
    </>
  );
}

export default Portfolio;
