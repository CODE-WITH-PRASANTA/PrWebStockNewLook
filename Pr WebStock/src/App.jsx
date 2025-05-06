import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import DownFooter from './Components/DownFooter/DownFooter';
import { Suspense, lazy, useState, useEffect } from 'react';
import { Atom } from 'react-loading-indicators';
import Blog from './Pages/Blog/Blog';

// Lazy load pages
const Home = lazy(() => import('./Pages/Home/Home'));
const About = lazy(() => import('./Pages/About/About'));
const Contact = lazy(() => import('./Pages/Contact/Contact'));
const WebWork = lazy(() => import('./Pages/WebWork/WebWork'));
const Service = lazy(() => import('./Pages/Service/Service'));
const Carrier = lazy(() => import('./Pages/Carrier/Carrier'));
const Products = lazy(() => import('./Pages/Products/Products'));

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => {
      setLoading(false);
    }, 1000); // adjust the delay time as needed

    return () => clearTimeout(timeoutId);
  }, [location]);

  return (
    <div className="app-container">
      {loading && (
        <div className="loader-container">
          <Atom color="#1d4e89" size="medium" text="Loading..." textColor="#1d4e89" />
        </div>
      )}
      <div className="content-wrapper" style={{ display: loading ? 'none' : 'block' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web-plan" element={<WebWork />} />
          <Route path="/services" element={<Service />} />
          <Route path="/carrier" element={<Carrier />} />
          <Route path="/product" element={<Products />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
        <DownFooter />
      </div>
    </div>
  );
}

function AppWrapper() {
  return (
    <Router>
      <Suspense fallback={<div className="loader-container"><Atom color="#1d4e89" size="medium" text="Loading..." textColor="#1d4e89" /></div>}>
        <App />
      </Suspense>
    </Router>
  );
}

export default AppWrapper;