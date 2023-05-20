import { ReactComponent as Discord } from "../assets/discord.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { finaleWhite, logoWhite } from "../assets";

const Footer = () => {
  return (
    <div className="footer-container background-gradient">
      <div className="footer-links-social-container">
        <div className="footer-links">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/FinaleFinance"
          >
            <Twitter className="header-social"></Twitter>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg"
          >
            <Discord className="header-social"></Discord>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/FinaleFinance"
          >
            <Github className="header-social"></Github>
          </a>
        </div>
        <div className="footer-logo">
          <img src={logoWhite} alt="finaleLogo"></img>
          <img src={finaleWhite} alt="finaleText"></img>
        </div>
      </div>
      <div className="landing-blur"></div>
      <div className="landing-bg-red"></div>
      <div className="landing-bg-pink"></div>
    </div>
  );
};

export default Footer;
