import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFile } from "@fortawesome/free-solid-svg-icons";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import "animate.css/animate.min.css";
import ScrollAnimation from "react-animate-on-scroll";

function About() {
  return (
    <div className='About' id='about'>
      <ScrollAnimation animateIn='zoomIn' duration='3' animateOnce='false'>
        <div class='container containerStyle gradient'>
          <div class='row'>
            <div class='col-sm p-3'>
              <h4 class='font-weight-bold'>About Me</h4>
              Hi, my name is Aryan — welcome to my personal website! I am a high
              school student at Heart Lake Secondary School who has cultivated a
              strong interest in computer science and entrepreneurship. I like
              using software as a tool to solve problems, and am interested in
              the applications of software across various fields, including
              finance and e-commerce.
              <br />
              <br />
              Enclosed is a link to my resume. You'll also see a link to my
              GitHub, where you can check out some of the projects I have worked
              on.
            </div>
            <div class='col-sm pt-4 aboutLink'>
              <button
                type='button'
                class='btn btn-primary px-5 py-2 m-3 font-weight-bold'
              >
                <a href='./resume2.pdf' class='iconLink' download>
                  <FontAwesomeIcon icon={faFile} /> Resume
                </a>
              </button>
              <button
                type='button'
                class='btn btn-primary px-5 py-2 m-3 font-weight-bold'
              >
                <a href='https://www.github.com/aryan-soni' class='iconLink'>
                  <FontAwesomeIcon icon={faCode} /> GitHub
                </a>
              </button>
            </div>
          </div>
        </div>
      </ScrollAnimation>
    </div>
  );
}

export default About;
