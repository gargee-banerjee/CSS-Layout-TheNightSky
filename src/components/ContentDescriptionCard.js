import "../cssContainer/ContentDescriptionCard.css";
function ContentDescriptionCard(props) {
  const titleExplainClass = `oldTitleExplain `+ props.titleExplainClass ;
  const descriptionClass = `oldDescription `+ props.descriptionlass ;
  const contentDescriptionContainerClass = `oldContentDescriptionContainer `+ props.contentDescriptionContainerClass ;
  return (
    <div className={contentDescriptionContainerClass}>
      <div className="title">{props.title}</div>
      <div className={titleExplainClass}>{props.titleExplain}</div>
      <div className={descriptionClass}>{props.description}</div>
    </div>
  );
}

export default ContentDescriptionCard;
