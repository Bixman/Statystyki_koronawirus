import React from "react";
import uniqid from "uniqid";

function WorldTotal(props) {
  function totalContinentsFilter(value) {
    if (
      value.country === "Europe" ||
      value.country === "Asia" ||
      value.country === "Africa" ||
      value.country === "North-America" ||
      value.country === "Oceania" ||
      value.country === "South-America"
    ) {
      return value;
    }
  }

  function totalWorldFilter(value) {
    if (value.country === "All") {
      return value;
    }
  }
  const totalWorldCases = props.apiStats
    .filter(totalWorldFilter)
    .map((stat) => (
      <ul key={uniqid()}>
        <h2>World</h2>
        <li>Cases: {stat.cases.total}</li>
        <li>Deaths: {stat.deaths.total}</li>
        <li>Recovered: {stat.cases.recovered}</li>
        <li>New cases: {stat.cases.new}</li>
        <li>New deaths: {stat.deaths.new}</li>
        <li>Active cases: {stat.cases.active}</li>
      </ul>
    ));

  const totalContinentsCases = props.apiStats
    .filter(totalContinentsFilter)
    .map((stat) => (
      <ul key={uniqid()}>
        <h2>{stat.country}</h2>
        <li>Cases: {stat.cases.total}</li>
        <li>Deaths: {stat.deaths.total}</li>
        <li>Recovered: {stat.cases.recovered}</li>
        <li>New cases: {stat.cases.new}</li>
        <li>New deaths: {stat.deaths.new}</li>
        <li>Active cases: {stat.cases.active}</li>
      </ul>
    ));

  return (
    <div className="totalCases">
      {totalWorldCases}
      {totalContinentsCases}
    </div>
  );
}

export default WorldTotal;
