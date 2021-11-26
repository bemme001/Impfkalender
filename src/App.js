import React from "react";
import './App.css';
import HomePageMain from "./components/HomePage/HomePageMain";
import NavbarMain from "./components/Header/NavbarMain";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import SRMain from "./components/stikoRecommendation/SRMain";

function App() {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<HomePageMain />} />
        <Route path="stiko-empfehlungen" element={<SRMain />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
