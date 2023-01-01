import React, { useState } from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDots} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'


const Nav = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <nav>
      <a href="#"  className={activeNav ==='#' ? 'active' : ''} onClick={() => setActiveNav('#') }><AiOutlineHome className='a'/></a>
      <a href="#AboutMe"  className={activeNav ==='#AboutMe' ? 'active' : ''} onClick={() => setActiveNav('#AboutMe') }><AiOutlineUser className='a'/></a>
      <a href="#experience" className={activeNav ==='#experience' ? 'active' : ''} onClick={() => setActiveNav('#experience') }><BiBook className='a'/></a>
      <a href="#portfolio" className={activeNav ==='#portfolio' ? 'active' : ''} onClick={() => setActiveNav('#portfolio') }><RiServiceLine className='a'/></a>
      <a href="#Contact" className={activeNav ==='#Contact' ? 'active' : ''} onClick={() => setActiveNav('#Contact') }><BiMessageSquareDots className='a'/></a>
    </nav>
  )
}

export default Nav
