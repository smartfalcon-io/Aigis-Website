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

const scaleUp = {
  hidden: { scale: 0 },
  visible: { scale: 1, transition: { duration: 0.5 } }
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
                <motion.input type="text" placeholder="First" required variants={scaleUp} />
              </div>
              <div>
                <label>Last Name</label>
                <motion.input type="text" placeholder="Last" variants={scaleUp} />
              </div>
            </div>

            <div className="form-group">
              <label>Email *</label>
              <motion.input type="email" placeholder="Enter your email" required variants={scaleUp} />
            </div>

            <div className="form-group">
              <label>Comment or Message</label>
              <motion.textarea rows="4" placeholder="Your message..." variants={scaleUp}></motion.textarea>
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              variants={scaleUp}
            >
              Submit
            </motion.button>
          </form>
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default ContactUs;
