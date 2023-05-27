import { finaleWhite, logoWhite } from "../assets";
import { ReactComponent as Discord } from "../assets/discord.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [headerTheme, setHeaderTheme] = useState("");

  useEffect(() => {
    const handleHeaderTheme = () => {
      setScrollPosition(window.scrollY);
      const interval = window.innerHeight * 0.1;
      if (scrollPosition > interval) {
        setHeaderTheme("header-dark");
      } else {
        setHeaderTheme("");
      }
    };

    window.addEventListener("scroll", handleHeaderTheme);

    return () => window.removeEventListener("scroll", handleHeaderTheme);
  }, [scrollPosition]);
  return (
    <div className={`header-container ${headerTheme}`}>
      <div className="header-logo">
        <img src={logoWhite} alt="finaleLogo"></img>
        <img src={finaleWhite} alt="finaleText"></img>
      </div>
      <div className="header-links">
        <div className="header-item">Blog</div>
        <div className="header-item">Api</div>
        <div className="header-item">Docs</div>
        <div className="header-item">Ecosystem</div>
        <button
          target="_blank"
          rel="noopener noreferrer"
          className="header-button"
        >
          Launch App
        </button>
      </div>
    </div>
  );
};

export default Header;
