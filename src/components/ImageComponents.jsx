import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageCard from "./ImageCard";

function ImageComponents() {
   const [infos, setInfos] = useState([]);

   useEffect(() => {
      axios
         .get(
            "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&date=2020-02-19"
         )
         .then(response => {
            setInfos(response.data);
         })
         .catch(error => {
            console.log("The data was not returned", error);
         });
   }, []);
   return (
      <div className="info-style">
         
         <ImageCard
            title={infos.title}
            image={infos.hdurl}
            date={infos.date}
            explanation={infos.explanation}
         />
         
      </div>
   );
}

export default ImageComponents;
