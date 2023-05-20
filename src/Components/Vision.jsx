import { map } from "../assets";

const Vision = () => {
  return (
    <div className="vision-container">
      <div className="vision-top">
        <h1 className="vision-header">
          With great optimization, comes great routing
        </h1>
        <div className="vision-text">
          Different protocols have different liquidity and fees. FinaleFinance
          finds the most efficient paths for a token swap, also splits your
          funds between different protocols and aggregates best rates across
          zksync. FinaleFinance also returns the positive slippage from all
          swaps, to the user.
        </div>
      </div>

      <img src={map} alt="map"></img>
    </div>
  );
};

export default Vision;
