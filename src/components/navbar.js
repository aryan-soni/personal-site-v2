import React from "react";
import { Link } from "react-scroll";

function Navbar() {
  return (
    <div className='Navbar'>
      <nav class='nav'>
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
