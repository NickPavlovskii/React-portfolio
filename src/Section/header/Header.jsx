import React, { useState } from 'react'


import './header.css'
const Header = () => {
  const [activeNav, setActiveNav]= useState('#')
  return (
    <div className='header' id='header'>
   <div className='nav container'>
    <a href="" className="nav_logo">Niklad</a>
    <div className="nav_menu" id="nav-menu">
        <ul className="nav_list">

            <li  className="nav_item"><a href="#" className={activeNav ==='#' ? 'active' : '' || "nav_link"} onClick={() => setActiveNav('#') }>Home </a></li>
            <li className="nav_item"><a href="#AboutMe" className={ activeNav ==='#AboutMe' ? 'active' : ''|| "nav_link"  } onClick={() => setActiveNav('#') }> About</a></li>
            <li className="nav_item"><a href="#experience" className={ activeNav ==='#experience' ? 'active' : ''|| "nav_link"  } onClick={() => setActiveNav('#') }>experience</a></li>
            <li className="nav_item"><a href="#services" className={ activeNav ==='#services' ? 'active' : ''|| "nav_link"  } onClick={() => setActiveNav('#') }>Portfolio</a></li>
            <li className="nav_item"><a href="#Contact" className={ activeNav ==='#Contact' ? 'active' : ''|| "nav_link"  } onClick={() => setActiveNav('#') }>Contacnts</a></li>
            
        </ul>
    
    </div>
   </div>
    {/* <img src={im} alt="" /> */}
    </div>
  )
}

export default Header