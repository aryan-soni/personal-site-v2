import React from "react";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";
import python from "../imgs/python.png";
import java from "../imgs/java.png";
import js from "../imgs/js.png";
import react from "../imgs/react.png";
import html from "../imgs/html.png";
import css from "../imgs/css.png";
import bootstrap from "../imgs/bootstrap.png";
import office from "../imgs/office.png";
import gsuite from "../imgs/gsuite.png";

function Footer() {
  return (
    <div className='Skills'>
      <ScrollAnimation animateIn='zoomIn' duration='3' animateOnce='false'>
        <div class='container containerStyle gradient mt-5'>
          <h4 class='mt-3'>Skills</h4>
          <img src={python} class='rounded mx-auto d-block' alt='...'></img>
          <img src={java} class='rounded mx-auto d-block' alt='...'></img>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default Footer;
