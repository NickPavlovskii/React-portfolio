import React from 'react'
import {FiAward} from 'react-icons/fi';
import {AiFillProject} from 'react-icons/ai';
import {BiFolderOpen} from 'react-icons/bi';


const Info = () => {
  return (

    <div className='about_info grid'>
        
        <div className="about_box">
          <FiAward className="about_icon a" />
            <h3 className="about__title">Experience</h3>
            <h5 className="about__subtitle">1 year working</h5>
        </div>
        <div className="about_box">
        <AiFillProject className="about_icon a" />
            <h3 className="about___title">Completed</h3>
            <h5 className="about__subtitle">4+ projects</h5>
        </div>
        <div className="about_box">
        <BiFolderOpen className="about_icon a" />
            <h3 className="about___title">Have</h3>
            <h5 className="about__subtitle">5+ sertificates</h5>
        </div>
    </div>
  )
}

export default Info
