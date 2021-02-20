import React, { memo } from "react";
import {
  ZoomableGroup,
  ComposableMap,
  Geographies,
  Geography,
} from "react-simple-maps";
import uniqid from "uniqid";

const geoUrl =
  "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({ setTooltipContent, apiStats }) => {
  return (
    <ComposableMap data-tip="" projectionConfig={{ scale: 220 }}>
      <ZoomableGroup center={[0, 0]}>
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                onMouseEnter={() => {
                  const { NAME } = geo.properties;

                  function mapFilter(value) {
                    if (NAME == value.country) {
                      return value.country;
                    } else if (NAME == "United States of America") {
                      return value.country == "USA";
                    }
                  }

                  const statistics = apiStats.filter(mapFilter).map((stat) => (
                    <ul key={uniqid()}>
                      <p className="countryName">{stat.country}</p>
                      <li>
                        Cases:{" "}
                        {stat.cases.total != null
                          ? stat.cases.total
                          : "No data"}
                      </li>
                      <li>
                        Cases today:{" "}
                        {stat.cases.new != null ? stat.cases.new : "No data"}
                      </li>
                      <li>
                        Active cases:{" "}
                        {stat.cases.active != null
                          ? stat.cases.active
                          : "No data"}
                      </li>
                      <li>
                        Critical cases:{" "}
                        {stat.cases.critical != null
                          ? stat.cases.critical
                          : "No data"}
                      </li>
                      <li>
                        Deaths:{" "}
                        {stat.deaths.total != null
                          ? stat.deaths.total
                          : "No data"}
                      </li>
                      <li>
                        Deaths today:{" "}
                        {stat.deaths.new != null ? stat.deaths.new : "No data"}
                      </li>
                      <li>
                        Recovered:{" "}
                        {stat.cases.recovered != null
                          ? stat.cases.recovered
                          : "No data"}
                      </li>
                      <li>
                        Tests:{" "}
                        {stat.tests.total != null
                          ? stat.tests.total
                          : "No data"}
                      </li>
                    </ul>
                  ));

                  if (statistics.length != 0) {
                    setTooltipContent(statistics);
                  } else {
                    setTooltipContent(NAME + " - No data avaiable, sorry");
                  }
                }}
                onMouseLeave={() => {
                  setTooltipContent("");
                }}
                style={{
                  default: {
                    fill: "#D6D6DA",
                    outline: "none",
                  },
                  hover: {
                    fill: "#46237a",
                    outline: "none",
                  },
                  pressed: {
                    fill: "#E42",
                    outline: "none",
                  },
                }}
              />
            ))
          }
        </Geographies>
      </ZoomableGroup>
    </ComposableMap>
  );
};

export default memo(MapChart);
