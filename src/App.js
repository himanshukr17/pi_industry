import React from "react";
import "./App.css";
import NotFound from "pages/NotFound";
import AppBar from "components/AppBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MasterPage from "pages/MasterPage";
import RoutesPage from "../src/pages/Route"
import Loginmain from "pages/Onboarding/login";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<Loginmain />} />
        <Route exact path="/dashboard" element={<MasterPage />} />
        <Route exact path="/route" element={<RoutesPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
