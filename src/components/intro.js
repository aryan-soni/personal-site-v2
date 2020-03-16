import React from "react";
import ReactTypingEffect from "react-typing-effect";
import { Link } from "react-scroll";
import About from "./about";

function Intro() {
  return (
    <div className='Intro' id='intro' class='py-auto'>
      <div class='jumbotron'>
        <h5 class='display-4 '>Hi, my name is</h5>

        <h3 class='display-4 font-weight-bold' id='typeEffect'>
          <ReactTypingEffect text='Aryan Soni' />
        </h3>
        <p class='lead mt-5'>
          <Link
            activeClass='active'
            to={"about"}
            spy={true}
            smooth={true}
            offset={500}
            duration={1000}
          >
            <a class='btn btn-primary btn-lg' href='#' role='button'>
              About Me
            </a>
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Intro;
