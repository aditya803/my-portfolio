import React from 'react';
import './intro.css';
import bg from '../../assets/profile-photo.png';
import btnimg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent"> 
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Aditya</span><br/>Software Developer</span>
        <p className="introPara">Hi, I am a passionate Software Developer with 1.5 years of experience,<br/> specializing in Backend and Flutter app development.<br/> I am probably creating a silly games as we speak.</p>
        <Link><button className="btn"><img src={btnimg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro