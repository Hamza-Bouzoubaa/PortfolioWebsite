import React from "react";
import arrowSvg from "../images/down-arrow.svg";
import PropTypes from "prop-types";

import meImage from "../images/pic.jpg"; // Add your circular "me" image
import landscapeImage from "../images/rabat.jpg"; // Add your landscape image

const imageAltText = "me";

const Home = ({ name, title }) => {
  return (
    <section id="home" className="min-height" style={{ position: "relative" }}>
      <div style={{ position: "absolute", top: "10%", right: "10%", width: "12rem", height: "12rem", borderRadius: "50%", overflow: "hidden" }}>
        <img src={meImage} alt={imageAltText} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
      </div>
      <img className="background" src={landscapeImage} alt="" style={{ width: "100%" }} />
      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%, -50%)", textAlign: "center", color: "white" }}>
        <h1>{name}</h1>
        <h2>{title}</h2>
      </div>
      <div style={{ position: "absolute", bottom: "3rem", left: "50%" }}>
        <img src={arrowSvg} style={{ height: "3rem", width: "3rem" }} alt={imageAltText} />
      </div>
    </section>
  );
};

Home.defaultProps = {
  name: "",
  title: "",
};

Home.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default Home;
