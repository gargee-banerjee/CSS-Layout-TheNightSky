import "../cssContainer/BodyFifthComponent.css";
import ContentDescriptionCard from './ContentDescriptionCard';
import BlurredBackgroundCard from './BlurredBackgroundCard';
import logo from '../images/backgroundImage8.png';
function BodyFifthComponent(props) {
  return (
    <div className="bodyFifthContainer">
        <div>
      <ContentDescriptionCard
        contentDescriptionContainerClass="contentDescriptionContainer"
        descriptionlass ="description"
        title="The Glosssary Of Telescope"
        titleExplain="EXPERIENCE THE ORDINARY"
        description="Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon on starry sky. Flat design Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon "
      />
      <BlurredBackgroundCard className="startButton" data={props.buttonName} />
      </div>
      <div>
        <img src={logo}></img>
      </div>
    </div>
  );
}

export default BodyFifthComponent;
