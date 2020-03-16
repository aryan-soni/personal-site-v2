import React from "react";
import { Link } from "react-scroll";
import About from "./about";

function Navbar() {
  return (
    <div className='Navbar'>
      <nav>
        <Link
          activeClass='active'
          to={"about"}
          spy={true}
          smooth={true}
          offset={500}
          duration={1000}
          class='navStyle'
        >
          <a href='/'>About Me</a>
        </Link>
        <Link
          activeClass='active'
          to={"skills"}
          spy={true}
          smooth={true}
          offset={500}
          duration={1000}
          class='navStyle'
        >
          <a href='/'>Skills</a>
        </Link>
        <Link
          activeClass='active'
          to={"contact"}
          spy={true}
          smooth={true}
          offset={500}
          duration={1000}
          class='navStyle'
        >
          <a href='/'>Contact</a>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
