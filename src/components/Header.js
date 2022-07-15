import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Bloging App</h1>
      <hr />
      <div className="links">
        <NavLink to="/" className="link" activeClassName="active" exact>
          BLOG
        </NavLink>
        <NavLink to="/add" className="link" activeClassName="active">
          Add BLOG
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
