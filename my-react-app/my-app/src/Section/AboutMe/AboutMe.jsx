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
       
        <p> <h1> Some info about me: </h1><br/>I am a very purposeful and multitasking person, I have a non-standard mindset, I like to develop in various directions and participate in Olympiads. I am a prize-winner of the interuniversity Physics Olympiad in St. Petersburg and the winner of the qualifying stages (for 2020 and 2022) of the Gazprom Student Olympiad in the areas of “Management in Technical systems” and “Information Technology". I also participate in student life and am a member of the 2020 trade union.</p>
        <a className='btn about_button' href='https://t.me/N1klad'> Let's Talk <BiPaperPlane className='Bi'/>  </a> 
        </div>    
        </div>
        
    </section>
  )
}

export default AboutMe
