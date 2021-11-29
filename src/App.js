import React from "react";
import './App.css';
import HomePageMain from "./HomePage/HomePageMain";
import NavbarMain from "./Header/NavbarMain";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePageCardElement from "./HomePage/HomePageCardElement";
import MainView from "./GeneralOverview/MainView";
import AddImmunization from "./components/addImmunization/AddImmunization";

function App() {
  return (
    <BrowserRouter>
      <NavbarMain />
      <Routes>
        <Route path="/" element={<HomePageMain />} />
        <Route path="stiko-empfehlungen" element={<HomePageCardElement />} />
        <Route path="mainview" element={<MainView />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
