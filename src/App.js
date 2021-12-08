import React from "react";
import './App.css';
import HomePageMain from "./components/HomePage/HomePageMain";
import NavbarMain from "./components/Header/NavbarMain";
import { QueryClient, QueryClientProvider } from "react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
//import HomePageCardElement from "./components/HomePage/HomePageCardElement";
import MainView from "./components/GeneralOverview/MainView";
import PatientSearch from "./components/patientSearch/PatientSearch";
import {GlobalProvider} from "./context/GlobalState";
import SRMain from "./components/StikoRecommendation/SRMain";

const queryClient = new QueryClient();

function App() {
  return (
    <GlobalProvider>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
            <NavbarMain />
            <Routes>
                <Route path="/" element={<HomePageMain />} />
                <Route path="stiko-empfehlungen" element={<SRMain />} />
                <Route path="generelle-uebersicht" element={<MainView />} />
                <Route path="search::value" element={<PatientSearch />} />
            </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </GlobalProvider>
  );
}

export default App;
