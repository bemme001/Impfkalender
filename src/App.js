import React from "react";
import './App.css';
import HomePageMain from "./HomePage/HomePageMain";
import NavbarMain from "./Header/NavbarMain";
import { QueryClient, QueryClientProvider } from "react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePageCardElement from "./HomePage/HomePageCardElement";
import MainView from "./GeneralOverview/MainView";
import PatientSearch from "./components/patientSearch/PatientSearch";
import {GlobalProvider} from "./context/GlobalState";

const queryClient = new QueryClient();
import MainView from "./components/GeneralOverview/MainView";
import SRMain from "./components/StikoRecommendation/SRMain";

function App() {
  return (
    <GlobalProvider>
        <QueryClientProvider client={queryClient}>
            <BrowserRouter>
            <NavbarMain />
            <Routes>
                <Route path="/" element={<HomePageMain />} />
                <Route path="stiko-empfehlungen" element={<SRMain />} />
                <Route path="mainview" element={<MainView />} />
                <Route path="search::value" element={<PatientSearch />} />
            </Routes>
            </BrowserRouter>
        </QueryClientProvider>
    </GlobalProvider>
  );
}

export default App;
