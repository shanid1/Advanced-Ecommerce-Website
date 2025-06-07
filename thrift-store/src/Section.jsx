import React from "react";

const Section = (props) => {
  return (
    <div
      className="section"
      onClick={props.goSection}
      style={{
        minWidth: props.width,
        backgroundImage: `url(${props.imgurl})`,  
        
      }}
    >
      <div>
        <h2>{props.title}</h2>
      </div>
    </div>
  );
};

export default Section;
