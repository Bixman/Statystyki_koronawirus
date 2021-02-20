import uniqid from "uniqid";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountDown,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";

function MainTable(props) {
  const [tableFilter, setTableFilter] = useState("countryUp");

  function compare(a, b) {
    if (tableFilter == "casesUp") {
      if (a.cases.total < b.cases.total) {
        return -1;
      }
      if (a.cases.total > b.cases.total) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "casesDown") {
      if (a.cases.total > b.cases.total) {
        return -1;
      }
      if (a.cases.total < b.cases.total) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "deathsUp") {
      if (a.deaths.total < b.deaths.total) {
        return -1;
      }
      if (a.deaths.total > b.deaths.total) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "deathsDown") {
      if (a.deaths.total > b.deaths.total) {
        return -1;
      }
      if (a.deaths.total < b.deaths.total) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "testsUp") {
      if (a.tests.total < b.tests.total) {
        return -1;
      }
      if (a.tests.total > b.tests.total) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "testsDown") {
      if (a.tests.total > b.tests.total) {
        return -1;
      }
      if (a.tests.total < b.tests.total) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "recoveredUp") {
      if (a.cases.recovered < b.cases.recovered) {
        return -1;
      }
      if (a.cases.recovered > b.cases.recovered) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "recoveredDown") {
      if (a.cases.recovered > b.cases.recovered) {
        return -1;
      }
      if (a.cases.recovered < b.cases.recovered) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "countryUp") {
      if (a.country < b.country) {
        return -1;
      }
      if (a.country > b.country) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "countryDown") {
      if (a.country > b.country) {
        return -1;
      }
      if (a.country < b.country) {
        return 1;
      }
      return 0;
    }
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
        <th>{stat.country != null ? stat.country : "No data"}</th>
        <th>{stat.cases.total != null ? stat.cases.total : "No data"}</th>
        <th>{stat.deaths.total != null ? stat.deaths.total : "No data"}</th>
        <th>{stat.tests.total != null ? stat.tests.total : "No data"}</th>
        <th>
          {stat.cases.recovered != null ? stat.cases.recovered : "No data"}
        </th>
      </tr>
    ));

  /*function compare(a, b) {
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
    ));*/

  return (
    <div className="mainTable">
      {!props.isLoaded ? (
        <p>Loading...</p>
      ) : (
        <table className="mainTable">
          <thead>
            <tr>
              <th>
                <button
                  onClick={() => {
                    if (tableFilter != "countryUp") {
                      setTableFilter("countryUp");
                    } else if (tableFilter != "countryDown") {
                      setTableFilter("countryDown");
                    }
                  }}
                >
                  Country
                  <FontAwesomeIcon
                    icon={
                      tableFilter == "countryDown"
                        ? faSortAmountDown
                        : faSortAmountUp
                    }
                  />
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    if (tableFilter != "casesUp") {
                      setTableFilter("casesUp");
                    } else if (tableFilter != "casesDown") {
                      setTableFilter("casesDown");
                    }
                  }}
                >
                  Cases
                  <FontAwesomeIcon
                    icon={
                      tableFilter == "casesDown"
                        ? faSortAmountDown
                        : faSortAmountUp
                    }
                  />
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    if (tableFilter != "deathsUp") {
                      setTableFilter("deathsUp");
                    } else if (tableFilter != "deathsDown") {
                      setTableFilter("deathsDown");
                    }
                  }}
                >
                  Deaths
                  <FontAwesomeIcon
                    icon={
                      tableFilter == "deathsDown"
                        ? faSortAmountDown
                        : faSortAmountUp
                    }
                  />
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    if (tableFilter != "testsUp") {
                      setTableFilter("testsUp");
                    } else if (tableFilter != "testsDown") {
                      setTableFilter("testsDown");
                    }
                  }}
                >
                  Tests
                  <FontAwesomeIcon
                    icon={
                      tableFilter == "testsDown"
                        ? faSortAmountDown
                        : faSortAmountUp
                    }
                  />
                </button>
              </th>
              <th>
                <button
                  onClick={() => {
                    if (tableFilter != "recoveredUp") {
                      setTableFilter("recoveredUp");
                    } else if (tableFilter != "recoveredDown") {
                      setTableFilter("recoveredDown");
                    }
                  }}
                >
                  Recovered
                  <FontAwesomeIcon
                    icon={
                      tableFilter == "recoveredDown"
                        ? faSortAmountDown
                        : faSortAmountUp
                    }
                  />
                </button>
              </th>
            </tr>
          </thead>
          <tbody>{allStats}</tbody>
        </table>
      )}
    </div>
  );
}

export default MainTable;
