import React from "react";
import Navigation from "./Navigation";
import { LOGO_URL } from "../utils/constant";

const Header = () => {
  const logo = LOGO_URL;
  return (
    <div className="header-container">
      <div className="logo">
        <img src={logo} width={120} alt="Logo" />
      </div>
      <div className="navigation">
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <a href="#">Cart</a>
          </li>
        </ul>
      </div>
    </div>
  );
};
export default Header;
