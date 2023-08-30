import { ReactComponent as Discord } from "../assets/discord.svg";
import { ReactComponent as Github } from "../assets/github.svg";
import { ReactComponent as Twitter } from "../assets/twitter.svg";
import { ReactComponent as OutboundIcon } from "../assets/outbound.svg";
const Vision = () => {
  return (
    <div className="vision-container h100 ">
      <div className="vision-top h100">
        <h1 className="fstandard vision-header w100 ">With great </h1>
        <h1 className="fstandard vision-header header-gradient w100 ">
          optimization,
        </h1>
        <h1 className="fstandard vision-header w100 ">comes great routing</h1>
        <div className="finfo vision-text w100">
          Different protocols have different liquidity and fees. FinaleFinance
          finds the most efficient paths for a token swap, also splits your
          funds between different protocols and aggregates best rates across Linea and
          ZkSync. FinaleFinance also returns the positive slippage from all
          swaps, to the user.
        </div>
      </div>

      <div className="vision-bottom h100 w100">
        <div className="developers-banner banner-bg-blue">
          <div className="h100 w100  flex-col banner-black"></div>
          <div className="developers-text h100 w100 flex-col">
            <h1 className="fsecondary developers-header ">
              Explore our API
              <OutboundIcon className="outbound-icon"></OutboundIcon>
            </h1>
            <div className="finfo">
              Supercharge your dApp development on multiple chains with Finale
              Finance's robust APIs. Join our developer community and harness
              the full potential of decentralized finance.
            </div>
          </div>
        </div>

        <div className="developers-banner banner-bg-purple ">
          <div className="h100 w100  flex-col banner-black"></div>
          <div className="developers-text h100 w100 flex-col">
            <h1 className="fsecondary developers-header">
              Read the Docs
              <OutboundIcon className="outbound-icon"></OutboundIcon>
            </h1>
            <div className="finfo">
              Unlock the power of Finale Finance. Explore our comprehensive
              developer documentation for seamless integration. Get step-by-step
              guides, code examples, and in-depth explanations.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vision;
