import { finaleWhite, logoWhite } from "../assets";
import { useEffect, useState } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [headerTheme, setHeaderTheme] = useState("");
  const [isMobileDropdownOpen, setisMobileDropdownOpen] = useState(false);
  const width = window.innerWidth;
  const breakpoint = 620;
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

  const desktopHeader = () => {
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
        </div>
        <button
          target="_blank"
          rel="noopener noreferrer"
          className="header-button"
        >
          Launch App
        </button>
      </div>
    );
  };

  const mobileHeader = () => {
    return (
      <div className={`header-container ${headerTheme}`}>
        <div className="header-logo">
          <img src={logoWhite} alt="finaleLogo"></img>
          <img src={finaleWhite} alt="finaleText"></img>
        </div>

        <div className={`header-links ${isMobileDropdownOpen ? "hidden" : ""}`}>
          <div className="header-item">Blog</div>
          <div className="header-item">Api</div>
          <div className="header-item">Docs</div>
          <div className="header-item">Ecosystem</div>
        </div>
        <button
          target="_blank"
          rel="noopener noreferrer"
          className="header-button"
        >
          Launch App
        </button>
      </div>
    );
  };

  return width < breakpoint ? mobileHeader() : desktopHeader();
};

export default Header;
