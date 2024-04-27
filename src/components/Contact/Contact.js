import React, { useRef } from 'react'
import './Contact.css'
import LinkedInLogo from '../../assets/LinkedIN_black.png'
import GithubLogo from '../../assets/Github_black.png'
import CVLogo from '../../assets/cvlogo.png'
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
                        <a href="https://www.linkedin.com/in/aditya-pandey-aa8a28193/" target='_blank'><img src={LinkedInLogo} alt="LinkedinIcon" className="link"/></a>
                        <a href="https://github.com/aditya803" target='_blank'><img src={GithubLogo} alt="GithubIcon" className="link" /></a>
                        <a href="https://drive.google.com/file/d/1m8Kl8cfrN_xe8U2LUdf8Kn_y8Q36RAM1/view?usp=sharing" target='_blank'><img src={CVLogo} alt="CVIcon" className="link"/></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact