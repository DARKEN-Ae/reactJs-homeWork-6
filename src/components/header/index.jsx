import React from "react";
import { NavLink } from "react-router-dom";

import "./Header.scss";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="nav_link">
          <nav>
            <NavLink to="/home">Home</NavLink>
            <NavLink to="/debts">Debts</NavLink>
            <NavLink to="/transaction">Transaction</NavLink>
          </nav>
          <div className="person-profile">
            <div className="user">
              <img
                src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography.png"
                alt=""
              />
              <p>Arslon</p>
            </div>
            <button>Logout</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
