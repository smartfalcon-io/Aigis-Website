import React, { useState } from "react";
import { motion } from "framer-motion";
import '../assets/css/FAQ.css'

const FAQDropdown = () => {
const faqs = [
    {
    question: "How do I get started with Aigis?",
    answer:
      "Getting started is simple. Visit our website and request a free demo. Our onboarding team will walk you through the platform's features and help you set up your property profile. Once you're onboarded, you can begin managing your residents, facilities, and operations efficiently right away.",
  },
  {
    question: "What is Aigis Residents Management?",
    answer:
      "Aigis is a comprehensive resident and facility management system tailored for hostels, PGs, and co-living spaces. It helps streamline day-to-day operations such as visitor entry, gate pass approvals, room allotment, complaints tracking, payments, and communication—all in one centralized dashboard for admins and a mobile-friendly interface for residents.",
  },
{
  question: "How secure is my data with Aigis?",
  answer:
    "Aigis ensures the highest level of data security using Decentralized Identifiers (DIDs). Unlike traditional centralized systems, DIDs give users control over their identity and data, reducing risks of unauthorized access or data breaches. All resident and admin interactions are cryptographically secured, and data is never stored in a vulnerable central repository. In addition, we use secure authentication tokens (JWT), encrypted APIs (HTTPS/SSL), and role-based access to safeguard your information. Your privacy and security are at the core of everything we build.",
},
  {
    question: "Can I manage room availability in real-time?",
    answer:
      "Yes, Aigis allows admins to view and update room availability in real time. You can assign rooms, track vacant or occupied slots, and avoid double bookings. Changes are instantly reflected on the resident and admin interfaces, ensuring transparency and accuracy across the system.",
  },
  {
    question: "Is there a mobile app available?",
    answer:
      "Yes! Aigis offers a dedicated mobile app for residents, available on Android (and soon iOS). Through the app, residents can apply for gate passes, raise complaints, track parcel deliveries, and make payments seamlessly. For administrators, Aigis provides a web-based dashboard accessible from desktop or tablet, offering full control over operations and analytics.",
  },


];


  // State to keep track of which FAQ is open
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="faq-section">
      <h2 className="section-title">Frequently Asked Questions</h2>
      <motion.div
        className="faq-container"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {faqs.map((faq, index) => (
          <div key={index} className="faq-card">
            <button
              className="faq-question"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              {faq.question}
              <span className={`arrow ${openIndex === index ? "open" : ""}`}>
                
              </span>
            </button>
            {openIndex === index && (
              <motion.p
                className="faq-answer"
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                transition={{ duration: 0.3 }}
              >
                {faq.answer}
              </motion.p>
            )}
          </div>
        ))}
      </motion.div>
    </section>
  );
};

export default FAQDropdown;
