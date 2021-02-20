import React, { useState } from "react";
import ReactTooltip from "react-tooltip";
import MapChart from "./MapChart";

function Map(props) {
  const [content, setContent] = useState("");

  return (
    <div className="worldMap">
      <MapChart setTooltipContent={setContent} apiStats={props.apiStats} />
      <ReactTooltip>{content}</ReactTooltip>
    </div>
  );
}

export default Map;
