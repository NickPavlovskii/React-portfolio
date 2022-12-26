import React from 'react'

import { MdOutlineNightsStay} from 'react-icons/md';
import './header.css'
const header = () => {
  return (
    <section className='header' id='header'>
   <nav className='nav container'>
    <a href="" className="nav_logo">Niklad</a>
    <div className="nav_menu" id="nav-menu">
        <ul className="nav_list">

            <li className="nav_item"><a href="" className="nav_link acctive">Home </a></li>
            <li className="nav_item"><a href="" className="nav_link"> About</a></li>
            <li className="nav_item"><a href="" className="nav_link">Skills</a></li>
            <li className="nav_item"><a href="" className="nav_link">Portfolio</a></li>
            <li className="nav_item"><a href="" className="nav_link">Contacnts</a></li>
            <li className="nav_item"><a href="" className="nav_link"><MdOutlineNightsStay/></a></li>
        </ul>
    
    </div>
   </nav>
    {/* <img src={im} alt="" /> */}
    </section>
  )
}

export default header