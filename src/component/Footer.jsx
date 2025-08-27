import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div className='  w-full px-4 md:px-20 ld:px-32 overflow-hidden bg-gray-900'id='footer'>
        <div className='container flex flex-col md:flex-row mx-auto justify-between align-start'>
           <div className='w-full pt-4 pb-5  md:w-1/3'>
            <img src={assets.logo_dark} alt="" />
            <p className='text-gray-300 pt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi rerum, fugiat commodi placeat laudantium sed libero quasi ipsa doloremque doloribus!</p>
           </div>
            <div className='w-full pt-4 pb-5  md:w-1/5'>
                <h1 className='text-gray-300 pb-2 text-lg font-bold '>Company</h1>
                <ul className='flex flex-col text-gray-500 '>
                    <a className='hover:text-white' href="#Home">Home</a>
                    <a className='hover:text-white' href="#about">AboutUs</a>
                    <a className='hover:text-white' href="#project">Project</a>
                    <a className='hover:text-white' href="#">Pravite Policy</a>
                </ul>
            </div>
            <div className='w-full  pt-4 pb-5 md:w-1/3'>
                <h1 className='text-gray-300 pb-2 text-lg font-bold '>Subscribe To Our New Channal</h1>
                <p className='text-gray-300'>The Latest News, articals Send To You Daily In Inbox</p>
                <div className='flex gap-2 '>
                      <input className='p-2 w-full md:w-auto border border-gray-700 bg-gray-800 text-gray-400 focus:outline-none' type="email" placeholder='Enter Your Email' />
                      <button className='px-2 rounded p-2 bg-blue-700 text-white '>Subscribe</button>
                </div>
            </div>
        </div>
   <div className='text-gray-300 text-center text-xl border-t border-gray-600 pb-2 pt-2'>
    Copyright 2025 &copy; Greatstack.All Right Reserved.
   </div>
    </div>
  )
}

export default Footer