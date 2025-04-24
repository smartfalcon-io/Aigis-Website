

import React from "react";
import { motion } from "framer-motion";
import "../assets/css/contact.css";
import roomImage from "../assets/images/Contact.jpg";
import Footer from "../components/footer";

// Animation Variants
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const ContactUs = () => {
  return (
    <div>
      {/* Contact Section */}
      <motion.section
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Left Image Section */}
        <motion.div className="contact-image" variants={slideInLeft}>
          <img src={roomImage} alt="Hostel Room" />
        </motion.div>

        {/* Right Contact Form Section */}
        <motion.div className="contact-form" variants={slideInRight}>
          <h2>Contact Us</h2>
          <form>
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

            <div className="form-group">
              <label>Email *</label>
              <input type="email" placeholder="Enter your email" required />
            </div>

            <div className="form-group">
              <label>Comment or Message</label>
              <textarea rows="4" placeholder="Your message..."></textarea>
            </div>

            <motion.button type="submit" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.section>

      {/* Google Map and Address Section */}
      <motion.section
        className="contact-map-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="contact-address" variants={fadeInUp}>
          <h3>Our Address</h3>
          <p>Aigis Hostel Management</p>
          <p>THub Phase 2, Plot No 1/C, Sy No 83/1,</p>
          <p>Raidurgam panmaktha, Hyderabad Knowledge City, Serilingampally,</p>
          <p>Hyderabad, Telangana - 500 081.</p>
          <p>Email: contact@smartfalcon.io</p>
          <p>Phone: +91 98662 27022</p>
        </motion.div>

        <motion.div className="contact-map" variants={fadeInUp}>
          <iframe
            title="Google Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3806.525376550049!2d78.37664357493584!3d17.434550583460744!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb93e37831f177%3A0x32d4499d34baaa78!2sT-Hub%20Phase%202!5e0!3m2!1sen!2sin!4v1745478024897!5m2!1sen!2sin"
            width="100%"
            height="250"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </motion.section>

      <Footer />
    </div>
  );
};

export default ContactUs;
