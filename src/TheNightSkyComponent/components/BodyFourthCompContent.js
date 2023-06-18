import "../cssContainer/BodyFourthCompContent.css";
import ContentDescriptionCard from "./ContentDescriptionCard";
function BodyFourthCompContent(props) {
  return (
    <div className="bodyFourthCompContContainer">
      <div className="imgContainer">
      <i class="fa-solid fa-car" style={{color: "#afb5c0",}} ></i>
      </div>
      <ContentDescriptionCard descriptionlass ="description" titleExplainClass="titleExplain" contentDescriptionContainerClass="contentDescriptionContainer" titleExplain={props.titleExplain} description={props.description}/>
    </div>
  );
}

export default BodyFourthCompContent;
