import React from "react";
import "./Section.css";
const Section = (props) => {
  return (
    <div
      className="section"
      onClick={props.goSection}
      style={{
        minWidth: props.width,
        backgroundImage: `url(${props.imgurl})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <div>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Section;
