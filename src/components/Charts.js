import React, { useState, useEffect } from "react";
import { VictoryPie } from "victory";

function Charts(props) {
  const [chartCasescontinents, setchartCasescontinents] = useState([]);

  useEffect(() => {
    setchartCasescontinents(casesContinents);
  }, []);

  function countriesFilter(value) {
    if (value.country === value.continent && value.country !== "All") {
      return value.country;
    }
  }

  const casesContinents = props.apiStats
    .filter(countriesFilter)
    .map((stat) => ({
      x: `${stat.country}`,
      y: stat.cases.total,
    }));

  return (
    <div className="charts">
      <div className="chartContainer">
        <VictoryPie
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
                            fill: "tomato",
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
                  ];
                },
              },
            },
          ]}
          data={chartCasescontinents}
        />
      </div>
      <div className="chartContainer">
        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
          ]}
        />
      </div>
      <div className="chartContainer">
        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
          ]}
        />
      </div>
      <div className="chartContainer">
        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
          ]}
        />
      </div>
      <div className="chartContainer">
        <VictoryPie
          data={[
            { x: "Cats", y: 35 },
            { x: "Dogs", y: 40 },
            { x: "Birds", y: 55 },
          ]}
        />
      </div>
    </div>
  );
}

export default Charts;
