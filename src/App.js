import logo from './logo.svg';
import React, { useState, createContext } from 'react'
import './App.css';
// import Slider from './component/Slider';
// import Raw from './component/Raw';
import Navbar from './component/Navbar';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Footer from './component/Footer';
import Contact from './pages/Contact';
// import Learnmore from './pages/Learnmore';
import ScrollContext from './context/ScrollContext';
import Main from './component/Main';
import Product from './pages/Product';


function App() {

  return (

    <div className="App">
      <BrowserRouter>
        <ScrollContext>
          {/* <Navbar /> */}
          <Routes >
            <Route path="/" element={<Main />}>
              <Route index element={<Home />} />
              <Route path="/product" element={<Product />} />
              {/* <Route path="/learn" element={<Learnmore />} /> */}
              {/* <Navbar /> */}
              </Route>
          </Routes>
          <Footer />
        </ScrollContext>
      </BrowserRouter>
    </div>

  );
}

export default App;
