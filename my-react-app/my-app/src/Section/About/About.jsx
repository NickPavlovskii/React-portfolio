import React from 'react'
import img2 from './../../ass/img/me.png'
import './About.css'
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
         <img src={img2} alt="" />
         </div>
         </div>
         
    </section>
  )
}

export default About