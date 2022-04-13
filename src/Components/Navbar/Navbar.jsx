import { eventWrapper } from "@testing-library/user-event/dist/utils";
import React from "react";
import Toggle from "../Toggle/Toggle";
import "./Navbar.css";
import { Link } from "react-scroll";
import Experience from "../Experience/Experience";
import Portfolio from "../Portfolio/Portfolio";
import Testimonials from "../Testimonials/Testimonials";
const Navbar = () => {
  return (
    <div className="n-wrapper">
      <div className="n-left">
        <div className="n-name">Agas</div>
        <Toggle />
      </div>
      <div className="n-right">
        <div className="n-list">
          <ul style={{ listStyleType: "none" }}>
            <Link
              spy={true}
              to={"Navbar"}
              smooth={true}
              activeClass="activeClass"
            >
              <li>Home</li>
            </Link>
            <Link spy={true} to={"Services"} smooth={true}>
              <li>Services</li>
            </Link>
            <Link spy={true} to={"Experience"} smooth={true}>
              <li>Experince</li>
            </Link>
            <Link spy={true} to={"Portfolio"} smooth={true}>
              <li>Portfolio</li>
            </Link>
            <Link spy={true} to={"Testimonials"} smooth={true}>
              <li>Testimonials</li>
            </Link>
          </ul>
        </div>
        <Link spy={true} to={"Testimonials"} smooth={true}>
          <button className="button n-button">Contact </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
