import React, { useEffect } from 'react'
import {assets} from '../assets/assets' 
import { useState } from 'react'

const Navbar = () => {
  const [ShowMobileMenu,setShowMobileMenu]=useState(false)
   useEffect(()=>{
if(setShowMobileMenu){
  document.body.style.overflow='hidden'
}
else{
   document.body.style.overflow='auto'
}
return()=>{
   document.body.style.overflow='auto'
}
   },[ShowMobileMenu])
  return (
    <div className='absolute top-0 left-0 w-full z-10'>
        <div className='container flex mx-auto justify-between px-6 py-4 items-center md:px-20 lg:px-32 bg-transparent'>
                    <img src={assets.logo} alt="" />
        <ul className='mx-3 hidden md:flex gap-7 text-white '>
             <a href="#Home" className='cursor-pointer hover:text-gray-400'>Home</a>
            <a href="#about" className='cursor-pointer hover:text-gray-400'>About</a>
            <a href="#project" className='cursor-pointer hover:text-gray-400'>Product</a>
            <a href="#testimonial" className='cursor-pointer hover:text-gray-400'>Testimonial</a>
        </ul>
        <button   className={`hidden  md:block bg-white px-8 py-2 rounded-full`}>Sign up</button>
        <img src={assets.menu_icon} onClick={()=>{setShowMobileMenu(true)}} className={`md:hidden w-5 cursor-pointer `} alt="" />
        </div>
        {/* menu or navbar for mobile screen */}
        <div className={`md:hidden ${ShowMobileMenu ? 'w-full fixed' :'h-0 w-0'}  top-0 right-0 bottom-0 overflow-hidden bg-white transition-all`}>
          <div className=' flex justify-end cursor-pointer'>
            <img src={assets.cross_icon} onClick={()=>{setShowMobileMenu(false)}} className='w-6 py-4' alt="" />
          </div>
          <ul className='flex flex-col text-center px-5 items-center text-lg'> 
            <a  href="#Home" onClick={()=>{setShowMobileMenu(false)}} className='inline-block px-2 py-2 rounded-full'>Home</a>
            <a href="#about" onClick={()=>{setShowMobileMenu(false)}} className='inline-block px-2 py-2 rounded-full '>About</a>
            <a href="#project" onClick={()=>{setShowMobileMenu(false)}} className='inline-block px-2 py-2 rounded-full'>Products</a>
            <a href="#testimonial" onClick={()=>{setShowMobileMenu(false)}} className='inline-block px-2 py-2 rounded-full '>Testimonials</a>
          </ul>
        </div>
    </div>
  )
}

export default Navbar