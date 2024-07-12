import "./Button.css";

import React from "react";

function Button({ text, inactive, onclick, disabled }) {
  return <div className={`${inactive ? "inactive" : ""} button ${disabled ? "disabled" : ""}`} onClick={onclick}> 
  {text} 
  </div>;
}

export default Button;
