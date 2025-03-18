import React from "react";
import "../assets/css/contact.css"; // Import the CSS file
import roomImage from "../assets/images/hostels-pms.jpg"; // Replace with your actual image path
import Footer from "../components/footer";

const ContactUs = () => {
  return (
    <div>
            <section className="contact-container">
      {/* Left Image Section */}
      <div className="contact-image">
        <img src={roomImage} alt="Hostel Room" />
      </div>

      {/* Right Contact Form Section */}
      <div className="contact-form">
        <h2>Contact Us</h2>

        <form>
          {/* Name Fields */}
          <div className="form-group name-group">
            <div>
              <label>Name *</label>
              <input type="text" placeholder="First" required />
            </div>
            <div>
              <label>Last Name</label>
              <input type="text" placeholder="Last" />
            </div>
          </div>

          {/* Email Field */}
          <div className="form-group">
            <label>Email *</label>
            <input type="email" placeholder="Enter your email" required />
          </div>

          {/* Message Field */}
          <div className="form-group">
            <label>Comment or Message</label>
            <textarea rows="4" placeholder="Your message..."></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit">Submit</button>
        </form>
      </div>
    </section>
    <Footer/>
    </div>
);
};

export default ContactUs;

