import React, { useState } from "react";
import { layoutGenerator } from "react-break";

const layout = layoutGenerator({
  mobile: 0,
  desktop: 890,
});

const OnMobile = layout.is("mobile");
const OnDesktop = layout.is("desktop");

function SideMenu(props) {
  const [active, setActive] = useState("All");
  const [dropDownClass, setDropDownClass] = useState(
    "dropdown-content sideMenu"
  );
  return (
    <div>
      <OnDesktop>
        <div className="sideMenu">
          <button
            className={active === "All" ? "active" : ""}
            onClick={() => {
              props.chooseContinent("All");
              setActive("All");
            }}
          >
            World
          </button>
          <button
            className={active === "Africa" ? "active" : ""}
            onClick={() => {
              props.chooseContinent("Africa");
              setActive("Africa");
            }}
          >
            Africa
          </button>
          <button
            className={active === "Asia" ? "active" : ""}
            onClick={() => {
              props.chooseContinent("Asia");
              setActive("Asia");
            }}
          >
            Asia
          </button>
          <button
            className={active === "Europe" ? "active" : ""}
            onClick={() => {
              props.chooseContinent("Europe");
              setActive("Europe");
            }}
          >
            Europe
          </button>
          <button
            className={active === "North-America" ? "active" : ""}
            onClick={() => {
              props.chooseContinent("North-America");
              setActive("North-America");
            }}
          >
            North America
          </button>
          <button
            className={active === "Oceania" ? "active" : ""}
            onClick={() => {
              props.chooseContinent("Oceania");
              setActive("Oceania");
            }}
          >
            {" "}
            Oceania
          </button>
          <button
            className={active === "South-America" ? "active" : ""}
            onClick={() => {
              props.chooseContinent("South-America");
              setActive("South-America");
            }}
          >
            South America
          </button>
        </div>
      </OnDesktop>
      <OnMobile>
        <div className="sideMenu">
          <button
            onClick={() => setDropDownClass("dropdown-content show sideMenu")}
            className="dropbtn"
          >
            {active == "All" ? "World" : active}
          </button>
          <div id="myDropdown" className={dropDownClass}>
            <button
              className={active === "All" ? "active" : ""}
              onClick={() => {
                props.chooseContinent("All");
                setActive("All");
                setDropDownClass("dropdown-content sideMenu");
              }}
            >
              World
            </button>
            <button
              className={active === "Africa" ? "active" : ""}
              onClick={() => {
                props.chooseContinent("Africa");
                setActive("Africa");
                setDropDownClass("dropdown-content sideMenu");
              }}
            >
              Africa
            </button>
            <button
              className={active === "Asia" ? "active" : ""}
              onClick={() => {
                props.chooseContinent("Asia");
                setActive("Asia");
                setDropDownClass("dropdown-content sideMenu");
              }}
            >
              Asia
            </button>
            <button
              className={active === "Europe" ? "active" : ""}
              onClick={() => {
                props.chooseContinent("Europe");
                setActive("Europe");
                setDropDownClass("dropdown-content sideMenu");
              }}
            >
              Europe
            </button>
            <button
              className={active === "North-America" ? "active" : ""}
              onClick={() => {
                props.chooseContinent("North-America");
                setActive("North-America");
                setDropDownClass("dropdown-content sideMenu");
              }}
            >
              North America
            </button>
            <button
              className={active === "Oceania" ? "active" : ""}
              onClick={() => {
                props.chooseContinent("Oceania");
                setActive("Oceania");
                setDropDownClass("dropdown-content sideMenu");
              }}
            >
              {" "}
              Oceania
            </button>
            <button
              className={active === "South-America" ? "active" : ""}
              onClick={() => {
                props.chooseContinent("South-America");
                setActive("South-America");
                setDropDownClass("dropdown-content sideMenu");
              }}
            >
              South America
            </button>
          </div>
        </div>
      </OnMobile>
    </div>
  );
}

export default SideMenu;
