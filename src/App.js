import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Event from './pages/Event';
import Tickets from './pages/Tickets'
import Cart from './pages/Cart';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      {/* Header will be rendered once for all routes */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event/:eventName/:eventDate" element={<Event />}/>
        <Route path="/tickets" element={<Tickets />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
      {/* Footer will be rendered once for all routes */}
      <Footer />


    </Router>
  );
}

export default App;
