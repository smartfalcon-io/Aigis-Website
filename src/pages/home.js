// import React from 'react'
// import '../assets/css/home.css';
// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Autoplay } from "swiper/modules";
// import image1 from "../assets/images/pngtree-blue-business-technology-information-security-banner-background-image_260807.jpg";
// import image2 from "../assets/images/Blue Geometric Technology General Professional LinkedIn Banner.png";
// import image3 from "../assets/images/White Minimalist Corporate Personal Profile LinkedIn Banner.png"
// import about from '../assets/images/about1.jpg';
// import bg from '../assets/images/bg1.png';
// import Footer from '../components/footer';
// import image4 from '../assets/images/istockphoto-1137953347-612x612.jpg'
// import { motion } from "framer-motion";
// import { useNavigate } from 'react-router-dom'; // Import useNavigate
// import { Swiper as AmenitySwiper, SwiperSlide as AmenitySlide } from "swiper/react";



// const Home = () => {

//   const navigate = useNavigate(); // Initialize useNavigate


//     const slides = [
//         {
//           image: image1,
//           title: "Welcome to Aigis Hostel",
//           description: "Streamline your hostel operations with an all-in-one platform. From bookings to payments, our software makes managing your co-living space easier than ever.",
//         },

//         {
//           image: image2,
//         },
//         {
//           image: image3,
//         },
//       ];


      

//       const features = [
//         {
//           id: 1,
//           title: "Real-Time Room Availability",
//           description:
//             "View and manage room availability instantly to avoid double bookings and make the best use of your available spaces.",
//           icon: "📅",
//         },
//         {
//           id: 2,
//           title: "Enterprise-Grade Security",
//           description:
//             "Your data is protected with industry-leading encryption and security protocols to ensure your sensitive information stays safe.",
//           icon: "🔒",
//         },
//         {
//           id: 3,
//           title: "Payment Integration",
//           description:
//             "Secure and easy payment integration that supports multiple payment methods, making transactions quick and seamless.",
//           icon: "💳",
//         },
//         {
//           id: 4,
//           title: "Dashboards & Reporting",
//           description:
//             "Our dashboards and reports provide a clear view of your operations.",
//           icon: "📊",
//         },
//       ];


//       const amenities = [
//         { id: 1, icon: "🛏️", title: "Comfortable Beds" },
//         { id: 2, icon: "📶", title: "High-Speed Wi-Fi" },
//         { id: 3, icon: "🧺", title: "Laundry Services" },
//         { id: 4, icon: "🏋️", title: "Gym Access" },
//         { id: 5, icon: "🚗", title: "Parking Available" },
//         { id: 6, icon: "🍽️", title: "Meal Services" },
//         { id: 7, icon: "🏊", title: "Swimming Pool" },
//         { id: 8, icon: "🧹", title: "Room Cleaning" },
//         { id: 9, icon: "📺", title: "TV Lounge" },
//         { id: 10, icon: "❄️", title: "Air Conditioning" },
//         { id: 11, icon: "🎮", title: "Game Room" },
//         { id: 12, icon: "🚿", title: "24/7 Hot Showers" },
//         { id: 13, icon: "🛗", title: "Lift Facility" },
//         { id: 14, icon: "🔒", title: "Locker Storage" },
//         { id: 15, icon: "👮", title: "24/7 Security" },
//         { id: 16, icon: "📦", title: "Parcel Handling" },
//         { id: 17, icon: "🧑‍⚕️", title: "First Aid Support" },
//         { id: 18, icon: "📞", title: "Help Desk Support" },
//       ];
      
//       const targetAudiences = [
//         { title: "Hostel and Co-living Space Owners", description: "Manage bookings, payments, and operations with ease." },
//         { title: "Hostel Residents", description: "Enjoy a hassle-free living experience with easy access to amenities." },
//         { title: "Administrative Staff", description: "Access real-time information to manage operations efficiently." },
//         { title: "Freelancers and Digital Nomads", description: "Find affordable, flexible accommodations for remote work." },
//         { title: "Tech-Savvy Users", description: "Leverage a modern platform to manage your living space seamlessly." },
//         { title: "Investors and Business Partners", description: "Gain insights into performance data and explore scalable opportunities." },
//       ];

//   return (
//     <div className='home'>
//        <Swiper
        
//         autoplay={{ delay: 4000 }}
//         loop
//         modules={[ Autoplay]}
//         className="swiper-container"
//       >
//         {slides.map((slide, index) => (
//           <SwiperSlide key={index}> 
//             <div className="slide">
//               <img src={slide.image} alt={slide.title} className="slide-image" />
//               <div className="slide-content">
//                 <h1>{slide.title}</h1>
//                 <p>{slide.description}</p>
//                 {index === 0 && <button className="cta-button" onClick={() => navigate('/contact')}>Get Started</button>}
//               </div>
//             </div>
//           </SwiperSlide>
//         ))}
//       </Swiper>

//       <div className='section2'>
//         <div className="section2-content">
//             <p className='para'>
//             Whether you’re managing a small guesthouse or a large co-living space, our software is designed 
//                     to simplify the process of managing rooms, bookings, payments, and more. With Aigis, you can focus 
//                     on growing your business while we take care of the details. 
//                     <br /><br />
//                     Our platform offers intuitive features that allow you to oversee various aspects of your operations seamlessly, 
//                     including automated check-ins, real-time analytics, and customer support. 
//                     Additionally, our dedicated team is always on hand to assist you with any questions or issues that may arise. 
//                     Choose Aigis and experience the future of hostel management today!
//             </p>
//             <img src={image4} alt="Description of the image" className="section2-image" />
//         </div>
//       </div><br/>
      
//       <div className='section3'>
//         <section className="features-sections">
//             <h2 className="features-title">Key Features</h2>
//             <div className="features-container"> 
//                 {features.map((feature) => (
//                 <div key={feature.id} className="feature-card">
//                     <div className="feature-icon">{feature.icon}</div>
//                     <h3 className="feature-title">{feature.title}</h3>
//                     <p className="feature-description">{feature.description}</p>
//                 </div>
//                 ))}
//             </div>
//             <button className="features-button" onClick={() => navigate('/features')} >More</button>
//         </section>
//       </div><br/>

//                 {/* Target Audiences Section with Swiper */}
//       <div className="target-audiences-section">
//         <h2 className="section-title">Who We Serve</h2>
//         <Swiper
//           spaceBetween={20}
//           slidesPerView={1}  // Set default number of slides
//           autoplay={{ delay: 1500 }}
//           loop
//           breakpoints={{
//             1024: { slidesPerView: 3 },  // 3 slides per view on larger screens
//             768: { slidesPerView: 2 },   // 2 slides per view on medium screens
//             480: { slidesPerView: 1 },   // 1 slide per view on smaller screens
//           }}
//           modules={[Autoplay]}
//           className="audiences-swiper"
//         >
//           {targetAudiences.map((audience, index) => (
//             <SwiperSlide key={index}>
//               <div className="audience-card">
//                 <h3>{audience.title}</h3>
//                 <p>{audience.description}</p>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//       </div>

     
   

//       <section className="about-section">
//       <div className="about-section-container">
//         <div className="image-container">
//           <img src={about} alt="Feature" className="feature-image" />
//         </div>
//         <div className="content-container">
//           <h2 className="section-title">Why Choose Aigis?</h2>
//           <p className="section-text">
//             Aigis offers a seamless, user-friendly experience for hostel and co-living management. Our platform is equipped with robust features such as automated billing, advanced security, real-time monitoring, and seamless communication tools.
//           </p>
//           <button className="section-button" onClick={() => navigate('/about')} >Learn More</button>
//         </div>
//       </div>
//     </section>

//     <div className="section7">
//   <h2 className="section-title">Our Amenities</h2>
//   <AmenitySwiper
//     spaceBetween={20}
//     slidesPerView={5}
//     autoplay={{ delay: 1500 }}
//     loop
//     breakpoints={{
//       1024: { slidesPerView: 5 },
//       768: { slidesPerView: 3 },
//       480: { slidesPerView: 2 },
//       0: { slidesPerView: 1 }
//     }}
//     modules={[Autoplay]}
//     className="amenities-swiper"
//   >
//     {amenities.map((item) => (
//       <AmenitySlide key={item.id}>
//         <div className="amenity-card">
//           <div className="amenity-icon">{item.icon}</div>
//           <div className="amenity-title">{item.title}</div>
//         </div>
//       </AmenitySlide>
//     ))}
//   </AmenitySwiper>
// </div>

//     <section className="management-section">
//       <h2 className="management-title">Optimizing Operations with Innovation</h2>
//       <div className="management-container">
//         <div className="management-card">
//           <h3>Seamless Automation</h3>
//           <p>Automate tasks to reduce manual work and improve efficiency.</p>
//         </div>
//         <div className="management-card">
//           <h3>Advanced Security</h3>
//           <p>Enhanced security features to protect data and transactions.</p>
//         </div>
//         <div className="management-card">
//           <h3>Scalable Solutions</h3>
//           <p>Designed to scale with your growing business needs.</p>
//         </div>
//       </div>
//     </section>
//         <div className='bg-image'>
//         <img src={bg}  className='bg'/>
//         </div>
        
//         <div className='end-section'>
//             <div className='content'>
//                 <h2 align="center">Talk to an Expert</h2>
//                 <p align="center">Book a free demo to see how our technology can transform your property management business.</p>
//                 <div className="call-container">
//                     <button className="call" onClick={() => navigate('/contact')}>Schedule for Call</button>
//                 </div>       
//             </div>
//         </div>
//         <Footer/>
//     </div>
//   )
// }

// export default Home



import React from 'react'
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
import image4 from '../assets/images/istockphoto-1137953347-612x612.jpg'
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { Swiper as AmenitySwiper, SwiperSlide as AmenitySlide } from "swiper/react";

const Home = () => {
  const navigate = useNavigate(); // Initialize useNavigate

  const slides = [
    {
      image: image1,
      title: "Welcome to Aigis Hostel",
      description: "Streamline your hostel operations with an all-in-one platform. From bookings to payments, our software makes managing your co-living space easier than ever.",
    },
    {
      image: image2,
    },
    {
      image: image3,
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

  const amenities = [
    { id: 1, icon: "🛏️", title: "Comfortable Beds" },
    { id: 2, icon: "📶", title: "High-Speed Wi-Fi" },
    { id: 3, icon: "🧺", title: "Laundry Services" },
    { id: 4, icon: "🏋️", title: "Gym Access" },
    { id: 5, icon: "🚗", title: "Parking Available" },
    { id: 6, icon: "🍽️", title: "Meal Services" },
    { id: 7, icon: "🏊", title: "Swimming Pool" },
    { id: 8, icon: "🧹", title: "Room Cleaning" },
    { id: 9, icon: "📺", title: "TV Lounge" },
    { id: 10, icon: "❄️", title: "Air Conditioning" },
    { id: 11, icon: "🎮", title: "Game Room" },
    { id: 12, icon: "🚿", title: "24/7 Hot Showers" },
    { id: 13, icon: "🛗", title: "Lift Facility" },
    { id: 14, icon: "🔒", title: "Locker Storage" },
    { id: 15, icon: "👮", title: "24/7 Security" },
    { id: 16, icon: "📦", title: "Parcel Handling" },
    { id: 17, icon: "🧑‍⚕️", title: "First Aid Support" },
    { id: 18, icon: "📞", title: "Help Desk Support" },
  ];

  const targetAudiences = [
    { title: "Hostel and Co-living Space Owners", description: "Manage bookings, payments, and operations with ease." },
    { title: "Hostel Residents", description: "Enjoy a hassle-free living experience with easy access to amenities." },
    { title: "Administrative Staff", description: "Access real-time information to manage operations efficiently." },
    { title: "Freelancers and Digital Nomads", description: "Find affordable, flexible accommodations for remote work." },
    { title: "Tech-Savvy Users", description: "Leverage a modern platform to manage your living space seamlessly." },
    { title: "Investors and Business Partners", description: "Gain insights into performance data and explore scalable opportunities." },
  ];

  return (
    <div className="home">
      <Swiper
        autoplay={{ delay: 4000 }}
        loop
        modules={[Autoplay]}
        className="swiper-container"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <motion.div
              className="slide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <img src={slide.image} alt={slide.title} className="slide-image" />
              <div className="slide-content">
                <h1>{slide.title}</h1>
                <p>{slide.description}</p>
                {index === 0 && <button className="cta-button" onClick={() => navigate('/contact')}>Get Started</button>}
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
            Whether you’re managing a small guesthouse or a large co-living space, our software is designed to simplify the process of managing rooms, bookings, payments, and more. With Aigis, you can focus on growing your business while we take care of the details.
            <br /><br />
            Our platform offers intuitive features that allow you to oversee various aspects of your operations seamlessly, including automated check-ins, real-time analytics, and customer support. Additionally, our dedicated team is always on hand to assist you with any questions or issues that may arise. Choose Aigis and experience the future of hostel management today!
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
                className="feature-card"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="feature-icon">{feature.icon}</div>
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
        >
          {targetAudiences.map((audience, index) => (
            <SwiperSlide key={index}>
              <motion.div
                className="audience-card"
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

      <div className="section7">
        <h2 className="section-title">Our Amenities</h2>
        <AmenitySwiper
          spaceBetween={20}
          slidesPerView={5}
          autoplay={{ delay: 1500 }}
          loop
          breakpoints={{
            1024: { slidesPerView: 5 },
            768: { slidesPerView: 3 },
            480: { slidesPerView: 2 },
            0: { slidesPerView: 1 }
          }}
          modules={[Autoplay]}
          className="amenities-swiper"
        >
          {amenities.map((item) => (
            <AmenitySlide key={item.id}>
              <motion.div
                className="amenity-card"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <div className="amenity-icon">{item.icon}</div>
                <div className="amenity-title">{item.title}</div>
              </motion.div>
            </AmenitySlide>
          ))}
        </AmenitySwiper>
      </div>

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

      <Footer />
    </div>
  )
}

export default Home;
