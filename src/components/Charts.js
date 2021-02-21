import React from "react";
import uniqid from "uniqid";

function Charts(props) {
  function compare(a, b) {
    if (a.cases.total > b.cases.total) {
      return -1;
    }
    if (a.cases.total < b.cases.total) {
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
    .slice(0, 9)
    .map((stat) => (
      <tr key={uniqid()}>
        <th>{stat.country}</th>
        <th>{stat.cases.total}</th>
        <th>{stat.deaths.total}</th>
        <th>{stat.tests.total}</th>
        <th>{stat.cases.recovered}</th>
      </tr>
    ));

  return <div className="charts">{allStats}</div>;
}

export default Charts;
