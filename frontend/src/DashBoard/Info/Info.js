import React from "react";
import "./Info.css";
function Info(props) {
  return (
    <div className="info" style={{ backgroundColor: props.color }}>
      <div className="left">
        <p>{props.revenue}</p>
        <h4>{props.count}</h4>
      </div>

      <div className="right">{props.icon}</div>
    </div>
  );
}

export default Info;
