import React from "react";
import {
  BrowserRouter as Router
} from "react-router-dom";
import './App.css';
import Banner from "./components/banner/banner";
import Navbar from "./components/navbar/navbar";
import Slider from "./components/slider/slider";

function App() {
  return (
    <Router>
      <Navbar/>
      <Banner/>
      <Slider/>
    </Router>
  );
}

export default App;
