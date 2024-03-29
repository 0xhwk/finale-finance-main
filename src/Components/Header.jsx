import { finaleWhite, logoWhite } from "../assets";
import { useEffect, useState, useRef } from "react";
import { ReactComponent as MenuIcon } from "../assets/menuIcon.svg";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(window.scrollY);
  const [headerTheme, setHeaderTheme] = useState("");
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 820;
  const sideBarRef = useRef(null);

  window.addEventListener("resize", (event) =>
    setWidth(event.target.innerWidth)
  );

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

  useEffect(() => {
    const handleOutsideClick = (event) => {
      if (sideBarRef.current && !sideBarRef.current.contains(event.target)) {
        console.log("click");
        setIsMobileSidebarOpen(false);
      }
    };

    document.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const desktopHeader = () => {
    return (
      <div className={`header-container ${headerTheme}`}>
        <div className="header-logo w100">
          <img src={logoWhite} alt="finaleLogo"></img>
          <img src={finaleWhite} alt="finaleText"></img>
        </div>
        <div className="header-buttons-container flex w100">
          <div className="header-links w100">
            <div className="header-item w100">Blog</div>
            <div className="header-item w100">Api</div>
            <div className="header-item w100">Docs</div>
            <div className="header-item w100">Ecosystem</div>
          </div>
          <a
            href="https://app.finalefinance.xyz"
            target="_blank"
            rel="noopener noreferrer"
            className="header-button background-gradient "
          >
            Launch App
          </a>
        </div>
      </div>
    );
  };

  const mobileHeader = () => {
    return (
      <div className={`header-container ${headerTheme}`}>
        <div className="header-logo">
          <a className="menu-icon" onClick={() => setIsMobileSidebarOpen(true)}>
            <MenuIcon></MenuIcon>
          </a>
          <img src={logoWhite} alt="finaleLogo"></img>
        </div>
        <div
          ref={sideBarRef}
          className={`mobile-header-links ${
            isMobileSidebarOpen ? "header-visible" : ""
          }`}
        >
          <div className="mobile-header-logo">
            <img src={logoWhite} alt="finaleLogo"></img>
            <img src={finaleWhite} alt="finaleText"></img>
          </div>
          <div className="mobile-header-item">Blog</div>
          <div className="mobile-header-item">Api</div>
          <div className="mobile-header-item">Docs</div>
          <div className="mobile-header-item">Ecosystem</div>
        </div>

        <a
          href="https://app.finalefinance.xyz"
          target="_blank"
          rel="noopener noreferrer"
          className="header-button background-gradient"
        >
          Launch App
        </a>
      </div>
    );
  };

  return width < breakpoint ? mobileHeader() : desktopHeader();
};

export default Header;
