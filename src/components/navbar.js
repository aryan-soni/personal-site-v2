import React from "react";

function Navbar() {
  return (
    <div className='Navbar'>
      <nav class='navbar navbar-expand-md navbar-dark'>
        <button
          class='navbar-toggler ml-auto'
          type='button'
          data-toggle='collapse'
          data-target='#navbarSupportedContent'
          aria-controls='navbarSupportedContent'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span class='navbar-toggler-icon '></span>
        </button>

        <div
          class='collapse navbar-collapse ml-auto'
          id='navbarSupportedContent'
        >
          <ul class='navbar-nav ml-auto'>
            <li class='nav-item active mx-2'>
              <a class='nav-link navbar-brand' href='#'>
                About Me <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item active mx-2'>
              <a class='nav-link navbar-brand' href='#'>
                Skills <span class='sr-only'>(current)</span>
              </a>
            </li>
            <li class='nav-item active mx-2'>
              <a class='nav-link navbar-brand' href='#'>
                Contact Me <span class='sr-only'>(current)</span>
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
