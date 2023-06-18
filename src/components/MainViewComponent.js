import "../cssContainer/MainViewComponent.css";
import "../cssContainer/BodyViewComponent.css";
import HeaderViewComponent from "./HeaderViewComponent";
import ContentDescriptionCard from "./ContentDescriptionCard";
import BodyTitleComponent from "./BodyTitleComponent";
import BodySecondComponent from "./BodySecondComponent";
import BodyFourthComponent from "./BodyFourthComponent";  
import BodyFifthComponent from './BodyFifthComponent';
import BodySixthComponent from './BodySixthComponent';

function MainViewComponent() {
  return (
    <div className="mainViewContainer">
      <HeaderViewComponent />
      <BodyTitleComponent />
      <BodySecondComponent />
      <ContentDescriptionCard
        title="The Glosssary Of Telescope"
        titleExplain="EXPERIENCE THE ORDINARY"
        description="Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon on starry sky. Flat design"
      />
      <BodyFourthComponent />
      <BodyFifthComponent buttonName="GET STARTED"/>
      <BodyFifthComponent buttonName="SEARCH IT"/>
      <BodySixthComponent/>
    </div>
  );
}

export default MainViewComponent;
