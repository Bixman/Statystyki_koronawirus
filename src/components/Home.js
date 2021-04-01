import React from "react";
import MainTable from "../components/MainTable";
import WorldTotal from "../components/WorldTotal";
import SideMenu from "../components/SideMenu";

function Home(props) {
  return (
    <div className="home">
      {props.apiStats == "" ? (
        <p>Sorry, no data avaiable right now, try later</p>
      ) : (
        <div className="mainContainer">
          <div className="leftBar">
            <SideMenu />
          </div>

          <div className="content">
            <WorldTotal apiStats={props.apiStats} />
            <MainTable apiStats={props.apiStats} isLoaded={props.isLoaded} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;
