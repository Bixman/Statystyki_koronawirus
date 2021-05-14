import React, { useState } from "react";
import MainTable from "../components/MainTable";
import WorldTotal from "../components/WorldTotal";
import SideMenu from "../components/SideMenu";
import { layoutGenerator } from "react-break";

const layout = layoutGenerator({
  mobile: 0,
  desktop: 600,
});

const OnMobile = layout.is("mobile");
const OnDesktop = layout.is("desktop");

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
          <OnDesktop>
            <div className="leftBar">
              <SideMenu
                chooseContinent={chooseContinent}
                continentChoosen={continentChoosen}
              />
            </div>
          </OnDesktop>

          <div className="content">
            <WorldTotal
              apiStats={props.apiStats}
              continentChoosen={continentChoosen}
            />
            <OnMobile>
              <div className="leftBar">
                <SideMenu
                  chooseContinent={chooseContinent}
                  continentChoosen={continentChoosen}
                />
              </div>
            </OnMobile>
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
