import "../cssContainer/BodyFourthComponent.css";
import BodyFourthCompContent from "./BodyFourthCompContent";
function BodyFourthComponent() {
  const content = [
    {
      titleExplain: "Pictures In The Sky",
      description:
        "Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon on starry sky. Flat design",
    },
    {
      titleExplain: "Pictures In The Sky",
      description:
        "Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon on starry sky. Flat design",
    },
    {
      titleExplain: "Pictures In The Sky",
      description:
        "Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon on starry sky. Flat design",
    },
    {
      titleExplain: "Pictures In The Sky",
      description:
        "Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon on starry sky. Flat design",
    },
    {
      titleExplain: "Pictures In The Sky",
      description:
        "Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon on starry sky. Flat design",
    },
    {
      titleExplain: "Pictures In The Sky",
      description:
        "Night landscape with house on hills and moon on starry sky. Flat designNight landscape with house on hills and moon on starry sky. Flat design",
    },
  ];
  return (
    <div className="bodyFourthCompContainer">
      <BodyFourthCompContent
        titleExplain={content[0].titleExplain}
        description={content[0].description}
      />
      <BodyFourthCompContent
        titleExplain={content[1].titleExplain}
        description={content[1].description}
      />
      <BodyFourthCompContent
        titleExplain={content[2].titleExplain}
        description={content[2].description}
      />
      <BodyFourthCompContent
        titleExplain={content[0].titleExplain}
        description={content[0].description}
      />
      <BodyFourthCompContent
        titleExplain={content[0].titleExplain}
        description={content[0].description}
      />
      <BodyFourthCompContent
        titleExplain={content[0].titleExplain}
        description={content[0].description}
      />
    </div>
  );
}

export default BodyFourthComponent;
