import React from "react";
import "../assets/css/admin_benefits.css"; // Import the CSS file for styles

const benefitsData = [
  {
    title: "Enhanced Security and Reduced Liability",
    points: [
      "No Centralized Data Storage: Minimizes data breach risks.",
      "Decentralized Control: Residents manage their data; only necessary credentials are shared.",
      "Compliance Made Easy: Facilitates GDPR and DPDP Act adherence with consent-based access.",
    ],
  },
  {
    title: "Improved Operational Efficiency",
    points: [
      "Automated Credential Issuance: Easily issue, revoke, or update credentials.",
      "Seamless Access Management: Instantly deactivate access when needed.",
      "Reduced Paperwork: Digitized processes eliminate manual documentation.",
    ],
  },
  {
    title: "Cost Reduction",
    points: [
      "Less IT Infrastructure: Reduced need for centralized servers.",
      "Lower Administrative Overheads: Automation frees up admin resources.",
    ],
  },
  {
    title: "Easy Incident Management",
    points: [
      "Instant Revocation of Access: Quickly revoke credentials in emergencies.",
      "Audit Trails and Transparency: Blockchain logs all events securely.",
    ],
  },
  {
    title: "Increased Trust and Resident Satisfaction",
    points: [
      "Privacy Assurance: Residents value secure, private systems.",
      "Resident Autonomy: Residents control their own data, increasing satisfaction.",
    ],
  },
  {
    title: "Scalability and Flexibility",
    points: [
      "Easily Expandable: Suitable for various community sizes.",
      "Customizable Rules and Permissions: Adaptable access controls per role.",
    ],
  },
  {
    title: "Efficient Visitor Management",
    points: [
      "Quick Visitor Verification: Real-time credential scanning.",
      "One-Time Access for Guests: Secure, temporary visitor credentials.",
    ],
  },
  {
    title: "Simplified Maintenance and Upkeep",
    points: [
      "Real-Time Data Updates: Changes reflect immediately in the system.",
      "Access Control for Different Areas: Tailored entry for staff and residents.",
    ],
  },
  {
    title: "Data-Driven Insights and Analytics",
    points: [
      "Track and Improve Resident Engagement: Understand usage patterns.",
      "Efficiency Analytics: Optimize resources with actionable data.",
    ],
  },
];

const featuresData = [
  {
    title: "Resident & Visitor Management",
    points: [
      "Manage resident profiles, including personal details, room allocation, and access credentials.",
      "Approve or reject visitor requests and issue temporary access passes.",
      "Real-time notifications for visitor arrivals and resident requests.",
    ],
  },
  {
    title: "Access Control & Security",
    points: [
      "Monitor access control systems for secure entry and exit.",
      "Ability to review and revoke resident or visitor access instantly in case of security concerns.",
      "Real-time alerts on unauthorized access attempts or suspicious activity.",
    ],
  },
  {
    title: "Digital Credential Issuance",
    points: [
      "Generate and manage digital credentials for residents, visitors, and staff.",
      "Issue QR codes or access tokens that grant secure access to buildings and facilities.",
      "Seamlessly revoke or update credentials from the admin panel.",
    ],
  },
  {
    title: "Facility & Amenity Management",
    points: [
      "Oversee the booking and availability of amenities such as gym, swimming pool, etc.",
      "Set up and manage facility rules, pricing, and availability.",
      "Approve or deny facility booking requests in real-time.",
    ],
  },
  {
    title: "Payment and Billing Management",
    points: [
      "View and manage resident payments, including due dates and amounts.",
      "Send payment reminders, invoices, and receipts through the platform.",
      "Track payment statuses and generate reports for financial transparency.",
    ],
  },
  {
    title: "Real-Time Notifications & Alerts",
    points: [
      "Receive instant notifications for requests, complaints, and other administrative tasks.",
      "Send notifications or alerts to residents about maintenance schedules, community events, or emergencies.",
      "Communicate with residents efficiently through the platform.",
    ],
  },
  {
    title: "Reports and Analytics",
    points: [
      "Access comprehensive reports on resident activities, facility usage, payment history, and security events.",
      "Visualize data through charts and graphs for better decision-making.",
      "Monitor overall community health, security, and satisfaction levels.",
    ],
  },
  {
    title: "Maintenance Management",
    points: [
      "Track and manage maintenance requests submitted by residents.",
      "Assign tasks to maintenance staff and monitor the status of repairs and tasks.",
      "Notify residents of upcoming or completed maintenance tasks.",
    ],
  },
  {
    title: "Incident & Complaint Management",
    points: [
      "Receive and manage complaints from residents, ensuring timely resolution.",
      "Track the status of complaints (Pending, In Progress, Resolved).",
      "Communicate directly with residents to resolve issues and provide feedback.",
    ],
  },
];

const AdminBenefits = () => {
  return (
    <div className="admin-benefits">
      <h1 className="title">Benefits of Aigis for Admins</h1>

      {/* Benefits Section */}
      <div className="card-grid">
        {benefitsData.map((benefit, index) => (
          <div key={index} className="card">
            <h2 className="card-title">{benefit.title}</h2>
            <ul className="card-list">
              {benefit.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Features Section */}
      <h2 className="title">Features for Admins</h2>
      <div className="card-grid">
        {featuresData.map((feature, index) => (
          <div key={index} className="card">
            <h3 className="card-title">{feature.title}</h3>
            <ul className="card-list">
              {feature.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminBenefits;
