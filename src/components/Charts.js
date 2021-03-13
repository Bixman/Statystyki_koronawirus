import React, { useState, useEffect } from "react";
import {
  VictoryPie,
  VictoryLabel,
  VictoryContainer,
  VictoryChart,
  VictoryBar,
  VictoryAxis,
} from "victory";

function Charts(props) {
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

  function countriesFilter(value) {
    if (value.country !== value.continent) {
      return value.country;
    }
  }

  function deathsOneMln(value) {
    if (value.deaths["1M_pop"]) return value.deaths["1M_pop"];
  }

  function compareCases(a, b) {
    if (parseInt(a.cases["1M_pop"]) < parseInt(b.cases["1M_pop"])) {
      return 1;
    }
    if (parseInt(a.cases["1M_pop"]) > parseInt(b.cases["1M_pop"])) {
      return -1;
    }
  }

  function compareDeaths(a, b) {
    if (parseInt(a.deaths["1M_pop"]) < parseInt(b.deaths["1M_pop"])) {
      return 1;
    }
    if (parseInt(a.deaths["1M_pop"]) > parseInt(b.deaths["1M_pop"])) {
      return -1;
    }
  }

  function compareActiveCases(a, b) {
    if (a.cases.active < b.cases.active) {
      return 1;
    }
    if (a.cases.active > b.cases.active) {
      return -1;
    }
  }

  function compareCriticalCases(a, b) {
    if (a.cases.critical < b.cases.critical) {
      return 1;
    }
    if (a.cases.critical > b.cases.critical) {
      return -1;
    }
  }

  const casesContinentsWithWorld = props.apiStats
    .filter(continentsWithWorldFilter)
    .map((stat) => ({
      x: stat.country,
      y: stat.cases.total,
    }));

  const casesPerMilion = props.apiStats
    .filter(countriesFilter)
    .sort(compareCases)
    .slice(0, 10)
    .map((stat) => ({
      x: stat.country,
      y: parseInt(stat.cases["1M_pop"], 10),
    }));

  const deathsPerMilion = props.apiStats
    .filter(countriesFilter)
    .filter(deathsOneMln)
    .sort(compareDeaths)
    .slice(0, 10)
    .map((stat) => ({
      x: stat.country,
      y: parseInt(stat.deaths["1M_pop"], 10),
    }));

  const activeCases = props.apiStats
    .filter(countriesFilter)
    .sort(compareActiveCases)
    .slice(0, 10)
    .map((stat) => ({
      x: stat.country,
      y: stat.cases.active,
    }));

  const criticalCases = props.apiStats
    .filter(countriesFilter)
    .sort(compareCriticalCases)
    .slice(0, 10)
    .map((stat) => ({
      x: stat.country,
      y: stat.cases.critical,
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
          padding={{ left: 120, right: 120 }}
          width={550}
          height={225}
          containerComponent={
            <VictoryContainer style={{ height: "100%", width: "100%" }} />
          }
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
                            fontSize: 14,
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
        <h2>Top 10 countries by cases per 1mln people</h2>
        <VictoryChart
          padding={{ left: 65, top: 40, bottom: 20 }}
          domainPadding={25}
          containerComponent={
            <VictoryContainer style={{ height: "95%", width: "100%" }} />
          }
        >
          <VictoryAxis
            crossAxis
            style={{
              tickLabels: { fill: "transparent" },
            }}
          />
          <VictoryAxis dependentAxis crossAxis standalone={false} />
          <VictoryBar
            labels={({ datum }) => datum.x}
            labelComponent={<VictoryLabel angle={-90} textAnchor="middle" />}
            style={{
              data: { fill: "#46237a" },
              labels: { fill: "white" },
            }}
            data={casesPerMilion}
          />
        </VictoryChart>
      </div>
      <div className="chartContainer">
        <h2>Top 10 countries by deaths per 1mln people</h2>
        <VictoryChart
          padding={{ left: 65, top: 40, bottom: 20 }}
          domainPadding={25}
          containerComponent={
            <VictoryContainer style={{ height: "95%", width: "100%" }} />
          }
        >
          <VictoryAxis
            crossAxis
            style={{
              tickLabels: { fill: "transparent" },
            }}
          />
          <VictoryAxis dependentAxis crossAxis standalone={false} />
          <VictoryBar
            labels={({ datum }) => datum.x}
            labelComponent={<VictoryLabel angle={-90} textAnchor="middle" />}
            style={{
              data: { fill: "#46237a" },
              labels: { fill: "white" },
            }}
            data={deathsPerMilion}
          />
        </VictoryChart>
      </div>
      <div className="chartContainer">
        <h2>Top 10 countries by active cases</h2>
        <VictoryChart
          padding={{ left: 65, top: 40, bottom: 20 }}
          domainPadding={25}
          containerComponent={
            <VictoryContainer style={{ height: "95%", width: "100%" }} />
          }
        >
          <VictoryAxis
            crossAxis
            style={{
              tickLabels: { fill: "transparent" },
            }}
          />
          <VictoryAxis dependentAxis crossAxis standalone={false} />
          <VictoryBar
            labels={({ datum }) => datum.x}
            labelComponent={<VictoryLabel angle={-90} textAnchor="start" />}
            style={{
              data: { fill: "#46237a" },
              labels: { fill: "white" },
            }}
            data={activeCases}
          />
        </VictoryChart>
      </div>
      <div className="chartContainer">
        <h2>Top 10 countries by critical cases</h2>
        <VictoryChart
          padding={{ left: 65, top: 40, bottom: 20 }}
          domainPadding={25}
          containerComponent={
            <VictoryContainer style={{ height: "95%", width: "100%" }} />
          }
        >
          <VictoryAxis
            crossAxis
            style={{
              tickLabels: { fill: "transparent" },
            }}
          />
          <VictoryAxis dependentAxis crossAxis standalone={false} />
          <VictoryBar
            labels={({ datum }) => datum.x}
            labelComponent={<VictoryLabel angle={-90} textAnchor="start" />}
            style={{
              data: { fill: "#46237a" },
              labels: { fill: "white" },
            }}
            data={criticalCases}
          />
        </VictoryChart>
      </div>
    </div>
  );
}

export default Charts;
