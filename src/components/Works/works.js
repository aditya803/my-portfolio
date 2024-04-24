import React from "react";
import './works.css'
import FlappyBird from '../../assets/flappy_bird.png'
import BrewCrew from '../../assets/brewcrew.png'
import NewsApp from '../../assets/newsapp.png'

const Works = () => {
  return (
    <section id="works">
        <h2 className="workTitle">My Portfolio</h2>
        <div className="workImgs">
            <a id='flappy' href="https://github.com/aditya803/Flappy_Bird" target="_blank"><img src={FlappyBird} alt="" className="workImg" /></a>
            <a href="https://github.com/aditya803/flutter_firebase" target="_blank"><img src={BrewCrew} alt="" className="workImg" /></a>
            <a href="https://github.com/aditya803/news_app" target="_blank"><img src={NewsApp} alt="" className="workImg" /></a>
        </div>
    </section>
  )
}

export default Works