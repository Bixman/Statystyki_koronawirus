import React, { useState, useEffect } from "react";
import uniqid from "uniqid";

function SearchBar(props) {
  const [countryName, setCountryName] = useState("");
  const [countryNameFormat, setCountryNameFormat] = useState("");
  const [choosenCountry, setChoosenCountry] = useState([]);

  useEffect(() => {
    if (countryName !== "")
      setCountryNameFormat(
        countryName[0].toUpperCase() + countryName.substr(1).toLowerCase()
      );
  }, [countryName, countryNameFormat]);

  useEffect(() => {
    if (choosenCountry.length === 0 && countryNameFormat.length > 0) {
      setChoosenCountry(
        <p>Country called {countryName} doesn&apos;t exist!</p>
      );
      setCountryName("");
      setCountryNameFormat("");
    } else {
      setCountryName("");
      setCountryNameFormat("");
    }
  }, [choosenCountry]);

  function userFilter(value) {
    if (value.country === countryNameFormat) {
      return value;
    }
  }

  function checkCountry(e) {
    e.preventDefault();
    setChoosenCountry(
      props.apiStats.filter(userFilter).map((stat) => (
        <ul key={uniqid()}>
          <p className="countryName">{countryNameFormat}</p>
          <li>
            Cases: {stat.cases.total != null ? stat.cases.total : "No data"}
          </li>
          <li>
            Cases today: {stat.cases.new != null ? stat.cases.new : "No data"}
          </li>
          <li>
            Active cases:{" "}
            {stat.cases.active != null ? stat.cases.active : "No data"}
          </li>
          <li>
            Critical cases:{" "}
            {stat.cases.critical != null ? stat.cases.critical : "No data"}
          </li>
          <li>
            Deaths: {stat.deaths.total != null ? stat.deaths.total : "No data"}
          </li>
          <li>
            Deaths today:{" "}
            {stat.deaths.new != null ? stat.deaths.new : "No data"}
          </li>
          <li>
            Recovered:{" "}
            {stat.cases.recovered != null ? stat.cases.recovered : "No data"}
          </li>
          <li>
            Tests: {stat.tests.total != null ? stat.tests.total : "No data"}
          </li>
        </ul>
      ))
    );
  }

  return (
    <div className="search">
      <h2>Search</h2>
      <form>
        <input
          type="text"
          id="countrySearch"
          maxLength="25"
          value={countryName}
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button onClick={(e) => checkCountry(e)}>Search</button>
      </form>
      {choosenCountry}
    </div>
  );
}

export default SearchBar;
