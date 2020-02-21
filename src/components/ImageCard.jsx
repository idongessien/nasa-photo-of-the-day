import React from "react";
import styled from "styled-components";

const ImageContainer = styled.div`
 background: rgb(245, 245, 245);
 padding: 2%;
 width: 70%;
 margin: 0 auto;
 font-size: 1.5rem;
 line-height: 2.5rem;
`
const HdImg = styled.img`
   width:100%;
   height: 50vh;
`

const ImageCard = props => {
   return (
      <ImageContainer>
         <h2>{props.title}</h2>
         <HdImg src={props.image} alt="random generated from NASA API" />
         <p>{props.date}</p>
         <p>{props.explanation}</p>
      </ImageContainer>
   );
};
export default ImageCard;
