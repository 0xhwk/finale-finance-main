import { codeesura, hwk, basar } from "../assets";
import { ReactComponent as Twitter } from "../assets/twitter.svg";

const Team = () => {
  return (
    <div className="team-container">
      <div className="team-member">
        <img src={basar} alt="teamBasar"></img>
        <div className="team-links"></div>
        <div className="team-name">0xBasar</div>
        <a href="https://twitter.com/0xbasar">
          <Twitter className="team-svg"></Twitter>
        </a>
      </div>
      <div className="team-member">
        <img src={codeesura} alt="teamCodeesura"></img>
        <div className="team-links"></div>
        <div className="team-name">codeesura</div>
        <a href="https://twitter.com/codeesura">
          <Twitter className="team-svg"></Twitter>
        </a>
      </div>
      <div className="team-member">
        <img src={hwk} alt="teamHwk"></img>
        <div className="team-links"></div>
        <div className="team-name">hwk</div>
        <a href="https://twitter.com/YAA_HAWK">
          <Twitter className="team-svg"></Twitter>
        </a>
      </div>
    </div>
  );
};

export default Team;
