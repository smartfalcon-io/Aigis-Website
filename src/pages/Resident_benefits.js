import React, { useState } from 'react';
import '../assets/css/resident_benefits.css'; // Make sure to create and add styling
import Footer from '../components/footer';


const ResidentBenefits = () => {
  const benefitsData= [
    {
      title: 'Complete Privacy Control',
      image: require('../assets/images/cyber-security-illustration-concept-with-characters-data-security-protected-access-control-privacy-data-protection_269730-47.avif'),

      points: [
        'Decentralized Data: Residents have full control over their personal information. With Aigis, your data isn’t stored in a central database, but rather secured on the blockchain, ensuring your privacy.',
        'No Data Breaches: Since personal data isn’t centralized, the risks of hacking or data theft are significantly reduced, giving residents peace of mind.',
      ],
    },
    {
      title: 'Secure and Hassle-Free Access',
      image: require('../assets/images/Why-Having-Online-Access-to-Data-Is-the-Key-to-Scale-Up-Your-Business-Hassle-Free-1.jpg'),

      points: [
        'Digital Access Credentials: Access to buildings, rooms, parking, and amenities is controlled digitally via smart credentials. No need for physical keys, cards, or tokens—just a simple mobile app or QR code.',
        'Instant Access Revocation: If a resident loses their device or changes their credentials, access can be instantly deactivated, ensuring security at all times.',
      ],
    },
    {
      title: 'Effortless Visitor Management',
      image: require('../assets/images/blog4.png'),

      points: [
        'Visitor Passes on Demand: Residents can easily issue digital visitor passes for their guests directly from their device, making guest entry smoother and more secure.',
        'Temporary Access: The access pass for visitors can be time-bound, ensuring that only authorized individuals can enter the premises during the designated time frame.',
      ],
    },
    {
      title: 'Quick & Easy Credential Updates',
      image: require('../assets/images/man-signing-into-mobile-device-using-login-credentials-illustration-download-in-svg-png-gif-file-formats--authentication-credential-sign-access-secure-multi-connecti.webp'),

      points: [
        'Instant Credential Renewal: If access credentials are lost or expired, residents can quickly update their credentials without any need for lengthy administrative processes.',
        'Real-Time Updates: Any changes made to a resident’s access or credentials are updated instantly, ensuring no delays in accessing key facilities.',
      ],
    },
    {
      title: 'Reduced Paperwork',
      image: require('../assets/images/f228047a-c4c8-4d99-a7f6-dc1c2e74dd7d_816x660.jpg'),

      points: [
        'Paperless Experience: Aigis eliminates the need for physical paperwork when issuing passes or managing credentials. All interactions are digital, reducing paperwork and administrative bottlenecks.',
        'Environmentally Friendly: A digital-first approach contributes to a sustainable, paper-free environment, helping residents reduce their carbon footprint.',
      ],
    },
    {
      title: 'Seamless Interaction with Admins',
      image: require('../assets/images/cheerful-man-got-approval-illustration-vector.jpg'),

      points: [
        'Quick Requests and Approvals: Whether it’s a visitor pass or a facility booking, residents can easily submit requests to admins via the platform, with real-time approval or rejection.',
        'Clear Communication: Residents can receive instant notifications about approvals, rejections, or status updates, ensuring clear and transparent communication.',
      ],
    },
    {
      title: 'Instant Access to Community Resources',
      image: require('../assets/images/access-illustration-in-flat-style-vector.jpg'),

      points: [
        'Easy Facility Booking: Residents can quickly check availability and book amenities (e.g., gym, pool, etc.) directly through the app.',
        'Transparent Facility Usage: Aigis provides residents with real-time data about the availability of resources, helping them make informed decisions about bookings.',
      ],
    },
    {
      title: 'Peace of Mind with Real-Time Notifications',
      image: require('../assets/images/mail-notification-8620876-6836367.webp'),

      points: [
        'Alert for Unauthorized Access: In case of any unauthorized attempts to access the premises or facilities, residents will receive instant alerts on their devices.',
        'Real-Time Updates on Community Events: Stay updated on community activities, maintenance schedules, and any important notices through the Aigis platform.',
      ],
    },
    {
      title: 'Simplified Management of Personal Credentials',
      image: require('../assets/images/card-on-file-abstract-concept-illustration-storing-cardholder-information-payment-facilitation-card-on-file-transaction-save-details-consumer-credentials-reward-abstr.jpg'),

      points: [
        'Easy Verification: Residents can verify their identity and credentials quickly and securely without the need for manual checks or physical verification.',
        'Enhanced Trust: Aigis ensures the authenticity of credentials, reducing the chances of fraud and providing residents with a trustworthy system to verify their identity.',
      ],
    },
    {
      title: 'Access to Smart Security Features',
      image: require('../assets/images/cyber-security-illustration-concept-flat-illustration-isolated-on-white-background-vector.jpg'),

      points: [
        'Blockchain-Backed Security: Aigis ensures that all actions and credentials are verified through blockchain technology, guaranteeing the highest level of security and preventing unauthorized data manipulation.',
        'Control Over Shared Access: Residents can easily share or revoke access to others (e.g., roommates, guests, maintenance staff), with the added assurance that access is fully traceable and secure.',
      ],
    },
    {
      title: 'Simplified Payment and Billing',
      image: require('../assets/images/invoice-payments-flat-illustration-bill-pay-online-receipt-cartoon-concept-internet-banking-account-ebanking-user-credit-cards-transactions-instant-money-transfer-by-.jpg'),

      points: [
        'Secure Transactions: Residents can manage their payments for services or amenities via the Aigis platform, with secure and easy payment options available.',
        'Instant Notifications on Due Dates: Get automatic reminders for any outstanding bills or payments due, ensuring you never miss a payment.',
      ],
    },
    {
      title: 'A Unified Digital Experience',
      image: require('../assets/images/user-experience-concept-vector-illustrated_951778-1467.avif'),

      points: [
        'One Platform for All Needs: From booking amenities to managing access, submitting requests, or paying bills, Aigis consolidates all resident-related activities into a single, easy-to-use platform.',
        'User-Friendly Interface: The platform is designed with simplicity in mind, ensuring that residents can manage everything from their mobile devices without any technical hassle.',
      ],
    },
  ];

  const featuresData = [
    {
      title: 'Decentralized Identity (DID) Management',
      points: [
        'Secure, blockchain-backed digital identity management.',
        'Full control over personal information with no reliance on centralized databases.',
        'Easy updates and revocations of credentials as needed.',
      ],
    },
    {
      title: 'Digital Access Credentials',
      points: [
        'QR code or mobile-based digital access to buildings, rooms, amenities, and parking.',
        'Instant credential updates and revocations in case of loss or changes.',
      ],
    },
    {
      title: 'Visitor Management',
      points: [
        'Digital visitor passes for easy entry of guests.',
        'Ability to set specific access timeframes for visitors, ensuring security.',
        'Notification alerts when visitors arrive or attempt entry.',
      ],
    },
    {
      title: 'Amenity Booking & Management',
      points: [
        'Real-time availability checks for amenities like gym, swimming pool, etc.',
        'Quick booking and cancellation of facilities directly from the app.',
        'Notifications for upcoming bookings and reminders.',
      ],
    },
    {
      title: 'Paperless Transactions & Requests',
      points: [
        'Digital management of visitor passes, facility bookings, and other requests.',
        'Reduced paperwork and eco-friendly approach.',
      ],
    },
    {
      title: 'Access Control and Security',
      points: [
        'Secure access management with encrypted credentials.',
        'Real-time notifications on unauthorized access attempts.',
        'Blockchain-backed security to prevent data manipulation.',
      ],
    },
    {
      title: 'Instant Notifications',
      points: [
        'Real-time updates on community events, maintenance schedules, or any emergencies.',
        'Instant alerts for any changes to access, bookings, or important messages from admin.',
      ],
    },
    {
      title: 'Credential and Identity Verification',
      points: [
        'Easy-to-use interface for verifying and managing personal credentials.',
        'Secure verification without the need for physical IDs or documents.',
      ],
    },
    {
      title: 'Payment and Billing Management',
      points: [
        'Seamless payment gateway for managing payments related to services, amenities, and other community-related charges.',
        'Automated reminders for due payments to avoid late fees.',
      ],
    },
    {
      title: 'One-Click Requests',
      points: [
        'Submit requests to admin (maintenance, facility bookings, visitor passes) with a single click.',
        'Instant updates and approvals directly in the app.',
      ],
    },
    {
      title: 'Transparent Communication with Admin',
      points: [
        'Quick and clear communication channels for any queries, complaints, or requests to admin.',
        'Transparency in the approval/rejection process of requests.',
      ],
    },
    {
      title: 'Smart Security Integration',
      points: [
        'Access to smart security features for monitoring and securing personal spaces.',
        'Traceable and secure shared access with roommates, guests, or maintenance staff.',
      ],
    },
    {
      title: 'Multi-Platform Access',
      points: [
        'Full access to the Aigis platform through mobile, tablet, and desktop, ensuring flexibility in managing daily activities.',
      ],
    },
    {
      title: 'Community Engagement',
      points: [
        'Stay updated on community happenings like events, policy updates, or new announcements.',
        'Ability to engage in community activities, improving overall social interaction.',
      ],
    },
    {
      title: 'User-Friendly Interface',
      points: [
        'Intuitive, easy-to-navigate app that simplifies the management of daily activities.',
        'A visually appealing dashboard with quick access to key features and updates.',
      ],
    },
  ];
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleCardClick = (index) => {
    if (window.innerWidth < 768) {
      setExpandedIndex(expandedIndex === index ? null : index);
    }
  };
  
  

  return (
    <div className="admin-benefits">
      <h1 className="title">Benefits of Aigis for Residents</h1>

      {/* Benefits Section */}
      <section className="card-container">
      {benefitsData.map((benefit, index) => (
  <div
    key={index}
    id={`card-${index}`}
    className={`card ${expandedIndex === index ? 'expanded' : ''}`}
    onClick={() => handleCardClick(index)}
  >
    <div className="card-inner">
      <div className="card-front">
        <img src={benefit.image} alt={benefit.title} />
        <h2>{benefit.title}</h2>
      </div>
      <div className="card-back">
        {/* Only show image on desktop */}
        <img
          src={benefit.image}
          alt={benefit.title}
          className="back-image"
        />
        <ul>
          {benefit.points.map((point, i) => (
            <li key={i}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  </div>
))}

      </section>


      {/* Features Section */}
      <h2 className="title">Features for Residents</h2>
        <section className="features-section">
        <div className="card-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="cards">
            <h3 className="card-title">{feature.title}</h3>
            <ul className="card-list">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
        </section>
        <Footer/>
    </div>
  );
};

export default ResidentBenefits;
