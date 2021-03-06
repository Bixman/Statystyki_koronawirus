import React, { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Navbar, Footer, Home, Map, Charts } from "./components";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const [apiStats, setApiStats] = useState([]);
  const options = {
    method: "GET",
    url: "https://covid-193.p.rapidapi.com/statistics",
    headers: {
      "x-rapidapi-key": "21c05936a1msh957ddfcb8ebd453p1119c0jsne242179c9b7c",
      "x-rapidapi-host": "covid-193.p.rapidapi.com",
    },
  };

  function list() {
    axios
      .request(options)
      .then(function (response) {
        setApiStats(response.data.response);
        setIsLoaded(true);
      })
      .catch(function (error) {
        console.error(error);
      });
  }

  useEffect(() => {
    list();
  }, []);

  return (
    <div className="app">
      <Router>
        <Navbar />
        <Switch>
          <Route
            path="/"
            exact
            component={() => <Home apiStats={apiStats} isLoaded={isLoaded} />}
          />
          <Route
            path="/worldmap"
            exact
            component={() => <Map apiStats={apiStats} />}
          />
          <Route
            path="/charts"
            exact
            component={() => <Charts apiStats={apiStats} />}
          />
          <Route path="/robocik.txt" />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
