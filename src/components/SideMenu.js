import React, { useState } from "react";

function SideMenu(props) {
  const [active, setActive] = useState("All");
  return (
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
  );
}

export default SideMenu;
