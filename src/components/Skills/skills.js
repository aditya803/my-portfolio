import React from "react";
import './skills.css' 
import uiDesign from '../../assets/ui-design.png'
import appDesign from '../../assets/app-design.png'
import websiteDesign from '../../assets/website-design.png'
const Skills = () => {
  return (
    <section id="skills">
        <span className="skillTitle">What I do?</span>
        <span className="skillDesc">I am a skilled person</span>
        <div className="skillBars">
            <div className="skillbar">
                <img src={websiteDesign} alt="" className="skillbarImg" />
                <div className="skillbarText">
                    <h2>Web Development</h2>
                    <p>Proficient in building responsive and interactive web applications using technologies like HTML/CSS, JavaScript, and frameworks like React and Angular.</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={appDesign} alt="" className="skillbarImg" />
                <div className="skillbarText">
                    <h2>Mobile-App Development</h2>
                    <p>Experienced in developing cross-platform mobile applications using Flutter and Dart, with a focus on performance and user experience. Developed and deployed mobile applications with thousands of downloads on both iOS and Android platforms.</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={uiDesign} alt="" className="skillbarImg" />
                <div className="skillbarText">
                    <h2>Backend Development</h2>
                    <p>Proficient in designing and implementing backend architectures for web and mobile applications using Node.js, Java, and Spring framework. Experience in developing and maintaining APIs, integrating with databases like SQL</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
