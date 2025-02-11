import React from "react";
import { Link, NavLink } from "react-router-dom";

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
              <a href="https://t.me/darken_edit">
                <img
                  src="https://e7.pngegg.com/pngimages/527/663/png-clipart-logo-person-user-person-icon-rectangle-photography.png"
                  alt=""
                />
                <p>Arslon</p>
              </a>
            </div>
            <Link to={"/"} target="_blank">
              <button>Logout</button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
