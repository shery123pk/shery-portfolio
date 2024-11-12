import React from "react";
import { FaBullhorn, FaPaintBrush, FaCode, FaSearch } from "react-icons/fa"; // Import icons from react-icons

function Services() {
  return (
    <>
      <section id="services" className="py-20 px-2 md:px-8 bg-[#F4C89C]">
        <div className="text-center">
          <h4 className="text-black font-bold text-4xl lg:text-6xl font-[Caveat]">
            <span className="">
              <span className="text-light-beige capitalize">Client-Focused Services I Provide</span>{" "}
          
            </span>
          </h4>
          <p className="w-[90%] lg:w-[80%] mt-6 mx-auto text-black text-[20px] ">
          I am dedicated to delivering tailored, high-quality web development solutions that align with each client’s unique needs. From creating responsive, user-friendly websites to optimizing performance and ensuring scalability, my goal is to transform ideas into functional, impactful digital experiences. Whether you need a custom-built application or an intuitive interface, I work closely with clients to bring their vision to life while focusing on performance, accessibility, and long-term success!
          </p>
          <div className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-4 text-start">
            
            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
               
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-[30px] font-bold capitalize mb-4">Software Development</h4>
                <p>
                This includes the various stages involved in developing software from planning and design to testing, deployment, and maintenance. Understanding SDLC helps in organizing and streamlining development processes.
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-[30px] font-bold capitalize mb-4">Blockchain Development</h4>
                <p>
                With applications beyond cryptocurrency, blockchain is becoming increasingly important for secure and transparent transaction management across industries like finance, healthcare, and logistics
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[#222] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
               
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-[30px] font-bold capitalize mb-4">Cloud Computing and SaaS</h4>
                <p>
                The cloud allows for scalable infrastructure and on-demand software delivery, leading to the growth of Software-as-a-Service (SaaS) applications
                </p>
              </div>
            </div>

            <div className="rounded-xl py-6 px-4 bg-[black] flex flex-col justify-between items-center cursor-pointer transition-all duration-[1.2s] hover:bg-[#444]">
              <div className="w-full mx-0 text-start flex justify-center">
                
              </div>
              <div className="w-full mt-12 text-white">
                <h4 className="text-[30px] font-bold capitalize mb-4">API Development </h4>
                <p>
                APIs facilitate communication between different software systems, and are critical for integrating various services and enabling interoperability
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}

export default Services;
