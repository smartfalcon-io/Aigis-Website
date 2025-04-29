// import React from 'react';
// import '../assets/css/features.css';
// import Additional from '../components/additional';
// import Footer from '../components/footer';
// import residentapp from '../assets/images/WhatsApp Image 2025-04-24 at 11.26.57_5500c913.jpg'


// const features = () => {

//     const features = [
//         {
//           icon: "👥",
//           title: "Tenant Management",
//           description: "Streamlined onboarding, tenant profiles, and lifecycle management.",
//         },
//         {
//           icon: "📅",
//           title: "Real-Time Room Availability",
//           description: "Instant room availability tracking to prevent double bookings.",
//         },
//         {
//           icon: "🔒",
//           title: "Enterprise-Grade Security",
//           description: "Industry-leading encryption and security protocols.",
//         },
//         {
//           icon: "🛡️",
//           title: "Role-Based Access Control",
//           description: "Grant staff different levels of access to secure data.",
//         },
//         {
//           icon: "💳",
//           title: "Payment Integration",
//           description: "Multiple payment methods for seamless transactions.",
//         },
//         {
//           icon: "📊",
//           title: "Reporting & Analytics",
//           description: "Advanced insights on revenue, occupancy, and guest trends.",
//         },
//         {
//           icon: "⚙️",
//           title: "Workflow Automation",
//           description: "Automate tasks for improved efficiency and consistency.",
//         },
//         {
//           icon: "🎉",
//           title: "Event & Offer Management",
//           description: "Promote tenant engagement with community events.",
//         },
//         {
//           icon: "📱",
//           title: "Staff Admin App",
//           description: "Empower staff with a mobile tool to manage tasks and communicate with tenants.",
//         },
//         {
//           icon: "🔑",
//           title: "User Access Management",
//           description: "Control system access based on roles and ensure data security and integrity.",
//         },
//         {
//           icon: "☁️",
//           title: "Secure Cloud Hosting",
//           description: "Hosted on secure cloud servers with 99.9% uptime to prevent data breaches.",
//         },
//       ];

//   return (
//     <div className='features'>
//         <div className="features-header">
//           <div className="features-heading">
//             <h1>Our Features</h1>
//             <p className="quote">“One platform. Every feature you need.”</p>
//           </div>
//         </div>
//       <p className='sub'>Our platform is packed with powerful features designed to make managing your hostel or co-living space simple and efficient. <br/>Check out some of the highlights below</p><br/>




//       <div className='section1'>
//       <section className="features-section">
//       <h2 className="features-title">Key Features</h2>
//       <div className="features-grid">
//         {features.map((feature, index) => (
//           <div key={index} className="feature-card">
//             <div className="feature-icon">{feature.icon}</div>
//             <h3 className="feature-title">{feature.title}</h3>
//             <p className="feature-description">{feature.description}</p>
//           </div>
//         ))}
//       </div> 
//     </section>
//       </div>
//         <Additional/>

//       <Footer/>

//     </div>
    
//   )
// }

// export default features


import React from 'react';
import '../assets/css/features.css';
import Additional from '../components/additional';
import Footer from '../components/footer';
import { motion } from 'framer-motion';

import tenant from '../assets/images/Tenant-Management-1.png';
import room from '../assets/images/istockphoto-1177943653-612x612.jpg';
import security from '../assets/images/vector-awesome-cyber-security-vector-ai-eps-svg.jpg';
import role_based from '../assets/images/role-based-access-control-rbac-main-1600.jpg';
import payment from '../assets/images/payment_methods_vector_illustration_with_various_types_6825042.jpg';
import analytics from '../assets/images/Analytics-PNG-Free-Download.png';
import workflow from '../assets/images/63d10fc097974dcf47c049ee_How-To-Write-The-Perfect-Creative-Brief.gif';
import event from '../assets/images/event-management-6544578-5395861.webp';
import staffApp from '../assets/images/maxresdefault.jpg';
import user from '../assets/images/user access.webp';
import safty from '../assets/images/What-Is-Managed-Hosting.jpg';

const Features = () => {
  const featuresList = [
    {
      icon: "👥",
      title: "Tenant Management",
      description: (
        <>
          Streamlined onboarding, tenant profiles, and lifecycle management. 
          <ul>
            <li>Automated tenant applications and approvals</li>
            <li>Comprehensive tenant history and record-keeping</li>
            <li>User-friendly tenant portal for direct communication</li>
          </ul>
        </>
      ),
      image: tenant,
    },
    {
      icon: "📅",
      title: "Real-Time Room Availability",
      description: (
        <>
          Instant room availability tracking to prevent double bookings.
          <ul>
            <li>Dynamic updates across all platforms and devices</li>
            <li>Integration with booking systems for seamless management</li>
            <li>Instant notifications for booking changes and confirmations</li>
          </ul>
        </>
      ),
      image: room,
    },
    {
      icon: "🔒",
      title: "Enterprise-Grade Security",
      description: (
        <>
          Industry-leading encryption and security protocols.
          <ul>
            <li>Data encryption at rest and in transit</li>
            <li>Regular security audits and compliance checks</li>
            <li>Two-factor authentication for user accounts</li>
          </ul>
        </>
      ),
      image: security,
    },
    {
      icon: "🛡️",
      title: "Role-Based Access Control",
      description: (
        <>
          Grant staff different levels of access to secure data.
          <ul>
            <li>Customizable roles and permissions for staff members</li>
            <li>Audit logs to track user activities and changes</li>
            <li>Efficient management of access rights across various roles</li>
          </ul>
        </>
      ),
      image: role_based,
    },
    {
      icon: "💳",
      title: "Payment Integration",
      description: (
        <>
          Multiple payment methods for seamless transactions.
          <ul>
            <li>Support for credit, debit, and digital wallets</li>
            <li>Automated invoicing and transaction history tracking</li>
            <li>Secure payment gateways to protect user data</li>
          </ul>
        </>
      ),
      image: payment,
    },
    {
      icon: "📊",
      title: "Reporting & Analytics",
      description: (
        <>
          Advanced insights on revenue, occupancy, and guest trends.
          <ul>
            <li>Custom report generation for detailed analysis</li>
            <li>Real-time occupancy and revenue tracking dashboards</li>
            <li>Predictive analytics to support strategic decision-making</li>
          </ul>
        </>
      ),
      image: analytics,
    },
    {
      icon: "⚙️",
      title: "Workflow Automation",
      description: (
        <>
          Automate tasks for improved efficiency and consistency.
          <ul>
            <li>Automated reminders for staff and tenants</li>
            <li>Streamlined processes for maintenance requests</li>
            <li>Integration with other software for cohesive operation</li>
          </ul>
        </>
      ),
      image: workflow,
    },
    {
      icon: "🎉",
      title: "Event & Offer Management",
      description: (
        <>
          Promote tenant engagement with community events.
          <ul>
            <li>Easy scheduling and management of events</li>
            <li>Targeted promotions based on tenant interests</li>
            <li>Feedback collection for continuous improvement</li>
          </ul>
        </>
      ),
      image: event,
    },
    {
      icon: "📱",
      title: "Staff Admin App",
      description: (
        <>
          Empower staff with a mobile tool to manage tasks and communicate with tenants.
          <ul>
            <li>Real-time updates on tasks and tenant communications</li>
            <li>User-friendly interfaces for easy navigation</li>
            <li>Notifications for important updates and reminders</li>
          </ul>
        </>
      ),
      image: staffApp,
    },
    {
      icon: "🔑",
      title: "User Access Management",
      description: (
        <>
          Control system access based on roles and ensure data security and integrity.
          <ul>
            <li>Flexible user role customization</li>
            <li>Detailed access logs for security compliance</li>
            <li>Efficient user onboarding and offboarding processes</li>
          </ul>
        </>
      ),
      image: user,
    },
    {
      icon: "☁️",
      title: "Secure Cloud Hosting",
      description: (
        <>
          Hosted on secure cloud servers with 99.9% uptime to prevent data breaches.
          <ul>
            <li>Scalable infrastructure to support growth</li>
            <li>Regular backups to prevent data loss</li>
            <li>Compliance with industry standards for cloud security</li>
          </ul>
        </>
      ),
      image: safty,
    },
  ];

  return (
    <div className='features'>
      <div className="features-header">
        <div className="features-heading">
          <h1>Our Features</h1>
          <p className="quote">“One platform. Every feature you need.”</p>
        </div>
      </div>
      <p className='sub'>
        Our platform is packed with powerful features designed to make managing your hostel or co-living space simple and efficient. <br />
        Check out some of the highlights below
      </p>
      <div className='section1'>
        <section className="features-section">
          <h2 className="features-title">Key Features</h2>
          <div className="features-list">
            {featuresList.map((feature, index) => (
              <motion.div
                key={index}
                className={`feature-item ${index % 2 === 0 ? 'left-align' : 'right-align'}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: 'easeOut' }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  <span>{feature.icon}</span>
                </div>
                <div className="feature-details">
                  <h2 className="feature-title">{feature.title}</h2>
                  <p className="feature-description">{feature.description}</p>
                </div>
                <div className="feature-image">
                  <img src={feature.image} alt={feature.title} />
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Additional />
      <Footer />
    </div>
  );
};

export default Features;
