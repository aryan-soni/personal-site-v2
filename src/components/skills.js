import React from "react";
{
  /* animation on scrolling */
}
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
{
  /* import imgs */
}
import python from "../imgs/python.png";
import java from "../imgs/java.png";
import js from "../imgs/js.png";
import react from "../imgs/react.png";
import html from "../imgs/html.png";
import css from "../imgs/css.png";
import bootstrap from "../imgs/bootstrap.png";
import office from "../imgs/office.png";
import gsuite from "../imgs/gsuite.png";

function Skills() {
  return (
    <div className='Skills' id='skills'>
      {/* scrolling animation */}
      <ScrollAnimation animateIn='zoomIn' duration='3' animateOnce='false'>
        <div class='container gradient mt-5' id='firstImgContainer'>
          <h4 class='mt-4 ml-3'>Skills</h4>
        </div>
        <div class='container imgContainer gradient'>
          <img src={python} class='rounded mx-auto d-block' alt='...'></img>
          <img src={java} class='rounded mx-auto d-block' alt='...'></img>
          <div class='overlay'>
            <div class='imgText my-auto'>
              <p class='mt-3'>Python</p>
              <p>Java</p>
            </div>
          </div>
        </div>
        <div class='container imgContainer gradient'>
          <img src={js} class='rounded mx-auto d-block' alt='...'></img>
          <img src={react} class='rounded mx-auto d-block' alt='...'></img>
          <div class='overlay'>
            <div class='imgText my-auto'>
              <p class='mt-3'>JavaScript</p>
              <p>React.js</p>
            </div>
          </div>
        </div>
        <div class='container imgContainer gradient'>
          <img src={html} class='rounded mx-auto d-block' alt='...'></img>
          <img src={css} class='rounded mx-auto d-block' alt='...'></img>
          <div class='overlay'>
            <div class='imgText my-auto'>
              <p class='mt-3'>HTML5</p>
              <p>CSS3</p>
            </div>
          </div>
        </div>
        <div class='container imgContainer gradient'>
          <img src={bootstrap} class='rounded mx-auto d-block' alt='...'></img>
          <img src={office} class='rounded mx-auto d-block' alt='...'></img>
          <div class='overlay'>
            <div class='imgText my-auto'>
              <p class='mt-3'>Bootstrap.js</p>
              <p>Office Suite</p>
            </div>
          </div>
        </div>
        <div class='container imgContainer gradient' id='lastImg'>
          <img src={gsuite} class='rounded mx-auto d-block' alt='...'></img>
          <div class='overlay'>
            <div class='imgText my-auto'>
              <p class='mt-3'>G Suite</p>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Skills;
