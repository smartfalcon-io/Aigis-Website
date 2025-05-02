import React, { useState } from "react";
import '../assets/css/additional.css';


const Additional = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const features = [
    {
      title: "Reliable & Secure",
      description:
        "We provide a secure and reliable hostel management system with top-notch encryption and data safety.",
    },
    {
      title: "User-Friendly Interface",
      description:
        "Our intuitive dashboard makes it easy to manage everything from tenants to payments efficiently.",
    },
    {
      title: "24/7 Support",
      description:
        "We offer round-the-clock customer support to help you with any issues or queries.",
    },
    {
      title: "Highly Customizable",
      description:
        "Tailor the platform to your specific needs with our customizable features and settings.",
    },
  ];

  return (
    <section className="why-choose-us">
      <h2 className="choose-title">Why Choose Us?</h2>
      <div className="accordion">
        {features.map((feature, index) => (
          <div
            key={index}
            className={`accordion-item ${activeIndex === index ? "active" : ""}`}
          >
            <button className="accordion-button" onClick={() => toggleAccordion(index)}>
              {feature.title}
            </button>
            <div className="accordion-content" style={{ display: activeIndex === index ? "block" : "none" }}>
              <p>{feature.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
    
  );
};

export default Additional;
