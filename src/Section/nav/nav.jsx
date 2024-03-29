import React, { useState } from "react";
import "./nav.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook, BiMessageSquareDots } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { motion } from "framer-motion";
import { AiOutlineMenu } from "react-icons/ai";
const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
    
      <motion.nav className="nav">
        <>
          <a
            href="#"
            className={activeNav === "#" ? "active" : ""}
            onClick={() => setActiveNav("#")}
          >
            <AiOutlineHome className="a" />
          </a>
          <a
            href="#AboutMe"
            className={activeNav === "#AboutMe" ? "active" : ""}
            onClick={() => setActiveNav("#AboutMe")}
          >
            <AiOutlineUser className="a" />
          </a>
          <a
            href="#experience"
            className={activeNav === "#experience" ? "active" : ""}
            onClick={() => setActiveNav("#experience")}
          >
            <BiBook className="a" />
          </a>
          <a
            href="#portfolio"
            className={activeNav === "#portfolio" ? "active" : ""}
            onClick={() => setActiveNav("#portfolio")}
          >
            <RiServiceLine className="a" />
          </a>
          <a
            href="#Contact"
            className={activeNav === "#Contact" ? "active" : ""}
            onClick={() => setActiveNav("#Contact")}
          >
            <BiMessageSquareDots className="a" />
          </a>
        </>
      </motion.nav>
    </>
  );
};

export default Nav;
