import React from 'react'
import img2 from './../../ass/img/me.png'
import './About.css'
import { motion } from "framer-motion";
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
const About = () => {
  return (
    <section className='container'>
      
        <div className='About_cont'>
    <div className='About_text'>
    <h1 className='about_title'>Hi, I'm Nick</h1>
    <h2 className="front"> --Frontend devoloper / Data analitics</h2>
    
    
    <CTA/>
    <HeaderSocials/>
    </div>

      <div className='About_img'>
      <motion.div
    className="container"
    initial={{ scale: 0 }}
    animate={{ rotate: 360, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 150,
      damping: 20
    }} >    <img src={img2} alt="" /></motion.div>
     
         </div>
         </div>
         
    </section>
  )
}

export default About