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
                <img src={uiDesign} alt="" className="skillbarImg" />
                <div className="skillbarText">
                    <h2>UI/UX Design</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={appDesign} alt="" className="skillbarImg" />
                <div className="skillbarText">
                    <h2>App Dev</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
                </div>
            </div>
            <div className="skillbar">
                <img src={websiteDesign} alt="" className="skillbarImg" />
                <div className="skillbarText">
                    <h2>web dev</h2>
                    <p>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Skills
