






import React, {useState} from "react";
import "../assets/css/admin_benefits.css"; // Import the CSS file for styles
import Footer from "../components/footer";

const benefitsData = [
  {
    title: "Enhanced Security and Reduced Liability",
    image: require('../assets/images/Features_Security.png'),
    points: [
      "No Centralized Data Storage: Minimizes data breach risks.",
      "Decentralized Control: Residents manage their data; only necessary credentials are shared.",
      "Compliance Made Easy: Facilitates GDPR and DPDP Act adherence with consent-based access.",
    ],
  },
  {
    title: "Improved Operational Efficiency",
    image: require('../assets/images/oprtn_efficncy.png'),

    points: [
      "Automated Credential Issuance: Easily issue, revoke, or update credentials.",
      "Seamless Access Management: Instantly deactivate access when needed.",
      "Reduced Paperwork: Digitized processes eliminate manual documentation.",
    ],
  },
  {
    title: "Cost Reduction",
    image: require('../assets/images/cost-reduction-illustration-with-decrease-price-minimising-or-falling-rate-of-profit-in-business-flat-cartoon-hand-drawn-templates-vector.png'),

    points: [
      "Less IT Infrastructure: Reduced need for centralized servers.",
      "Lower Administrative Overheads: Automation frees up admin resources.",
    ],
  },
  {
    title: "Easy Incident Management",
    image: require('../assets/images/incident-command-team.png'),

    points: [
      "Instant Revocation of Access: Quickly revoke credentials in emergencies.",
      "Audit Trails and Transparency: Blockchain logs all events securely.",
    ],
  },
  {
    title: "Increased Trust and Resident Satisfaction",
    image: require('../assets/images/online-reputation-management-analyze-feedback-strategy-to-increase-satisfaction-gain-customer-trust-concepts-marketing-team-252937752.png'),

    points: [
      "Privacy Assurance: Residents value secure, private systems.",
      "Resident Autonomy: Residents control their own data, increasing satisfaction.",
    ],
  },
  {
    title: "Scalability and Flexibility",
    image: require('../assets/images/Flexibility-and-scalability.png'),

    points: [
      "Easily Expandable: Suitable for various community sizes.",
      "Customizable Rules and Permissions: Adaptable access controls per role.",
    ],
  },
  {
    title: "Efficient Visitor Management",
    image: require('../assets/images/blog4.png'),

    points: [
      "Quick Visitor Verification: Real-time credential scanning.",
      "One-Time Access for Guests: Secure, temporary visitor credentials.",
    ],
  },
  {
    title: "Simplified Maintenance and Upkeep",
    image: require('../assets/images/maintenance-concept-illustration_86047-562.png'),

    points: [
      "Real-Time Data Updates: Changes reflect immediately in the system.",
      "Access Control for Different Areas: Tailored entry for staff and residents.",
    ],
  },
  {
    title: "Data-Driven Insights and Analytics",
    image: require('../assets/images/data_driven_decisions__1.png'),

    points: [
      "Track and Improve Resident Engagement: Understand usage patterns.",
      "Efficiency Analytics: Optimize resources with actionable data.",
    ],
  },
];


const featuresData = [
  {
    title: "Resident & Visitor Management",
    image: require('../assets/images/visitor-management-hero.png'),

    points: [
      "Manage resident profiles, including personal details, room allocation, and access credentials.",
      "Approve or reject visitor requests and issue temporary access passes.",
      "Real-time notifications for visitor arrivals and resident requests.",
    ],
  },
  {
    title: "Access Control & Security",
    image: require('../assets/images/concept-illustration-cybersecurite-gens_23-2148530634.png'),

    points: [
      "Monitor access control systems for secure entry and exit.",
      "Ability to review and revoke resident or visitor access instantly in case of security concerns.",
      "Real-time alerts on unauthorized access attempts or suspicious activity.",
    ],
  },
  {
    title: "Digital Credential Issuance",
    image: require('../assets/images/10098923.webp'),

    points: [
      "Generate and manage digital credentials for residents, visitors, and staff.",
      "Issue QR codes or access tokens that grant secure access to buildings and facilities.",
      "Seamlessly revoke or update credentials from the admin panel.",
    ],
  },
  {
    title: "Facility & Amenity Management",
    image: require('../assets/images/amenity-booking-banner.png'),

    points: [
      "Oversee the booking and availability of amenities such as gym, swimming pool, etc.",
      "Set up and manage facility rules, pricing, and availability.",
      "Approve or deny facility booking requests in real-time.",
    ],
  },
  {
    title: "Payment and Billing Management",
    image: require('../assets/images/invoice-payments-flat-illustration-bill-pay-online-receipt-cartoon-concept-internet-banking-account-ebanking-user-credit-cards-transactions-instant-money-transfer-by.png'),

    points: [
      "View and manage resident payments, including due dates and amounts.",
      "Send payment reminders, invoices, and receipts through the platform.",
      "Track payment statuses and generate reports for financial transparency.",
    ],
  },
  {
    title: "Real-Time Notifications & Alerts",
    image: require('../assets/images/new-notification-illustration-concept-vector.png'),

    points: [
      "Receive instant notifications for requests, complaints, and other administrative tasks.",
      "Send notifications or alerts to residents about maintenance schedules, community events, or emergencies.",
      "Communicate with residents efficiently through the platform.",
    ],
  },
  {
    title: "Reports and Analytics",
    image: require('../assets/images/data_driven_decisions__1.png'),

    points: [
      "Access comprehensive reports on resident activities, facility usage, payment history, and security events.",
      "Visualize data through charts and graphs for better decision-making.",
      "Monitor overall community health, security, and satisfaction levels.",
    ],
  },
  {
    title: "Maintenance Management",
    image: require('../assets/images/maintenance-concept-illustration_86047-562.png'),

    points: [
      "Track and manage maintenance requests submitted by residents.",
      "Assign tasks to maintenance staff and monitor the status of repairs and tasks.",
      "Notify residents of upcoming or completed maintenance tasks.",
    ],
  },
  {
    title: "Incident & Complaint Management",
    image: require('../assets/images/Grievance-procedure-background.png'),

    points: [
      "Receive and manage complaints from residents, ensuring timely resolution.",
      "Track the status of complaints (Pending, In Progress, Resolved).",
      "Communicate directly with residents to resolve issues and provide feedback.",
    ],
  },
];

const AdminBenefits = () => {

    const [expandedIndex, setExpandedIndex] = useState(null);
  
    const handleCardClick = (index) => {
      if (window.innerWidth < 768) {
        setExpandedIndex(expandedIndex === index ? null : index);
      }
    };


  return (
    <div className="admin-benefits">
      <h1 className="title">Benefits of Aigis for Admins</h1>

     
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
      <h2 className="title">Features for Admins</h2>
      <section className="features-section">
  <div className="card-grid">
    {featuresData.map((feature, index) => (
      <div
        key={index}
        className={`feature-card ${index % 2 === 0 ? 'left-image' : 'right-image'}`}
      >
        <div className="feature-image">
          <img src={feature.image} alt={feature.title} />
        </div>
        <div className="feature-content">
          <h2 className="card-title">{feature.title}</h2>
          <ul className="card-list">
            {feature.points.map((point, i) => (
              <li key={i}>{point}</li>
            ))}
          </ul>
        </div>
      </div>
    ))}
  </div>
</section>

        <Footer/>
    </div>
    
  );
};

export default AdminBenefits;


