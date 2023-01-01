import React from 'react'
import CV from '../../ass/certificate.pdf'
import {BiPaperPlane} from 'react-icons/bi';
const CTA = () => {
  return (
    <div className='cta'>

    <a href={CV} download className='btn  btn-primary'>download CV</a>
    <a className='btn about_button'> Contact me <BiPaperPlane className='Bi'/>  </a> 
    </div>
  )
}

export default CTA