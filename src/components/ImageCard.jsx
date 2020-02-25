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
const ImageTitle = styled.h2`
   font-size: 1.5rem;
`

const HdImg = styled.img`
   width:80%;
`

const ImageCard = props => {
   return (
      <ImageContainer>
         <ImageTitle>{props.title}</ImageTitle>
         <HdImg src={props.image} alt="random generated from NASA API"></HdImg>
         <p>{props.date}</p>
         <p>{props.explanation}</p>
      </ImageContainer>
   );
};
export default ImageCard;
