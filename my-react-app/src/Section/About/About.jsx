import React from 'react'
import img2 from './../../img/me.png'
import './About.css';
const About = () => {
  return (
    <section id='about'>
      <div className="container">
        <div className='About_cont'>
    <div className='About_text'>
    <h1 className='about_title'>Hi, I'm Nick</h1>
    <h2 className="front"> Frontend devoloper / Data analitics</h2>
    <h3 className="about_info">Some info about me</h3>
    <button>Contact me </button>
    {/* <div className='nik'></div> */}
    </div>

      <div className='About_img'>
         <img src={img2} alt="" />
         </div>
         </div>
         </div>
    </section>
  )
}

export default About