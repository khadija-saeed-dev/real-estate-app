import React, { useState } from "react";
import Navbar from './Navbar'
import headerimg from '../assets/header_img.png'
import { motion } from "motion/react"
const Header = () => {
  return (
    <div
    className="min-h-screen w-full  bg-cover bg-contain bg-center flex mb-4 items-center w-full overflow-hidden
     " style={{background:`url(${headerimg}) center center / cover no-repeat`}} id="Header">
          <Navbar/>
          <motion.div 
          initial={{opacity:0,y:100}}
          transition={{duration:1.9}}
          whileInView={{opacity:1,y:0}}
          viewport={{once:true}}
          className="container text-center mx-auto w-full px-6 py-4 md:px-20 lg:px-32 text-white">
            <h2 className="text:5xl sm:text-6xl md:text-[82px] inline-block font-semibold py-5 pt-20 max-w-3xl">Explore Home That Fit Your Dreams</h2>
            <div className="space-x-6 mt-16 ">
              <a href="#project" className="border bg-blue-500 border-white px-6 py-2 rounded  ">Project</a>
              <a href="#contactus"  className=" bg-blue-500 px-6 py-2 rounded  ">Contact Us</a>
            </div>
          </motion.div>
    </div>
  );
};

export default Header;
