import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingIcons from './components/FloatingIcons/FloatingIcons';
import Home from './pages/Home/Home';
import About from './pages/About/About';
import Services from './pages/Services/Services';
import Clients from './pages/Clients/Clients';
import Contact from './pages/Contact/Contact';
function App() {
  return (
    <Router>
      <Header />
      <Routes> 
        <Route path="/src/pages/Home/Home.js" element={<Home />} />
        <Route path="/src/pages/About/About.js" element={<About />} />
        <Route path="/src/pages/Services/Services.js" element={<Services />} />
        <Route path="/src/pages/Clients/Clients.js" element={<Clients />} />
        <Route path="/src/pages/Contact/Contact.js" element={<Contact />} />
      </Routes>
      <Footer />
      <FloatingIcons />
    </Router>
  );
}

export default App;
