import React from 'react'
import '../assets/css/style.css';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import image1 from "../assets/images/h1.jpg";
import image2 from "../assets/images/Hostel-Managemen-info.png";
import image3 from "../assets/images/hostel-management-software1-1.jpg"
import about from '../assets/images/about1.jpg';
import bg from '../assets/images/bg1.png';
import Footer from '../components/footer';





const home = () => {


    const slides = [
        {
          image: image1,
          title: "Welcome to Aigis Hostel",
          description: "Streamline your hostel operations with an all-in-one platform. From bookings to payments, our software makes managing your co-living space easier than ever.",
        },

        {
          image: image3,
        },
      ];


      

      const features = [
        {
          id: 1,
          title: "Real-Time Room Availability",
          description:
            "View and manage room availability instantly to avoid double bookings and make the best use of your available spaces.",
          icon: "📅",
        },
        {
          id: 2,
          title: "Enterprise-Grade Security",
          description:
            "Your data is protected with industry-leading encryption and security protocols to ensure your sensitive information stays safe.",
          icon: "🔒",
        },
        {
          id: 3,
          title: "Payment Integration",
          description:
            "Secure and easy payment integration that supports multiple payment methods, making transactions quick and seamless.",
          icon: "💳",
        },
        {
          id: 4,
          title: "Dashboards & Reporting",
          description:
            "Our dashboards and reports provide a clear view of your operations.",
          icon: "📊",
        },
      ];

  return (
    <div className='home'>
       <Swiper
        navigation
        autoplay={{ delay: 4000 }}
        loop
        modules={[Navigation, Autoplay]}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide">
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                {index === 0 && <button className="cta-button">Get Started</button>}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className='section2'>
        <p>
        Whether you’re managing a small guesthouse or a large co-living space, our software is designed to simplify the process of managing rooms, bookings, payments, and more. With Aigis, you can focus on growing your business while we take care of the details.
        </p>
      </div><br/>
      <div className='section3'>
        <section className="features-section">
            <h2 className="features-title">Key Features</h2>
            <div className="features-container">
                {features.map((feature) => (
                <div key={feature.id} className="feature-card">
                    <div className="feature-icon">{feature.icon}</div>
                    <h3 className="feature-title">{feature.title}</h3>
                    <p className="feature-description">{feature.description}</p>
                </div>
                ))}
            </div>
            <button className="features-button">More</button>
        </section>
      </div><br/>
      <section className="about-section">
      <div className="about-section-container">
        <div className="image-container">
          <img src={about} alt="Feature" className="feature-image" />
        </div>
        <div className="content-container">
          <h2 className="section-title">Why Choose Aigis?</h2>
          <p className="section-text">
            Aigis offers a seamless, user-friendly experience for hostel and co-living management. Our platform is equipped with robust features such as automated billing, advanced security, real-time monitoring, and seamless communication tools.
          </p>
          <button className="section-button">Learn More</button>
        </div>
      </div>
    </section>
    <section className="management-section">
      <h2 className="management-title">Optimizing Operations with Innovation</h2>
      <div className="management-container">
        <div className="management-card">
          <h3>Seamless Automation</h3>
          <p>Automate tasks to reduce manual work and improve efficiency.</p>
        </div>
        <div className="management-card">
          <h3>Advanced Security</h3>
          <p>Enhanced security features to protect data and transactions.</p>
        </div>
        <div className="management-card">
          <h3>Scalable Solutions</h3>
          <p>Designed to scale with your growing business needs.</p>
        </div>
      </div>
    </section>
        <div className='bg-image'>
        <img src={bg}  className='bg'/>
        </div>
        
        <div className='end-section'>
            <div className='content'>
                <h2 align="center">Talk to an Expert</h2>
                <p align="center">Book a free demo to see how our technology can transform your property management business.</p>
                <div className="call-container">
                    <button className="call">Schedule for Call</button>
                </div>       
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default home
