import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import Dropdown from './Dropdown/Dropdown';
import './NavBottomContainer.scss';

function NavBottomContainer({ color }) {
  const [isMouseEnter, setIsMouseEnter] = useState(false);

  return (
    <div className="navBottomContainer">
      <div className={`navbar ${color}`}>
        <div className="navIconWrapper">
          <div
            onMouseEnter={() => setIsMouseEnter(!isMouseEnter)}
            onMouseLeave={() => setIsMouseEnter(!isMouseEnter)}
          >
            <i className="fa-solid fa-bars navIcon menu" />
            {isMouseEnter && <Dropdown />}
          </div>
          <Link to="/" className="linkComponent">
            <img
              className="logo"
              src="/images/Nav/logo-yellow.png"
              alt="logo"
            />
          </Link>

          <div className="iconLeftSide">
            <i className="fa-solid fa-user navIcon" />
            <i className="fa-solid fa-basket-shopping navIcon" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBottomContainer;
