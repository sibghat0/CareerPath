import React from "react";
import ReactDOM from "react-dom";
import Home from "./pages/homepage/Home";
import "./pages/homepage/Home.css";
import Navbar from "../src/components/navbar/navbar";
//import Career from "./pages/homepage/Career";
function App() {
  return (
    //<div>Helllllloooo</div>
    <div className="App">
      <Navbar />
      <Home />
    </div>
  );
}

export default App;
