import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home';
import DownFooter from './Components/DownFooter/DownFooter';
import About from './Pages/About/About';
import Contact from './Pages/Contact/Contact';
import WebWork from './Pages/WebWork/WebWork';
import Service from './Pages/Service/Service';
import Carrier from './Pages/Carrier/Carrier';
import Products from './Pages/Products/Products';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/web-plan" element={<WebWork />} />
        <Route path="/services" element={<Service />} />
        <Route path="/carrier" element={<Carrier />} />
        <Route path="/product" element={<Products />} />

      </Routes>
      <DownFooter/>
    </Router>
  );
}

export default App;
