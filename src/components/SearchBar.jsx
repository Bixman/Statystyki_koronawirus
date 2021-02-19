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
          <p className="countryName">{stat.country}</p>
          <li>Liczba przypadków: {stat.cases.total}</li>
          <li>Liczba zgonów: {stat.deaths.total}</li>
          <li>Nowe przypadki: {stat.cases.new}</li>
          <li>Liczba zgonów dzisiaj: {stat.deaths.new}</li>
        </ul>
      ))
    );
  }

  return (
    <div className="search">
      <form>
        <label htmlFor="countrySearch">Wyszukaj kraj: </label>
        <input
          type="text"
          id="countrySearch"
          maxLength="25"
          value={countryName}
          required
          onChange={(e) => setCountryName(e.target.value)}
        />
        <button onClick={checkCountry}>Sprawdź</button>
      </form>
      {choosenCountry}
    </div>
  );
}

export default SearchBar;
