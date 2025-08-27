import React from 'react'
import { assets } from '../assets/assets'
import { motion } from "motion/react"
const About = () => {
  return (
    <motion.div 
    initial={{opacity:0 ,x:100}}
    transition={{duration:2.3}}
    whileInView={{opacity:1 ,x:0}}
    viewport={{once:true}}
    className='container flex flex-col w-full  mx-auto mt-10  items-center justify-center px-14 md:px-20 lg:px-32' id='about'>
        <h1 className='font-bold text-2xl md:text-4xl mb-2' >About <span className='underline underline-offset-2 decoration-1 under'>Our Brand</span></h1>
        <p className='text-gray-600 font-light text-center max-w-80'>Passinate About Property,Decided To Your Vision</p>
        <div className='flex flex-col md:flex-row mt-10 md:justify-center :items-center'>
          <img src={assets.brand_img} alt="" className=' "w-full max-w-[200px] sm:max-w-[300px] md:max-w-[400px] h-auto mx-auto rounded-lg shadow ' />
          <div className='flex flex-col md:flex-row sm:items-center md:justify-start text-gray-600'>
            <div className='grid grid-cols-2  gap-6 md:pl-20'>
               <div >
                <p className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 '>10+</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
                <div >
                <p className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800'>20+</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
                <div >
                <p className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800'>22+</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
               <div >
                <p className='text-xl sm:text-2xl md:text-3xl font-bold text-gray-800'>25+</p>
                <p>Lorem ipsum dolor sit.</p>
              </div>
              <div  className='my-5 mx-auto w-300 justify-center  sm:w-[350px] md:w-[450px] leading-tight overflow-hidden  '>
              <p className='text-gray-800 ' >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi temporibus exercitationem quos eius ipsa autem a vel rerum consectetur libero! Rem quas excepturi dolorem, aspernatur eum deleniti repellat vel ullam, ducimus ipsum obcaecati non libero esse voluptatem quos porro, doloremque quaerat sit incidunt fugit explicabo at aliquam sapiente? Corrupti deleniti voluptatem atque totam blanditiis ea aliquam, ratione consectetur non et.
          </p>
          <button className='bg-blue-600 text-xl text-white text-bold ml-20 w-20 font-bold rounded m-2 p-2 ' >Project</button>
           </div>
            </div>
           
          </div>
        </div>
       
    </motion.div>
  )
}

export default About