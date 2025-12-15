import { Suspense, lazy } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Loader from "./assets/Componenets/Loader";
import Navbar from "./assets/Componenets/Navbar";
import Footer from "./assets/Componenets/Footer";
import ErrorBoundary from "./assets/Componenets/ErrorBoundary";
import ScrollToTop from "./assets/Componenets/ScrollTop";

// Lazy Loaded Pages
const Home = lazy(() => import("./assets/Pages/Home"));
const Menu = lazy(() => import("./assets/Pages/Menu"));
const About = lazy(() => import("./assets/Pages/About"));
const Contact = lazy(() => import("./assets/Pages/Contact"));
const Testimonials = lazy(() => import("./assets/Pages/Testimonials"));
const Service = lazy(() => import("./assets/Pages/Service"));

function App() {
  return (
    <ErrorBoundary>
      <Router>
        <Navbar />
<ScrollToTop />
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/testimonials" element={<Testimonials />} />
            <Route path="/service" element={<Service />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </ErrorBoundary>
  );
}

export default App;
