import React from 'react'
import { assets, testimonialsData } from '../assets/assets'
import { motion } from "motion/react"

const Testimonials = () => {
  return (
    <motion.div
      initial={{opacity:0 ,x:200}}
    transition={{duration:2.5}}
    whileInView={{opacity:1 ,x:0}}
    viewport={{once:true}}
    className='container w-full flex flex-col mt-10 pt-10 mb-20 justify-center items-center overflow-hidden px-15 sm:px-22 ld:px-32 mx-auto' id='testimonial' >
        <h1 className='text-xl font-bold sm:text-3xl md:text-4xl'>Costomer <span className='underline underline-offset-4 decoration-1 under '>Testimonial</span></h1>
        <p className='text-gray-700 text-center max-w-80 mb-2'>Real Story From Those Who Found Home With Us</p>
        <div className='grid grid-cols-1 mb-20  mt-20 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center'>
            {testimonialsData.map((testimonial,index)=>(
                <div key={index} className='border text-center rounded-lg shadow sm:max-w-250 md:max-w-350 lg:max-w-500 '>
                    <img  className='w-20 mt-10 h-20 mx-auto '  src={testimonial.image} alt={testimonial.alt} />
                    <h1 className='font-bold text-gray-700 p-2 pt-3 mx-2 leadind-relaxed text-xl'> {testimonial.name}</h1>
                    <p className=' text-gray-500 p-2 pt-3 mx-2 text-xl'>{testimonial.title}</p>
                    <div className='flex mx-auto justify-center'>
                        {Array.from({length: testimonial.rating},(item , index)=>(
                            <img  className='w-6 h-6' src={assets.star_icon} alt="" />
                        )
                        )}
                    </div>
                    <p className='text-gray-400 p-2 text-xl  my-2 leading-relexed text-sm'>{testimonial.text}</p>

                </div>

            ))}
        </div>
    </motion.div>
    
  )
}

export default Testimonials