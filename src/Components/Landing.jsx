import { map } from "../assets";

const Landing = () => {
  // background-gradient
  return (
    <div className="landing-container ">
      <div className="landing-description flex-col">
        <h1 className="fstrong landing-title ">ONE OF A KIND</h1>
        <h1 className="fstrong landing-title header-gradient">
          SWAP EXPERIENCE
        </h1>
        <div className="finfo">
          Finale Finance is an aggregator that allows users to find the best
          swap rates across all Zksync AMMs. We use sophisticated algorithms to
          find the most efficient path for any swap, resulting in significant
          savings for users.
        </div>
      </div>
    </div>
  );
};

export default Landing;
