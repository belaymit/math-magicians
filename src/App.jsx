import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar/Navbar';
import Home from './pages/home/Home';
import Calculations from './components/calculator/Calculator';
import Quotes from './pages/quotes/Quotes';
import Footer from './components/footer/Footer';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/calculator" element={<Calculations />} />
        <Route path="/quotes" element={<Quotes />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  </>
);

export default App;
