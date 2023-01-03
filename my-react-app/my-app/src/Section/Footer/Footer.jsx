import React from 'react'
import './footer.css'
import {FaVk, FaTelegramPlane, FaInstagram} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer >
        <a href="#" className="footer_logo">NIKLAD</a>
      
         <ul className="permalinks">
          <li><a href="#">Home</a></li>
          <li><a href="">About Me</a></li>
          <li><a href="">Expeirience</a></li>
          <li><a href="">Portfolio</a></li>
          <li><a href="">Contact</a></li>
         </ul>

         <div className="footer_socials">
                <a href="https://vk.com/o_0niklad0_o"><FaVk/></a>
                <a href="https://t.me/N1klad"><FaTelegramPlane/></a>
                <a href="https://www.instagram.com/o__niklad__o/?hl=ru"><FaInstagram/></a>

         </div>
         <div className="footer_copyright">
          <small>&copy; NIKLAD</small>
         </div>
    </footer>
  )
}

export default Footer