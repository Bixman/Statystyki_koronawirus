import React, { useState, useEffect } from "react";
import { VictoryPie, VictoryLabel, VictoryContainer } from "victory";

function Charts(props) {
  /*
  const [chartCasesContinents, setChartCasesContinents] = useState([]);
  const [chartCasesWorld, setChartCasesWorld] = useState([]);

  useEffect(() => {
    setChartCasesWorld(casesContinentsWithWorld.filter(worldFilter));
    setChartCasesContinents(casesContinentsWithWorld.filter(continentsFilter));
  }, []);

  function continentsWithWorldFilter(value) {
    if (value.country === value.continent) {
      return value.country;
    }
  }

  function continentsFilter(value) {
    if (value.x !== "All") {
      return value.x;
    }
  }

  function worldFilter(value) {
    if (value.x === "All") {
      return value.x;
    }
  }

  const casesContinentsWithWorld = props.apiStats
    .filter(continentsWithWorldFilter)
    .map((stat) => ({
      x: `${stat.country}`,
      y: stat.cases.total,
    }));

  const chart = chartCasesContinents.map((stat) => ({
    x: `${stat.x} ${((stat.y / chartCasesWorld[0].y) * 100).toFixed(2)}%`,
    y: stat.y,
  }));
*/

  const [chartCasesContinents, setChartCasesContinents] = useState([]);
  const [chartCasesWorld, setChartCasesWorld] = useState([]);

  useEffect(() => {
    setChartCasesWorld(casesContinentsWithWorld.filter(worldFilter));
    setChartCasesContinents(casesContinentsWithWorld.filter(continentsFilter));
  }, []);

  function continentsWithWorldFilter(value) {
    if (value.country === value.continent) {
      return value.country;
    }
  }

  function continentsFilter(value) {
    if (value.x !== "All") {
      return value.x;
    }
  }

  function worldFilter(value) {
    if (value.x === "All") {
      return value.x;
    }
  }

  const casesContinentsWithWorld = props.apiStats
    .filter(continentsWithWorldFilter)
    .map((stat) => ({
      x: `${stat.country}`,
      y: stat.cases.total,
    }));

  const chart = chartCasesContinents.map((stat) => ({
    x: `${stat.x} ${((stat.y / chartCasesWorld[0].y) * 100).toFixed(2)}%`,
    y: stat.y,
  }));

  return (
    <div className="charts">
      <div className="chartContainer">
        <h2>Total cases by continents [%]</h2>
        <VictoryPie
          padding={{ left: 80, right: 80 }}
          containerComponent={<VictoryContainer />}
          labelComponent={
            <VictoryLabel style={{ fontSize: 16, fill: "#FFFFFF" }} />
          }
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {
                        return {
                          style: Object.assign({}, props.style, {
                            fill: "#46237a",
                          }),
                        };
                      },
                    },
                    {
                      target: "labels",
                      mutation: () => {
                        return {
                          style: Object.assign({}, props.style, {
                            fontSize: 10,
                            fontWeight: "bold",
                            fill: "#FFFFFF",
                          }),
                        };
                      },
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {
                        return null;
                      },
                    },
                    {
                      target: "labels",
                      mutation: () => {
                        return null;
                      },
                    },
                  ];
                },
              },
            },
          ]}
          data={chart}
        />
      </div>
      <div className="chartContainer">
        <h2>Total cases by continents [%]</h2>
        <VictoryPie
          padding={{ left: 120, right: 120 }}
          containerComponent={<VictoryContainer style={{ height: "80%" }} />}
          labelComponent={
            <VictoryLabel style={{ fontSize: 14, fill: "#FFFFFF" }} />
          }
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {
                        return {
                          style: Object.assign({}, props.style, {
                            fill: "#46237a",
                          }),
                        };
                      },
                    },
                    {
                      target: "labels",
                      mutation: () => {
                        return {
                          style: Object.assign({}, props.style, {
                            fontSize: 10,
                            fontWeight: "bold",
                            fill: "#FFFFFF",
                          }),
                        };
                      },
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {
                        return null;
                      },
                    },
                    {
                      target: "labels",
                      mutation: () => {
                        return null;
                      },
                    },
                  ];
                },
              },
            },
          ]}
          data={chart}
        />
      </div>
      <div className="chartContainer">
        <h2>Total cases by continents [%]</h2>
        <VictoryPie
          padding={{ left: 120, right: 120 }}
          containerComponent={<VictoryContainer style={{ height: "100%" }} />}
          labelComponent={
            <VictoryLabel style={{ fontSize: 14, fill: "#FFFFFF" }} />
          }
          events={[
            {
              target: "data",
              eventHandlers: {
                onMouseOver: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {
                        return {
                          style: Object.assign({}, props.style, {
                            fill: "#46237a",
                          }),
                        };
                      },
                    },
                    {
                      target: "labels",
                      mutation: () => {
                        return {
                          style: Object.assign({}, props.style, {
                            fontSize: 10,
                            fontWeight: "bold",
                            fill: "#FFFFFF",
                          }),
                        };
                      },
                    },
                  ];
                },
                onMouseOut: () => {
                  return [
                    {
                      target: "data",
                      mutation: () => {
                        return null;
                      },
                    },
                    {
                      target: "labels",
                      mutation: () => {
                        return null;
                      },
                    },
                  ];
                },
              },
            },
          ]}
          data={chart}
        />
      </div>
    </div>
  );
}

export default Charts;
