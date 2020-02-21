import React from "react";
import ImageComponents from "./components/ImageComponents";
import "./App.css";
import styled from "styled-components";

const MainContainer = styled.div`
   text-align: center;
`

const Title = styled.h1`
   font-size: 3rem;
   font-weight: 800;
   line-height: 1rem;
`
const SubTitle = styled.h2`
   font-weight: 700;
   font-size: 2rem;
`


function App() {
   return (
      <MainContainer>
         <Title>N A S A</Title>
         <SubTitle>NASA API: Astronomy Photo Of The Day</SubTitle>
         <ImageComponents />
      </MainContainer>
   );
}

export default App;
