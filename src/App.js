import React from "react";
import './App.css';
import HomePageMain from "./components/HomePage/HomePageMain";
import NavbarMain from "./components/Header/NavbarMain";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes, useLocation } from "react-router-dom";
//import HomePageCardElement from "./components/HomePage/HomePageCardElement";
import MainView from "./components/GeneralOverview/MainView";
import PatientSearch from "./components/patientSearch/PatientSearch";
import {GlobalProvider} from "./context/GlobalState";
import SRMain from "./components/StikoRecommendation/SRMain";
import Footer from "./components/HomePage/Footer";
import { AnimatePresence } from "framer-motion";

const queryClient = new QueryClient();

function App() {
    const location = useLocation();

    return (
        <GlobalProvider>
            <QueryClientProvider client={queryClient}>
                <NavbarMain />
                <AnimatePresence>
                    <Routes location={location} key={location.key}>
                        <Route path="/" element={<HomePageMain />} />
                        <Route path="stiko-empfehlungen" element={<SRMain />} />
                        <Route path="generelle-uebersicht" element={<MainView />} />
                        <Route path="search::value" element={<PatientSearch />} />
                    </Routes>
                </AnimatePresence>
                {location.pathname === '/'
                 ? null : <Footer/>}
            </QueryClientProvider>
        </GlobalProvider>
    );
}

export default App;
