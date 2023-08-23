import React from 'react'
import {AiFillGitlab} from 'react-icons/ai';
import {AiFillGithub} from 'react-icons/ai';
import {AiOutlineLinkedin} from 'react-icons/ai';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://gitlab.com/O_niklad_O" target='_blank'><AiFillGitlab className='ai'/></a>
        <a href="https://github.com/NickPavlovskii" target='_blank'><AiFillGithub className='ai'/></a>
        <a href="" target='_blank'><AiOutlineLinkedin className='ai'/></a>
    </div>
  )
}

export default HeaderSocials