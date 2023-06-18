function ContentCard(props) {
  return (
    <div className="contentCardContainer">
      <div className="titleExplain">{props.titleExplain}</div>
      <div className="description">{props.description}</div>
    </div>
  );
}
