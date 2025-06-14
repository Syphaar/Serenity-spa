import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home';
import Navbar from './navbar/Navbar';
import Footer from './footer/footer';
import Services from './pages/Services/Services';
import Contact from './pages/Contact/Contact';
import BackToTop from './SharedFiles/BackToTop';
import AutomaticScroll from './SharedFiles/AutomaticScroll';
import AOS from "aos"
import "aos/dist/aos.css"

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
    });
  }, []);

  return (
    <Router>
      <AutomaticScroll />
      <div className="flex pt-14 flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
        <BackToTop />
      </div>
    </Router>
  );
};

export default App;
