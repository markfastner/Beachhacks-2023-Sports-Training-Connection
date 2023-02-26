import React from "react";
import graph1 from "./graph.png";
import graph2 from "./graph2.png";
import graph3 from "./graph3.png";
import graph4 from "./graph4.png";
import graph5 from "./graph5.png";
import graph6 from "./graph6.png";
import "./analytics.css";

const analytics = () => {
  return (
    <div className="analytics-box">
      <div className="row1">
        <img src={graph5} style={{ width: 400, marginTop: 20 }}></img>
        <img
          src={graph2}
          style={{ width: 400, marginTop: 20, marginRight: 10 }}
        ></img>
        <img src={graph3} style={{ width: 400, marginTop: 20 }}></img>
      </div>
      <div className="row2">
        <img src={graph4} style={{ width: 400, marginTop: 20 }}></img>
        <img src={graph1} style={{ width: 400, marginTop: 20 }}></img>

        <img src={graph6} style={{ width: 400, marginTop: 20 }}></img>
      </div>
    </div>
  );
};

export default analytics;
