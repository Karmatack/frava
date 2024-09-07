import React from 'react';
import './App.css';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import FloatingIcons from './components/FloatingIcons/FloatingIcons';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className="App">
      <Header /> 
      <Home /> 
      <Footer />
      <FloatingIcons />
    </div>
  );
}

export default App;
