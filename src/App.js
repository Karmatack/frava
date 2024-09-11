import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingIcons from './components/FloatingIcons/FloatingIcons';
import Home from './pages/Home/Home';  // Importamos Home
import About from './pages/About/About';  // Importamos About
import Services from './pages/Services/Services';  // Importamos Services
import Clients from './pages/Clients/Clients';  // Importamos Clients
import Contact from './pages/Contact/Contact';  // Importamos Contact

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />  {/* Home será la página principal */}
        <Route path="/about" element={<About />} />  {/* Página de ¿Quiénes Somos? */}
        <Route path="/services" element={<Services />} />  {/* Página de Servicios */}
        <Route path="/clients" element={<Clients />} />  {/* Página de Clientes */}
        <Route path="/contact" element={<Contact />} />  {/* Página de Contacto */}
      </Routes>
      <Footer />
      <FloatingIcons />
    </Router>
  );
}

export default App;
