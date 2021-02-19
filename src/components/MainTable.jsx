import uniqid from "uniqid";
import React from "react";

function MainTable(props) {
  function compare(a, b) {
    if (a.country < b.country) {
      return -1;
    }
    if (a.country > b.country) {
      return 1;
    }
    return 0;
  }

  function countriesFilter(value) {
    if (value.country !== value.continent) {
      return value.country;
    }
  }

  const allStats = props.apiStats
    .sort(compare)
    .filter(countriesFilter)
    .map((stat) => (
      <tr key={uniqid()}>
        <th>{stat.country}</th>
        <th>{stat.cases.total}</th>
        <th>{stat.deaths.total}</th>
        <th>{stat.tests.total}</th>
        <th>{stat.cases.recovered}</th>
      </tr>
    ));
  return (
    <div className="mainTable">
      {!props.isLoaded ? (
        <p>Ładowanie...</p>
      ) : (
        <table className="mainTable">
          <thead>
            <tr>
              <th>Kraj</th>
              <th>Przypadki</th>
              <th>Zgony</th>
              <th>Testy</th>
              <th>Wyzdrowiało</th>
            </tr>
          </thead>
          <tbody>{allStats}</tbody>
        </table>
      )}
    </div>
  );
}

export default MainTable;
