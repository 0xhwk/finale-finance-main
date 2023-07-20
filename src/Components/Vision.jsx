import Developers from "./Developers";
import { ReactComponent as Discord } from "../assets/discord.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as OutboundIcon } from "../assets/outbound.svg";
const Vision = () => {
  return (
    <div className="vision-container background-gradient">
      <div className="vision-top">
        <h1 className="vision-header ">
          With great optimization, comes great routing
        </h1>
        <div className="developers-top">
          <div className="developers-banner banner-black">
            <h1 className="developers-header ">
              Explore our API{" "}
              <OutboundIcon className="outbound-icon"></OutboundIcon>
            </h1>
            <p>
              Supercharge your dApp development on ZkSync Era with Finale
              Finance's robust APIs. Join our developer community and harness
              the full potential of decentralized finance.
            </p>
          </div>

          <div className="developers-banner banner-red">
            <h1 className="developers-header">
              Read the Docs
              <OutboundIcon className="outbound-icon"></OutboundIcon>
            </h1>
            <p>
              Unlock the power of Finale Finance. Explore our comprehensive
              developer documentation for seamless integration. Get step-by-step
              guides, code examples, and in-depth explanations.
            </p>
          </div>
        </div>
      </div>

      <div className="vision-bottom">
        <div className="vision-text">
          Different protocols have different liquidity and fees. FinaleFinance
          finds the most efficient paths for a token swap, also splits your
          funds between different protocols and aggregates best rates across
          zksync. FinaleFinance also returns the positive slippage from all
          swaps, to the user.
        </div>
        <div className="developers-bottom">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/FinaleFinance"
            className="developers-social"
          >
            Twitter <Twitter className="developers-logo"></Twitter>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://discord.gg/tjeAFpssBZ"
            className="developers-social "
          >
            Discord <Discord className=" developers-logo"></Discord>
          </a>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/FinaleFinance"
            className="developers-social "
          >
            Github <Github className=" developers-logo"></Github>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Vision;
