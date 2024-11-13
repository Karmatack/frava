import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import Navbar from "./components/Navbar";
import Header from "./components/Header";
import Footer from "./components/Footer";
import FloatingIcons from "./components/FloatingIcons";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <Router>
      <Navbar />
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nosotros" element={<About />} />
        <Route path="/servicios-contables" element={<Services />} />
        <Route path="/contacto" element={<Contact />} />

        <Route path="*" element={<NotFound />} /> {/* Ruta 404 */}



      </Routes>

      <Footer />
      <FloatingIcons />
    </Router>
  );
}

export default App;
