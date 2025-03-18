import { Link } from "react-router-dom";
import "../assets/css/style.css";
import logo from "../assets/images/logo.png"


const header = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="AIGIS Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/features">Features</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default header;

