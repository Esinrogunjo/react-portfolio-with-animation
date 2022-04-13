import React from "react";
import "./Services.css";
import HeartEmoji from "../../img/heartemoji.png";
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from "../Card/Card";
import Resume from "./resume.pdf";
import { motion } from "framer-motion";

const Services = () => {
  // transition
  const transition = {
    duration: 1,
    type: "spring",
  };
  return (
    <div className="services" id="Services">
      {/* {left side} */}
      <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
          Lorm ispsum is simpley dumy text of printing of printing Lorem
          <br /> ispsum is the dummy text for printing epsum ttext
        </span>
        <a href={Resume} download>
          <button className="button s-button">Download CV</button>
        </a>
        <div className="blur s-blur" style={{ background: "#ABF1FF94" }}></div>
      </div>
      {/* {right side} */}
      <div className="cards">
        <motion.div
          initial={{ left: "25rem" }}
          whileInView={{ left: "14rem" }}
          transition={transition}
          style={{ left: "14rem" }}
        >
          <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Adobe, Macro"}
          />
        </motion.div>
        {/* {second card here} */}
        <motion.div
          initial={{ left: "-11rem", top: "12rem" }}
          whileInView={{ left: "-4rem" }}
          transition={transition}
          style={{ top: "12rem", left: "-4rem" }}
        >
          <Card
            emoji={Glasses}
            heading={"Developer"}
            detail={"HTML, CSS, Javascript, React"}
          />
        </motion.div>
        {/* {3rd card here} */}
        <motion.div
          initial={{ top: "19rem", left: "25rem" }}
          whileInView={{ left: "12rem" }}
          transition={transition}
          style={{ top: "19rem", left: "12rem" }}
        >
          <Card
            emoji={Humble}
            heading={"Networking"}
            detail={"Mikrotik, Cisco, Fortinet, Acronix"}
          />
        </motion.div>
        <div
          className="blur s-blur-2"
          style={{ background: "var(--purple)" }}
        ></div>
      </div>
    </div>
  );
};

export default Services;
