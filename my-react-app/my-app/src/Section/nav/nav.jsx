import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDots} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import { motion } from "framer-motion";
import { AiOutlineMenu } from 'react-icons/ai';
const Nav = () => {
  
const variants = {
  open: (height = 1000) => ({ 
    opacity: 1, x: 0 ,
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  // open: { opacity: 1, x: 0 },

  closed: {
    opacity: 0, x: "-100%",
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
  // closed: { opacity: 0, x: "-100%" }
};
  const [activeNav, setActiveNav]= useState('#')
  const [isOpen, setIsOpen] = useState(false);
  return (
<>
<AiOutlineMenu className='AiOutlineMenu' onClick={() => setIsOpen(isOpen => !isOpen)}/>
      <motion.nav animate={isOpen ? "open" : "closed"} variants={variants}>
      <>
    
      <a href="#"  className={activeNav ==='#' ? 'active' : ''} onClick={() => setActiveNav('#') }><AiOutlineHome className='a'/></a>
      <a href="#AboutMe"  className={activeNav ==='#AboutMe' ? 'active' : ''} onClick={() => setActiveNav('#AboutMe') }><AiOutlineUser className='a'/></a>
      <a href="#experience" className={activeNav ==='#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience') }><BiBook className='a'/></a>
      <a href="#portfolio" className={activeNav ==='#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio') }><RiServiceLine className='a'/></a>
      <a href="#Contact" className={activeNav ==='#Contact' ? 'active' : ''} onClick={() => setActiveNav('#Contact') }><BiMessageSquareDots className='a'/></a>
      
      </>
      </motion.nav>

 </>




  
    
  )
}

export default Nav
