import React from "react";
import images from "../../constants/images";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="app__navbar">
      <img src={images.logo} alt="app logo" />
      <div className="app__navbar-text">
        <div className="p__cormorant">Fiducia</div>
      </div>
      <img src={images.user} alt="app logo" />
    </div>
  );
};

export default Navbar;
