
import "../assets/css/footer.css";

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section about">
            <h2>Aigis</h2>
            <p className="footer-about">
              Streamline your hostel operations with an all-in-one platform.  
              From bookings to payments, our software makes managing  
              your co-living space easier than ever.
            </p>
          </div>
  
          <div className="footer-section links">
            <h3>Quick Links</h3>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/about">About Us</a></li>
              <li><a href="/features">Features</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>
  
          <div className="footer-section contact">
            <h3>Contact</h3>
            <p>Email: info@aigis.com</p>
            <p>Phone: +91 9090909090</p>
            <p>Address: Hyderabad</p>
          </div>
        </div>
  
        <div className="footer-bottom">
          <p>Copyright © 2025 Aigis</p>
          <a href="/privacy-policy">Privacy Policy</a>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  