import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import "./Button.css";

function Button({ text, inactive }) {
  return <div className={`${inactive ? "inactive" : ""} button`}> {text} </div>;
}

export default Button;
