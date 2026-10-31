import React from "react";
import { Link } from "react-router-dom";

import navItems from "./NavItems";
import "./navbar.css";

function Navbar() {
  return (
    <nav className="NavbarItems" aria-label="Primary navigation">
      <Link className="AppName" to="/" aria-label="AppLab home">
        App<span>Lab</span>
      </Link>

      <ul>
        {navItems.map((item) => (
          <li key={item.id}>
            <Link to={item.url} className={item.cName}>
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link className="try-link" to="/pricing">
            Try for Free
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
