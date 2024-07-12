import "./Button.css";

import React from "react";

function Button({ text, inactive }) {
  return <div className={`${inactive ? "inactive" : ""} button`}> {text} </div>;
}

export default Button;
