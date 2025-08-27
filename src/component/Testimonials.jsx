import React from 'react'
import { assets, testimonialsData } from '../assets/assets'

const Testimonials = () => {
  return (
    <div className='container w-full flex flex-col justify-center items-center overflow-hidden px-15 sm:px-22 ld:px-32 mx-auto' id='testimonial' >
        <h1 className='text-xl font-bold sm:text-3xl md:text-4xl'>Costomer <span className='underline underline-offset-4 decoration-1 under '>Testimonial</span></h1>
        <p className='text-gray-700 text-center max-w-80 mb-2'>Real Story From Those Who Found Home With Us</p>
        <div className='flex flex-wrap justify-center'>
            {testimonialsData.map((testimonial,index)=>(
                <div key={index} className='border rounded-lg  shadow sm:max-w-250 md:max-w-350 lg:max-w-500 '>
                    <img  className='w-20 h-20 mx-auto '  src={testimonial.image} alt={testimonial.alt} />
                    <h1> {testimonial.name}</h1>
                    <p>{testimonial.title}</p>
                    <div>
                        {Array.from({length: testimonial.rating},(item , index)=>(
                            <img src={testimonial.rating} alt="" />
                        )
                        )}
                    </div>

                </div>

            ))}
        </div>
    </div>
    
  )
}

export default Testimonials