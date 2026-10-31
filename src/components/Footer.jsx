import React from "react";
import { Link } from "react-router-dom";

import navItems from "./NavItems";
import "./footer.css";

function Footer() {
  return (
    <footer className="FooterItems">
      <Link className="AppName" to="/" aria-label="AppLab home">
        App<span>Lab</span>
      </Link>

      <div role="navigation" aria-label="Footer navigation">
        <ul>
          {navItems.map((item) => (
            <li key={item.id}>
              <Link className={item.cName} to={item.url}>
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
