import React from "react";
{
  /* smooth scrolling */
}
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className='Navbar'>
      <nav class='nav'>
        {/* links to about */}
        <Link
          activeClass='active'
          to={"about"}
          smooth={true}
          offset={0}
          duration={1000}
          class='navStyle'
        >
          <a href='/' class='font-weight-light'>
            About Me
          </a>
        </Link>
        {/* links to skills */}
        <Link
          activeClass='active'
          to={"skills"}
          smooth={true}
          offset={0}
          duration={1000}
          class='navStyle'
        >
          <a href='/' class='font-weight-light'>
            Skills
          </a>
        </Link>
        {/* links to contact */}
        <Link
          activeClass='active'
          to={"contact"}
          spy={true}
          smooth={true}
          offset={0}
          duration={1000}
          class='navStyle'
        >
          <a href='/' class='font-weight-light'>
            Contact
          </a>
        </Link>
      </nav>
    </div>
  );
}

export default Navbar;
