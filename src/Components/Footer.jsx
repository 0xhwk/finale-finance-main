import { ReactComponent as Discord } from "../assets/discord.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { finaleWhite, logoWhite } from "../assets";
import { useState, useRef, useEffect } from "react";
const Footer = ({ position }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 820;

  window.addEventListener("resize", (event) =>
    setWidth(event.target.innerWidth)
  );

  if (position === "bottom") {
    return (
      <div className="footer-container">
        <div className="footer-links-social-container">
          <div className="footer-links">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/FinaleFinance"
            >
              <Twitter className="footer-social"></Twitter>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/tjeAFpssBZ"
            >
              <Discord className="footer-social"></Discord>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/FinaleFinance"
            >
              <Github className="footer-social"></Github>
            </a>
          </div>
          <div className="footer-logo-bottom">
            <img src={logoWhite} alt="finaleLogo"></img>
            <img src={finaleWhite} alt="finaleText"></img>
          </div>
        </div>
      </div>
    );
  }
  if (position === "top") {
    return (
      <div className="footer-container background-gradient ">
        <div className="footer-links-social-container">
          <div className="footer-logo-top">
            <img src={logoWhite} alt="finaleLogo"></img>
            <img src={finaleWhite} alt="finaleText"></img>
          </div>
          <div className="developers-bottom">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://twitter.com/FinaleFinance"
              className="developers-social"
            >
              {width > breakpoint ? Twitter : ""}
              <Twitter className="developers-logo"></Twitter>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://discord.gg/tjeAFpssBZ"
              className="developers-social "
            >
              {width > breakpoint ? Discord : ""}{" "}
              <Discord className=" developers-logo"></Discord>
            </a>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/FinaleFinance"
              className="developers-social "
            >
              {width > breakpoint ? Github : ""}
              <Github className=" developers-logo"></Github>
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default Footer;
