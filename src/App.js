import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "./components/Navbar.js";
import MainTable from "./components/MainTable.js";
import SearchBar from "./components/SearchBar.js";
import "./App.scss";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiStats, setApiStats] = useState([]);
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "x-rapidapi-key": "21c05936a1msh957ddfcb8ebd453p1119c0jsne242179c9b7c",
      "x-rapidapi-host": "covid-193.p.rapidapi.com"
    }
  };

  function list() {
    axios
      .request(options)
      .then(function(response) {
        setApiStats(response.data.response);
        console.log(apiStats);
        setIsLoaded(true);
      })
      .catch(function(error) {
        console.error(error);
      });
  }

  useEffect(() => {
    list();
  }, []);

  return (
    <div className="App">
      <Navbar apiStats={apiStats} />
      <div className="content">
        <SearchBar apiStats={apiStats} />
        <MainTable apiStats={apiStats} isLoaded={isLoaded} />
      </div>
    </div>
  );
}

export default App;
