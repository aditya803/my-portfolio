import React, { useRef } from 'react'
import './Contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';



const Contact = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
        emailjs
          .sendForm('service_moj9btb', 'template_umsydyn', form.current,'Oqds7uQacnR8tctR_',)
          .then(
            (result) => {
              console.log('SUCCESS!');
              e.target.reset();
              alert('Email Sent!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <section id="contactPage">
            <div className="contact">
                <h1 className="contactPageTitle">Contact Me</h1>
                <span className="contactDesc">
                    Please fill out a form to discuss work oppurtunities.
                </span>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                    <input type="text" className="email" placeholder='Your E-mail' name='your_email' />
                    <textarea name="message" placeholder='Your Message'  className='msg' rows="5"></textarea>
                    <button className="submitBtn" type='submit' value='Send'>Submit</button>
                    <div className="links">
                        <img src={FacebookIcon} alt="FacebookIcon" className="link" />
                        <img src={TwitterIcon} alt="TwitterIcon" className="link" />
                        <img src={YoutubeIcon} alt="YoutubeIcon" className="link" />
                        <img src={InstagramIcon} alt="InstagramIcon" className="link" />
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact