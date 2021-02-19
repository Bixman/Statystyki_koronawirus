import React from "react";
import MainTable from "../components/MainTable";
import SearchBar from "../components/SearchBar";
import WorldTotal from "../components/WorldTotal";

function Home(props) {
  return (
    <div className="home">
      <div className="mainContainer">
        <div className="sideBar">
          <p>PPPP</p>
        </div>
        <div className="content">
          <SearchBar apiStats={props.apiStats} />
          <MainTable apiStats={props.apiStats} isLoaded={props.isLoaded} />
        </div>
        <div className="sideBar">
          <WorldTotal apiStats={props.apiStats} />
        </div>
      </div>
    </div>
  );
}

export default Home;
