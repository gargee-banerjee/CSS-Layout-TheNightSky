import "../cssContainer/BlurredBackgroundCard.css";
function BlurredBackgroundCard(props) {
  const classes = `blurredBackgroundContainer ` + props.className;
  return <div className={classes}>{props.data}</div>;
}

export default BlurredBackgroundCard;
