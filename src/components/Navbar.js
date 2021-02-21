import React from "react";
import { Link, withRouter } from "react-router-dom";

function Navbar(props) {
  return (
    <div className="navbar">
      <Link className="navbarLink" to="/">
        <h1>Corona</h1>
      </Link>
      <ul>
        <li className={props.location.pathname === "/" ? "active" : ""}>
          <Link className="navbarLink" to="/">
            <p>Home</p>
          </Link>
        </li>
        <li className={props.location.pathname === "/worldmap" ? "active" : ""}>
          <Link className="navbarLink" to="/worldmap">
            <p>World Map</p>
          </Link>
        </li>
        <li className={props.location.pathname === "/charts" ? "active" : ""}>
          <Link className="navbarLink" to="/charts">
            <p>Charts</p>
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default withRouter(Navbar);
