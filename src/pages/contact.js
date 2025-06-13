// import React from "react";
// import { motion } from "framer-motion";
// import "../assets/css/contact.css";
// import roomImage from "../assets/images/recepcionista-clientes-1.webp";
// import Footer from "../components/footer";

// // Animation Variants
// const fadeInUp = {
//   hidden: { opacity: 0, y: 40 },
//   visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
// };

// const slideInLeft = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } }
// };

// const slideInRight = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } }
// };

// const scaleUp = {
//   hidden: { scale: 0 },
//   visible: { scale: 1, transition: { duration: 0.5 } }
// };

// const ContactUs = () => {
//   return (
//     <div>
//       {/* Contact Section */}
//       <motion.section
//         className="contact-container"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {/* Left Image Section */}
//         <motion.div className="contact-image" variants={slideInLeft}>
//           <img src={roomImage} alt="Hostel Room" />
//         </motion.div>

//         {/* Right Contact Form Section */}
//         <motion.div className="contact-form" variants={slideInRight}>
//           <h2>Contact Us</h2>
//           <form>
//             <div className="form-group name-group">
//               <div>
//                 <label>Name *</label>
//                 <motion.input type="text" placeholder="First" required variants={scaleUp} />
//               </div>
//               <div>
//                 <label>Last Name</label>
//                 <motion.input type="text" placeholder="Last" variants={scaleUp} />
//               </div>
//             </div>

//             <div className="form-group">
//               <label>Email *</label>
//               <motion.input type="email" placeholder="Enter your email" required variants={scaleUp} />
//             </div>

//             <div className="form-group">
//               <label>Comment or Message</label>
//               <motion.textarea rows="4" placeholder="Your message..." variants={scaleUp}></motion.textarea>
//             </div>

//             <motion.button
//               type="submit"
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               variants={scaleUp}
//             >
//               Submit
//             </motion.button>
//           </form>
//         </motion.div>
//       </motion.section>
//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;







// import React, { useEffect } from "react";
// import { motion } from "framer-motion";
// import "../assets/css/contact.css";
// import roomImage from "../assets/images/recepcionista-clientes-1.webp";
// import Footer from "../components/footer";

// // Animation Variants
// const slideInLeft = {
//   hidden: { opacity: 0, x: -100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } }
// };

// const slideInRight = {
//   hidden: { opacity: 0, x: 100 },
//   visible: { opacity: 1, x: 0, transition: { duration: 1 } }
// };

// // HubSpot Embed Component
// const HubspotEmbed = () => {
//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "//js.hsforms.net/forms/embed/v2.js";
//     script.type = "text/javascript";
//     script.charset = "utf-8";
//     script.onload = () => {
//       if (window.hbspt) {
//         window.hbspt.forms.create({
//           portalId: "44235887",
//           formId: "765d71c5-9868-4860-9002-b62d5e628b79",
//           region: "na1",
//           target: "#hubspotForm"
//         });
//       }
//     };
//     document.body.appendChild(script);
//   }, []);

//   return <div id="hubspotForm"></div>;
// };

// const ContactUs = () => {
//   return (
//     <div>
//       <motion.section
//         className="contact-container"
//         initial="hidden"
//         whileInView="visible"
//         viewport={{ once: true }}
//       >
//         {/* Left Image */}
//         <motion.div className="contact-image" variants={slideInLeft}>
//           <img src={roomImage} alt="Hostel Room" />
//         </motion.div>

//         {/* Right Form */}
//         <motion.div className="contact-form" variants={slideInRight}>
//           <h2>Contact Us</h2>
//           <HubspotEmbed />
//         </motion.div>
//       </motion.section>
//       <Footer />
//     </div>
//   );
// };

// export default ContactUs;




import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import "../assets/css/contact.css";
import roomImage from "../assets/images/recepcionista-clientes-1.webp";
import Footer from "../components/footer";

// Animation Variants
const slideInLeft = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

const slideInRight = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 1 } }
};

// HubSpot Form Embed with Loader
const HubspotEmbed = () => {
  const [isFormLoaded, setIsFormLoaded] = useState(false);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.type = "text/javascript";
    script.charset = "utf-8";
    script.onload = () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "44235887",
          formId: "765d71c5-9868-4860-9002-b62d5e628b79",
          region: "na1",
          target: "#hubspotForm",
          onFormReady: () => setIsFormLoaded(true)
        });
      }
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div>
      {!isFormLoaded && (
        <div className="hubspot-loader">
          <div className="spinner"></div>
          <p>Loading form...</p>
        </div>
      )}
      <div id="hubspotForm" />
    </div>
  );
};

const ContactUs = () => {
  return (
    <div>
      <motion.section
        className="contact-container"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        <motion.div className="contact-image" variants={slideInLeft}>
          <img src={roomImage} alt="Hostel Room" />
        </motion.div>

        <motion.div className="contact-form" variants={slideInRight}>
          <h2>Contact Us</h2>
          <HubspotEmbed />
        </motion.div>
      </motion.section>
      <Footer />
    </div>
  );
};

export default ContactUs;
