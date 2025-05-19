

import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
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
  <NavLink to="/">
    <img src={logo} alt="Logo" />
  </NavLink>
</div>

      <ul className={`nav-links ${menuOpen ? "active" : ""}`} onClick={() => setMenuOpen(false)}>
        <li><NavLink to="/" end className={({ isActive }) => isActive ? "active-link" : ""}>Home</NavLink></li>
        <li><NavLink to="/features" className={({ isActive }) => isActive ? "active-link" : ""}>Features</NavLink></li>
        <li><NavLink to="/technology" className={({ isActive }) => isActive ? "active-link" : ""}>Technology</NavLink></li>
        <li><NavLink to="/about" className={({ isActive }) => isActive ? "active-link" : ""}>About</NavLink></li>
        <li><NavLink to="/contact" className={({ isActive }) => isActive ? "active-link" : ""}>Contact</NavLink></li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu} role="button" aria-label="Toggle menu">
        ☰
      </div>
    </nav>
  );
};

export default Navbar;





