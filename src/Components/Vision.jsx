import { map } from "../assets";
import { ReactComponent as LinkLogo } from "../assets/link-logo.svg";

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
      <div className="vision-bottom">
        <a href="https://twitter.com/codeesura" className="vision-banner">
          Learn More
          <LinkLogo className="vision-link-logo"></LinkLogo>
        </a>
        <h1 className="vision-header vision-second-header">
          Simplify Your Trading Journey by Seamlessly Accessing Multiple
          Decentralized Exchanges through Finale Aggregator
        </h1>
      </div>
      <img src={map} alt="map"></img>
    </div>
  );
};

export default Vision;

// <div className="vision-container">
//       <div className="vision-top">
//         <h1 className="vision-header">
//           With great optimization, comes great routing
//         </h1>
//         <div className="vision-text">
//           Right Lorem ipsum, dolor sit amet consectetur adipisicing elit.
//           Tempora praesentium quidem dolorum blanditiis quisquam facere commodi
//           doloremque eaque minima atque ipsam dolorem, eos architecto magni
//           fugit quis assumenda deleniti quibusdam.
//         </div>
//       </div>
//       <div className="vision-bottom">
//         <div className="vision-description">
//           bottom Lorem, ipsum dolor sit amet consectetur adipisicing elit.
//           Assumenda eaque corporis perferendis ex eum quaerat reiciendis quidem
//           aperiam sapiente cum placeat, et tempore similique explicabo nihil
//           mollitia at qui. Quasi?
//         </div>
//         <div className="vision-banner">kutu</div>
//       </div>
//       {<img src={map} alt="map"></img> }
//     </div>
