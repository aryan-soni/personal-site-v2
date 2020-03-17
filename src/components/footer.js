import React from "react";

import { Link } from "react-scroll";

function Footer() {
  return (
    <div className='Footer' id='footer'>
      <div class='container my-3' id='footerContainer'>
        {/* links to top */}
        <Link
          activeClass='active'
          to={"intro"}
          spy={true}
          smooth={true}
          offset={-70}
          duration={1000}
        >
          <a class='btn btn-primary btn-sm' href='/' role='button'>
            Back to Top
          </a>
        </Link>
      </div>
    </div>
  );
}

export default Footer;
