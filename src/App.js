import React from "react";
import './App.css';
import HomePageMain from "./HomePage/HomePageMain";
import NavbarMain from "./Header/NavbarMain";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePageCardElement from "./HomePage/HomePageCardElement";

function App() {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<HomePageMain />} />
        <Route path="stiko-empfehlungen" element={<HomePageCardElement />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
