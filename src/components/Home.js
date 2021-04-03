import React, { useState } from "react";
import MainTable from "../components/MainTable";
import WorldTotal from "../components/WorldTotal";
import SideMenu from "../components/SideMenu";

function Home(props) {
  const [continentChoosen, setContinentChoosen] = useState("All");
  function chooseContinent(value) {
    setContinentChoosen(value);
  }

  return (
    <div className="home">
      {props.apiStats == "" ? (
        <p>Sorry, no data avaiable right now, try later</p>
      ) : (
        <div className="mainContainer">
          <div className="leftBar">
            <SideMenu
              chooseContinent={chooseContinent}
              continentChoosen={continentChoosen}
            />
          </div>
          <div className="content">
            <WorldTotal
              apiStats={props.apiStats}
              continentChoosen={continentChoosen}
            />
            <MainTable
              apiStats={props.apiStats}
              isLoaded={props.isLoaded}
              continentChoosen={continentChoosen}
            />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
