import React from "react";
import "./inputOptions.css";

function InputOptions({ Icon, title, color }) {
  return (
    <div className="input_options">
      {Icon && <Icon className="headerOption_Icons" style={{ color: color }} />}
      <h4>{title}</h4>
    </div>
  );
}
export default InputOptions;
