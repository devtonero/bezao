import React from "react";
import "./style.css";
import logo from "../../images/Frame.png";

import { FaSearch, FaShoppingCart } from "react-icons/fa";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="navcont">
            <img src={logo} alt="logo" />
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Noop</a>
              </li>
              <li>
                <a href="/">Meal</a>
              </li>
            </ul>
            <div className="icons">
              <div className="icon">
                <FaSearch />
                <FaShoppingCart />
              </div>

              <div className="signin">Sign in</div>
              <button>Create Account</button>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default NavBar;
