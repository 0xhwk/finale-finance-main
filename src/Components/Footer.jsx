import { ReactComponent as Discord } from "../assets/discord.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { finaleWhite, logoWhite } from "../assets";

const Footer = () => {
  return (
    <div className="footer-container ">
      <div className="footer-links-social-container">
        <div className="footer-links"></div>
        <div className="footer-logo">
          <img src={logoWhite} alt="finaleLogo"></img>
          <img src={finaleWhite} alt="finaleText"></img>
        </div>
      </div>
    </div>
  );
};

export default Footer;
