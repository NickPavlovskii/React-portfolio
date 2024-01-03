
import {MdOutlineEmail} from 'react-icons/md';
import {FaTelegramPlane, FaWhatsapp} from 'react-icons/fa';
import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'

const Contact = () => {
   const form =useRef();
   const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6uwb2u9', 'template_mxpx3jk', form.current, 'hClrNujk1DBN3NoiH')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
    <section id='Contact'>
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="Contact_container">
            <div className="contact_options">
              <article className='contact_option'>
                <MdOutlineEmail className='contact_option-icon'/>
                  <h4>Email</h4>
                  <h5>o_oniklado_o@list.ru</h5>
                  <a href="mailto:o_oniklado_o@list.ru" target='_blank'>Send a message</a>
              </article>
              <article className='contact_option'>
                <FaTelegramPlane className='contact_option-icon'/>
                  <h4>Telegram</h4>
                  <h5>@N1klad</h5>
                  <a href="https://t.me/N1klad" target='_blank'>Send a message</a>
              </article>
              <article className='contact_option'>
                <FaWhatsapp className='contact_option-icon'/>
                  <h4>whatsApp</h4>
                  <h5>89883620722</h5>
                  <a href="https://wa.me/89883620722" target='_blank'>Send a message</a>
              </article>
            </div>
            <form action="" ref={form} onSubmit={sendEmail}>
              <input type="text" name='name' placeholder='Your Full Name' required/>
              <input type="email" name='email' placeholder='Your email' required/> 
            <textarea name="message" id=""  rows="7" placeholder='Your message' required></textarea>
            <button type='submit' className='btn btn-primary'>Send Message</button>
            </form>
        </div>
    </section>
  )
}

export default Contact



