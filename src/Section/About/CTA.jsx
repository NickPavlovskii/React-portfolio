import React from 'react'
import CV from '../../ass/СV.pdf'
import { BiPaperPlane } from 'react-icons/bi';
const CTA = () => {
  return (
    <div className='cta'>
      <a href={CV} download="CV_Pavlovskij.pdf" className='btn  btn-primary'>download CV</a>
      <a href='https://t.me/N1klad' className='btn about_button'> Contact me <BiPaperPlane className='Bi' />  </a>
    </div>
  )
}

export default CTA