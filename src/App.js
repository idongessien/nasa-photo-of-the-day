import React from "react";
import ImageComponents from "./components/ImageComponents";
import "./App.css";

function App() {
   return (
      <div className="container">
         <h1>N A S A</h1>
         <h2>NASA API: Astronomy Photo Of The Day</h2>
         <ImageComponents />
      </div>
   );
}

export default App;
