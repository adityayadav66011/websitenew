import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home";
import { AboutUs } from "./pages/about";
import DiplomaProgram from "./pages/diplomaprogram"; // Import the DiplomaProgram component
import CertificateProgram from "./pages/certificatefoundational"; // Import the DiplomaProgram component
import CertificateProgramK12TeachingSkills from "./pages/certificateteaching"; // Import the DiplomaProgram component


import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/diplomaprogram" element={<DiplomaProgram />} /> {/* Add routing for DiplomaProgram */}
        <Route path="/certificatefoundational" element={<CertificateProgram />} /> {/* Add routing for DiplomaProgram */}
        <Route path="/certificateteaching" element={<CertificateProgramK12TeachingSkills />} /> {/* Add routing for DiplomaProgram */}

      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
