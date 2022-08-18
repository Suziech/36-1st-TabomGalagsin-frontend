import React, { useState } from 'react';
import NavTopContainer from './NavTopContainer/NavTopContainer';
import Dropdown from './Dropdown/Dropdown';
import './Nav.scss';

function Nav() {
  const [isMouseEnter, setIsMouseEnter] = useState(false);
  return (
    <nav className="Nav">
      <NavTopContainer />
      <div className="navBottomContainer">
        <i
          className="fa-solid fa-bars navIcon"
          onMouseEnter={() => setIsMouseEnter(!isMouseEnter)}
        />
        <img className="logo" src="/images/Nav/logo-yellow.png" alt="logo" />
        <div className="iconLeftSide">
          <i className="fa-solid fa-user navIcon" />
          <i className="fa-solid fa-basket-shopping navIcon" />
        </div>
      </div>
      {isMouseEnter && (
        <Dropdown onMouseLeave={() => setIsMouseEnter(!isMouseEnter)} />
      )}
    </nav>
  );
}
export default Nav;
