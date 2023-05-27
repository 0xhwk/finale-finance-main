import { map } from "../assets";

const Landing = () => {
  // background-gradient
  return (
    <div className="landing-container ">
      <div className="landing-description">
        <h1 className="landing-title header-gradient">
          ONE OF A KIND SWAP EXPERIENCE
        </h1>
        <p>
          Finale Finance is an aggregator that allows users to find the best
          swap rates across all Zksync AMMs. We use sophisticated algorithms to
          find the most efficient path for any swap, resulting in significant
          savings for users.
        </p>
      </div>
      <img className="map" src={map} alt="map"></img>
      {/* <div className="landing-blur"></div>
      <div className="landing-bg-red"></div>
      <div className="landing-bg-pink"></div> */}
    </div>
  );
};

export default Landing;
