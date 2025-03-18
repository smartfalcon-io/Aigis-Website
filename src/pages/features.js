import React from 'react';
import '../assets/css/features.css';
import Additional from '../components/additional';
import Footer from '../components/footer';


const features = () => {

    const features = [
        {
          icon: "👥",
          title: "Tenant Management",
          description: "Streamlined onboarding, tenant profiles, and lifecycle management.",
        },
        {
          icon: "📅",
          title: "Real-Time Room Availability",
          description: "Instant room availability tracking to prevent double bookings.",
        },
        {
          icon: "🔒",
          title: "Enterprise-Grade Security",
          description: "Industry-leading encryption and security protocols.",
        },
        {
          icon: "🛡️",
          title: "Role-Based Access Control",
          description: "Grant staff different levels of access to secure data.",
        },
        {
          icon: "💳",
          title: "Payment Integration",
          description: "Multiple payment methods for seamless transactions.",
        },
        {
          icon: "📊",
          title: "Reporting & Analytics",
          description: "Advanced insights on revenue, occupancy, and guest trends.",
        },
        {
          icon: "⚙️",
          title: "Workflow Automation",
          description: "Automate tasks for improved efficiency and consistency.",
        },
        {
          icon: "🎉",
          title: "Event & Offer Management",
          description: "Promote tenant engagement with community events.",
        },
        {
          icon: "📱",
          title: "Staff Admin App",
          description: "Empower staff with a mobile tool to manage tasks and communicate with tenants.",
        },
        {
          icon: "🔑",
          title: "User Access Management",
          description: "Control system access based on roles and ensure data security and integrity.",
        },
        {
          icon: "☁️",
          title: "Secure Cloud Hosting",
          description: "Hosted on secure cloud servers with 99.9% uptime to prevent data breaches.",
        },
      ];

  return (
    <div className='features'>
      <div className="features-header">
        <h1 align="left">Our Features</h1>
      </div>
      <p className='sub'>Our platform is packed with powerful features designed to make managing your hostel or co-living space simple and efficient. <br/>Check out some of the highlights below</p><br/>
      <div className='section1'>
      <section className="features-section">
      <h2 className="features-title">Key Features</h2>
      <div className="features-grid">
        {features.map((feature, index) => (
          <div key={index} className="feature-card">
            <div className="feature-icon">{feature.icon}</div>
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-description">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
      </div>
        <Additional/>

      <Footer/>

    </div>
    
  )
}

export default features
