import React from "react";

const ImageCard = props => {
   return (
      <div className="img-card" key="">
         <h2>{props.title}</h2>
         <img src={props.hdurl} alt="random generated from NASA API" />
         <p>{props.date}</p>
         <p>{props.explanation}</p>
      </div>
   );
};
export default ImageCard;
