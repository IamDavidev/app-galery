import { useState } from 'react';

const NavBar = () => {
  const [is_active, setIs_active] = useState('');
  const handleActive = () => {
    if (is_active !== 'is-active') return setIs_active('is-active');
    return setIs_active('');
  };
  return (
    <div className="App__Navabar ">
      <nav
        className="navbar has-text-black-bis"
        role="navigation"
        aria-label="main navigation"
      >
        <div className="navbar-brand has-background-black-bis">
          <a
            className="navbar-item"
            href="https://github.com/L-David-T"
            rel="noreferrer"
            target="_blank"
          >
            <h1 className="is-primary ">David Lezama</h1>
          </a>
          <button  
            className="navbar-burger"
            aria-label="menu"
            aria-expanded="false"
            data-target="navbarBasicExample"
            onClick={handleActive}
            
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </button>
        </div>
        <div
          id="navbarBasicExample"
          className={`navbar-menu ${is_active} has-background-dark has-text-dark`}
        >
          {/* <div className="navbar-start">
            <a href className="navbar-item">
              Home
            </a>
            <a href className="navbar-item">
              Documentation
            </a>
            <div className="navbar-item has-dropdown is-hoverable ">
              <a href className="navbar-link">
                More
              </a>
              <div className="navbar-dropdown">
                <a href className="navbar-item">
                  About
                </a>
                <a href className="navbar-item">
                  Jobs
                </a>
                <a href className="navbar-item">
                  Contact
                </a>
                <hr  className="navbar-divider" />
                <a href className="navbar-item">
                  Report an issue
                </a>
              </div>
            </div>
          </div> */}
          <div className="navbar-end">
            <div className="navbar-item">
              <div className="buttons">
                <a href className="button is-primary">
                  <strong>Sign up</strong>
                </a>
                <a href className="button is-primary">
                  Log in
                </a>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
