



import React,  { useRef } from 'react'
import '../assets/css/home.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay } from "swiper/modules";
import image1 from "../assets/images/pngtree-blue-business-technology-information-security-banner-background-image_260807.jpg";
import image2 from "../assets/images/Blue Geometric Technology General Professional LinkedIn Banner.png";
import image3 from "../assets/images/White Minimalist Corporate Personal Profile LinkedIn Banner.png"
import about from '../assets/images/about1.jpg';
import bg from '../assets/images/bg1.png';
import Footer from '../components/footer';
import image4 from '../assets/images/24.0-Co-LivingConcept-04-1-scaled-1600x900.jpg'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Swiper as AmenitySwiper, SwiperSlide as AmenitySlide } from "swiper/react";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate
  const swiperRef = useRef(null); // Ref for the main swiper
  const audienceSwiperRef = useRef(null); // Ref for the audience swiper


  const slides = [
    {
      image: image1,
      title: "Welcome to Aigis Residents Management",
      description: "Streamline your hostel operations with an all-in-one platform. From bookings to payments, our software makes managing your co-living space easier than ever.",
    },
    {
      image: image2,
    },
    
  ];

  const features = [
    {
      id: 1,
      title: "Real-Time Room Availability",
      description: "View and manage room availability instantly to avoid double bookings and make the best use of your available spaces.",
      icon: "📅",
    },
    {
      id: 2,
      title: "Enterprise-Grade Security",
      description: "Your data is protected with industry-leading encryption and security protocols to ensure your sensitive information stays safe.",
      icon: "🔒",
    },
    {
      id: 3,
      title: "Payment Integration",
      description: "Secure and easy payment integration that supports multiple payment methods, making transactions quick and seamless.",
      icon: "💳",
    },
    {
      id: 4,
      title: "Dashboards & Reporting",
      description: "Our dashboards and reports provide a clear view of your operations.",
      icon: "📊",
    },
  ];


  const targetAudiences = [
    { title: "Hostel and Co-living Space Owners", description: "Manage bookings, payments, and operations with ease." },
    { title: "Hostel Residents", description: "Enjoy a hassle-free living experience with easy access to amenities." },
    { title: "Administrative Staff", description: "Access real-time information to manage operations efficiently." },
    { title: "Investors and Business Partners", description: "Gain insights into performance data and explore scalable opportunities." },
    { title: "Property Managers & Facility Supervisors", description: "Stay informed with live operational insights, maintenance logs, and occupancy reports." },
{ title: "Tenants' Families", description: "Peace of mind with secure access, real-time alerts, and visitor approvals." },
{ title: "Maintenance Teams", description: "Organize service requests, track task completion, and communicate seamlessly." },
{ title: "Security Personnel", description: "Manage visitor logs, resident IDs, and access control securely." },

  ];

  return (
    <div className="home">
           <Swiper
        autoplay={{ delay: 4000 }}
        loop
        modules={[Autoplay]}
        className="swiper-container"
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Get swiper instance
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="slide"
              onMouseEnter={() => swiperRef.current?.autoplay?.stop()}
              onMouseLeave={() => swiperRef.current?.autoplay?.start()}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                {index === 0 && (
                  <button className="cta-button" onClick={() => navigate('/contact')}>Get Started</button>
                )}
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="section2">
        <div className="section2-content">
          <motion.p
            className="para"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
Whether you’re managing a cozy guesthouse or a large-scale co-living space, Aigis is the all-in-one solution designed to simplify your operations. Our platform streamlines room management, bookings, payments, and more, so you can focus on growing your business while we handle the details.
Aigis offers a range of intuitive features that help you oversee every aspect of your operations effortlessly, from automated check-ins and real-time analytics to exceptional customer support. With our user-friendly interface, managing your property has never been easier. <br/><br/>
We understand that data security is paramount in today’s digital world. That’s why Aigis employs top-tier security measures to ensure your data—and your guests' data—remains safe and protected at all times. From secure payment processing to encryption protocols, we take every step to guard your sensitive information. 
What’s more, our dedicated support team is always available to assist with any questions or challenges you may encounter. Choose Aigis today and discover how our cutting-edge software is revolutionizing hostel and co-living space management.

          </motion.p>
          <motion.img
            src={image4}
            alt="Description of the image"
            className="section2-image"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      </div>

      <div className="section3">
        <section className="features-sections">
          <h2 className="features-titles">Key Features</h2>
          <motion.div
            className="features-container"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            {features.map((feature) => (
              <motion.div
                key={feature.id}
                className="features-cards"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="features-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>
          <button className="features-button" onClick={() => navigate('/features')}>More</button>
        </section>
      </div>

      <div className="target-audiences-section">
        <h2 className="section-title">Who We Serve</h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          autoplay={{ delay: 1500 }}
          loop
          breakpoints={{
            1024: { slidesPerView: 3 },
            768: { slidesPerView: 2 },
            480: { slidesPerView: 1 },
          }}
          modules={[Autoplay]}
          className="audiences-swiper"
          onSwiper={(swiper) => (audienceSwiperRef.current = swiper)} // Capture swiper instance
        >
          {targetAudiences.map((audience, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="audience-card"
                onMouseEnter={() => audienceSwiperRef.current?.autoplay?.stop()}
                onMouseLeave={() => audienceSwiperRef.current?.autoplay?.start()}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <h3>{audience.title}</h3>
                <p>{audience.description}</p>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <section className="about-section">
        <div className="about-section-container">
          <div className="image-container">
            <motion.img
              src={about}
              alt="Feature"
              className="feature-image"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            />
          </div>
          <div className="content-container">
            <h2 className="section-title">Why Choose Aigis?</h2>
            <motion.p
              className="section-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              Aigis offers a seamless, user-friendly experience for hostel and co-living management. Our platform is equipped with robust features such as automated billing, advanced security, real-time monitoring, and seamless communication tools.
            </motion.p>
            <button className="section-button" onClick={() => navigate('/about')}>Learn More</button>
          </div>
        </div>
      </section>



      <section className="management-section">
        <h2 className="management-title">Optimizing Operations with Innovation</h2>
        <div className="management-container">
          <div className="management-card">
            <h2>Seamless Automation</h2>
            <p>Automate tasks to reduce manual work and improve efficiency.</p>
          </div>
          <div className="management-card">
            <h2>Advanced Security</h2>
            <p>Enhanced security features to protect data and transactions.</p>
          </div>
          <div className="management-card">
            <h2>Scalable Solutions</h2>
            <p>Designed to scale with your growing business needs.</p>
          </div>
        </div>
      </section>

      <section className="benefits-sections">
  <h2 className="sections-title">Benefits of Aigis</h2>
  <div className="benefits-container">
    <motion.div
      className="benefit-cards"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate('/admin_benefits')}
    >
      <h3>For Admins</h3>
      <p>
        Decentralized Identity for secure data, automated credential management, and improved compliance. Save time, scale efficiently, and focus on growth.
      </p>
      <button className="benefit-btn">Explore Admin Benefits</button>
    </motion.div>
    
    <motion.div
      className="benefit-cards"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
      onClick={() => navigate('/resident_benefits')}
    >
      <h3>For Residents</h3>
      <p>
        Hassle-free living experience with secure access, real-time notifications, service requests, and transparent communication—all from one place.
      </p>
      <button className="benefit-btn">Explore Resident Benefits</button>
    </motion.div>
  </div>
</section>




      <Footer />
    </div>
  )
}

export default Home;
