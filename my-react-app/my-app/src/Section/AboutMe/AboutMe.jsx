import React from 'react'
import aboutImg from './../../ass/img/me2.jpg'
import './AboutMe.css'
import Info from './Info';
import {BiPaperPlane} from 'react-icons/bi';
const AboutMe = () => {
  return (
    <section className='aboutSection container' id='AboutMe'>
       
    <h2 className='aboutMe_title'> About Me </h2> 
    <h5 className='about_subtitle'>my introduction</h5>
 
    <div className='about_container grid'>
        <div className='about_me'>
            <div className="about_image">
                <img src={aboutImg} alt="" className='about_img'/>
            </div>
        </div>

        <div className="info">

        <Info className='inf'/>
       
        <p>some info about me</p>
        <a className='btn about_button' href='https://t.me/N1klad'> Let's Talk <BiPaperPlane className='Bi'/>  </a> 
        </div>    
        </div>
        
    </section>
  )
}

export default AboutMe
