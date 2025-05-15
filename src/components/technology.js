

import React, {useEffect, useState} from 'react';
import '../assets/css/technology.css';
import didIcon from '../assets/images/decentralized-identity.png';
import accessIcon from '../assets/images/rights-acces-illustration-exclusive-design-inspiration_566886-415.png';
import visitorIcon from '../assets/images/visitor-management-hero.png';
import auditIcon from '../assets/images/audit-trail-removebg-preview.png';
import Footer from './footer';

const Technology = () => {

    const [isCalendlyLoaded, setIsCalendlyLoaded] = useState(false);


useEffect(() => {
  const loadCalendly = () => {
      if (!document.querySelector("#calendly-widget-script")) {
        const script = document.createElement("script");
        script.id = "calendly-widget-script";
        script.src = "https://assets.calendly.com/assets/external/widget.js";
        script.async = true;
        script.onload = () => {
          console.log("Calendly script loaded");
          setIsCalendlyLoaded(true); // Mark as loaded
        };
        document.body.appendChild(script);
      } else {
        // Script already exists, mark as loaded
        setIsCalendlyLoaded(true);
      }
    };

    loadCalendly();
  }, []);

  const openCalendly = () => {
     window.open('https://calendly.com/goliudaykumar29');

  };

  return (
    <div className="aigis-container">
      <h1>Revolutionizing Community Management <br/> with <br/> Decentralized Identity (DID)</h1>
      
      <section className="aigis-intro">
        <p>
          In today’s digital era, managing communities—be it gated communities, co-living spaces, or hostels—requires a robust, secure, and scalable solution.
          <strong> Aigis</strong>, powered by Decentralized Identity (DID), redefines community operations with privacy-first, secure access and identity management.
        </p>
        <p>
          Utilizing blockchain-based technology, Aigis facilitates seamless interaction between admins and residents while ensuring data security, transparency, and reduced administrative overhead.
        </p>
      </section>

      <h2 className='name' align="center">Key Features of Aigis</h2>

      <div className="aigis-features">
        <div className="featuress-cards">
          <img src={didIcon} alt="Decentralized Identity" />
          <h3>Decentralized Control & Data Privacy</h3>
          <p>
            Aigis ensures residents maintain full control of their data using Blockchain and DID. By eliminating centralized data storage,
            it reduces risks of identity theft and enhances trust.
          </p>
        </div>

        <div className="featuress-cards">
          <img src={accessIcon} alt="Access Control" />
          <h3>Secure & Seamless Access Control</h3>
          <p>
            Issue, update, or revoke smart credentials in real-time. Aigis makes entry management for buildings and amenities both secure and paperless.
          </p>
        </div>

        <div className="featuress-cards">
          <img src={visitorIcon} alt="Visitor Management" />
          <h3>Automated Visitor Management</h3>
          <p>
            Admins and residents can easily manage guest access. Real-time visitor passes eliminate manual data collection and enhance security.
          </p>
        </div>

        <div className="featuress-cards">
          <img src={auditIcon} alt="Audit Trail" />
          <h3>Transparent & Immutable Audit Trails</h3>
          <p>
            All actions are recorded immutably on the blockchain. Admins gain real-time insights with tamper-proof audit logs for total transparency.
          </p>
        </div>
      </div>

      <section className="aigis-extra">
        <h2>Benefits for Residents</h2>
        <ul>
          <li><strong>Complete Privacy Control:</strong> Aigis only verifies credentials without storing sensitive information, ensuring privacy and transparency.</li>
          <li><strong>Easy and Secure Access Management:</strong> Access common areas, parking, amenities, and manage visitor entries directly via mobile.</li>
          <li><strong>Instant Credential Updates:</strong> Lost or expired access can be revoked and reissued instantly to maintain security.</li>
          <li><strong>Effortless Visitor Management:</strong> Residents can generate digital visitor passes without paperwork.</li>
        </ul>
      </section>

      <section className="aigis-extra">
        <h2>Benefits for Admins</h2>
        <ul>
          <li><strong>Enhanced Security & Compliance:</strong> Decentralized data ensures regulation compliance and reduces risk.</li>
          <li><strong>Operational Efficiency:</strong> Automate issuance of credentials and visitor passes to save time.</li>
          <li><strong>Cost-Effective Management:</strong> No need for costly IT infrastructure or centralized storage.</li>
          <li><strong>Real-Time Updates & Access Control:</strong> Update or revoke credentials instantly, monitor access live.</li>
          <li><strong>Transparent & Traceable Actions:</strong> Every action is recorded immutably for full accountability.</li>
          <li><strong>Simplified Incident Management:</strong> Quickly respond to breaches with swift access changes.</li>
          <li><strong>Data-Driven Insights:</strong> Analyze usage trends to optimize community operations.</li>
        </ul>
      </section>

      <section className="aigis-extra">
        <h2>Why Choose Aigis for Your Community?</h2>
        <ul>
          <li><strong>Scalability:</strong>   Works for small hostels to large communities seamlessly.</li>
          <li><strong>User-Friendly Interface:</strong>  Intuitive UI for both admins and residents.</li>
          <li><strong>Blockchain Security:</strong>  Tamper-proof and secure data using blockchain technology.</li>
          <li><strong>Reduced Administrative Workload:</strong>  Automation cuts down manual work for admins.</li>
        </ul>
      </section>

      <section className="aigis-extra">
        <h2>The Future of Community Management</h2>
        <p>
          Aigis is not just about access control; it's about creating smarter, secure, and privacy-respecting communities.
          With Decentralized Identity (DID), it offers a future-ready, scalable solution for hostels, co-living spaces, and gated communities alike.
        </p>
      </section>

      <section className="aigis-extra">
<h2>Bringing Trust & Technology Together</h2>
        <p>
          Embrace the future of community management with Aigis—the next generation of secure, efficient, and privacy-first access control.
          Empower your residents, ease the workload of your admins, and build a more transparent and safe community environment.
        </p>
        <p><strong>Secure. Efficient. Transparent.</strong></p>
      </section>

    <section className="aigis-cta">
        <h2>Ready to Elevate Your Community?</h2>
        <p>
          Join the growing number of communities leveraging blockchain and decentralized identity for smarter living.
          <br /><strong>Switch to Aigis today and future-proof your community management.</strong>
        </p>
        <button className="demo-button" onClick={openCalendly} disabled={!isCalendlyLoaded}>
          Request a Demo
        </button>
        {!isCalendlyLoaded && <p>Loading scheduling widget...</p>}


      </section>
      <Footer />
    </div>
  );
};

export default Technology;
