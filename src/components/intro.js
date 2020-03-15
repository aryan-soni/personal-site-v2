import React from "react";
import ReactTypingEffect from "react-typing-effect";

function Intro() {
  return (
    <div className='Intro'>
      <div class='jumbotron'>
        <h5 class='display-4 '>Hi, my name is</h5>

        <h3 class='display-4 font-weight-bold' id='typeEffect'>
          <ReactTypingEffect text='Aryan Soni' />
        </h3>
        <p class='lead mt-5'>
          <a class='btn btn-primary btn-lg' href='#' role='button'>
            About Me
          </a>
        </p>
      </div>
    </div>
  );
}

export default Intro;
