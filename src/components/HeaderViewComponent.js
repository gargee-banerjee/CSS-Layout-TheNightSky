import "../cssContainer/HeaderViewComponent.css";
import BlurredBackgroundCard from './BlurredBackgroundCard';

function HeaderViewComponent() {
  return (
    <div className="headerContainer">
      <div className="headerTitle">SPACED</div>
      <div className="headerButtons">
        <div className="headerButton">Home</div>
        <div className="headerButton">Account</div>
        <div className="headerButton">Features</div>
        <div className="headerButton">Developers</div>
        <div className="headerButton">Pricing</div>
        <div className="headerButton">Support</div>
        <BlurredBackgroundCard className="headerButton" data="GET STARTED"/>
      </div>
    </div>
  );
}

export default HeaderViewComponent;
