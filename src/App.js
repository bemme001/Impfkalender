import React from "react";
import './App.css';
import HomePageMain from "./HomePage/HomePageMain";
import NavbarMain from "./Header/NavbarMain";
import { QueryClient, QueryClientProvider } from "react-query";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import HomePageCardElement from "./HomePage/HomePageCardElement";
import MainView from "./GeneralOverview/MainView";
import PatientSearch from "./components/patientSearch/PatientSearch";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
        <BrowserRouter>
        <NavbarMain />
        <Routes>
            <Route path="/" element={<HomePageMain />} />
            <Route path="stiko-empfehlungen" element={<HomePageCardElement />} />
            <Route path="mainview" element={<MainView />} />
            <Route path="search::value" element={<PatientSearch />} />
        </Routes>
        </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
