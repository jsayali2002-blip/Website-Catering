import { Link } from "react-router-dom";
import { useState } from "react";
import "./Navbar.scss"; 
//import Logo from "./public/Images/Logo.webp"

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">
        <img src="/Images/Logo.webp" alt="logo" className="nav-logo" />
        Catering Service
      </div>

      <div className={`links ${open ? "active" : ""}`}>
        <Link to="/" onClick={() => setOpen(false)}>
          Home
        </Link>
        <Link to="/menu" onClick={() => setOpen(false)}>
          Menu
        </Link>
        <Link to="/about" onClick={() => setOpen(false)}>
          About
        </Link>
        <Link to="/service" onClick={() => setOpen(false)}>
          Service
        </Link>
        <Link to="/testimonials" onClick={() => setOpen(false)}>
          Testimonials
        </Link>
        <Link to="/contact" onClick={() => setOpen(false)}>
          Contact
        </Link>
      </div>

      <div
        className={`burger ${open ? "active" : ""}`}
        onClick={() => setOpen(!open)}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>
    </nav>
  );
}
