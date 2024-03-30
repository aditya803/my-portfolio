import React from 'react';
import './intro.css';
import bg from '../../assets/image.png';
import btnimg from '../../assets/hireme.png';
import { Link } from 'react-scroll';

const Intro = () => {
  return (
    <section id="intro">
      <div className="introContent"> 
        <span className="hello">Hello,</span>
        <span className="introText">I'm <span className="introName">Aditya</span><br/>Developer</span>
        <p className="introPara">Random Text</p>
        <Link><button className="btn"><img src={btnimg} alt='Hire Me' className='btnImg'/>Hire Me</button></Link>
      </div>
      <img src={bg} alt="Profile" className="bg"/>
    </section>
  )
}

export default Intro