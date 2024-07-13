import "./Button.css";

import React from "react";

function Button({ text, inactive, onclick, disabled, secondary }) {
  return (
    <div
      className={`${inactive ? "inactive" : ""} ${disabled ? "disabled" : ""} ${
        secondary ? "secondary" : ""
      } button`}
      onClick={onclick}
    >
      {text}
    </div>
  );
}

export default Button;
