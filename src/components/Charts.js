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

  function compare(a, b) {
    if (parseInt(a.cases["1M_pop"], 10) < parseInt(b.cases["1M_pop"], 10)) {
      return 1;
    }
    if (parseInt(a.cases["1M_pop"], 10) > parseInt(b.cases["1M_pop"], 10)) {
      return -1;
    }
  }

  const casesContinentsWithWorld = props.apiStats
    .filter(continentsWithWorldFilter)
    .map((stat) => ({
      x: `${stat.country}`,
      y: stat.cases.total,
    }));

  const casesPerMilion = props.apiStats
    .filter(countriesFilter)
    .sort(compare)
    .slice(0, 10)
    .map((stat) => ({
      x: `${stat.country}`,
      y: parseInt(stat.cases["1M_pop"], 10),
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
        <h2>Top 10 countries by cases per 1 milion people</h2>
        <VictoryChart
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
          <VictoryAxis
            dependentAxis
            crossAxis
            width={400}
            height={400}
            standalone={false}
          />
          <VictoryBar
            labels={({ datum }) => datum.x}
            labelComponent={<VictoryLabel angle={-90} textAnchor="end" />}
            style={{
              data: { fill: "#46237a" },
              labels: { fill: "white" },
            }}
            data={casesPerMilion}
          />
          {console.log(casesPerMilion)}
        </VictoryChart>
      </div>
    </div>
  );
}

export default Charts;
