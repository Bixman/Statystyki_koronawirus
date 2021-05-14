import uniqid from "uniqid";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAmountDown,
  faSortAmountUp,
} from "@fortawesome/free-solid-svg-icons";

function MainTable(props) {
  const [tableFilter, setTableFilter] = useState("countryUp");
  const [countryNameFilter, setCountryNameFilter] = useState("");

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
    } else if (tableFilter == "activeUp") {
      if (a.cases.active < b.cases.active) {
        return -1;
      }
      if (a.cases.active > b.cases.active) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "activeDown") {
      if (a.cases.active > b.cases.active) {
        return -1;
      }
      if (a.cases.active < b.cases.active) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "criticalUp") {
      if (a.cases.critical < b.cases.critical) {
        return -1;
      }
      if (a.cases.critical > b.cases.critical) {
        return 1;
      }
      return 0;
    } else if (tableFilter == "criticalDown") {
      if (a.cases.critical > b.cases.critical) {
        return -1;
      }
      if (a.cases.critical < b.cases.critical) {
        return 1;
      }
      return 0;
    }
  }

  function countriesFilter(value) {
    if (
      value.country !== value.continent &&
      value.continent == props.continentChoosen
    ) {
      return value.country;
    } else if (
      value.country !== value.continent &&
      props.continentChoosen == "All"
    ) {
      return value.country;
    }
  }

  function countryName(name) {
    setCountryNameFilter(name);
  }

  function searchFilter(value) {
    if (countryNameFilter.length > 0) {
      if (value.country.toLowerCase().includes(countryNameFilter)) {
        return value.country;
      }
    } else return value.country;
  }

  const allStats = props.apiStats
    .sort(compare)
    .filter(countriesFilter)
    .filter(searchFilter)
    .map((stat) => (
      <tr key={uniqid()}>
        <td>{stat.country != null ? stat.country : "No data"}</td>
        <td>{stat.cases.total != null ? stat.cases.total : "No data"}</td>
        <td>{stat.deaths.total != null ? stat.deaths.total : "No data"}</td>
        <td>{stat.tests.total != null ? stat.tests.total : "No data"}</td>
        <td>
          {stat.cases.recovered != null ? stat.cases.recovered : "No data"}
        </td>
        <td>{stat.cases.active != null ? stat.cases.active : "No data"}</td>
        <td>{stat.cases.critical != null ? stat.cases.critical : "No data"}</td>
      </tr>
    ));

  return (
    <div className="mainTable">
      {!props.isLoaded ? (
        <p>Loading...</p>
      ) : (
        <div>
          <div className="search">
            <h2>Find your country</h2>
            <input
              type="text"
              id="countrySearch"
              placeholder="Search..."
              maxLength="25"
              onChange={(e) => countryName(e.target.value.toLowerCase())}
            />
          </div>
          <div className="tableAll">
            <table>
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
                      Country{" "}
                      <FontAwesomeIcon
                        icon={
                          tableFilter == "countryDown"
                            ? faSortAmountUp
                            : faSortAmountDown
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
                      Cases{" "}
                      <FontAwesomeIcon
                        icon={
                          tableFilter == "casesDown"
                            ? faSortAmountUp
                            : faSortAmountDown
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
                      Deaths{" "}
                      <FontAwesomeIcon
                        icon={
                          tableFilter == "deathsDown"
                            ? faSortAmountUp
                            : faSortAmountDown
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
                      Tests{" "}
                      <FontAwesomeIcon
                        icon={
                          tableFilter == "testsDown"
                            ? faSortAmountUp
                            : faSortAmountDown
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
                      Recovered{" "}
                      <FontAwesomeIcon
                        icon={
                          tableFilter == "recoveredDown"
                            ? faSortAmountUp
                            : faSortAmountDown
                        }
                      />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => {
                        if (tableFilter != "activeUp") {
                          setTableFilter("activeUp");
                        } else if (tableFilter != "activeDown") {
                          setTableFilter("activeDown");
                        }
                      }}
                    >
                      Active{" "}
                      <FontAwesomeIcon
                        icon={
                          tableFilter == "activeDown"
                            ? faSortAmountUp
                            : faSortAmountDown
                        }
                      />
                    </button>
                  </th>
                  <th>
                    <button
                      onClick={() => {
                        if (tableFilter != "criticalUp") {
                          setTableFilter("criticalUp");
                        } else if (tableFilter != "criticalDown") {
                          setTableFilter("criticalDown");
                        }
                      }}
                    >
                      Critical{" "}
                      <FontAwesomeIcon
                        icon={
                          tableFilter == "criticalDown"
                            ? faSortAmountUp
                            : faSortAmountDown
                        }
                      />
                    </button>
                  </th>
                </tr>
              </thead>
            </table>

            <div className="tableBody">
              <table>
                <tbody>{allStats}</tbody>
              </table>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default MainTable;
