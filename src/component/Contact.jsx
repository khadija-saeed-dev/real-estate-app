import React from 'react'
import { toast } from 'react-toastify';
import { motion } from "motion/react"

const Contact = () => {
   const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "ce9eabe2-36ba-4ebc-a783-0f2eadbefbc6");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult("");
      toast.error(data.message)
    }
  };

  return (
    <motion.div
        initial={{opacity:0 ,y:200}}
    transition={{duration:2}}
    whileInView={{opacity:1 ,y:0}}
    viewport={{once:true}}
    className='container w-full px-20 lg:px-32 flex flex-col justify-center overflow-hidden mx-auto items-center' id='contactus'>
        <h1 className='text-xl font-bold sm:text-3xl md:text-4xl'>Contact <span className='underline underline-offset-4 decoration-1 under '>Us With</span></h1>
        <p className='text-gray-700 text-center max-w-80 mb-2'>Real Story From Those Who Found Home With Us</p>
        <form  onSubmit={onSubmit} className='max-w-[75%] text-1xl mt-12 mb-12 ' >
          <div className='flex justify-between gap-7 text-xl '>
            <div className='w-full md:w-[1/2]'>
                Your Name:
              <input className='w-full border border-gray-400 rounded py-2 px-4' type="text" name='Name' placeholder='Your Name' required />  
            </div>
             <div  className='w-full md:w-[1/2]'>
                Your Email:
              <input className='w-full border border-gray-400 rounded py-2 px-4' type="email" name='Email' placeholder='Your Email' required />  
            </div>
          </div>
         <div className='mt-5 text-xl' >
            Message:
            <textarea name="Message"className='w-full border border-gray-400 rounded py-2 px-4 h-48 resize-none' placeholder='Message' required></textarea>
         </div>
        <div className='flex justify-center mt-4' >
             <button className='text-white bg-blue-600 px-12 font-bold mb-10 py-2 rounded'>{result ? result:"Sending Message"}</button>
        </div>
        </form>
    </motion.div>
  )
}

export default Contact