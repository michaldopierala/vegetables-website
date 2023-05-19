import logo from './logo.svg';
import './App.css';
import Slider from './component/Slider';
import Raw from './component/Raw';
import Navbar from './component/Navbar';
import { BrowserRouter, Link, Routes, Route } from "react-router-dom";
import Home from './component/Home';
import Footer from './component/Footer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
        <Route index element={<Home />} />
          {/* <Navbar /> */}
          {/* <Slider /> */}
          {/* <Raw /> */}
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
