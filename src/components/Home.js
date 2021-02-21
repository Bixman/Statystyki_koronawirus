import React from "react";
import MainTable from "../components/MainTable";
import SearchBar from "../components/SearchBar";
import WorldTotal from "../components/WorldTotal";

function Home(props) {
  return (
    <div className="home">
      <div className="mainContainer">
        <div className="leftBar">
          <SearchBar apiStats={props.apiStats} />
        </div>
        <div className="content">
          <MainTable apiStats={props.apiStats} isLoaded={props.isLoaded} />
        </div>
        <div className="rightBar">
          <WorldTotal apiStats={props.apiStats} />
        </div>
      </div>
    </div>
  );
}

export default Home;
