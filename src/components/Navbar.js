import React from "react";
import { Link, withRouter } from "react-router-dom";
import { slide as Menu } from "react-burger-menu";
import { layoutGenerator } from "react-break";

const layout = layoutGenerator({
  mobile: 0,
  desktop: 600,
});

const OnMobile = layout.is("mobile");
const OnDesktop = layout.is("desktop");

function Navbar(props) {
  return (
    <div className="navbar">
      <Link className="navbarLink" to="/">
        <h1>Corona</h1>
      </Link>
      <OnMobile>
        <Menu right>
          <ul>
            <li className={props.location.pathname === "/" ? "active" : ""}>
              <Link className="navbarLink" to="/">
                <p>Home</p>
              </Link>
            </li>
            <li
              className={
                props.location.pathname === "/worldmap" ? "active" : ""
              }
            >
              <Link className="navbarLink" to="/worldmap">
                <p>World Map</p>
              </Link>
            </li>
            <li
              className={props.location.pathname === "/charts" ? "active" : ""}
            >
              <Link className="navbarLink" to="/charts">
                <p>Charts</p>
              </Link>
            </li>
            <li className={props.location.pathname === "/news" ? "active" : ""}>
              <Link className="navbarLink" to="/news">
                <p>News</p>
              </Link>
            </li>
          </ul>
        </Menu>
      </OnMobile>
      <OnDesktop>
        <ul>
          <li className={props.location.pathname === "/" ? "active" : ""}>
            <Link className="navbarLink" to="/">
              <p>Home</p>
            </Link>
          </li>
          <li
            className={props.location.pathname === "/worldmap" ? "active" : ""}
          >
            <Link className="navbarLink" to="/worldmap">
              <p>World Map</p>
            </Link>
          </li>
          <li className={props.location.pathname === "/charts" ? "active" : ""}>
            <Link className="navbarLink" to="/charts">
              <p>Charts</p>
            </Link>
          </li>
          <li className={props.location.pathname === "/news" ? "active" : ""}>
            <Link className="navbarLink" to="/news">
              <p>News</p>
            </Link>
          </li>
        </ul>
      </OnDesktop>
    </div>
  );
}

export default withRouter(Navbar);
