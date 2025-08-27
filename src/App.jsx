import React from 'react'
// import Navbar from './component/Navbar'
import Header from './component/Header'
import About from './component/About'
import Project from './component/Project'
import Testimonial from './component/Testimonials'
import Contact from './component/Contact'
  import { ToastContainer} from 'react-toastify';
import Footer from './component/footer'
  

const App = () => {
  return (
    <div className='overflow-hidden w-full'>
      <ToastContainer/>
       <Header/>
       <About/>
       <Project/>
       <Testimonial/>
       <Contact/>
     <Footer/>
    </div>
  )
}

export default App