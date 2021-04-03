import React from "react";
import uniqid from "uniqid";

function WorldTotal(props) {
  function totalContinentsFilter(value) {
    if (value.country === props.continentChoosen) {
      return value;
    }
  }

  const totalContinentsCases = props.apiStats
    .filter(totalContinentsFilter)
    .map((stat) => (
      <div className="totalCases" key={uniqid()}>
        <div className="statBox">
          <p>Cases</p>
          <p>{stat.cases.total != null ? stat.cases.total : "No data"}</p>
        </div>
        <div className="statBox">
          <p>Deaths</p>
          <p>{stat.deaths.total != null ? stat.deaths.total : "No data"}</p>
        </div>
        <div className="statBox">
          <p>Recovered</p>
          <p>
            {stat.cases.recovered != null ? stat.cases.recovered : "No data"}
          </p>
        </div>
        <div className="statBox">
          <p>New cases</p>
          <p>{stat.cases.new != null ? stat.cases.new : "No data"}</p>
        </div>
        <div className="statBox">
          <p>New deaths</p>
          <p>{stat.deaths.new != null ? stat.deaths.new : "No data"}</p>
        </div>
        <div className="statBox">
          <p>Active cases</p>
          <p>{stat.cases.active != null ? stat.cases.active : "No data"}</p>
        </div>
      </div>
    ));

  return <div>{totalContinentsCases}</div>;
}

export default WorldTotal;
