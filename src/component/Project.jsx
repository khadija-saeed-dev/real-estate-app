import React, { useState ,useEffect } from 'react'
import { assets, projectsData } from '../assets/assets'
import { motion } from "motion/react"
const Project = () => {
  const [CurrentIndex ,setCurrentIndex]=useState(0);
  const [CardsToShow,setCardsToShow]=useState(1);
  // Responsive cardsToShow logic
useEffect(()=>{
  const updatecardstoshow=()=>{
    if(window.innerWidth>=1024){
    setCardsToShow(projectsData.length) //to show all the cards at once 
    }
    else{
      setCardsToShow(1)  //sirf aak card show hoga 
    }
  };
  updatecardstoshow();
  window.addEventListener("resize",updatecardstoshow);
  return()=> window.removeEventListener("resize",updatecardstoshow);
},[])
  // for next and previous slider
  const prevSlide =()=>{
    setCurrentIndex((prevIndex)=>(prevIndex-1 +projectsData.length)% projectsData.length);
  };
  const nextSlide=()=>{
    setCurrentIndex((prevIndex)=>(prevIndex+1)%projectsData.length);
  };
  return (
    <motion.div 
     initial={{opacity:0 ,x:-200}}
    transition={{duration:2.5}}
    whileInView={{opacity:1 ,x:0}}
    viewport={{once:true}}
    className='container w-full min-h-screen flex flex-col mx-auto px-14 md:px-20 lg:px-32  justify-center items-center' id='project' >
        <h1 className='text-2xl sm:text-4xl font-bold text-bolder '>Project <span className='underline underline-offset-2 decoration-1 underline'>Completed</span></h1>
        <p className='text-gray-500 text-center max-w-80 mx-auto '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim, quam.</p>
        {/* slider button */}
        <div className='flex w-full  justify-end items-center mb-8 '>
            <button><img className='bg-gray-200  p-3 mr-2 rounded'onClick={prevSlide} src={assets.left_arrow} alt="Previous" aria-label='Previous Project' /></button>
           <button> <img className='bg-gray-200  p-3 mr-2 rounded'onClick={nextSlide} src={assets.right_arrow} alt="Next" aria-label='Next project' /></button>
        </div>
       {/* project slidder container  */}
       <div className='overflow-hidden '>
        <div className='flex gap-5 transition-transform duration-500 ease-in-out'
        style={{transform:`translateX(-${CurrentIndex*(100/CardsToShow)}%)`}}>
          {projectsData.map((project,index)=>(
            <div key={index} className='w-full h-max sm:w-1/4 flex-shrink-0 relative '>
              <img src={project.image} alt={project.title} className='h-auto max-w-300 sm:max-w-400 md:w-full rounded-lg shadow mx-auto ' />
              <div className='-mt-8 relative z-10 flex justify-center' >
                  <div className='bg-white inline-block px-2 py-2 w-3/4 shadow-md ' >
                    <h1 className='text-xl font-semibold text-gray-700'>
                      {project.title}
                    </h1>
                    <p className='text-gray-500 text-sm'>
                      {project.price} <span className='p-1'>|</span> {project.location}
                    </p>
                  </div>
              </div>
            </div>
          ))}
        </div>
       </div>
    </motion.div>
  )
}

export default Project