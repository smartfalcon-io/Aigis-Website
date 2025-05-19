

import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/Aigis-LOGO1.png";
import '../assets/css/header.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  // Add scroll event listener to hide/show header
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <img src={logo} alt="Logo"/>
      </div>
      <ul className={`nav-links ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/technology">Technology</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu} role="button" aria-label="Toggle menu">
        ☰
      </div>
    </nav>
  );
};

export default Navbar;
