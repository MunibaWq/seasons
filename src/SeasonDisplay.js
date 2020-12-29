import "./SeasonDisplay.css";
import React from "react";

const seasonConfig = {
  summer: {
    text: `Let's hit the beach!`,
    iconName: "sun",
  },
  winter: {
    text: `Burr, it is chilly`,
    iconName: "snowflake",
  },
};

const getSeason = (lat, month) => {
  if (month > 2 && month < 9) {
    //if in nothern hemisphere lat >0
    return lat > 0 ? "summer" : "winter";
  } else {
    return lat > 0 ? "winter" : "summer";
  }
};

const SeasonDisplay = (props) => {
  //   console.log(props.lat);
  const season = getSeason(props.lat, new Date().getMonth()); //return either winter or summer

  const { text, iconName } = seasonConfig[season]; //{text,iconName}

  console.log(season);
  console.log(seasonConfig);
  console.log(seasonConfig[season]); //need square brackets because seasonConfig is NOT A FUNCTION but an object

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
