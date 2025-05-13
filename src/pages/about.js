



import React from 'react'
import '../assets/css/about.css';
import Footer from '../components/footer';
import { motion } from "framer-motion";
import h1 from '../assets/images/Operations-LinkedIn-Cover-Banner-2-qddl80ttyq771wdft0viuhh0v0myc680xcrrj6ki9k.png';
import h2 from '../assets/images/Hostel-Managemen-System.png';
import all_in_one from '../assets/images/vector-light-bulb-icon.jpg';
import user_friendly from '../assets/images/8878493.png';
import data_security from '../assets/images/lock-circle-blue-1024.webp';
import contact_support from '../assets/images/309-3095068_free-download-customer-support-icon-blue-clipart-customer.png';
import h3 from '../assets/images/Hostel-Management_02.webp';
import vision from '../assets/images/business-vision-and-target-illustration-vector.jpg';
import coreValues from '../assets/images/14334.jpg';
import howWeHelp from '../assets/images/hotel-service-people-cartoon-characters-staying-hostel-vector-illustration-luxury-accommodation-travelers-professional-172743072.webp';

const About = () => {
  return (
    <div className='about'>
      {/* Section 1 with fade-in effect */}
      <motion.div className='about-section1' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <img src={h1} className='h1' />
        <h1>About Us</h1>
      </motion.div>

      {/* Section 2 with slide-in effect */}
      <motion.div className='about-section2' initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}>
        <h1>About Us</h1>
        <p>At Aigis, we believe that managing a co-living or hostel business should be simple, efficient, and scalable. Our platform provides all the tools you need to manage your operations effortlessly, helping you deliver the best experience for both your guests and your team.</p>
      </motion.div>

      {/* Section 3 with fade-in and image sliding in */}
      <motion.div className='section3-about' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className='content'>
          <p className='matter'>Founded with the aim of revolutionizing the co-living industry, we bring years of experience in hospitality and technology to create a user-friendly and feature-rich solution. Our goal is to empower hostel owners and managers to provide an exceptional stay for their guests without the hassle of manual tracking and outdated systems.</p><br/>
          <p className='matter'>At Aigis, we believe that modern co-living spaces deserve smart, seamless, and efficient management tools that enhance both guest experience and operational efficiency. Our platform is designed to streamline day-to-day operations, automate administrative tasks, and ensure a stress-free environment for both residents and staff.</p>
        </div>
        <motion.img src={h2} initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} />
      </motion.div>

      {/* Why Choose Us Section with fade-in for each feature */}
      <motion.div className="why-choose-us" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h2 className="section-title">Why choose us?</h2>
        <div className="features-container">
          <motion.div className="feature" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <img src={all_in_one} alt="All-in-One Solution" />
            <h3>All-in-One Solution</h3>
            <p>From bookings to payments and security, our platform covers all aspects of hostel management in one place.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <img src={user_friendly} alt="User-Friendly Interface" />
            <h3>User-Friendly Interface</h3>
            <p>No technical expertise required! Our intuitive dashboard makes it easy for you and your team to manage operations seamlessly.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <img src={data_security} alt="Data-Driven Insights" />
            <h3>Data-Driven Insights</h3>
            <p>Make smarter decisions with advanced reporting tools that provide insights into occupancy, revenue, and guest trends.</p>
          </motion.div>
          <motion.div className="feature" whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
            <img src={contact_support} alt="24/7 Customer Support" />
            <h3>24/7 Customer Support</h3>
            <p>Our expert support team is always available to help you resolve any issues and ensure smooth operations.</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Vision & Mission Section with fade-in effect */}
      <motion.div className='section4 with-image' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className='text'>
          <h2>Our Vision & Mission</h2>
          <p>Our vision is to redefine how hostels and co-living spaces operate by embracing modern technology. We aim to create a connected, automated, and intelligent management experience for property owners, staff, and residents.</p>
          <p>Our mission is to empower hostel managers with powerful tools that remove operational chaos, increase guest satisfaction, and ultimately grow their business.</p>
        </div>
        <motion.img src={vision} alt='Vision and Mission' initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='core-img' />
      </motion.div>

      {/* Core Values Section with fade-in */}
      <motion.div className='core-values with-image reverse' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className='text'>
          <h2>Our Core Values</h2>
          <ul>
            <li><strong>Innovation:</strong> Constantly evolving to offer the most up-to-date and impactful features.</li>
            <li><strong>Reliability:</strong> Count on us for stable and secure solutions you can trust 24/7.</li>
            <li><strong>Customer Success:</strong> Your success is our success. We go the extra mile for every client.</li>
            <li><strong>Simplicity:</strong> Simple yet powerful tools designed with a user-first approach.</li>
          </ul>
        </div>
        <motion.img src={coreValues} alt='Core Values' initial={{ x: -200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }} className='core-img' />
      </motion.div>

      {/* How We Help Section with fade-in */}
      <motion.div className='how-we-help with-image' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className='text'>
          <h2>How We Help Hostel Owners & Managers</h2>
          <p>Whether you're running a small hostel or managing multiple co-living properties, our platform provides the flexibility and power to scale your operations. Features include:</p>
          <ul>
            <li>Real-time resident and booking management</li>
            <li>Digital check-ins and document verification</li>
            <li>Automated billing and payment tracking</li>
            <li>Maintenance and complaint resolution system</li>
            <li>Analytics dashboard for performance tracking</li>
            <li>Role-based access for admin, staff, and residents</li>
          </ul>
        </div>
        <motion.img src={howWeHelp} alt='How We Help' initial={{ x: 200, opacity: 0 }} animate={{ x: 0, opacity: 1 }} transition={{ duration: 1 }}  className='core-img'/>
      </motion.div>

      {/* Section 5 with fade-in and text slide-in */}
      <motion.div className='section5' initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <h1>
          Transform<br/> Your Hostel<br/> Management Today
        </h1>
      </motion.div>

      <Footer />
    </div>
  )
}

export default About;
