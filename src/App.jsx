import React from "react";
import Home from "./pages/Home/Home";
import Dashboard from "./pages/Dashboard/Dashboard";
import Onboarding from "./pages/Onboarding/Onboarding";
import { BrowserRouter, Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={""} element={<Home />} />
        <Route path={"/dashboard"} element={<Dashboard />} />
        <Route path={"/onboarding"} element={<Onboarding />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
