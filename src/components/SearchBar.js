import "../App.scss";
import { useState, useEffect } from "react";

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
      props.apiStats.filter(userFilter).map(stat => (
        <ul>
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
          onChange={e => setCountryName(e.target.value)}
        />
        <button onClick={checkCountry}>Sprawdź</button>
      </form>
      <p>Wybrany kraj: {choosenCountry.country} </p>
      {choosenCountry}
    </div>
  );
}

export default SearchBar;
