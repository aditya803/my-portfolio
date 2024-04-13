import React from 'react'
import './Contact.css'
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import InstagramIcon from '../../assets/instagram.png'




const Contact = () => {
  return (
    <section id="contactPage">
        <div className="contact">
            <h1 className="contactPageTitle">Contact Me</h1>
            <span className="contactDesc">
                Please fill out a form to discuss work oppurtunities.
            </span>
            <form className="contactForm">
                <input type="text" className="name" placeholder='Your Name' />
                <input type="text" className="email" placeholder='Your E-mail' />
                <textarea name="message" placeholder='Your Message' className='msg' rows="5"></textarea>
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